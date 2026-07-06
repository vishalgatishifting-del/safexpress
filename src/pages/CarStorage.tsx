import "../styles/CarStorage.scss";
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

import heroSectionImg from "../assets/CarStorage/hero-section-img.png";
import priceImg from "../assets/CarStorage/priceImg.jpeg";

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

import sampleImg1 from "../assets/CarStorage/sample1.png";
import sampleImg2 from "../assets/CarStorage/sample2.png";
import sampleImg3 from "../assets/CarStorage/sample3.png";
import sampleImg4 from "../assets/CarStorage/sample4.png";
import sampleImg5 from "../assets/CarStorage/sample5.png";
import sampleImg6 from "../assets/CarStorage/sample6.png";
import sampleImg7 from "../assets/CarStorage/sample7.png";
import sampleImg8 from "../assets/CarStorage/sample8.png";

import { COMPANY } from "../config/Company";
import FAQ from "../components/FAQ.tsx";

const PAGE_URL = "https://gatishiftingpackers.com/car-storage";
const OG_IMAGE_URL =
    "https://gatishiftingpackers.com/images/CarStorage/hero-section-img.png";

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
    { emoji: "🌡️", label: "Protected", title: "Covered Storage Protection", copy: "Protection from harsh conditions" },
    { emoji: "📦", label: "Handled Right", title: "Professional Vehicle Handling", copy: "Handled with care" },
    { emoji: "📞", label: "Support", title: "Customer Assistance", copy: "We're here to help" },
];

const SAFETY_FEATURES = [
    { icon: <SecurityIcon />, label: "Insurance Support" },
    { icon: <FireExtinguisherIcon />, label: "Fire Safety Measures" },
    { icon: <PestControlIcon />, label: "Pest Control" },
    { icon: <VideocamIcon />, label: "CCTV Monitoring" },
    { icon: <LocalShippingIcon />, label: "Vehicle Handling Support" },
];

const GALLERY = [
    { src: sampleImg1, alt: "Bike prepared for secure storage" },
    { src: sampleImg2, alt: "Two-wheeler storage facility" },
    { src: sampleImg3, alt: "Motorcycle kept in covered storage" },
    { src: sampleImg4, alt: "Secure car storage area" },
    { src: sampleImg5, alt: "Bike protected during storage" },
    { src: sampleImg6, alt: "Motorcycle stored in a monitored facility" },
    { src: sampleImg7, alt: "Covered car storage space" },
    { src: sampleImg8, alt: "Professional car storage service" },
];

const CarStorage = () => {
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
                name: "Storage Services",
                item: "https://gatishiftingpackers.com/storage",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Car Storage Services",
                item: PAGE_URL,
            },
        ],
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Car Storage Services",
        serviceType: "Car and Vehicle Storage Services",
        description:
            "Gati Shifting Packers provides secure car and vehicle storage services with covered storage, CCTV monitoring, professional handling, and pickup and delivery support.",
        url: PAGE_URL,
        image: OG_IMAGE_URL,
        provider: {
            "@type": "Organization",
            name: "Gati Shifting Packers",
            url: "https://gatishiftingpackers.com/",
        },
        areaServed: {
            "@type": "Country",
            name: "India",
        },
    };

    return (
        <>
            <Helmet>
                <title>Car Storage Services | Secure Vehicle Storage</title>
                <meta
                    name="description"
                    content="Secure car storage services for short and long-term needs. Get covered car storage, CCTV monitoring, professional handling, and pickup support."
                />
                <link rel="canonical" href={PAGE_URL} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={PAGE_URL} />
                <meta
                    property="og:title"
                    content="Car Storage Services | Secure Vehicle Storage"
                />
                <meta
                    property="og:description"
                    content="Store your bike safely with secure, covered car storage, CCTV monitoring, professional handling, and pickup support."
                />
                <meta property="og:image" content={OG_IMAGE_URL} />
                <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
                <meta property="og:image:type" content="image/png" />
                <meta
                    property="og:image:alt"
                    content="Secure car and vehicle storage services by Gati Shifting Packers"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Car Storage Services | Secure Vehicle Storage"
                />
                <meta
                    name="twitter:description"
                    content="Secure car storage with covered facilities, CCTV monitoring, professional handling, and pickup support."
                />
                <meta name="twitter:image" content={OG_IMAGE_URL} />

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Helmet>

            <main className="car-storage-page">
                <section
                    id="serivce-hero-section"
                    className="car-hero top-element"
                    aria-labelledby="car-storage-heading"
                >
                    <div className="container">
                        <div className="content">
                            <span className="badge">Secure Vehicle Storage</span>

                            <h1 id="car-storage-heading">
                                <span className="primary-color">Car Storage Services</span>{" "}
                                for Safe & Secure Vehicle Storage
                            </h1>

                            <p className="subtitle">
                                Professional car storage solutions designed to protect your
                                car from dust, theft risks, damage, and harsh weather
                                conditions.
                            </p>

                            <div className="offer">
                                🎉 <strong>15% OFF</strong> on Car Storage — Limited Time
                            </div>

                            <div className="links">
                                <a
                                    className="call-btn"
                                    href={`tel:${COMPANY.phone}`}
                                    aria-label={`Call Gati Shifting Packers at +91 ${COMPANY.phone}`}
                                >
                                    <LocalPhoneIcon aria-hidden="true" />
                                    Call Now
                                </a>

                                <Link className="quote-btn" to="/contact-us">
                                    Get a Free Quote
                                </Link>
                            </div>

                            <div className="trust-points" aria-label="Car storage benefits">
                                <span>✔ Covered Parking</span>
                                <span>✔ CCTV Monitoring</span>
                                <span>✔ Insurance Support</span>
                            </div>
                        </div>

                        <div className="img-bx">
                            <div className="img-card">
                                <img
                                    src={heroSectionImg}
                                    alt="Secure covered car and vehicle storage facility"
                                    width="500"
                                    height="420"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about-car-storage" aria-labelledby="about-car-storage-heading">
                    <h2 id="about-car-storage-heading">
                        Reliable Car Storage Solutions You Can Trust
                    </h2>
                    <p>
                        Looking for a safe place to store your bike for a short or long
                        duration? Gati Shifting Packers provides professional car storage
                        services designed to keep cars protected and properly
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

                <section id="numbers-section" aria-labelledby="car-storage-experience-heading">
                    <h2 id="car-storage-experience-heading" className="sr-only">
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
                            Choose secure and reliable car storage solutions for your
                            car.
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

                <section id="slider-section" aria-labelledby="car-storage-benefits-heading">
                    <h2 id="car-storage-benefits-heading" className="heading">
                        Car Storage Benefits in One Place
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
                    aria-label="Car storage pricing information"
                >
                    <img
                        src={priceImg}
                        className="price-img"
                        alt="Car storage pricing and service information"
                        loading="lazy"
                    />
                </section>

                <section id="safe-secure-section" aria-labelledby="why-choose-car-storage-heading">
                    <div className="container">
                        <h2 id="why-choose-car-storage-heading">
                            Why Choose Our Car Storage Services?
                        </h2>
                        <p>
                            Gati Shifting Packers provides car storage services for
                            customers who need secure short-term or long-term vehicle storage. Our storage solutions focus on covered facilities,
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

                <section id="sample-images" aria-labelledby="car-storage-gallery-heading">
                    <div className="container">
                        <h2 id="car-storage-gallery-heading" className="sr-only">
                            Car Storage Gallery
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

export default CarStorage;
