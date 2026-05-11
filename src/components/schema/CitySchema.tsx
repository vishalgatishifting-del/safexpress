import { Helmet } from "react-helmet-async";

const CitySchema = ({ cityMeta }: any) => {

  if (!cityMeta) return null;

  // FAQ SCHEMA
  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity:
      cityMeta?.pageData?.faqs?.map((faq: any) => ({
        "@type": "Question",

        name: faq?.q,

        acceptedAnswer: {
          "@type": "Answer",

          text: faq?.a
        }
      })) || []
  };

  // BREADCRUMB SCHEMA
  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://safeshiftingpackers.com"
      },
      {
        "@type": "ListItem",

        position: 2,

        name: "City",

        item: "https://safeshiftingpackers.com/city"
      },

      {
        "@type": "ListItem",

        position: 3,

        name: cityMeta?.city,

        item: `https://safeshiftingpackers.com/city/${cityMeta?.slug}`
      }
    ]
  };

  // SERVICE SCHEMA
  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "MovingCompany",

    name: "Safexpress",

    url: `https://safeshiftingpackers.com/city/${cityMeta?.slug}`,

    telephone: "+91-7290008200",

    image: "https://safeshiftingpackers.com/safexpress.png",

    address: {
      "@type": "PostalAddress",

      streetAddress: cityMeta?.address,

      addressCountry: "IN"
    },

    areaServed: {
      "@type": "City",

      name: cityMeta?.city
    },

    serviceType:
      cityMeta?.pageData?.services?.map(
        (service: any) => service?.linkText
      ) || []
  };

  // REVIEW SCHEMA
  const reviewSchema = {
    "@context": "https://schema.org",

    "@type": "Review",

    reviewRating: {
      "@type": "Rating",

      ratingValue: "5",

      bestRating: "4.8"
    },

    author: {
      "@type": "Person",

      name: "Abhishek Gupta"
    },

    reviewBody:
      `Professional packing and relocation services in ${cityMeta?.city}. Safe delivery and affordable pricing.`,

    itemReviewed: {
      "@type": "MovingCompany",
      name: "Safexpress",
      url: `https://safeshiftingpackers.com/city/${cityMeta?.slug}`

    }
  };

  return (
    <Helmet>

      {/* FAQ SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* BREADCRUMB SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* SERVICE SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      {/* REVIEW SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>

    </Helmet>
  );
};

export default CitySchema;