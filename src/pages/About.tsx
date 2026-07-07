
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import about_company_photo from "../assets/AboutPage/about_company_photo.png";
import houseShiftingImg from "../assets/AboutPage/household.webp";
import storageImg from "../assets/AboutPage/storage_img.jpg";
import internationalImg from "../assets/AboutPage/international.png";
import carImg from "../assets/AboutPage/Car.webp";
import bikeImg from "../assets/AboutPage/Bike.webp";
import petImg from "../assets/AboutPage/pet_img.jpg";
import officeImg from "../assets/AboutPage/office.webp";
import commercialImg from "../assets/AboutPage/commercial.webp";

import FAQ from "../components/FAQ.tsx";

import "../styles/About.scss";
import "../styles/Common.scss";

type ServiceItem = {
    id: number;
    img: string;
    title: string;
    alt: string;
};

const services: ServiceItem[] = [
    {
        id: 1,
        img: houseShiftingImg,
        title: "Household Shifting",
        alt: "Professional household shifting service by Safexpress",
    },
    {
        id: 2,
        img: commercialImg,
        title: "Luggage Shifting",
        alt: "Professional luggage transportation service by Safexpress",
    },
    {
        id: 3,
        img: bikeImg,
        title: "Bike Transport",
        alt: "Professional bike transportation service by Safexpress",
    },
    {
        id: 4,
        img: carImg,
        title: "Car Transport",
        alt: "Professional car transportation service by Safexpress",
    },
    {
        id: 5,
        img: petImg,
        title: "Pet Relocation",
        alt: "Professional pet relocation service by Safexpress",
    },
    {
        id: 6,
        img: internationalImg,
        title: "International Moving",
        alt: "International relocation and moving service by Safexpress",
    },
    {
        id: 7,
        img: officeImg,
        title: "Office Shifting",
        alt: "Professional office shifting service by Safexpress",
    },
    {
        id: 8,
        img: storageImg,
        title: "Storage Services",
        alt: "Storage solutions for household and business goods by Safexpress",
    },
];

