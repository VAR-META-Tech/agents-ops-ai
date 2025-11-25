import MainLayout from "@/components/layouts/MainLayout";
import { fontSora } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import "../styles/globals.css";
import Providers from "./providers";
import { StructuredData } from "./structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.appUrl),
  title: {
    default: siteConfig.metaTitle,
    template: "%s | AgentsOps",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "AgentOps" }],
  creator: "AgentOps",
  publisher: "AgentOps",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.appUrl,
  },
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.appUrl,
    title: siteConfig.metaTitle,
    description: siteConfig.description,
    siteName: "AgentOps",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AgentsOps - Enterprise AI Agent Development & Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@AgentOps",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/agents-ops.svg", type: "image/svg+xml" },
      { url: "/agent-ops.png", type: "image/png" },
    ],
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-83DXNSST4Q`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', G-83DXNSST4Q);
          `}
        </Script>
      </head>

      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background",
          fontSora.variable,
          "font-sora"
        )}
      >
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>

        <Toaster />

        <GoogleAnalytics gaId="G-83DXNSST4Q" />
        <GoogleTagManager gtmId="G-83DXNSST4Q" />
        <StructuredData />
      </body>
    </html>
  );
}
