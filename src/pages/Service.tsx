
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import AV_icon_png from "../assets/servicesPageImg/ac.webp";
import House_icon_png from "../assets/servicesPageImg/household.webp";
import Bike_icon_png from "../assets/servicesPageImg/bike.webp";
import Car_icon_png from "../assets/servicesPageImg/car.webp";
import Pet_icon_png from "../assets/servicesPageImg/pets.webp";
import Office_icon_png from "../assets/servicesPageImg/office.webp";
import Commercial_icon_png from "../assets/servicesPageImg/commercial.webp";
import Luggage_icon_png from "../assets/servicesPageImg/luggage.webp";
import Domestic_icon_png from "../assets/servicesPageImg/domestic.webp";
import International_icon_png from "../assets/servicesPageImg/international.webp";
import Temp_icon_png from "../assets/servicesPageImg/tempo.webp";
import Warehouse_icon_png from "../assets/servicesPageImg/warehouse.webp";
import Storage_icon_png from "../assets/servicesPageImg/storage.webp";
import Cold_icon_png from "../assets/servicesPageImg/cold.webp";
import heroImg from "../assets/servicesPageImg/hero-image.png";

import FAQ from "../components/FAQ.tsx";

import "../styles/Service.scss";
import "../styles/Common.scss";

type ServiceItem = {
    id: number;
    title: string;
    description: string;
    Img: string;
};

const services: ServiceItem[] = [
    {
        id: 1,
        title: "House Shifting",
        description:
            "Professional house shifting support with packing, loading, transportation, and delivery coordination.",
        Img: House_icon_png,
    },
    {
        id: 2,
        title: "AC Shifting",
        description:
            "AC shifting support for dismantling, protective packing, transportation, and installation coordination.",
        Img: AV_icon_png,
    },
    {
        id: 3,
        title: "Bike Transport",
        description:
            "Bike transportation with protective packing, secure handling, and relocation coordination.",
        Img: Bike_icon_png,
    },
    {
        id: 4,
        title: "Car Transport",
        description:
            "Professional car transportation solutions with suitable vehicle relocation arrangements.",
        Img: Car_icon_png,
    },
    {
        id: 5,
        title: "Pet Relocation",
        description:
            "Pet relocation coordination for dogs, cats, and selected domestic pets based on travel requirements.",
        Img: Pet_icon_png,
    },
    {
        id: 6,
        title: "Office Shifting",
        description:
            "Organized office relocation support for furniture, equipment, documents, and workplace assets.",
        Img: Office_icon_png,
    },
    {
        id: 7,
        title: "Commercial Shifting",
        description:
            "Commercial relocation solutions for shops, offices, warehouses, and other business moving requirements.",
        Img: Commercial_icon_png,
    },
    {
        id: 8,
        title: "Luggage Transport",
        description:
            "Luggage transportation support with pickup, packing, handling, and delivery coordination.",
        Img: Luggage_icon_png,
    },
    {
        id: 9,
        title: "Domestic Moving",
        description:
            "Domestic relocation services for local, intercity, and interstate moving requirements across India.",
        Img: Domestic_icon_png,
    },
    {
        id: 10,
        title: "International Moving",
        description:
            "International relocation coordination for packing, transportation, and applicable documentation requirements.",
        Img: International_icon_png,
    },
    {
        id: 11,
        title: "Tempo for Shifting",
        description:
            "Tempo transportation solutions for local shifting and smaller relocation requirements.",
        Img: Temp_icon_png,
    },
    {
        id: 12,
        title: "Warehouse Services",
        description:
            "Warehouse solutions for temporary and long-term goods storage based on customer requirements.",
        Img: Warehouse_icon_png,
    },
    {
        id: 13,
        title: "Storage Facility",
        description:
            "Flexible storage solutions for household goods, office assets, and business storage requirements.",
        Img: Storage_icon_png,
    },
    {
        id: 14,
        title: "Cold Storage",
        description:
            "Temperature-managed storage solutions for selected goods with specific storage requirements.",
        Img: Cold_icon_png,
    },
];

