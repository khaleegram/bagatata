import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { company } from "@/content/company";
import { brandMark } from "@/content/brand";
import { siteConfig } from "@/lib/site-config";
import "@/styles/globals.css";
import "@/styles/mobile.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  title: {
    default:
      "Bagatata Technologies Limited | Digital Products & Software Engineering",
    template: "%s | Bagatata Technologies Limited",
  },
  description: company.description,
  applicationName: company.brand,
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: company.name,
    title: "Bagatata — Build what should exist.",
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagatata — Build what should exist.",
    description: company.description,
  },
  robots: siteConfig.url
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#0c0c0b" };

/**
 * Safety net: if hydration ever fails, remove the splash so the page can still
 * be used. Otherwise the React component dismisses it.
 */
const splashFallbackScript = [
  "window.setTimeout(function(){",
  'var s=document.getElementById("site-splash");',
  "if(s)s.remove();",
  "},6000);",
].join("");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.name,
    foundingDate: "2026-10-14",
    identifier: company.registration,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressCountry: "NG",
    },
    ...(siteConfig.url
      ? { url: siteConfig.url, logo: `${siteConfig.url}${brandMark.src}` }
      : {}),
  };
  return (
    <html lang="en-NG" data-scroll-behavior="smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/archivo-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{ __html: splashFallbackScript }} />
        <noscript>
          <style>{`#site-splash{display:none!important}html:has(#site-splash){overflow:auto!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="bagatata-site">
        <SplashScreen />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
