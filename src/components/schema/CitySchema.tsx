import { Helmet } from "react-helmet-async";

const CitySchema = ({ cityMeta }: any) => {

  if (!cityMeta) return null;

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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default CitySchema;