import type { Metadata } from "next";

export const siteUrl = new URL("https://artlymade.com");
export const shareImage = {
  url: "/og/artly-share-2026.png",
  width: 1200,
  height: 630,
  alt: "Artly — studio kreativ digjital për website, logo, dizajn grafik dhe social media",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      type: "website",
      url: path,
      siteName: "Artly",
      locale: "sq_AL",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}
