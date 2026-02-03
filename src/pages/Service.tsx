import { Helmet } from "react-helmet-async"
import "../styles/Service.scss"
import AV_icon_png from "../assets/servicesPageImg/ac.webp"
import House_icon_png from "../assets/servicesPageImg/household.webp"
import Bike_icon_png from "../assets/servicesPageImg/bike.webp"
import Car_icon_png from "../assets/servicesPageImg/car.webp"
import Pet_icon_png from "../assets/servicesPageImg/pets.webp"
import Office_icon_png from "../assets/servicesPageImg/office.webp"
import Commercial_icon_png from "../assets/servicesPageImg/commercial.webp"
import Luggage_icon_png from "../assets/servicesPageImg/luggage.webp"
import Domestic_icon_png from "../assets/servicesPageImg/domestic.webp"
import International_icon_png from "../assets/servicesPageImg/international.webp"
import Temp_icon_png from "../assets/servicesPageImg/tempo.webp"
import Warehouse_icon_png from "../assets/servicesPageImg/warehouse.webp"
import Storage_icon_png from "../assets/servicesPageImg/storage.webp"
import Cold_icon_png from "../assets/servicesPageImg/cold.webp"
import heroImg from "../assets/servicesPageImg/hero-image.png"


type Services = {
    id: number;
    tt: string;
    title: string;
    description: string;
    Img?: string;
};
const Service = () => {

        const services: Services[] = [
        { id: 1, tt: "House", title: "House Shifting", description: "Smooth and reliable house shifting with professional packing, loading, transport, and setup at your new home.", Img: House_icon_png },
        { id: 2, tt: "AC", title: "AC Shifting", description: "Expert AC dismantling, secure packaging, and reinstallation at your destination by skilled technicians.", Img: AV_icon_png },
        { id: 3, tt: "Bike", title: "Bike Transport", description: "Bike relocation with protective wrapping, proper anchoring, and doorstep pickup and delivery.", Img: Bike_icon_png },
        { id: 4, tt: "Car", title: "Car Transport", description: "Car shifting through open or enclosed carriers with tracking, insurance, and timely delivery.", Img: Car_icon_png },
        { id: 5, tt: "Pet", title: "Pet Relocation", description: "Stress-free pet transportation with temperature-controlled spaces and necessary travel documentation.", Img: Pet_icon_png },
        { id: 6, tt: "Office", title: "Office Shifting", description: "Efficient office relocation ensuring minimal downtime, safe equipment handling, and IT setup support.", Img: Office_icon_png },
        { id: 7, tt: "Commercial", title: "Commercial Shifting", description: "End-to-end commercial shifting designed for factories, shops, and warehouses with heavy-duty transport.", Img: Commercial_icon_png },
        { id: 8, tt: "Luggage", title: "Luggage Transport", description: "Affordable and secure luggage transport with pickup, packaging, and on-time delivery options.", Img: Luggage_icon_png },
        { id: 9, tt: "Domestic", title: "Domestic Moving", description: "Full-service domestic relocation with packing, loading, transport, and unpacking support across India.", Img: Domestic_icon_png },
        { id: 10, tt: "International", title: "International Moving", description: "International moving with customs documentation, freight handling, and global door-to-door service.", Img: International_icon_png },
        { id: 11, tt: "Tempo", title: "Tempo for Shifting", description: "On-demand tempo services for short-distance or same-day local moves, perfect for quick shifting.", Img: Temp_icon_png },
        { id: 12, tt: "Warehouse", title: "Warehouse Services", description: "Safe and monitored warehouse services for short or long durations, with 24/7 security and organized storage.", Img: Warehouse_icon_png },
        { id: 13, tt: "Storage", title: "Storage Facility", description: "Flexible personal or business storage options with clean, secure units and easy access.", Img: Storage_icon_png },
        { id: 14, tt: "Cold", title: "Cold Storage", description: "Temperature-controlled storage for sensitive items like electronics, pharmaceuticals, and perishables.", Img: Cold_icon_png },
    ];
    return (
        <>
            <Helmet>
             
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
                                    src={heroImg}
                                    alt="Safexpress Surface Network"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <h1 className="main-heading">Our Key Services</h1>

            <section id="services-section">
                {services.map((element)=>(
                    <div className="card">
                        <img src={element.Img} />
                        <span>{element.title}</span>
                    </div>
                ))}
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