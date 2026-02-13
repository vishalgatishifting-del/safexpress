import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import BadgeIcon from "@mui/icons-material/Badge";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HotelClassIcon from "@mui/icons-material/HotelClass";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Link } from "react-router-dom";
import "../styles/OfficeLocation.scss";
import { COMPANY } from "../config/Company";

const OfficeLocation = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cities = [
        "delhi",
        "mumbai",
        "kolkata",
        "chennai",
        "bengaluru",
        "hyderabad",
        "pune",
        "goa",
        "guwahati",
        "imphal",
    ];

    return (
        <section id="office-location">

            {/* Header */}
            <div className="header">
                <h2>Our Office Location</h2>
                <p>Visit our office or contact us anytime</p>
            </div>

            {/* City Buttons */}
            <div className="city-buttons">
                {cities.map((city) => (
                    <Link key={city} to={`/city/${city}`}>
                        {city.charAt(0).toUpperCase() + city.slice(1)}
                    </Link>
                ))}
            </div>

            {/* Content */}
            <motion.div
                ref={ref}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="content"
            >

                {/* Map Card */}
                <div className="map-card">

                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3769.5225867720897!2d72.99421947520662!3d19.128588882086827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA3JzQyLjkiTiA3MsKwNTknNDguNSJF!5e0!3m2!1sen!2sin!4v1758188918732!5m2!1sen!2sin"
                        loading="lazy"
                        allowFullScreen
                    />

                </div>

                <div className="details-card">

                    <ul>

                        <li>
                            <LocationOnIcon />
                            <span>
                                Office No. 04 Shree Sadguru Niwas Opp MSEB OFFICE
                                Sector 21 Ghansoli Navi Mumbai 400701
                            </span>
                        </li>

                        <li>
                            <CallIcon />
                            <span>+91 {COMPANY.phone}</span>
                        </li>

                        <li>
                            <EmailIcon />
                            <span>{COMPANY.email}</span>
                        </li>

                        <li>
                            <WatchLaterIcon />
                            <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
                        </li>

                        <li>
                            <BadgeIcon />
                            <span>GST: 06AAMCG3191P1ZZ</span>
                        </li>

                        <li>
                            <BrandingWatermarkIcon />
                            <span>MSME: UDYAM-MH-19-0373918</span>
                        </li>

                        <li>
                            <VerifiedUserIcon />
                            <span>CIN: U52293HR2025PTC135734</span>
                        </li>

                        <li>
                            <HotelClassIcon />
                            <span>TAN: RTKG21417E</span>
                        </li>

                        <li>
                            <CreditCardIcon />
                            <span>PAN: AAMCG3191P</span>
                        </li>

                    </ul>

                    <div className="tag">
                        #SafeShiftingPackers
                    </div>

                </div>

            </motion.div>

        </section>
    );
};

export default OfficeLocation;
