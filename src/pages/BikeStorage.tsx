import "../styles/BikeStorage.scss";
import "../styles/Common.scss";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SecurityIcon from "@mui/icons-material/Security";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import PestControlIcon from "@mui/icons-material/PestControl";
import VideocamIcon from "@mui/icons-material/Videocam";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroSectionImg from "../assets/BikeStorage/hero-section-img.png";
import priceImg from "../assets/BikeStorage/priceImg.jpeg";

import abhibusIcon from "../assets/Storage/Abhibus-icon.webp";
import aimmafIcon from "../assets/Storage/AIMMAF-icon.webp";
import cartelloIcon from "../assets/Storage/cartello-icon.webp";
import cmoAxisIcon from "../assets/Storage/cmo-axis-icon.webp";
import edgarIcon from "../assets/Storage/edgar-icon.webp";
import ezetapIcon from "../assets/Storage/ezetap-icon.webp";
import greencubeIcon from "../assets/Storage/greencube-icon.webp";
import hublerIcon from "../assets/Storage/hubler-icon.webp";
import intelligentiaIcon from "../assets/Storage/intelligentia-it-systems-icon.webp";
import ixigoIcon from "../assets/Storage/ixigo-icon.webp";
import qwikcliverIcon from "../assets/Storage/qwikcliver-icon.webp";
import rapyderIcon from "../assets/Storage/rapyder-icon.webp";
import rotzlerIcon from "../assets/Storage/rotzler-icon.webp";
import toneTagIcon from "../assets/Storage/ToneTag-icon.webp";
import toyotaTsushoIcon from "../assets/Storage/toyota-tsusho-icon.webp";
import hdfcIcon from "../assets/Storage/HDFC-icon.webp";

import sampleImg1 from "../assets/BikeStorage/sample1.jpeg";
import sampleImg2 from "../assets/BikeStorage/sample2.jpeg";
import sampleImg3 from "../assets/BikeStorage/sample3.jpeg";
import sampleImg4 from "../assets/BikeStorage/sample4.jpeg";
import sampleImg5 from "../assets/BikeStorage/sample5.jpeg";
import sampleImg6 from "../assets/BikeStorage/sample6.jpeg";
import sampleImg7 from "../assets/BikeStorage/sample7.jpeg";
import sampleImg8 from "../assets/BikeStorage/sample8.jpeg";

import { COMPANY } from "../config/Company";
import FAQ from "../components/FAQ.tsx";

const PAGE_URL = "https://safeshiftingpackers.com/bike-storage";
const OG_IMAGE_URL =
    "https://safeshiftingpackers.com/images/BikeStorage/hero-section-img.png";

const BRANDS = [
    { icon: abhibusIcon, name: "Abhibus" },
    { icon: aimmafIcon, name: "AIMMAF" },
    { icon: cartelloIcon, name: "Cartello" },
    { icon: cmoAxisIcon, name: "CMO Axis" },
    { icon: edgarIcon, name: "Edgar" },
    { icon: ezetapIcon, name: "Ezetap" },
    { icon: greencubeIcon, name: "Greencube" },
    { icon: hublerIcon, name: "Hubler" },
    { icon: intelligentiaIcon, name: "Intelligentia IT Systems" },
    { icon: ixigoIcon, name: "Ixigo" },
    { icon: qwikcliverIcon, name: "Qwikcliver" },
    { icon: rapyderIcon, name: "Rapyder" },
    { icon: rotzlerIcon, name: "Rotzler" },
    { icon: toneTagIcon, name: "ToneTag" },
    { icon: toyotaTsushoIcon, name: "Toyota Tsusho" },
    { icon: hdfcIcon, name: "HDFC" },
];

const HIGHLIGHTS = [
    { emoji: "💲", label: "Transparent", title: "No Hidden Fees", copy: "Only pay for what you use" },
    { emoji: "🔓", label: "Flexible", title: "No Deposit Required", copy: "Start storing immediately" },
    { emoji: "🛡️", label: "Protected", title: "Insurance Support", copy: "Protection support available" },
    { emoji: "🚚", label: "Convenient", title: "Doorstep Pickup & Delivery", copy: "We come to you" },
    { emoji: "📉", label: "Affordable", title: "Long-Term Storage Options", copy: "Flexible storage duration" },
    { emoji: "👥", label: "Trusted", title: "Customer-Focused Service", copy: "Store with confidence" },
    { emoji: "🎥", label: "Secure", title: "CCTV Monitoring", copy: "Monitored storage facilities" },
    { emoji: "🧹", label: "Hygienic", title: "Pest-Controlled Storage", copy: "Clean storage environment" },
    { emoji: "🔥", label: "Safety", title: "Fire Safety Measures", copy: "Safety-focused facilities" },
    { emoji: "🌡️", label: "Protected", title: "Weather Protection", copy: "Protection from harsh conditions" },
    { emoji: "📦", label: "Handled Right", title: "Professional Handling", copy: "Handled with care" },
    { emoji: "📞", label: "Support", title: "Customer Assistance", copy: "We're here to help" },
];

