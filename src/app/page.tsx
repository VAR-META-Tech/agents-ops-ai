import { siteConfig } from "@/config/site";
import Home from "@/modules/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.description,
    url: siteConfig.appUrl,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AgentOps - Enterprise AI Agent Development & Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default Home;