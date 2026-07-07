
import {
    useState,
    type ChangeEvent,
    type FormEvent,
} from "react";

import { Helmet } from "react-helmet-async";

import { submitForm } from "../api/formAPI";
import { COMPANY } from "../config/Company.ts";
import { useVisibility } from "../context/AppContext";

import FAQ from "../components/FAQ.tsx";
import OfficeLocation from "../components/OfficeLocation.tsx";
import TrustUsSection from "../components/TrustUsSection.tsx";
import HappyClients from "../components/HappyClients.tsx";

import "../styles/Contact.scss";
import "../styles/Common.scss";

const PAGE_URL = "https://safeshiftingpackers.com/contact-us";

const OG_IMAGE_URL =
    "https://safeshiftingpackers.com/images/contact/contact-us-og.webp";

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

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        try {
            await submitForm({
                ...formData,
                landingPage: window.location.href,
            });

            setFormData(INITIAL_FORM_DATA);

            setVisibilityCondition(true);
        } catch (error) {
            console.error(
                "Contact form submission failed:",
                error
            );

            alert(
                "Unable to submit the form. Please try again."
            );
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
                item: "https://safeshiftingpackers.com/",
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
        name: "Contact Safexpress",
        description:
            "Contact Safexpress for packing, moving, relocation, vehicle transportation, and storage service enquiries.",
        url: PAGE_URL,
        mainEntity: {
            "@type": "Organization",
            name: "Safexpress",
            url: "https://safeshiftingpackers.com/",
            telephone: `+91${COMPANY.phone}`,
            email: COMPANY.email,
        },
    };

    return (
        <>
            <Helmet>
                <title>
                    Contact Safexpress | Request a Moving Quote
                </title>

                <meta
                    name="description"
                    content="Contact Safexpress for house shifting, office relocation, vehicle transportation, storage, and moving service enquiries. Share your relocation requirements and request a quote."
                />

                <meta
                    name="keywords"
                    content="contact Safexpress, moving service enquiry, relocation quote, house shifting quote, office relocation enquiry, vehicle transport quote, packers and movers contact"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <link
                    rel="canonical"
                    href={PAGE_URL}
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content={PAGE_URL}
                />

                <meta
                    property="og:title"
                    content="Contact Safexpress | Request a Moving Quote"
                />

                <meta
                    property="og:description"
                    content="Share your relocation requirements with Safexpress and request a quote for packing, moving, vehicle transportation, and storage services."
                />

                <meta
                    property="og:site_name"
                    content="Safexpress"
                />

                <meta
                    property="og:image"
                    content={OG_IMAGE_URL}
                />

                <meta
                    property="og:image:secure_url"
                    content={OG_IMAGE_URL}
                />

                <meta
                    property="og:image:type"
                    content="image/webp"
                />

                <meta
                    property="og:image:alt"
                    content="Contact Safexpress for professional relocation and moving services"
                />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Contact Safexpress | Request a Moving Quote"
                />

                <meta
                    name="twitter:description"
                    content="Request a quote for house shifting, office relocation, vehicle transportation, and moving services."
                />

                <meta
                    name="twitter:image"
                    content={OG_IMAGE_URL}
                />

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(contactPageSchema)}
                </script>
            </Helmet>

            <main
                id="contact-page"
                className="contact-form-page"
            >
                <section
                    className="contact-hero top-element"
                    aria-labelledby="contact-page-heading"
                >
                    <div className="overlay">
                        <header className="contact-hero-content">
                            <h1 id="contact-page-heading">
                                Contact Safexpress for Relocation Services
                            </h1>

                            <p>
                                Planning a household move, office relocation,
                                vehicle transportation, or storage requirement?
                                Share your moving details with our team to
                                discuss your relocation requirements.
                            </p>

                            <p>
                                Provide your pickup location, destination, and
                                goods information so our team can understand
                                your moving requirements and assist you with the
                                next steps.
                            </p>

                            <address className="contact-info">
                                <span>
                                    📞{" "}
                                    <a
                                        href={`tel:+91${COMPANY.phone}`}
                                    >
                                        +91 {COMPANY.phone}
                                    </a>
                                </span>

                                <span aria-hidden="true">
                                    {" "}
                                    |{" "}
                                </span>

                                <span>
                                    ✉️{" "}
                                    <a
                                        href={`mailto:${COMPANY.email}`}
                                    >
                                        {COMPANY.email}
                                    </a>
                                </span>
                            </address>
                        </header>
                    </div>
                </section>

                <section
                    className="contact-page"
                    aria-labelledby="quote-form-heading"
                >
                    <div className="contact-card">
                        <header className="contact-form-header">
                            <h2 id="quote-form-heading">
                                Request a Relocation Quote
                            </h2>

                            <p className="sub-text">
                                Enter your moving details below so our team can
                                review your relocation requirements and contact
                                you.
                            </p>
                        </header>

                        <form
                            onSubmit={handleSubmit}
                            aria-label="Relocation quote request form"
                        >
                            <div className="form-group">
                                <label htmlFor="contact-name">
                                    Name
                                </label>

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
                                <label htmlFor="contact-phone">
                                    Phone Number
                                </label>

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
                                <label htmlFor="contact-email">
                                    Email Address
                                </label>

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
                                <label htmlFor="pickup-location">
                                    Pickup Location
                                </label>

                                <input
                                    id="pickup-location"
                                    type="text"
                                    name="From"
                                    placeholder="Pickup city or area"
                                    value={formData.From}
                                    onChange={handleChange}
                                    autoComplete="address-level2"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="delivery-location">
                                    Delivery Location
                                </label>

                                <input
                                    id="delivery-location"
                                    type="text"
                                    name="To"
                                    placeholder="Destination city or area"
                                    value={formData.To}
                                    onChange={handleChange}
                                    autoComplete="address-level2"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="goods-details">
                                    Goods Details
                                </label>

                                <input
                                    id="goods-details"
                                    type="text"
                                    name="Goods"
                                    placeholder="Household goods, office items, vehicle, etc."
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
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Request a Quote"}
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