const SAFETY_FEATURES = [
    { icon: <SecurityIcon />, label: "Insurance Support" },
    { icon: <FireExtinguisherIcon />, label: "Fire Safety Measures" },
    { icon: <PestControlIcon />, label: "Pest Control" },
    { icon: <VideocamIcon />, label: "CCTV Monitoring" },
    { icon: <LocalShippingIcon />, label: "Secure Pickup & Delivery" },
];

const GALLERY = [
    { src: sampleImg1, alt: "Bike prepared for secure storage" },
    { src: sampleImg2, alt: "Two-wheeler storage facility" },
    { src: sampleImg3, alt: "Motorcycle kept in covered storage" },
    { src: sampleImg4, alt: "Secure bike storage area" },
    { src: sampleImg5, alt: "Bike protected during storage" },
    { src: sampleImg6, alt: "Motorcycle stored in a monitored facility" },
    { src: sampleImg7, alt: "Covered two-wheeler storage space" },
    { src: sampleImg8, alt: "Professional bike storage service" },
];

const BikeStorage = () => {
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
                name: "Storage Services",
                item: "https://safeshiftingpackers.com/storage",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Bike Storage Services",
                item: PAGE_URL,
            },
        ],
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Bike Storage Services",
        serviceType: "Bike and Two-Wheeler Storage Services",
        description:
            "Safexpress provides secure bike and two-wheeler storage services with covered storage, CCTV monitoring, professional handling, and pickup and delivery support.",
        url: PAGE_URL,
        image: OG_IMAGE_URL,
        provider: {
            "@type": "Organization",
            name: "Safexpress",
            url: "https://safeshiftingpackers.com/",
        },
        areaServed: {
            "@type": "Country",
            name: "India",
        },
    };

    return (
        <>
            <Helmet>
                <title>Bike Storage Services | Secure Two-Wheeler Storage</title>
                <meta
                    name="description"
                    content="Secure bike storage services for short and long-term needs. Get covered two-wheeler storage, CCTV monitoring, professional handling, and pickup support."
                />
                <link rel="canonical" href={PAGE_URL} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={PAGE_URL} />
                <meta
                    property="og:title"
                    content="Bike Storage Services | Secure Two-Wheeler Storage"
                />
                <meta
                    property="og:description"
                    content="Store your bike safely with secure, covered two-wheeler storage, CCTV monitoring, professional handling, and pickup support."
                />
                <meta property="og:image" content={OG_IMAGE_URL} />
                <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
                <meta property="og:image:type" content="image/png" />
                <meta
                    property="og:image:alt"
                    content="Secure bike and two-wheeler storage services by Safexpress"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Bike Storage Services | Secure Two-Wheeler Storage"
                />
                <meta
                    name="twitter:description"
                    content="Secure bike storage with covered facilities, CCTV monitoring, professional handling, and pickup support."
                />
                <meta name="twitter:image" content={OG_IMAGE_URL} />

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Helmet>

            <main className="bike-storage-page">
                <section
                    id="serivce-hero-section"
                    aria-labelledby="bike-storage-heading"
                >
                    <div className="container">
                        <div className="content">
                            <span className="badge">Secure Two-Wheeler Storage</span>

                            <h1 id="bike-storage-heading">
                                <span className="primary-color">Bike Storage Services</span>{" "}
                                for Safe & Secure Two-Wheeler Storage
                            </h1>

                            <p className="subtitle">
                                Professional bike storage solutions designed to protect your
                                two-wheeler from dust, theft risks, damage, and harsh weather
                                conditions.
                            </p>

                            <div className="offer">
                                🎉 <strong>15% OFF</strong> on Bike Storage — Limited Time
                            </div>

                            <div className="links">
                                <a
                                    className="call-btn"
                                    href={`tel:${COMPANY.phone}`}
                                    aria-label={`Call Safexpress at +91 ${COMPANY.phone}`}
                                >
                                    <LocalPhoneIcon aria-hidden="true" />
                                    Call Now
                                </a>

                                <Link className="quote-btn" to="/contact-us">
                                    Get a Free Quote
                                </Link>
                            </div>

                            <div className="trust-points" aria-label="Bike storage benefits">
                                <span>✔ Covered Storage</span>
                                <span>✔ CCTV Monitoring</span>
                                <span>✔ Insurance Support</span>
                            </div>
                        </div>

                        <div className="img-bx">
                            <div className="img-card">
                                <img
                                    src={heroSectionImg}
                                    alt="Secure covered bike and two-wheeler storage facility"
                                    width="500"
                                    height="420"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about-car-storage" aria-labelledby="about-bike-storage-heading">
                    <h2 id="about-bike-storage-heading">
                        Reliable Bike Storage Solutions You Can Trust
                    </h2>
                    <p>
                        Looking for a safe place to store your bike for a short or long
                        duration? Safexpress provides professional bike storage
                        services designed to keep two-wheelers protected and properly
                        managed until they are needed again.
                    </p>

                    <div className="contact-container">
                        <div className="links">
                            <Link className="quote-btn" to="/contact-us">
                                Get Free Quote
                            </Link>
                            <a className="call-btn" href={`tel:${COMPANY.phone}`}>
                                <LocalPhoneIcon aria-hidden="true" /> +91 {COMPANY.phone}
                            </a>
                        </div>
                    </div>
                </section>

                <section id="brands-section" aria-labelledby="trusted-brands-heading">
                    <div className="heading-container">
                        <h2 id="trusted-brands-heading">
                            Businesses That Have Trusted Our Storage Solutions
                        </h2>
                        <p>
                            Supporting businesses and organizations with secure and reliable
                            storage solutions.
                        </p>
                    </div>

                    <div className="container">
                        {BRANDS.map((brand) => (
                            <div className="brand" key={brand.name}>
                                <img
                                    src={brand.icon}
                                    alt={`${brand.name} logo`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <section id="numbers-section" aria-labelledby="bike-storage-experience-heading">
                    <h2 id="bike-storage-experience-heading" className="sr-only">
                        Our Storage Service Experience
                    </h2>

                    <div className="numbers-container">
                        <div>
                            <h3>Secure</h3>
                            <span>Monitored Storage</span>
                        </div>
                        <div>
                            <h3>Flexible</h3>
                            <span>Short & Long-Term Options</span>
                        </div>
                        <div>
                            <h3>Professional</h3>
                            <span>Bike Handling Support</span>
                        </div>
                    </div>

                    <div className="contact-container">
                        <span>
                            Choose secure and reliable bike storage solutions for your
                            two-wheeler.
                        </span>
                        <div className="links">
                            <Link className="quote-btn" to="/contact-us">
                                Get Free Quote
                            </Link>
                            <a className="call-btn" href={`tel:${COMPANY.phone}`}>
                                <LocalPhoneIcon aria-hidden="true" /> +91 {COMPANY.phone}
                            </a>
                        </div>
                    </div>
                </section>

                <section id="slider-section" aria-labelledby="bike-storage-benefits-heading">
                    <h2 id="bike-storage-benefits-heading" className="heading">
                        Bike Storage Benefits in One Place
                    </h2>

                    <div className="container">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            navigation
                            autoplay={{
                                delay: 2000,
                                pauseOnMouseEnter: true,
                            }}
                            spaceBetween={0}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                600: { slidesPerView: 2 },
                                900: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                        >
                            {HIGHLIGHTS.map((item) => (
                                <SwiperSlide key={item.title}>
                                    <div className="card">
                                        <div className="icon" aria-hidden="true">
                                            {item.emoji}
                                        </div>
                                        <span>{item.label}</span>
                                        <h3>{item.title}</h3>
                                        <Link to="/contact-us">{item.copy}</Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                <section
                    className="price-img-container"
                    aria-label="Bike storage pricing information"
                >
                    <img
                        src={priceImg}
                        className="price-img"
                        alt="Bike storage pricing and service information"
                        loading="lazy"
                    />
                </section>

                <section id="safe-secure-section" aria-labelledby="why-choose-bike-storage-heading">
                    <div className="container">
                        <h2 id="why-choose-bike-storage-heading">
                            Why Choose Our Bike Storage Services?
                        </h2>
                        <p>
                            Safexpress provides bike storage services for
                            customers who need secure short-term or long-term two-wheeler
                            storage. Our storage solutions focus on covered facilities,
                            monitored spaces, professional handling, and convenient support
                            across serviceable locations in India.
                        </p>

                        <div className="content">
                            {SAFETY_FEATURES.map((item) => (
                                <div className="card" key={item.label}>
                                    <span className="icon" aria-hidden="true">
                                        {item.icon}
                                    </span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="sample-images" aria-labelledby="bike-storage-gallery-heading">
                    <div className="container">
                        <h2 id="bike-storage-gallery-heading" className="sr-only">
                            Bike Storage Gallery
                        </h2>

                        {GALLERY.map((image) => (
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                key={image.src}
                            />
                        ))}
                    </div>
                </section>

                <FAQ />
            </main>
        </>
    );
};

export default BikeStorage;