const Service = () => {
    return (
        <>
            <Helmet>
                <title>
                    Relocation and Moving Services in India | Safexpress
                </title>

                <meta
                    name="description"
                    content="Explore Safexpress relocation services including house shifting, office relocation, bike transport, car transportation, pet relocation, storage, and moving solutions across India."
                />

                <meta
                    name="keywords"
                    content="Safexpress services, relocation services India, house shifting services, office relocation services, car transport services, bike transport services, storage services, moving services India"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    property="og:title"
                    content="Relocation and Moving Services | Safexpress"
                />

                <meta
                    property="og:description"
                    content="Explore professional house shifting, office relocation, vehicle transportation, storage, and relocation services from Safexpress."
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
                    content="Relocation Services in India | Safexpress"
                />

                <meta
                    name="twitter:description"
                    content="Explore Safexpress relocation, moving, vehicle transportation, and storage services across India."
                />
                
                <link rel="canonical" href="https://safeshiftingpackers.com/services" />
            </Helmet>

            <main
                id="service-page"
            >
                <section className="surface-network">
                    <div className="surface-overlay">
                        <div className="surface-container">
                            <header className="surface-text">
                                <h1>
                                    Professional Relocation and Moving Services
                                    in India
                                </h1>

                                <p>
                                    Safexpress provides relocation and moving
                                    solutions for households, businesses,
                                    vehicles, and other transportation
                                    requirements across India.
                                </p>

                                <p>
                                    Our services include house shifting, office
                                    relocation, vehicle transportation, luggage
                                    transport, storage, and other moving
                                    solutions designed for different relocation
                                    requirements.
                                </p>

                                <p>
                                    From packing and handling to transportation
                                    and delivery coordination, our team focuses
                                    on providing an organized and professionally
                                    managed relocation experience.
                                </p>
                            </header>

                            <div className="surface-image-wrapper">
                                <div className="surface-image">
                                    <img
                                        src={heroImg}
                                        alt="Safexpress professional relocation and moving services"
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="services-section"
                    className="services-content-section"
                    aria-labelledby="services-heading"
                >
                    <div className="container">
                        <header className="services-header">
                            <h2 id="services-heading">
                                Our Key Relocation Services
                            </h2>

                            <p>
                                Explore our moving, transportation, and storage
                                solutions designed for different household and
                                business relocation requirements.
                            </p>
                        </header>

                        <div className="services-grid">
                            {services.map((service) => (
                                <article
                                    key={service.id}
                                    className="card"
                                >
                                    <img
                                        src={service.Img}
                                        alt={`${service.title} service by Safexpress`}
                                        loading="lazy"
                                        decoding="async"
                                    />

                                    <h3>
                                        {service.title}
                                    </h3>

                                    <p>
                                        {service.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="express-benefits">
                    <div className="container">
                        <nav
                            className="breadcrumb"
                            aria-label="Breadcrumb"
                        >
                            <Link to="/">
                                Home
                            </Link>

                            <span aria-hidden="true">
                                ›
                            </span>

                            <span aria-current="page">
                                Services
                            </span>
                        </nav>

                        <div className="benefits-container">
                            <div className="benefits-content">
                                <h2>
                                    Benefits of Choosing Professional Relocation
                                    Services
                                </h2>

                                <p>
                                    A professionally managed relocation helps
                                    organize different stages of the moving
                                    process, including packing, handling,
                                    transportation, and delivery coordination.
                                </p>

                                <p>
                                    Safexpress provides relocation solutions
                                    based on the type of goods, moving distance,
                                    transportation requirements, and selected
                                    service.
                                </p>

                                <ul className="benefits-list">
                                    <li>
                                        Professional packing and handling support
                                        for different types of belongings
                                    </li>

                                    <li>
                                        Relocation planning based on moving
                                        distance and transportation requirements
                                    </li>

                                    <li>
                                        House shifting and household relocation
                                        solutions
                                    </li>

                                    <li>
                                        Office and commercial relocation support
                                    </li>

                                    <li>
                                        Car and bike transportation services
                                    </li>

                                    <li>
                                        Luggage transportation and moving support
                                    </li>

                                    <li>
                                        Storage and warehouse solutions for
                                        different requirements
                                    </li>

                                    <li>
                                        Local, intercity, and interstate
                                        relocation coordination
                                    </li>

                                    <li>
                                        Customer support during different stages
                                        of the relocation process
                                    </li>

                                    <li>
                                        Transportation arrangements according to
                                        the volume and type of goods
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <FAQ />
            </main>
        </>
    );
};

export default Service;