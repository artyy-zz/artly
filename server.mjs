import { createReadStream } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number.parseInt(process.env.PORT || "4173", 10);
const recipient = "artiibela0@gmail.com";

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

const sendJson = (response, status, payload) => {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
};

const readJsonBody = (request) =>
  new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 100_000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    request.on("error", reject);
  });

const clean = (value) => String(value || "").trim().slice(0, 1500);

const smtpReady = () => process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

const handleContact = async (request, response) => {
  try {
    const data = await readJsonBody(request);
    const message = {
      name: clean(data.name),
      business: clean(data.business),
      contact: clean(data.contact),
      need: clean(data.need),
      details: clean(data.message),
      language: clean(data.language || "sq"),
      createdAt: new Date().toISOString(),
    };

    if (!message.name || !message.contact || !message.need) {
      sendJson(response, 400, { ok: false, error: "Missing required fields" });
      return;
    }

    await mkdir(join(root, "outbox"), { recursive: true });
    await writeFile(
      join(root, "outbox", `${Date.now()}-${message.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.json`),
      JSON.stringify(message, null, 2),
      "utf8",
    );

    if (!smtpReady()) {
      sendJson(response, 503, {
        ok: false,
        error: "SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS.",
      });
      return;
    }

    const transporter = createTransporter();
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipient,
      replyTo: message.contact.includes("@") ? message.contact : undefined,
      subject: `Artly request - ${message.business || message.name}`,
      text: [
        "New Artly contact request",
        "",
        `Name: ${message.name}`,
        `Business: ${message.business || "-"}`,
        `Contact: ${message.contact}`,
        `Need: ${message.need}`,
        `Message: ${message.details || "-"}`,
        `Language: ${message.language}`,
        `Created: ${message.createdAt}`,
      ].join("\n"),
    });

    sendJson(response, 200, { ok: true });
  } catch (error) {
    sendJson(response, 500, { ok: false, error: "Could not send request" });
  }
};

const serveStatic = (request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);
  const requestedPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const safePath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, safePath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  createReadStream(filePath)
    .on("error", () => {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found");
    })
    .once("open", () => {
      response.writeHead(200, {
        "content-type": types[extname(filePath)] || "application/octet-stream",
        "cache-control": "no-store",
      });
    })
    .pipe(response);
};

const server = createServer((request, response) => {
  if (request.method === "POST" && request.url === "/api/contact") {
    handleContact(request, response);
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    sendJson(response, 405, { ok: false, error: "Method not allowed" });
    return;
  }

  serveStatic(request, response);
});

server.listen(port, () => {
  console.log(`Artly site running at http://localhost:${port}`);
  console.log(`Contact requests send to ${recipient}`);
});
