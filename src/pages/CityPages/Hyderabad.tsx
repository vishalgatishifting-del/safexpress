// import AwardCertification from "../components/AwardCertification";
// import BrandList from "../components/BrandsList";
// import FAQList from "../components/FAQList";
// import GetInTouch from "../components/GetInTouch";
// import ReviewVideo from "../components/ReviewVideos";
// import TrustUsSection from "../components/TrustUsSection";
import chargesImg from "../../assets/CityPages/packers & movers charges.webp"
import "../../styles/CityPage.scss"
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HyderabadImg from "../../assets/CityPages/Hyderabad.webp"

const Hyderabad = () => {

    return (
        <>
            <Helmet>

            </Helmet>
            <section id="city-page">
                {/* HERO */}
                <div className="city-hero">
                    <div className="hero-text">
                        <h1>Safexpress</h1>
                        <h2>Best Packers & Movers in <span>Hyderabad</span></h2>

                        <p className="address">
                            <LocationOnIcon />
                            Shop 115, Street No. 5, maitrivan colony, Old Bowenpally, Hyderabad, Secunderabad, Telangana 500011
                        </p>

                        <div className="offer">🎉 Get 10% OFF on Your Next Move</div>

                        <Link to="/contact-us" className="cta-btn">
                            Get Free Quote
                        </Link>
                    </div>

                    <div className="hero-image">
                        <img src={HyderabadImg} alt="Packers and Movers in Hyderabad" />
                    </div>
                </div>

                {/* CONTENT */}
                <div className="city-content">
                    <p>
                        Welcome to <strong>Safexpress Hyderabad</strong>. We provide safe,
                        affordable and professional relocation services for homes, offices,
                        vehicles and international moves.
                    </p>

                    <h2>🌍 International Packers & Movers in Hyderabad</h2>
                    <p>
                        We manage complete international relocation including packing, customs
                        clearance and global delivery through our trusted logistics network.
                    </p>

                    <h2>Our Packers & Movers Services in Hyderabad</h2>

                    <div className="service-list">
                        <div>🏠 Home Shifting Services</div>
                        <div>🏢 Office Relocation</div>
                        <div>🚚 Domestic Relocation</div>
                        <div>✈️ International Moving</div>
                        <div>🚗 Car & Bike Transport</div>
                        <div>📦 Packing & Unpacking</div>
                        <div>🏭 Corporate Relocation</div>
                        <div>🏬 Warehouse & Storage</div>
                    </div>

                    <h2>Why Choose Safexpress Hyderabad?</h2>
                    <ul className="why-list">
                        <li>Experienced & Verified Movers</li>
                        <li>Premium Packing Materials</li>
                        <li>GPS Enabled Vehicles</li>
                        <li>Affordable Transparent Pricing</li>
                        <li>Transit Insurance</li>
                        <li>24×7 Support</li>
                    </ul>

                    <h2>Packers & Movers Charges in Hyderabad</h2>
                    <div className="charges">
                        <img src={chargesImg} alt="Packers and Movers Charges Hyderabad" />
                    </div>

                    <h2>Factors Affecting Moving Cost</h2>
                    <ol>
                        <li>Distance</li>
                        <li>Volume of Goods</li>
                        <li>Floor & Lift Availability</li>
                        <li>Season & Timing</li>
                        <li>Type of Services</li>
                    </ol>
                </div>
            </section>


            {/* <ReviewVideo></ReviewVideo>
            <GetInTouch></GetInTouch>
            <AwardCertification></AwardCertification>
            <TrustUsSection></TrustUsSection>
            <BrandList></BrandList>
            <FAQList></FAQList> */}
        </>
    )
}

export default Hyderabad;