import { Helmet } from "react-helmet-async"
import "../styles/Service.scss"
const Service = () => {
    return (
        <>
            <Helmet>
                <title>Our Services | Safe Shifting Packers – Complete Packers & Movers Solutions</title>
                <meta name="description" content="Explore complete packing and moving services by Safe Shifting Packers including household shifting, office relocation, vehicle transportation, packing, loading, unloading, storage, and warehousing services across India." />
                <meta name="keywords" content="Packers and Movers Services, Household Shifting Services, Office Relocation Services, Car Transportation, Bike Transportation, Packing and Unpacking Services, Loading Unloading Services, Storage and Warehousing, Local Shifting, Domestic Relocation, Safe Shifting Packers Services" />
                <meta name="author" content="Safe Shifting Packers" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Packers and Movers Services | Safe Shifting Packers" />
                <meta property="og:description" content="Safe Shifting Packers offers end-to-end packers and movers services including home shifting, office relocation, vehicle transport, packing, storage, and warehousing across India." />
                <meta property="og:url" content="https://safeshiftingpackers.com/service" />
                <meta property="og:site_name" content="Safe Shifting Packers" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services | Safe Shifting Packers" />
                <meta name="twitter:description" content="Professional household shifting, office relocation, vehicle transportation, packing, storage and complete moving solutions by Safe Shifting Packers." />

                <link rel="canonical" href="https://safeshiftingpackers.com/service" />
            </Helmet>
            <section className="surface-network">
                <div className="surface-overlay">
                    <div className="surface-container">

                        <div className="surface-text">
                            <h2>Surface Network</h2>

                            <p>
                                Safexpress uses its extensive network for movement through Surface for
                                fast paced and high-speed delivery of goods across India. Nearly 60%
                                of all the goods distribution in India happens through roads.
                            </p>

                            <p>
                                Safexpress fulfil the need for the surface express distribution in
                                both, the B2B and C2C segments. The B2B segment includes businesses
                                such as digital goods, automotive, apparels, pharma, healthcare,
                                engineering and more.
                            </p>
                        </div>

                        <div className="surface-image-wrapper">
                            <div className="surface-image">
                                <img
                                    src="https://www.safexpress.com/assets/images/fg-surface-new.png"
                                    alt="Safexpress Surface Network"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="express-benefits">

                <div className="breadcrumb">
                    <a href="#">Home</a> » <span>Express Surface</span>
                </div>

                <div className="benefits-container">

                    <div className="benefits-images">
                        <img src="https://www.safexpress.com/assets/images/express-2.jpg" alt="Warehouse" />
                        <img src="https://www.safexpress.com/assets/images/Express-Distribution-Surface_Bottom-3_.jpg" alt="Customer Handling" />
                        <img src="https://www.safexpress.com/assets/images/express-4.jpg" alt="Logistics Yard" />
                        <img src="https://www.safexpress.com/assets/images/express-new-btm.jpg" alt="Order Processing" />
                    </div>

                    <div className="benefits-content">
                        <h2>
                            How you can benefit from the Safexpress Surface express
                            distribution service?
                        </h2>

                        <p>
                            Safexpress’ robust network ensures the products are delivered in a
                            timely, and systematic manner. The reason that this sector is one of
                            the most sought after channels is because of the advantages it offers
                            to businesses and consumers.
                        </p>

                        <ul className="benefits-list">
                            <li>24x7, 365 days operations continuity for fastest deliveries</li>
                            <li>Real-time update with track & trace facility for better visibility</li>
                            <li>Express distribution that focuses on safety and speed</li>
                            <li>State-of-the-art logistics parks with warehousing & VAS support</li>
                            <li>Fastest and direct connectivity through 2854 routes</li>
                            <li>Robust network of over 850 gateways</li>
                            <li>Fleet of 14,010 GPS-enabled, containerised trucks</li>
                            <li>ISO-9002 certified, all-climate-proof vehicles</li>
                            <li>Timely departure of vehicles irrespective of capacity</li>
                            <li>Fastest transit time across the industry</li>
                            <li>Warehouse-to-warehouse distribution option</li>
                            <li>Reach to every square inch of India</li>
                        </ul>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Service