export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://optimalitsolution.com/#organization",
        name: "Optimal IT Solution",
        url: "https://optimalitsolution.com",
        logo: { "@type": "ImageObject", url: "https://optimalitsolution.com/logo.png" },
        description: "Software development company in Raipur, Chhattisgarh. Custom software, web & app development, digital marketing, SEO, and IT solutions.",
        email: "optimalitsolution26@gmail.com",
        telephone: "+91-8851335509",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kabir Nagar",
          addressLocality: "Raipur",
          addressRegion: "Chhattisgarh",
          postalCode: "492099",
        },
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://optimalitsolution.com/#localbusiness",
        name: "Optimal IT Solution",
        image: "https://optimalitsolution.com/logo.png",
        description: "Software development company in Raipur. We build custom software, web applications, mobile apps, and offer digital marketing, SEO, and IT consulting.",
        url: "https://optimalitsolution.com",
        telephone: "+91-8851335509",
        email: "optimalitsolution26@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kabir Nagar",
          addressLocality: "Raipur",
          addressRegion: "Chhattisgarh",
          postalCode: "492099",
        },
        priceRange: "$$",
        areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 21.2514, longitude: 81.6296 }, geoRadius: "50000" },
      },
      {
        "@type": "WebSite",
        "@id": "https://optimalitsolution.com/#website",
        url: "https://optimalitsolution.com",
        name: "Optimal IT Solution",
        description: "Software development company in Raipur, Chhattisgarh — custom software, web & app development, digital marketing, SEO.",
        publisher: { "@id": "https://optimalitsolution.com/#organization" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
