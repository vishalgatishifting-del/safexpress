import { useState, type ChangeEvent, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";

import "../styles/Contact.scss";
import "../styles/Common.scss";

import { submitForm } from "../api/formAPI";
import { COMPANY } from "../config/Company.ts";
import { useVisibility } from "../context/AppContext";

import FAQ from "../components/FAQ.tsx";
import OfficeLocation from "../components/OfficeLocation.tsx";
import TrustUsSection from "../components/TrustUsSection.tsx";
import HappyClients from "../components/HappyClients.tsx";

const PAGE_URL = "https://gatishiftingpackers.com/contact-us";
const OG_IMAGE_URL =
  "https://gatishiftingpackers.com/images/contact/contact-us-og.webp";

type ContactFormData = {
  Name: string;
  Email: string;
  Phone: string;
  From: string;
  To: string;
  Goods: string;
};

const INITIAL_FORM_DATA: ContactFormData = {
  Name: "",
  Email: "",
  Phone: "",
  From: "",
  To: "",
  Goods: "",
};

const ContactForm = () => {
  const { setVisibilityCondition } = useVisibility();

  const [formData, setFormData] =
    useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await submitForm({
        ...formData,
        landingPage: window.location.href,
      });

      setFormData(INITIAL_FORM_DATA);
      setVisibilityCondition(true);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      alert("Unable to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://gatishiftingpackers.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: PAGE_URL,
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Gati Shifting Packers",
    description:
      "Contact Gati Shifting Packers to request a moving and shifting service quotation.",
    url: PAGE_URL,
    mainEntity: {
      "@type": "Organization",
      name: "Gati Shifting Packers",
      url: "https://gatishiftingpackers.com/",
      telephone: `+91${COMPANY.phone}`,
      email: COMPANY.email,
    },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Free Moving Quote | Gati Shifting Packers</title>

        <meta
          name="description"
          content="Contact Gati Shifting Packers for packing, moving, vehicle transport, and storage service enquiries. Share your moving details and request a free quote."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta
          property="og:title"
          content="Contact Gati Shifting Packers | Request a Free Quote"
        />
        <meta
          property="og:description"
          content="Share your pickup, delivery, and goods details to request a moving and shifting service quotation."
        />
        <meta property="og:site_name" content="Gati Shifting Packers" />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
        <meta property="og:image:type" content="image/webp" />
        <meta
          property="og:image:alt"
          content="Contact Gati Shifting Packers for moving and shifting services"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Gati Shifting Packers | Request a Free Quote"
        />
        <meta
          name="twitter:description"
          content="Request a quote for packing, moving, vehicle transport, and storage services."
        />
        <meta name="twitter:image" content={OG_IMAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
      </Helmet>

      <main className="contact-form-page">
        <section
          className="contact-hero top-element"
          aria-labelledby="contact-page-heading"
        >
          <div className="overlay">
            <h1 id="contact-page-heading">
              Contact Gati Shifting Packers
            </h1>

            <p>
              Need packing, moving, vehicle transport, or storage support?
              Share your requirements and our team will help you with the next
              steps.
            </p>

            <p className="contact-info">
              📞{" "}
              <a href={`tel:${COMPANY.phone}`}>
                <strong>+91 {COMPANY.phone}</strong>
              </a>
              {" "}&nbsp; | &nbsp;{" "}
              ✉️ <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </div>
        </section>

        <section
          className="contact-page"
          aria-labelledby="quote-form-heading"
        >
          <div className="contact-card">
            <h2 id="quote-form-heading">Request a Free Quote</h2>

            <p className="sub-text">
              Enter your moving details so our team can review your
              requirements and contact you.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="Name"
                  placeholder="Your full name"
                  value={formData.Name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Phone</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="Phone"
                  placeholder="Mobile number"
                  value={formData.Phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  minLength={10}
                  maxLength={15}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="Email"
                  placeholder="Email address"
                  value={formData.Email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pickup-location">Pick Up Location</label>
                <input
                  id="pickup-location"
                  type="text"
                  name="From"
                  placeholder="From city / area"
                  value={formData.From}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="delivery-location">Delivery Location</label>
                <input
                  id="delivery-location"
                  type="text"
                  name="To"
                  placeholder="To city / area"
                  value={formData.To}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="goods-details">Goods Details</label>
                <input
                  id="goods-details"
                  type="text"
                  name="Goods"
                  placeholder="Household items, office goods, etc."
                  value={formData.Goods}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Free Quote"}
              </button>
            </form>
          </div>
        </section>

        <OfficeLocation />
        <TrustUsSection />
        <HappyClients />
        <FAQ />
      </main>
    </>
  );
};

export default ContactForm;
