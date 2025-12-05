import { siteConfig } from "@/config/site";
/*
  Structured data (JSON-LD) is a standardized format that tells search engines what your content means
*/

// Structured Data (JSON-LD) for SEO
export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AgentsOps",
    url: siteConfig.appUrl,
    logo: `${siteConfig.appUrl}agents-ops.svg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hanoi",
      addressCountry: "VN",
      streetAddress: "18th floor, 319 Tower, 63 Le Van Luong, Yen Hoa",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-96-450-83-84",
      contactType: "Customer Service",
      email: "Contact@var-meta.com",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AgentsOps",
    url: siteConfig.appUrl,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: "Varmeta",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.appUrl}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Agent Development & Consulting",
    provider: {
      "@type": "Organization",
      name: "Varmeta",
    },
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
    description: siteConfig.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
