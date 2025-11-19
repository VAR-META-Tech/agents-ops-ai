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
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.appUrl),
  title: {
    default: "AgentOps",
    template: "%s | AgentOps",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "AgentOps" }],
  creator: "AgentOps",
  publisher: "AgentOps",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.appUrl,
  },
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
        alt: "AgentOps",
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
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'G-83DXNSST4Q/mlBHCNjU4L4aEK3W7eI-',
                'event_callback': callback
              });
              return false;
            }
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
      </body>
    </html>
  );
}
