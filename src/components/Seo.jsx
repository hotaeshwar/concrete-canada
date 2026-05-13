import { Helmet } from "react-helmet-async";

export const KEYWORDS = {
  home: "ready mix concrete Toronto, concrete supplier GTA, ready mix concrete near me, concrete delivery Toronto, Wilches Ready Mix Concrete Inc, concrete company Toronto, cement delivery GTA, residential concrete Toronto, commercial concrete services GTA, concrete contractors Toronto, concrete mixing services Ontario, affordable concrete GTA, best ready mix concrete Toronto, concrete supplier Mississauga, concrete supplier Brampton, concrete supplier Vaughan, concrete supplier Scarborough, concrete supplier North York",
  about: "Wilches Ready Mix Concrete Inc history, concrete contractor Toronto experience, concrete paving contractor Ontario, trusted concrete company GTA",
  services: "ready mix concrete services Toronto, concrete mixing services Ontario, concrete supplier Mississauga, concrete supplier Brampton, concrete supplier Vaughan, concrete supplier Scarborough",
};

export default function SEO({
  title = "Wilches Ready Mix Concrete Inc | Ready Mix Concrete Toronto",
  description = "Wilches Ready Mix Concrete Inc provides high-quality ready mix concrete services in Toronto and the Greater Toronto Area (GTA). Reliable, affordable, and fast delivery for residential and commercial projects.",
  canonical = "https://wilchesreadymix.com",
  keywords = KEYWORDS.home,
  serviceType,
  serviceDesc,
  breadcrumbs,
  image = "https://wilchesreadymix.com/media/logo.png",
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wilches Ready Mix Concrete Inc",
    url: "https://wilchesreadymix.com",
    logo: "https://wilchesreadymix.com/media/logo.png",
    description: serviceDesc || description,
    telephone: "+1-000-000-0000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6532,
      longitude: -79.3832,
    },
    areaServed: [
      "Toronto",
      "Mississauga",
      "Brampton",
      "Vaughan",
      "Scarborough",
      "North York",
    ],
  };

  const breadcrumbData = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.url,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Wilches Ready Mix Concrete Inc" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:image" content={image} />

      {/* Geo targeting */}
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Toronto" />
      <meta name="geo.position" content="43.6532;-79.3832" />
      <meta name="ICBM" content="43.6532, -79.3832" />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Breadcrumb Structured Data */}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
    </Helmet>
  );
}