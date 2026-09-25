import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { SiteFrame } from "@/components/site-frame";
import "./globals.css";
import "./refinements.css";
import "./artwork-display.css";
import "./arti.css";
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  title: { default: "Artly — Studio kreativ digjital", template: "%s — Artly" },
  description:
    "Website, logo, dizajn grafik dhe social media për biznese që duan të dallohen. Nga Kosova, për ide pa kufij.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sq"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className={`${geist.variable} ${mono.variable}`}>
        <Providers>
          <SiteFrame>{children}</SiteFrame>
        </Providers>
      </body>
    </html>
  );
}
