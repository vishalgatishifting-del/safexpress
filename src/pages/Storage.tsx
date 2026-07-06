import "../styles/Storage.scss"
import heroSectionImg from "../assets/Storage/hero-section-img.webp"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import abhibus_icon from "../assets/Storage/Abhibus-icon.webp"
import AIMMAF_icon from "../assets/Storage/AIMMAF-icon.webp"
import cartello_icon from "../assets/Storage/cartello-icon.webp"
import cmo_axis_icon from "../assets/Storage/cmo-axis-icon.webp"
import edgar_icon from "../assets/Storage/edgar-icon.webp"
import ezetap_icon from "../assets/Storage/ezetap-icon.webp"
import greencube_icon from "../assets/Storage/greencube-icon.webp"
import hubler_icon from "../assets/Storage/hubler-icon.webp"
import intelligentia_it_systems_icon from "../assets/Storage/intelligentia-it-systems-icon.webp"
import ixigo_icon from "../assets/Storage/ixigo-icon.webp"
import qwikcliver_icon from "../assets/Storage/qwikcliver-icon.webp"
import rapyder_icon from "../assets/Storage/rapyder-icon.webp"
import rotzler_icon from "../assets/Storage/rotzler-icon.webp"
import ToneTag_icon from "../assets/Storage/ToneTag-icon.webp"
import toyota_tsusho_icon from "../assets/Storage/toyota-tsusho-icon.webp"
import HDFC_icon from "../assets/Storage/HDFC-icon.webp"

import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import InventoryIcon from '@mui/icons-material/Inventory';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import houseImg from "../assets/Storage/house.jpg"
import documentImg from "../assets/Storage/document.jpg"
import businessImg from "../assets/Storage/business.jpg"
import boxImg from "../assets/Storage/boxes.jpg"
import bikeImg from "../assets/Storage/bikeStorage.png"
import carImg from "../assets/Storage/carStorage.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SecurityIcon from '@mui/icons-material/Security';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import PestControlIcon from '@mui/icons-material/PestControl';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import sampleImg1 from "../assets/Storage/sample1.png"
import sampleImg2 from "../assets/Storage/sample2.png"
import sampleImg3 from "../assets/Storage/sample3.png"
import sampleImg4 from "../assets/Storage/sample4.png"
import sampleImg5 from "../assets/Storage/sample5.jpeg"
import sampleImg6 from "../assets/Storage/sample6.jpeg"
import sampleImg7 from "../assets/Storage/sample7.jpeg"
import sampleImg8 from "../assets/Storage/sample8.jpeg"

import "../styles/Common.scss"
import { COMPANY } from "../config/Company";

import FAQ from "../components/FAQ.tsx";

// Service catalogue — each entry behaves like a manifest line item (SKU code + detail)
const SERVICES = [
    {
        code: "ITM-01",
        icon: <HomeIcon />,
        title: "Household Storage",
        copy: "Pack away furniture, appliances and everyday belongings between moves or renovations. Available across Hyderabad, Chennai, Pune and Mumbai.",
        tags: ["Furniture protection", "Multiple cities", "Safe & secure"],
        img: houseImg,
        alt: "Household items packed for storage",
    },
    {
        code: "ITM-02",
        icon: <InventoryIcon />,
        title: "Box Storage",
        copy: "Corrugated boxes in a range of sizes for clothes, décor, utensils and paperwork — sturdy enough for safe packing and easy retrieval later.",
        tags: ["Multiple sizes", "Versatile use", "Quality boxes"],
        img: boxImg,
        alt: "Stacked storage boxes",
    },
    {
        code: "ITM-03",
        icon: <TwoWheelerIcon />,
        title: "Bike Storage",
        copy: "Monitored, covered bays keep your two-wheeler clean, protected and ready to ride whenever you need it back.",
        tags: ["Covered bays", "24/7 monitoring", "Ready on request"],
        img: bikeImg,
        alt: "Motorbike in secure storage",
    },
    {
        code: "ITM-04",
        icon: <DirectionsCarIcon />,
        title: "Car Storage",
        copy: "Secure, weatherproof bays that shield your vehicle from damage, theft and the elements for as long as you need.",
        tags: ["Weatherproof bays", "Theft protection", "Flexible duration"],
        img: carImg,
        alt: "Car in secure storage facility",
    },
    {
        code: "ITM-05",
        icon: <DescriptionIcon />,
        title: "Document Storage",
        copy: "Records-management-grade storage for professionals and small businesses that need official files handled with proper chain of custody.",
        tags: ["Professional service", "Business storage", "Secure files"],
        img: documentImg,
        alt: "Boxes of documents in storage",
    },
    {
        code: "ITM-06",
        icon: <DirectionsCarFilledIcon />,
        title: "Commercial Storage",
        copy: "Managed space for inventory, equipment and operational assets, built for businesses that need reliability at scale.",
        tags: ["24x7 monitoring", "Rodent-proof", "Multiple locations"],
        img: businessImg,
        alt: "Commercial warehouse storage",
    },
];

