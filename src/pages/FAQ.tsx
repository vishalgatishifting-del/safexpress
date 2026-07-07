
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import FAQList from "../components/FAQ";
import car5 from "../assets/FAQPageImg/hero-section-img.png";

import "../styles/FAQPage.scss";
import "../styles/Common.scss";

const FAQ = () => {
    return (
        <>
            <Helmet>
                <title>
                    Frequently Asked Questions | Safexpress
                </title>

                <meta
                    name="description"
                    content="Find answers to frequently asked questions about Safexpress relocation services, packing solutions, moving charges, transportation, and shifting services across India."
                />

                <meta
                    name="keywords"
                    content="Safexpress FAQ, packers and movers FAQ, relocation questions, moving services FAQ, packing and moving questions, shifting services India"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    property="og:title"
                    content="Frequently Asked Questions | Safexpress"
                />

                <meta
                    property="og:description"
                    content="Get answers to common questions about Safexpress relocation, packing, transportation, pricing, and moving services across India."
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Frequently Asked Questions | Safexpress"
                />

                <meta
                    name="twitter:description"
                    content="Find answers to common questions about Safexpress relocation, packing, transportation, and moving services."
                />
                
                <link rel="canonical" href="https://safeshiftingpackers.com/faq" />
            </Helmet>

            <main
                id="faq-page"
                className="top-element"
            >
                <section className="info-section">
                    <div className="info-left">
                        <span className="badge">
                            Trusted Relocation Services Across India
                        </span>

                        <h1>
                            Frequently Asked Questions About Safexpress
                            Relocation Services
                        </h1>

                        <p>
                            At <strong>Safexpress</strong>, relocation is more
                            than transporting belongings from one location to
                            another. Proper planning, careful packing, secure
                            handling, and transportation coordination are
                            important parts of a professionally managed move.
                        </p>

                        <p>
                            Our team provides relocation support for household
                            shifting, office relocation, vehicle
                            transportation, storage, and other moving
                            requirements across multiple locations in India.
                        </p>

                        <p>
                            Explore our frequently asked questions to learn more
                            about relocation services, packing processes,
                            shifting charges, transportation, and the different
                            stages involved in planning your move.
                        </p>

                        <div className="cta-group">
                            <Link
                                to="/services"
                                className="primary-btn"
                            >
                                Explore Our Services
                            </Link>

                            <Link
                                to="/contact-us"
                                className="secondary-btn"
                            >
                                Get a Free Quote
                            </Link>
                        </div>

                        <div
                            className="trust-stats"
                            aria-label="Safexpress service information"
                        >
                            <div>
                                <strong>Professional</strong>
                                <span>Moving Support</span>
                            </div>

                            <div>
                                <strong>Multiple</strong>
                                <span>Service Locations</span>
                            </div>

                            <div>
                                <strong>Customer</strong>
                                <span>Focused Service</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-right">
                        <figure className="image-card">
                            <img
                                src={car5}
                                alt="Safexpress relocation and moving service vehicle"
                                loading="eager"
                                fetchPriority="high"
                            />

                            <figcaption className="overlay">
                                <h2>
                                    Professional Packing and Moving Services
                                </h2>

                                <p>
                                    Carefully planned packing, transportation,
                                    and relocation support for different moving
                                    requirements across India.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </section>

                <section
                    className="faq-content-section"
                    aria-labelledby="faq-heading"
                >
                    <div className="container">
                        <header className="faq-section-header">
                            <h2 id="faq-heading">
                                Common Questions About Packing and Relocation
                            </h2>

                            <p>
                                Find useful information about our moving
                                process, relocation planning, packing services,
                                transportation, and shifting requirements.
                            </p>
                        </header>

                        <FAQList />
                    </div>
                </section>
            </main>
        </>
    );
};

export default FAQ;