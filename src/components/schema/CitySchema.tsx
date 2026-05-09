import { Helmet } from "react-helmet-async";

const CitySchema = ({ cityData }: any) => {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityData.pageData.faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://safeshiftingpackers.com/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: cityData.city,
        item: `https://safeshiftingpackers.com//city/${cityData.slug}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "Safexpress",
    url: `https://safeshiftingpackers.com//city/${cityData.slug}`,
    telephone: "+91-9422799477",

    address: {
      "@type": "PostalAddress",
      streetAddress: cityData.address,
      addressCountry: "IN"
    },

    areaServed: {
      "@type": "City",
      name: cityData.city
    }
  };

  return (
    <Helmet>

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

    </Helmet>
  );
};

export default CitySchema;