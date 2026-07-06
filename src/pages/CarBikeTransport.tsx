import "../styles/Common.scss";

import { Helmet } from "react-helmet-async";

import carPricingImg from "../assets/CarBikeTransport/carPricingImg.png";
import bikePricingImg from "../assets/CarBikeTransport/bikePricingImg.png";

import FAQ from "../components/FAQ.tsx";

const PAGE_URL = "https://gatishiftingpackers.com/car-bike-transport";
const OG_IMAGE_URL =
    "https://gatishiftingpackers.com/images/CarBikeTransport/car-bike-transport-og.webp";

const CarBikeTransport = () => {
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
                name: "Car & Bike Transport Services",
                item: PAGE_URL,
            },
        ],
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Car and Bike Transport Services",
        serviceType: "Vehicle Transportation and Relocation Services",
        description:
            "Gati Shifting Packers provides car and bike transport services for secure vehicle relocation across serviceable locations in India.",
        url: PAGE_URL,
        provider: {
            "@type": "Organization",
            name: "Gati Shifting Packers",
            url: "https://gatishiftingpackers.com/",
        },
        areaServed: {
            "@type": "Country",
            name: "India",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Vehicle Transport Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Car Transport Services",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Bike Transport Services",
                    },
                },
            ],
        },
    };

    return (
        <>
            <Helmet>
                <title>
                    Car & Bike Transport Services in India | Gati Shifting Packers
                </title>

                <meta
                    name="description"
                    content="Book car and bike transport services with Gati Shifting Packers. Get professional vehicle handling, doorstep pickup, secure transportation, and relocation support across India."
                />

                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={PAGE_URL} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={PAGE_URL} />
                <meta
                    property="og:title"
                    content="Car & Bike Transport Services in India | Gati Shifting Packers"
                />
                <meta
                    property="og:description"
                    content="Professional car and bike transport services for secure vehicle relocation, doorstep pickup, and transportation support across India."
                />
                <meta property="og:site_name" content="Gati Shifting Packers" />
                <meta property="og:image" content={OG_IMAGE_URL} />
                <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
                <meta property="og:image:type" content="image/webp" />
                <meta
                    property="og:image:alt"
                    content="Car and bike transport services by Gati Shifting Packers"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Car & Bike Transport Services in India | Gati Shifting Packers"
                />
                <meta
                    name="twitter:description"
                    content="Secure car and bike transportation with professional vehicle handling and relocation support across India."
                />
                <meta name="twitter:image" content={OG_IMAGE_URL} />

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            </Helmet>

            <main className="car-bike-transport-page">
                <section
                    id="pet-relocation-sec"
                    className="top-element"
                    aria-labelledby="car-bike-transport-heading"
                >
                    <div className="container">
                        <h1 id="car-bike-transport-heading">
                            Car & Bike Transport Services in India
                        </h1>

                        <p>
                            Gati Shifting Packers provides professional car and bike
                            transport services for customers relocating vehicles between
                            cities and serviceable locations across India. Our vehicle
                            relocation process focuses on careful handling, coordinated
                            pickup, secure transportation, and timely delivery support.
                        </p>

                        <p>
                            Whether you need to move a car, scooter, motorcycle, or another
                            supported vehicle, our team helps coordinate the transportation
                            process from pickup to destination.
                        </p>

                        <div
                            className="content 6-steps"
                            aria-labelledby="vehicle-booking-process-heading"
                        >
                            <h2 id="vehicle-booking-process-heading">
                                Simple 6-Step Vehicle Transport Booking Process
                            </h2>

                            <h3>Step 1: Share Your Vehicle and Moving Details</h3>
                            <ul>
                                <li>
                                    Provide the vehicle type, pickup location, destination,
                                    and preferred moving date.
                                </li>
                                <li>
                                    Receive a quotation based on your vehicle transportation
                                    requirements.
                                </li>
                            </ul>

                            <h3>Step 2: Confirm Your Vehicle Transport Booking</h3>
                            <ul>
                                <li>Choose your preferred pickup date and schedule.</li>
                                <li>
                                    Confirm the booking after reviewing the service and
                                    quotation details.
                                </li>
                            </ul>

                            <h3>Step 3: Vehicle Inspection and Doorstep Pickup</h3>
                            <ul>
                                <li>
                                    The vehicle condition and transportation requirements are
                                    checked before pickup.
                                </li>
                                <li>
                                    The vehicle is prepared and coordinated for safe loading.
                                </li>
                            </ul>

                            <h3>Step 4: Documentation and Payment Confirmation</h3>
                            <ul>
                                <li>
                                    Review the transportation details and applicable service
                                    charges.
                                </li>
                                <li>
                                    Complete the agreed payment process according to the
                                    booking terms.
                                </li>
                            </ul>

                            <h3>Step 5: Secure Vehicle Transportation</h3>
                            <ul>
                                <li>
                                    Your car or bike is transported using a suitable vehicle
                                    transportation arrangement.
                                </li>
                                <li>
                                    Our team provides shipment coordination and status support
                                    during transit.
                                </li>
                            </ul>

                            <h3>Step 6: Vehicle Delivery and Confirmation</h3>
                            <ul>
                                <li>
                                    The vehicle is delivered at the agreed destination or
                                    delivery point.
                                </li>
                                <li>
                                    Check the vehicle and confirm completion of the transport
                                    service.
                                </li>
                            </ul>
                        </div>

                        <div
                            className="content types"
                            aria-labelledby="vehicles-we-transport-heading"
                        >
                            <h2 id="vehicles-we-transport-heading">
                                Vehicles We Transport
                            </h2>

                            <p style={{ marginBottom: "10px" }}>
                                Our vehicle relocation services are suitable for different
                                types of cars and two-wheelers.
                            </p>

                            <ul>
                                <li>
                                    <strong>Cars:</strong> Sedans, SUVs, hatchbacks, and
                                    supported electric vehicles.
                                </li>
                                <li>
                                    <strong>Bikes & Motorcycles:</strong> Scooters,
                                    motorcycles, sports bikes, and supported electric
                                    two-wheelers.
                                </li>
                                <li>
                                    <strong>Other Vehicles:</strong> Transport availability
                                    for vans and selected commercial vehicles can be confirmed
                                    based on route and vehicle requirements.
                                </li>
                            </ul>

                            <h2>Car & Bike Transport Charges in India</h2>

                            <p>
                                Vehicle transport charges can vary based on the pickup and
                                delivery locations, distance, vehicle type, carrier
                                requirements, and transportation schedule. The pricing images
                                below provide general service information; request a quotation
                                for charges based on your specific relocation details.
                            </p>

                            <img
                                src={bikePricingImg}
                                alt="Bike transport pricing information"
                                loading="lazy"
                            />

                            <img
                                src={carPricingImg}
                                alt="Car transport pricing information"
                                loading="lazy"
                            />
                        </div>

                        <div
                            className="content why-choose"
                            aria-labelledby="why-professional-vehicle-transport-heading"
                        >
                            <h2 id="why-professional-vehicle-transport-heading">
                                Why Choose Professional Vehicle Transport Services?
                            </h2>

                            <ul>
                                <li>
                                    <strong>Professional Handling:</strong> Vehicle movement
                                    is coordinated with careful loading and transportation
                                    practices.
                                </li>
                                <li>
                                    <strong>Convenient Relocation:</strong> Avoid the time and
                                    effort involved in driving a vehicle over long distances.
                                </li>
                                <li>
                                    <strong>Pickup Support:</strong> Vehicle pickup can be
                                    coordinated according to service availability and booking
                                    details.
                                </li>
                                <li>
                                    <strong>Transit Coordination:</strong> Get transportation
                                    status and shipment support during the relocation process.
                                </li>
                                <li>
                                    <strong>Managed Delivery:</strong> Pickup, transport, and
                                    delivery are coordinated as part of the vehicle relocation
                                    service.
                                </li>
                            </ul>
                        </div>

                        <div
                            className="content factors"
                            aria-labelledby="vehicle-transport-cost-factors-heading"
                        >
                            <h2 id="vehicle-transport-cost-factors-heading">
                                Factors Affecting Car and Bike Transport Costs
                            </h2>

                            <ol>
                                <li>
                                    <strong>Transport Distance:</strong> Longer routes
                                    generally involve higher transportation costs because of
                                    fuel, carrier movement, tolls, and transit requirements.
                                </li>

                                <li>
                                    <strong>Vehicle Type:</strong> A scooter, motorcycle,
                                    hatchback, sedan, and SUV may require different carrier
                                    space and handling arrangements.
                                </li>

                                <li>
                                    <strong>Pickup and Delivery Locations:</strong> Charges
                                    can vary depending on route accessibility and whether the
                                    locations are within regular service areas.
                                </li>

                                <li>
                                    <strong>Carrier and Transport Requirements:</strong> The
                                    transportation arrangement required for a particular
                                    vehicle can affect the final quotation.
                                </li>

                                <li>
                                    <strong>Moving Date and Availability:</strong> Carrier
                                    availability, seasonal demand, and the requested transport
                                    schedule may influence pricing.
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

export default CarBikeTransport;