const HIGHLIGHTS = [
    { emoji: "💲", label: "Transparent", title: "No Hidden Fees", copy: "Only pay for what you use" },
    { emoji: "🔓", label: "Flexible", title: "No Deposit Required", copy: "Start storing immediately" },
    { emoji: "🛡️", label: "Protected", title: "Free Insurance", copy: "Complete protection included" },
    { emoji: "🚚", label: "Convenient", title: "Doorstep Pickup & Delivery", copy: "We come to you" },
    { emoji: "📉", label: "Affordable", title: "Long-Term Discounts", copy: "Save with commitment" },
    { emoji: "👥", label: "Trusted", title: "1 Lakh+ Happy Customers", copy: "Join the community" },
    { emoji: "🎥", label: "Secure", title: "24/7 Security Monitoring", copy: "Peace of mind guaranteed" },
    { emoji: "🧹", label: "Hygienic", title: "Pest-Free Warehouses", copy: "Clean storage environment" },
    { emoji: "🔥", label: "Safety", title: "Fire Safety Enabled", copy: "Safety first" },
    { emoji: "🌡️", label: "Preserved", title: "Climate-Controlled Storage", copy: "Protects sensitive items" },
    { emoji: "📦", label: "Packed Right", title: "Custom Packing Services", copy: "Handled with care" },
    { emoji: "🤖", label: "Smart", title: "AI-Powered Tracking", copy: "Know what's stored" },
    { emoji: "🏆", label: "Top Rated", title: "India's No. 1 Storage", copy: "#1 in secure storage" },
    { emoji: "🌆", label: "Pan India", title: "11 Cities Covered", copy: "Nationwide reach" },
    { emoji: "🔓", label: "Flexible Terms", title: "No Lock-In Contracts", copy: "Cancel anytime" },
    { emoji: "🤝", label: "Best Value", title: "Price Match Guarantee", copy: "Better deal? We'll match it" },
    { emoji: "📜", label: "Certified", title: "ISO Certified Storage", copy: "Global standards" },
    { emoji: "⭐", label: "Rated 4.9", title: "Customer Favorite", copy: "4.9 rating" },
    { emoji: "⭐", label: "Support", title: "Live Chat & Support", copy: "We're here for you" },
];

const BRANDS = [
    { icon: abhibus_icon, name: "Abhibus" },
    { icon: AIMMAF_icon, name: "AIMMAF" },
    { icon: cartello_icon, name: "Cartello" },
    { icon: cmo_axis_icon, name: "CMO Axis" },
    { icon: edgar_icon, name: "Edgar" },
    { icon: ezetap_icon, name: "Ezetap" },
    { icon: greencube_icon, name: "Greencube" },
    { icon: hubler_icon, name: "Hubler" },
    { icon: intelligentia_it_systems_icon, name: "Intelligentia IT Systems" },
    { icon: ixigo_icon, name: "Ixigo" },
    { icon: qwikcliver_icon, name: "Qwikcliver" },
    { icon: rapyder_icon, name: "Rapyder" },
    { icon: rotzler_icon, name: "Rotzler" },
    { icon: ToneTag_icon, name: "ToneTag" },
    { icon: toyota_tsusho_icon, name: "Toyota Tsusho" },
    { icon: HDFC_icon, name: "HDFC" },
];

const LEDGER = [
    { line: "01", value: "630+", label: "B2B Clients" },
    { line: "02", value: "71K+", label: "Business Items Stored" },
    { line: "03", value: "24/7", label: "Business Support" },
    { line: "04", value: "99.9%", label: "Client Retention" },
];

const SAFETY = [
    { icon: <SecurityIcon />, label: "Insurance Coverage" },
    { icon: <FireExtinguisherIcon />, label: "Fire Control" },
    { icon: <PestControlIcon />, label: "Pest Control" },
    { icon: <VideocamIcon />, label: "CCTV Monitoring" },
    { icon: <LocalShippingIcon />, label: "24/7 Security" },
];