const About = () => {
    return (
        <>
            <Helmet>
                <title>
                    About Safexpress | Professional Relocation Services
                </title>

                <meta
                    name="description"
                    content="Learn about Safexpress and our professional relocation services for household shifting, office moving, vehicle transportation, storage, and other moving requirements across India."
                />

                <meta
                    name="keywords"
                    content="about Safexpress, relocation services India, professional moving company, house shifting services, office relocation, vehicle transportation, storage services"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    property="og:title"
                    content="About Safexpress | Professional Relocation Services"
                />

                <meta
                    property="og:description"
                    content="Learn about Safexpress and our professional household shifting, office relocation, vehicle transportation, and moving services."
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
                    content="About Safexpress | Relocation Services"
                />

                <meta
                    name="twitter:description"
                    content="Discover Safexpress relocation services for household, office, vehicle, storage, and other moving requirements."
                />
                
                <link rel="canonical" href="https://safeshiftingpackers.com/about" />
            </Helmet>

            <main
                id="about-page"
                className="top-element"
            >
                <section
                    id="company-info"
                    aria-labelledby="about-heading"
                >
                    <div className="container">
                        <div className="img-bx">
                            <img
                                src={about_company_photo}
                                alt="About Safexpress professional relocation services"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>

                        <header className="details">
                            <h1 id="about-heading">
                                About Safexpress
                            </h1>

                            <p>
                                Safexpress provides professional relocation and
                                moving solutions designed for different
                                household, business, and transportation
                                requirements.
                            </p>

                            <p>
                                Whether you are relocating within your city or
                                planning an intercity move, our team helps
                                coordinate packing, handling, transportation,
                                and delivery according to your relocation
                                requirements.
                            </p>

                            <p>
                                We focus on organized moving processes, suitable
                                packing materials, careful handling, and clear
                                customer communication throughout different
                                stages of the relocation journey.
                            </p>

                            <ul>
                                <li>
                                    <CheckCircleIcon
                                        className="icon"
                                        aria-hidden="true"
                                    />

                                    Professional Packing Support
                                </li>

                                <li>
                                    <CheckCircleIcon
                                        className="icon"
                                        aria-hidden="true"
                                    />

                                    Trained Moving Team
                                </li>

                                <li>
                                    <CheckCircleIcon
                                        className="icon"
                                        aria-hidden="true"
                                    />

                                    Customer Support
                                </li>

                                <li>
                                    <CheckCircleIcon
                                        className="icon"
                                        aria-hidden="true"
                                    />

                                    Transportation Coordination
                                </li>

                                <li>
                                    <CheckCircleIcon
                                        className="icon"
                                        aria-hidden="true"
                                    />

                                    Quality Packing Materials
                                </li>
                            </ul>

                            <Link
                                to="/contact-us"
                                className="contact-btn"
                            >
                                Enquire Now
                            </Link>
                        </header>
                    </div>
                </section>

                <section
                    className="about-overview"
                    aria-labelledby="company-overview-heading"
                >
                    <div className="container">
                        <div className="left-content">
                            <h2 id="company-overview-heading">
                                Professional Relocation and Moving Solutions
                            </h2>

                            <p>
                                Safexpress provides relocation services for
                                customers with different moving requirements.
                                Our goal is to make the relocation process more
                                organized through professional packing,
                                transportation coordination, and customer
                                support.
                            </p>

                            <p>
                                Every relocation may involve different goods,
                                moving distances, packing requirements, and
                                transportation arrangements. Our team evaluates
                                these requirements before coordinating the
                                moving process.
                            </p>

                            <h3>
                                Who We Are
                            </h3>

                            <p>
                                We are a relocation service provider offering
                                moving solutions for household goods, office
                                assets, vehicles, luggage, and other
                                transportation requirements.
                            </p>

                            <p>
                                Our services are designed to support local,
                                intercity, interstate, and selected
                                international relocation requirements based on
                                service availability and operational
                                feasibility.
                            </p>
                        </div>

                        <div className="right-content">
                            <article className="info-card vision">
                                <h3>
                                    Our Vision
                                </h3>

                                <p>
                                    Our vision is to provide professionally
                                    coordinated relocation solutions that focus
                                    on customer requirements, organized moving
                                    processes, and reliable service support.
                                </p>
                            </article>

                            <article className="info-card mission">
                                <h3>
                                    Our Mission
                                </h3>

                                <p>
                                    Our mission is to improve the moving
                                    experience through careful planning,
                                    suitable packing methods, professional
                                    handling, and clear communication during
                                    different stages of relocation.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section
                    id="our-services-about-page"
                    aria-labelledby="about-services-heading"
                >
                    <header className="header">
                        <h2 id="about-services-heading">
                            Our Relocation Services
                        </h2>

                        <p>
                            Professional moving and relocation solutions for
                            different household and business requirements.
                        </p>
                    </header>

                    <div className="grid">
                        {services.map((service) => (
                            <article
                                key={service.id}
                                className="card"
                            >
                                <div className="image">
                                    <img
                                        src={service.img}
                                        alt={service.alt}
                                        loading="lazy"
                                        decoding="async"
                                    />

                                    <div
                                        className="overlay"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3>
                                    {service.title}
                                </h3>
                            </article>
                        ))}
                    </div>
                </section>

                <section
                    className="six-grid-section"
                    aria-labelledby="our-approach-heading"
                >
                    <div className="six-grid">
                        <article className="grid-item content">
                            <h2 id="our-approach-heading">
                                Our Approach to Professional Relocation
                            </h2>

                            <p>
                                We focus on planning different stages of the
                                moving process according to the customer's
                                relocation requirements.
                            </p>

                            <Link to="/services">
                                Explore Services
                            </Link>
                        </article>

                        <article className="grid-item content">
                            <h3>
                                Customer-Focused Moving Solutions
                            </h3>

                            <p>
                                Relocation requirements may vary based on the
                                type of goods, moving distance, and
                                transportation needs. Our team coordinates
                                suitable service arrangements according to the
                                information provided by the customer.
                            </p>

                            <Link to="/contact-us">
                                Contact Us
                            </Link>
                        </article>

                        <article className="grid-item content">
                            <h3>
                                Organized Moving Process
                            </h3>

                            <p>
                                From packing and labeling to loading,
                                transportation, and delivery coordination, our
                                team focuses on maintaining an organized
                                relocation process.
                            </p>

                            <Link to="/services">
                                View Services
                            </Link>
                        </article>
                    </div>
                </section>

                <FAQ />
            </main>
        </>
    );
};

export default About;
