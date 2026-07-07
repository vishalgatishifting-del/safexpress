
import { Helmet } from "react-helmet-async";

import "../styles/WhoWeAre.scss";
import "../styles/Common.scss";

const WhoWeAre = () => {
    return (
        <>
            <Helmet>
                <title>
                    Who We Are | About Safexpress Relocation Services
                </title>

                <meta
                    name="description"
                    content="Learn about Safexpress, a trusted relocation and logistics service provider in India offering home shifting, office relocation, vehicle transportation, packing, and storage solutions."
                />

                <meta
                    name="keywords"
                    content="Safexpress about us, trusted relocation company India, packers and movers company profile, professional relocation services, home shifting company, office relocation services, logistics company India"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    property="og:title"
                    content="Who We Are | Safexpress Relocation Services"
                />

                <meta
                    property="og:description"
                    content="Discover Safexpress and our commitment to safe, transparent, and professional relocation services across India."
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
                    content="Who We Are | Safexpress"
                />

                <meta
                    name="twitter:description"
                    content="Learn more about Safexpress and our professional relocation and logistics services across India."
                />
                
                <link rel="canonical" href="https://safeshiftingpackers.com/who-we-are" />
            </Helmet>

            <main
                id="who-we-are-section"
                className="top-element"
            >
                <div className="container">
                    <header className="content who-we-are-intro">
                        <h1>
                            Who We Are
                        </h1>

                        <p>
                            Founded in <strong>2006</strong>, Safexpress has
                            emerged as a trusted name in the Indian relocation
                            and logistics industry. With a growing service
                            network across India, we are committed to providing
                            professional, reliable, and carefully managed
                            relocation solutions.
                        </p>

                        <p>
                            Over the years, we have helped families,
                            individuals, and businesses relocate their
                            belongings safely and efficiently. Whether it is a
                            local move, intercity relocation, or interstate
                            shifting requirement, our team focuses on making
                            every relocation organized and stress-free.
                        </p>
                    </header>

                    <section className="content our-relocation-services">
                        <h2>
                            Complete Relocation and Shifting Solutions
                        </h2>

                        <p>
                            Safexpress provides comprehensive relocation
                            services designed for different moving
                            requirements. Our services include professional
                            packing, secure loading, transportation, unloading,
                            unpacking support, warehouse storage, and vehicle
                            transportation.
                        </p>

                        <p>
                            Every relocation is handled with careful planning
                            and attention to detail. Our team works to ensure
                            that household goods, office assets, vehicles, and
                            other belongings are transported safely and
                            delivered according to the planned relocation
                            schedule.
                        </p>
                    </section>

                    <section className="content experienced-team">
                        <h2>
                            Experienced and Professional Relocation Team
                        </h2>

                        <p>
                            At Safexpress, our relocation team consists of
                            trained professionals with practical experience in
                            packing, moving, and logistics operations. Our team
                            understands the different handling requirements of
                            household goods, office equipment, electronics,
                            furniture, and vehicles.
                        </p>

                        <p>
                            We use suitable packing techniques and quality
                            packing materials to help protect belongings during
                            transportation. Bubble wrap, protective sheets,
                            cartons, and other packing materials are selected
                            according to the type of goods being relocated.
                        </p>

                        <p>
                            From careful packing and labeling to loading and
                            transportation coordination, every stage of the
                            relocation process is managed professionally.
                        </p>
                    </section>

                    <section className="content our-values">
                        <h2>
                            Our Commitment to Safe and Transparent Relocation
                        </h2>

                        <p>
                            Our services are built around the values of
                            <strong>
                                {" "}
                                transparency, accountability, safety,
                                timeliness, and customer satisfaction
                            </strong>
                            . These values guide our team throughout every
                            relocation project.
                        </p>

                        <p>
                            We believe customers should clearly understand
                            their relocation requirements and service charges.
                            Our team provides detailed relocation information
                            and quotations based on the moving requirements
                            shared by the customer.
                        </p>

                        <p>
                            Our goal is to maintain clear communication
                            throughout the moving process and provide
                            responsible support from the initial enquiry to the
                            final delivery.
                        </p>
                    </section>

                    <section className="content customer-support">
                        <h2>
                            Customer Support Throughout Your Relocation
                        </h2>

                        <p>
                            Our customer support team assists customers
                            throughout the relocation process. From answering
                            service-related questions to providing shipment and
                            relocation updates, we focus on maintaining clear
                            communication during every stage of the move.
                        </p>

                        <p>
                            Whether you are a student relocating to a hostel, a
                            family moving to another city, a business shifting
                            its office, or a vehicle owner arranging
                            transportation to another state, Safexpress provides
                            relocation support based on your specific moving
                            requirements.
                        </p>
                    </section>

                    <section className="content industry-experience">
                        <h2>
                            Years of Experience in Relocation and Logistics
                        </h2>

                        <p>
                            With years of experience in the relocation and
                            logistics industry, Safexpress continues to improve
                            its moving processes and service standards. We focus
                            on adopting better relocation practices,
                            transportation coordination methods, and
                            customer-focused service solutions.
                        </p>

                        <p>
                            Our experience allows us to understand the
                            challenges involved in different types of
                            relocation. Every move is planned according to the
                            distance, volume of goods, transportation
                            requirements, and delivery schedule.
                        </p>
                    </section>

                    <section className="content why-safexpress">
                        <h2>
                            Why Choose Safexpress for Your Relocation?
                        </h2>

                        <p>
                            Safexpress aims to provide a smooth, transparent,
                            and professionally managed moving experience. Our
                            team takes responsibility for coordinating
                            different stages of the relocation process while
                            keeping safety and customer requirements in focus.
                        </p>

                        <p>
                            Whether you need home shifting, office relocation,
                            vehicle transportation, storage, or other moving
                            services, our team is ready to assist with a
                            suitable relocation solution.
                        </p>

                        <p>
                            Choose Safexpress for professional relocation
                            services designed to make your moving journey
                            organized, secure, and convenient.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
};

export default WhoWeAre;