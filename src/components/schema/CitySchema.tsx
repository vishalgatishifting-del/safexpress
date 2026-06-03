import { Helmet } from "react-helmet-async";

const CitySchema = ({ cityMeta }: any) => {

  if (!cityMeta) return null;


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

    "@type": "LocalBusiness",

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

      ratingValue: 5,
      bestRating: 5,
      worstRating: 1
    },

    author: {
      "@type": "Person",

      name: "Abhishek Gupta"
    },

    reviewBody:
      `Professional packing and relocation services in ${cityMeta?.city}. Safe delivery and affordable pricing.`,

    itemReviewed: {
      "@type": "LocalBusiness",
      name: "Safexpress",
      url: `https://safeshiftingpackers.com/city/${cityMeta?.slug}`

    }
  };

  return (
    <Helmet>


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