const GALLERY = [
    { src: sampleImg1, alt: "Household boxes stacked and labelled in a storage bay" },
    { src: sampleImg2, alt: "Climate-controlled warehouse aisle" },
    { src: sampleImg3, alt: "Furniture wrapped and staged for storage" },
    { src: sampleImg4, alt: "Business inventory palletised in a warehouse" },
    { src: sampleImg5, alt: "Two-wheeler parked in a covered storage bay" },
    { src: sampleImg6, alt: "Car parked in a secure storage facility" },
    { src: sampleImg7, alt: "Document boxes arranged on storage racks" },
    { src: sampleImg8, alt: "Staff moving boxes into a storage unit" },
];

const Storage = () => {
    return (
        <>
            <Helmet>
                <title>Storage Services | Reliable Storage and Warehouse Service</title>
                <meta
                    name="description"
                    content="Need safe Storage and Warehouse service? Safe Shifting Packers offers secure Storage Services for household goods, office items, furniture, and vehicles across India."
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Storage Services | Reliable Storage and Warehouse Service" />
                <meta
                    property="og:description"
                    content="Need safe Storage and Warehouse service? Safe Shifting Packers offers secure Storage Services for household goods, office items, furniture, and vehicles across India."
                />
                <meta property="og:image" content="https://safeshiftingpackers.com//images/storage/hero-section-img.webp" />
                <meta property="og:image:alt" content="safexpress secure storage services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Storage Services | Reliable Storage and Warehouse Service" />
                <meta
                    name="twitter:description"
                    content="Need safe Storage and Warehouse service? Safe Shifting Packers offers secure Storage Services for household goods, office items, furniture, and vehicles across India."
                />
                <meta name="twitter:image" content="https://safeshiftingpackers.com//images/storage/hero-section-img.webp" />
                {/* Breadcrumb Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://safeshiftingpackers.com//"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Storage Services",
                                "item": "https://safeshiftingpackers.com//storage"
                            }
                        ]
                    })}
                </script>

                {/* Service Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Storage Services",
                        "serviceType": "Storage and Warehouse Services",
                        "description":
                            "Safe Shifting Packers offers secure storage and warehouse services for household goods, office items, furniture, documents, bikes, cars and commercial inventory across India.",
                        "url": "https://safeshiftingpackers.com//storage",
                        "image": "https://safeshiftingpackers.com//images/storage.webp",
                        "provider": {
                            "@type": "Organization",
                            "name": "Safe Shifting Packers",
                            "url": "https://safeshiftingpackers.com//"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "India"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Storage Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Household Storage"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Box Storage"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Bike Storage"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Car Storage"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Document Storage"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Commercial Storage"
                                    }
                                }
                            ]
                        }
                    })}
                </script>
            </Helmet>

            <main className="storage-page">

                {/* HERO */}
                <section id="hero-section" aria-labelledby="hero-heading">
                    <div className="container">
                        <div className="content">
                            <span className="eyebrow">Manifest No. IN-2026 · Pan-India Storage Partner</span>

                            <h1 id="hero-heading">
                                Reliable Storage Services: We Store Safely What <span className="accent">Matters</span> to You
                            </h1>

                            <p className="subtitle">
                                Secure, climate-controlled storage — picked up from your door and handed back exactly as you left it.
                            </p>

                            <div className="offer-stamp">
                                <span className="offer-stamp__value">15% OFF</span>
                                <span className="offer-stamp__label">First booking · Limited time</span>
                            </div>

                            <div className="links">
                                <a className="btn btn--ghost" href={`tel:${COMPANY.phone}`}>
                                    <LocalPhoneIcon fontSize="small" />
                                    Call Now
                                </a>
                                <Link className="btn btn--solid" to="/contact-us">
                                    Get Free Quote
                                </Link>
                            </div>

                            <dl className="trust-stats">
                                <div>
                                    <dt>14,500+</dt>
                                    <dd>Happy Customers</dd>
                                </div>
                                <div>
                                    <dt>24/7</dt>
                                    <dd>Security</dd>
                                </div>
                                <div>
                                    <dt>100%</dt>
                                    <dd>Safe Storage</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="img-bx">
                            <div className="img-card">
                                <span className="tag-corner" aria-hidden="true">Handle&nbsp;with&nbsp;care</span>
                                <img
                                    src={heroSectionImg}
                                    alt="Secure storage warehouse with labelled boxes"
                                    width="500"
                                    height="420"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* BRANDS */}
                <section id="brands-section" aria-labelledby="brands-heading">
                    <div className="heading-container">
                        <span className="eyebrow">Trusted shipment partners</span>
                        <h2 id="brands-heading">Leading Businesses Trust <span className="accent">safexpress</span></h2>
                        <p>Providing secure storage solutions to India's top companies and organizations</p>
                    </div>
                    <div className="container">
                        {BRANDS.map((brand) => (
                            <div className="brand" key={brand.name}>
                                <img src={brand.icon} alt={brand.name} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* LEDGER / STATS */}
                <section id="ledger-section" aria-labelledby="ledger-heading">
                    <h2 id="ledger-heading" className="eyebrow eyebrow--standalone">Track Record</h2>
                    <div className="ledger">
                        {LEDGER.map((row) => (
                            <div className="ledger__row" key={row.line}>
                                <span className="ledger__line">{row.line}</span>
                                <span className="ledger__value">{row.value}</span>
                                <span className="ledger__label">{row.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="contact-container">
                        <p>Trusted by top Indian companies for secure and reliable storage solutions.</p>
                        <div className="links">
                            <Link className="btn btn--solid" to="/contact-us">Get Free Quote</Link>
                            <a className="btn btn--ghost" href={`tel:${COMPANY.phone}`}>
                                <LocalPhoneIcon fontSize="small" /> +91 {COMPANY.phone}
                            </a>
                        </div>
                    </div>
                </section>

                {/* HIGHLIGHTS SLIDER */}
                <section id="highlights-section" aria-labelledby="highlights-heading">
                    <h2 id="highlights-heading">Everything You Need, In One Place</h2>
                    <div className="container">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            navigation={true}
                            autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                            spaceBetween={16}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                600: { slidesPerView: 2 },
                                900: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                        >
                            {HIGHLIGHTS.map((item, i) => (
                                <SwiperSlide key={`${item.title}-${i}`}>
                                    <div className="card">
                                        <div className="icon" aria-hidden="true">{item.emoji}</div>
                                        <span className="card__eyebrow">{item.label}</span>
                                        <h3>{item.title}</h3>
                                        <Link to="/contact-us">{item.copy}</Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {/* SERVICES */}
                <section id="services-section" aria-labelledby="services-heading">
                    <div className="heading">
                        <span className="eyebrow">The catalogue</span>
                        <h2 id="services-heading">What We Offer</h2>
                        <p>Comprehensive storage solutions tailored to meet your specific needs</p>
                    </div>
                    <div className="container">
                        {SERVICES.map((service, i) => (
                            <div className={`card ${i % 2 === 1 ? "card--reverse" : ""}`} key={service.code}>
                                <div className="detail">
                                    <span className="sku">{service.code}</span>
                                    <h3><span className="icon">{service.icon}</span> {service.title}</h3>
                                    <p>{service.copy}</p>
                                    <div className="features-box">
                                        {service.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <Link className="btn btn--solid" to="/contact-us">Get Free Quote</Link>
                                </div>
                                <div className="img-bx">
                                    <img src={service.img} alt={service.alt} loading="lazy" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SAFETY */}
                <section id="safety-section" aria-labelledby="safety-heading">
                    <div className="container">
                        <span className="eyebrow">Chain of custody</span>
                        <h2 id="safety-heading">Safe, Secure, Reliable Storage</h2>
                        <p>
                            safexpress offers trusted storage services across Bangalore, Hyderabad, Mumbai, Pune, Chennai,
                            Delhi, Noida, Gurugram, Kolkata, Coimbatore, Jaipur and beyond — keeping your belongings
                            protected for both short-term and long-term needs.
                        </p>

                        <div className="content">
                            {SAFETY.map((item) => (
                                <div className="card" key={item.label}>
                                    <span className="icon" aria-hidden="true">{item.icon}</span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* GALLERY */}
                <section id="gallery-section" aria-labelledby="gallery-heading">
                    <div className="container">
                        <span className="eyebrow">From the warehouse floor</span>
                        <h2 id="gallery-heading">Storage, In Frame</h2>
                        <div className="grid">
                            {GALLERY.map((img, i) => (
                                <img src={img.src} alt={img.alt} loading="lazy" key={i} />
                            ))}
                        </div>
                    </div>
                </section>

                <FAQ />
            </main>
        </>
    )
}

export default Storage;