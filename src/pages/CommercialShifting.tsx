import "../styles/Common.scss";

import { Helmet } from "react-helmet-async";

import commercialShiftingImg from "../assets/CommercialShifting/commercialShiftingPriceImg.png";

import FAQ from "../components/FAQ.tsx";

const PAGE_URL = "https://safeshiftingpackers.com/commercial-shifting";
const OG_IMAGE_URL =
    "https://safeshiftingpackers.com/images/CommercialShifting/commercial-shifting-og.webp";

const CommercialShifting = () => {
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
                name: "Commercial Shifting Services",
                item: PAGE_URL,
            },
        ],
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Commercial Shifting Services",
        serviceType: "Commercial and Business Relocation Services",
        description:
            "Gati Shifting Packers provides commercial shifting services for offices, warehouses, retail outlets, showrooms, and business establishments across serviceable locations in India.",
        url: PAGE_URL,
        provider: {
            "@type": "Organization",
            name: "Gati Shifting Packers",
            url: "https://safeshiftingpackers.com/",
        },
        areaServed: {
            "@type": "Country",
            name: "India",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Commercial Relocation Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Office Shifting Services",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Warehouse Relocation Services",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Retail and Showroom Shifting",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Commercial Goods Transportation",
                    },
                },
            ],
        },
    };

    return (
        <>
            <Helmet>
                <title>
                    Commercial Shifting Services in India | Gati Shifting Packers
                </title>

                <meta
                    name="description"
                    content="Book commercial shifting services with Gati Shifting Packers for office, warehouse, retail, showroom, and business relocation with professional packing and transport support."
                />

                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={PAGE_URL} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={PAGE_URL} />
                <meta
                    property="og:title"
                    content="Commercial Shifting Services in India | Gati Shifting Packers"
                />
                <meta
                    property="og:description"
                    content="Professional commercial relocation services for offices, warehouses, retail outlets, showrooms, and business establishments."
                />
                <meta property="og:site_name" content="Gati Shifting Packers" />
                <meta property="og:image" content={OG_IMAGE_URL} />
                <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
                <meta property="og:image:type" content="image/webp" />
                <meta
                    property="og:image:alt"
                    content="Commercial shifting services by Gati Shifting Packers"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Commercial Shifting Services in India | Gati Shifting Packers"
                />
                <meta
                    name="twitter:description"
                    content="Commercial relocation support for offices, warehouses, retail outlets, showrooms, and business establishments."
                />
                <meta name="twitter:image" content={OG_IMAGE_URL} />

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Helmet>

            <main className="commercial-shifting-page">
                <section
                    id="pet-relocation-sec"
                    className="top-element"
                    aria-labelledby="commercial-shifting-heading"
                >
                    <div className="container">
                        <h1 id="commercial-shifting-heading">
                            Commercial Shifting Services in India
                        </h1>

                        <p>
                            Gati Shifting Packers provides professional commercial shifting
                            services for offices, warehouses, retail outlets, showrooms, and
                            other business establishments. Our relocation process focuses on
                            planning, packing, handling, transportation, and coordinated
                            delivery to help businesses move their assets efficiently.
                        </p>

                        <p>
                            Commercial relocations can involve office furniture, inventory,
                            machinery, electronics, documents, and operational equipment.
                            Our team coordinates the shifting process according to the type
                            of goods, relocation route, and business requirements.
                        </p>

                        <div
                            className="content 6-steps"
                            aria-labelledby="commercial-booking-process-heading"
                        >
                            <h2 id="commercial-booking-process-heading">
                                Simple 6-Step Commercial Shifting Process
                            </h2>

                            <h3>Step 1: Share Your Business Relocation Requirements</h3>
                            <ul>
                                <li>
                                    Provide details about the pickup location, destination,
                                    type of commercial space, and items to be shifted.
                                </li>
                                <li>
                                    Share your preferred relocation schedule and any specific
                                    handling requirements.
                                </li>
                            </ul>

                            <h3>Step 2: Get a Commercial Shifting Quotation</h3>
                            <ul>
                                <li>
                                    The relocation requirements are reviewed to understand the
                                    expected packing, manpower, and transportation needs.
                                </li>
                                <li>
                                    Receive a quotation based on the information provided and
                                    applicable service requirements.
                                </li>
                            </ul>

                            <h3>Step 3: Packing, Labelling, and Pickup Preparation</h3>
                            <ul>
                                <li>
                                    Commercial goods are prepared for relocation using
                                    suitable packing and handling methods.
                                </li>
                                <li>
                                    Items can be organised and labelled to support coordinated
                                    loading and delivery.
                                </li>
                            </ul>

                            <h3>Step 4: Loading and Transportation Coordination</h3>
                            <ul>
                                <li>
                                    Goods are loaded according to their size, weight, and
                                    handling requirements.
                                </li>
                                <li>
                                    Transportation is coordinated based on the relocation
                                    route and selected service arrangement.
                                </li>
                            </ul>

                            <h3>Step 5: Transit and Delivery Support</h3>
                            <ul>
                                <li>
                                    The commercial shipment is moved towards the agreed
                                    destination.
                                </li>
                                <li>
                                    Our team provides shipment coordination and status support
                                    during the relocation process.
                                </li>
                            </ul>

                            <h3>Step 6: Delivery and Relocation Completion</h3>
                            <ul>
                                <li>
                                    Commercial goods are delivered at the agreed destination
                                    or delivery point.
                                </li>
                                <li>
                                    Check the delivered items and confirm completion of the
                                    shifting service.
                                </li>
                            </ul>
                        </div>

                        <div
                            className="content types"
                            aria-labelledby="commercial-items-heading"
                        >
                            <h2 id="commercial-items-heading">
                                Commercial Items We Shift
                            </h2>

                            <p style={{ marginBottom: "10px" }}>
                                Our commercial relocation services support different types of
                                business assets and operational goods.
                            </p>

                            <ul>
                                <li>
                                    <strong>Machinery & Equipment:</strong> Supported
                                    industrial equipment, operational tools, and business
                                    machinery based on handling requirements.
                                </li>
                                <li>
                                    <strong>Furniture & Fixtures:</strong> Office tables,
                                    chairs, shelves, counters, racks, and other commercial
                                    fixtures.
                                </li>
                                <li>
                                    <strong>Electronics & Appliances:</strong> Computers, POS
                                    systems, office electronics, and supported appliances.
                                </li>
                                <li>
                                    <strong>Inventory & Stock:</strong> Products, packaged
                                    materials, and business inventory prepared for relocation.
                                </li>
                                <li>
                                    <strong>Files & Documents:</strong> Business records,
                                    files, and document boxes prepared for organised handling.
                                </li>
                            </ul>

                            <h2>Commercial Shifting Charges in India</h2>

                            <p>
                                Commercial shifting charges depend on the size of the move,
                                quantity and type of goods, packing requirements, manpower,
                                transport distance, vehicle requirements, and relocation
                                schedule. The pricing information below is intended as a
                                general reference. Request a quotation for charges based on
                                your specific commercial relocation requirements.
                            </p>

                            <img
                                src={commercialShiftingImg}
                                alt="Commercial shifting pricing and service information"
                                loading="lazy"
                            />
                        </div>

                        <div
                            className="content why-choose"
                            aria-labelledby="why-commercial-shifting-heading"
                        >
                            <h2 id="why-commercial-shifting-heading">
                                Why Choose Professional Commercial Shifting Services?
                            </h2>

                            <ul>
                                <li>
                                    <strong>Planned Handling:</strong> Commercial goods are
                                    organised according to their size, type, and handling
                                    requirements.
                                </li>
                                <li>
                                    <strong>Business-Focused Coordination:</strong> The
                                    relocation process can be scheduled according to agreed
                                    service availability and business requirements.
                                </li>
                                <li>
                                    <strong>Packing Support:</strong> Suitable packing methods
                                    can be used for furniture, electronics, inventory, and
                                    other supported commercial goods.
                                </li>
                                <li>
                                    <strong>Professional Manpower:</strong> Loading and
                                    handling are coordinated according to the requirements of
                                    the commercial move.
                                </li>
                                <li>
                                    <strong>Managed Transportation:</strong> Pickup, loading,
                                    transport, and delivery are coordinated as part of the
                                    shifting process.
                                </li>
                            </ul>
                        </div>

                        <div
                            className="content factors"
                            aria-labelledby="commercial-shifting-cost-factors-heading"
                        >
                            <h2 id="commercial-shifting-cost-factors-heading">
                                Factors Affecting Commercial Shifting Costs
                            </h2>

                            <ol>
                                <li>
                                    <strong>Relocation Distance:</strong> Longer routes can
                                    increase transportation costs because of fuel, tolls,
                                    transit time, and vehicle requirements.
                                </li>

                                <li>
                                    <strong>Quantity and Weight of Goods:</strong> Larger
                                    commercial moves or heavier goods may require additional
                                    manpower and transport capacity.
                                </li>

                                <li>
                                    <strong>Type of Commercial Goods:</strong> Electronics,
                                    machinery, furniture, inventory, and fragile items can
                                    require different packing and handling arrangements.
                                </li>

                                <li>
                                    <strong>Vehicle Requirements:</strong> The size and type
                                    of transport vehicle required for the commercial shipment
                                    can affect the final quotation.
                                </li>

                                <li>
                                    <strong>Moving Schedule and Service Availability:</strong>
                                    Relocation dates, carrier availability, and seasonal demand
                                    may influence commercial shifting charges.
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>

                <FAQ />
            </main>
        </>
    );
};

export default CommercialShifting;
