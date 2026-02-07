import "../styles/CarStorage.scss"
import heroSectionImg from "../assets/CarStorage/hero-section-img.png"
import { Link } from "react-router-dom";
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





import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";




import SecurityIcon from '@mui/icons-material/Security';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import PestControlIcon from '@mui/icons-material/PestControl';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import sampleImg1 from "../assets/CarStorage/sample1.png"
import sampleImg2 from "../assets/CarStorage/sample2.png"
import sampleImg3 from "../assets/CarStorage/sample3.png"
import sampleImg4 from "../assets/CarStorage/sample4.png"
import sampleImg5 from "../assets/CarStorage/sample5.png"
import sampleImg6 from "../assets/CarStorage/sample6.png"
import sampleImg7 from "../assets/CarStorage/sample7.png"
import sampleImg8 from "../assets/CarStorage/sample8.png"


import priceImg from "../assets/CarStorage/priceImg.jpeg"

import "../styles/Common.scss"

import {COMPANY} from "../config/Company"

import FAQ from "../components/FAQ.tsx";
const CarStorage = () => {

    const imgArr = [sampleImg1, sampleImg2, sampleImg3, sampleImg4, sampleImg5, sampleImg6, sampleImg7, sampleImg8];
    return (
        <>


            {/* <div className="bg-attached">
                </div> */}
            <section id="serivce-hero-section" className="car-hero top-element">
                <div className="container">

                    <div className="content">
                        <span className="badge">Secure Car Storage Solutions</span>

                        <h1>
                            Safe & Secure <span className="primary-color">Car</span> Storage Services
                        </h1>

                        <p className="subtitle">
                            Protect your car with our reliable, monitored, and affordable
                            car storage facilities designed for maximum safety and care.
                        </p>

                        <div className="offer">
                            🎉 <strong>15% OFF</strong> on Car Storage — Limited Time
                        </div>

                        <div className="links">
                            <a className="call-btn" href={`tel:${COMPANY.phone}`}>
                                <LocalPhoneIcon />
                                Call Now
                            </a>

                            <Link className="quote-btn" to="/contact-us">
                                Get a Free Quote
                            </Link>
                        </div>

                        <div className="trust-points">
                            <span>✔ Covered Parking</span>
                            <span>✔ CCTV Surveillance</span>
                            <span>✔ Regular Vehicle Checks</span>
                        </div>
                    </div>

                    <div className="img-bx">
                        <div className="img-card">
                            <img
                                src={heroSectionImg}
                                alt="Safe and secure car storage services"
                                width="500"
                                height="420"
                                loading="eager"
                            //   fetchpriority="high"
                            />
                        </div>
                    </div>

                </div>
            </section>


            <section id="about-car-storage">
                <h1>Car Storage Services | Safe & Secure Vehicle Storage</h1>
                <h2>Reliable Car Storage Solutions You Can Trust</h2>
                <p>If you are looking for a safe and secure place to store your car for a short or long duration, safexpress offers professional car storage services designed to protect your vehicle from damage, theft, and weather conditions. Our modern storage facilities ensure your car remains in perfect condition until you need it again.</p>


                <div className="contact-container">
                    <div className="links">
                        <Link className="quote-btn" to="/contact-us">Get Free Quote</Link>
                        <a className="call-btn" href={`tel:${COMPANY.phone}`}><LocalPhoneIcon></LocalPhoneIcon> +91 {COMPANY.phone}</a>
                    </div>
                </div>
            </section>

            <section id="brands-section">
                <div className="heading-container">
                    <h2>Leading Businesses Trust <span className="primary-color">safexpress</span></h2>
                    <p>Providing secure storage solutions to India's top companies and organizations</p>
                </div>
                <div className="container">
                    <div className="brand">
                        <img src={abhibus_icon} alt="Abhibus" />
                    </div>

                    <div className="brand">
                        <img src={AIMMAF_icon} alt="AIMMAF" />
                    </div>

                    <div className="brand">
                        <img src={cartello_icon} alt="Cartello" />
                    </div>

                    <div className="brand">
                        <img src={cmo_axis_icon} alt="CMO Axis" />
                    </div>

                    <div className="brand">
                        <img src={edgar_icon} alt="Edgar" />
                    </div>

                    <div className="brand">
                        <img src={ezetap_icon} alt="Ezetap" />
                    </div>

                    <div className="brand">
                        <img src={greencube_icon} alt="Greencube" />
                    </div>

                    <div className="brand">
                        <img src={hubler_icon} alt="Hubler" />
                    </div>

                    <div className="brand">
                        <img src={intelligentia_it_systems_icon} alt="Intelligentia IT Systems" />
                    </div>

                    <div className="brand">
                        <img src={ixigo_icon} alt="Ixigo" />
                    </div>

                    <div className="brand">
                        <img src={qwikcliver_icon} alt="Qwikcliver" />
                    </div>

                    <div className="brand">
                        <img src={rapyder_icon} alt="Rapyder" />
                    </div>

                    <div className="brand">
                        <img src={rotzler_icon} alt="Rotzler" />
                    </div>

                    <div className="brand">
                        <img src={ToneTag_icon} alt="ToneTag" />
                    </div>

                    <div className="brand">
                        <img src={toyota_tsusho_icon} alt="Toyota Tsusho" />
                    </div>

                    <div className="brand">
                        <img src={HDFC_icon} alt="HDFC" />
                    </div>

                </div>
            </section>

            <section id="numbers-section">
                <div className="numbers-container">
                    <div>
                        <h4>65K+</h4>
                        <span>Verified Experts</span>
                    </div>
                    <div>
                        <h4>4.8L+</h4>
                        <span>Happy Users</span>
                    </div>
                    <div>
                        <h4>22+</h4>
                        <span>Years of Expertise</span>
                    </div>
                </div>
                <div className="contact-container">
                    <span>Trusted by lot of Indians for secure and reliable car storage solutions.</span>
                    <div className="links">
                        <Link className="quote-btn" to="/contact-us">Get Free Quote</Link>
                        <a className="call-btn" href={`tel:${COMPANY.phone}`}><LocalPhoneIcon></LocalPhoneIcon> +91 {COMPANY.phone}</a>
                    </div>
                </div>
            </section>


            <section id="slider-section">
                <div className="heading">Everything You Need In One Place</div>
                <div className="container">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        navigation={true}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                        }}
                        spaceBetween={0}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#546BFF" }}>💲</div>
                                <span>TRANSPARENT</span>
                                <h3>No Hidden Fees</h3>
                                <Link to="/contact-us">Only pay for what you use</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FFF154" }}>🔓</div>
                                <span>Flexible</span>
                                <h3>No Deposit Required</h3>
                                <Link to="/contact-us">Start storing immediately</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#F954FF" }}>🛡️</div>
                                <span>Protected</span>
                                <h3>Free Insurance</h3>
                                <Link to="/contact-us">Complete protection included</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FF546E" }}>🚚</div>
                                <span>Convenient</span>
                                <h3>Doorstep Pickup & Delivery</h3>
                                <Link to="/contact-us">We come to you</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#5DFF54" }}>📉</div>
                                <span>Affordable</span>
                                <h3>Long-Term Discounts</h3>
                                <Link to="/contact-us">Save with commitment</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FFB854" }}>👥</div>
                                <span>Trusted</span>
                                <h3>1 Lakh+ Happy Customers</h3>
                                <Link to="/contact-us">Join the community</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#54FF98" }}>🎥</div>
                                <span>Secure</span>
                                <h3>24/7 Security Monitoring</h3>
                                <Link to="/contact-us">Peace of mind guaranteed</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#5476FF" }}>🧹</div>
                                <span>Hygienic</span>
                                <h3>Pest-Free Warehouses</h3>
                                <Link to="/contact-us">Clean storage environment</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#9B54FF" }}>🔥</div>
                                <span>Safety</span>
                                <h3>Fire Safety Enabled</h3>
                                <Link to="/contact-us">Safety first</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FF54B5" }}>🌡️</div>
                                <span>Preserved</span>
                                <h3>Climate-Controlled Storage</h3>
                                <Link to="/contact-us">Protects sensitive items</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#40FF1F" }}>📦</div>
                                <span>Packed Right</span>
                                <h3>Custom Packing Services</h3>
                                <Link to="/contact-us">Handled with care</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FF881F" }}>🤖</div>
                                <span>Smart</span>
                                <h3>AI-Powered Tracking</h3>
                                <Link to="/contact-us">Know what's stored</Link>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#FF1F2A" }}>🏆</div>
                                <span>Top Rated</span>
                                <h3>India's No. 1 Storage</h3>
                                <Link to="/contact-us">#1 in secure storage</Link>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#1FC3FF" }}>🌆</div>
                                <span>Pan India</span>
                                <h3>11 Cities Covered</h3>
                                <Link to="/contact-us">Nationwide reach</Link>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#67BF3B" }}>🔓</div>
                                <span>Flexible Terms</span>
                                <h3>No Lock-In Contracts</h3>
                                <Link to="/contact-us">Cancel anytime</Link>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#3BABBF" }}>🤝</div>
                                <span>Best Value</span>
                                <h3>Price Match Guarantee</h3>
                                <Link to="/contact-us">Better deal? We'll match it</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#BF3BB8" }}>📜</div>
                                <span>Certified</span>
                                <h3>ISO Certified Storage</h3>
                                <Link to="/contact-us">Global standards</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#007C8A" }}>⭐</div>
                                <span>Rated 4.9</span>
                                <h3>Customer Favorite</h3>
                                <Link to="/contact-us">4.9 Rating</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card">
                                <div className="icon" style={{ background: "#3ED400" }}>⭐</div>
                                <span>Support</span>
                                <h3>Live Chat & Support</h3>
                                <Link to="/contact-us">We’re here for you</Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>


            <section className="price-img-container">
                <img src={priceImg} className="price-img" />
            </section>


            <section id="safe-secure-section">
                <div className="container">
                    <h1>Why Choose Our Car Storage Services?</h1>
                    <p>safexpress offers trusted car storage services all over India, ensuring your belongings remain safe, protected, and well-managed for both short-term and long-term needs.
                        Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Gurugram, Kolkata, Coimbatore, Jaipur 7 All Over India delivering secure and reliable car storage solutions wherever you are.</p>

                    <div className="content">
                        <div className="card">
                            <SecurityIcon className="icon"></SecurityIcon>
                            <span>Insurance Coverage</span>
                        </div>
                        <div className="card">
                            <FireExtinguisherIcon className="icon"></FireExtinguisherIcon>
                            <span>Fire Control</span>
                        </div>
                        <div className="card">
                            <PestControlIcon className="icon"></PestControlIcon>
                            <span>Pest Control</span>
                        </div>
                        <div className="card">
                            <VideocamIcon className="icon"></VideocamIcon>
                            <span>CCTV Monitoring</span>
                        </div>
                        <div className="card">
                            <LocalShippingIcon className="icon"></LocalShippingIcon>
                            <span>24/7 Security</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sample-images">
                <div className="container">
                    {imgArr.map((img) => {
                        return (<img src={img} />)
                    })}
                </div>
            </section>

            <FAQ />
        </>
    )
}

export default CarStorage;