import "../styles/About.scss"
// import { Link } from "react-router-dom";
// import { Box } from "@mui/material";
// import Slider from "react-slick";
import about_company_photo from "../assets/AboutPage/about_company_photo.png"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import houseShiftingImg from "../assets/AboutPage/household.webp"
import storageImg from "../assets/AboutPage/storage_img.jpg"
import internationalImg from "../assets/AboutPage/international.png"
import carImg from "../assets/AboutPage/Car.webp"
import bikeImg from "../assets/AboutPage/Bike.webp"
import petImg from "../assets/AboutPage/pet_img.jpg"
import officeImg from "../assets/AboutPage/office.webp"
import commercialImg from "../assets/AboutPage/commercial.webp"
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';


// Partners Logo
// import dtdc from "../assets/dtdc.png";
// import dhl from "../assets/dhl.png";
// import bluedart from "../assets/blue_dart.png";
// import xpressbees from "../assets/xpressbee.png";
// import delhivery from "../assets/delhivery.png";
// import aramex from "../assets/partners/aramex-logo-english.webp";
// import ecom from "../assets/partners/ecom-express.webp";
// import icWhite from "../assets/partners/ic-white-logo.abea573f.webp";
// import fedex from "../assets/partners/logo-fedex.webp";
// import ups from "../assets/partners/ups-logo.webp";
// import sb from "../assets/partners/logo-sb.webp";
// import professional from "../assets/partners/Professional-ouriers.webp";
// import rmg from "../assets/partners/rmg_logo.webp";
// import shadowfax from "../assets/partners/Shadowfax.webp";
// import trackon from "../assets/partners/trackon_logo.webp";




// Images for "Nationwide Presence" Section
// import andhra_pradesh from "../assets/andhra-pradesh.jpeg"
// import arunachal_pradesh from "../assets/arunachal-pradesh.jpeg"
// import assam from "../assets/assam.jpeg"
// import bihar from "../assets/bihar.jpeg"
// import chhattisgarh from "../assets/chhattisgarh.jpeg"
// import goa from "../assets/goa.jpeg"
// import gujarat from "../assets/gujarat.jpeg"
// import haryana from "../assets/haryana.jpeg"
// import himachal_pradesh from "../assets/himachal-pradesh.jpeg"
// import jharkhand from "../assets/jharkhand.jpeg"
// import karnataka from "../assets/karnataka.jpeg"
// import kerala from "../assets/kerala.jpeg"
// import madhya_pradesh from "../assets/madhya-pradesh.jpeg"
// import maharashtra from "../assets/maharashtra.jpeg"
// import manipur from "../assets/manipur.jpeg"
// import meghalaya from "../assets/meghalaya.jpeg"
// import mizoram from "../assets/mizoram.jpeg"
// import nagaland from "../assets/nagaland.jpeg"
// import odisha from "../assets/odisha.jpeg"
// import punjab from "../assets/punjab.jpeg"
// import rajasthan from "../assets/rajasthan.jpeg"
// import sikkim from "../assets/sikkim.jpeg"
// import tamil_nadu from "../assets/tamil-nadu.jpeg"
// import telangana from "../assets/telangana.jpeg"
// import tripura from "../assets/tripura.jpeg"
// import uttar_pradesh from "../assets/uttar-pradesh.jpeg"
// import uttarakhand from "../assets/uttarakhand.jpeg"
// import west_bengal from "../assets/west-bengal.jpeg"
// import andaman_nicobar from "../assets/andaman-nicobar.jpeg"
// import dadra_nagar_haveli from "../assets/dadra-nagar-haveli.jpeg"
// import daman_diu from "../assets/daman-diu.jpeg"
// import jammu_kashmir from "../assets/jammu-kashmir.jpeg"
// import ladakh from "../assets/ladakh.jpeg"
// import puducherry from "../assets/puducherry.jpeg"


// Images for International Presence

// import bangladesh from "../assets/internationalPresence/bangladesh.webp";
// import canada from "../assets/internationalPresence/canada.webp";
// import india from "../assets/internationalPresence/india.webp";
// import malaysia from "../assets/internationalPresence/malaysia.webp";
// import nepal from "../assets/internationalPresence/nepal.webp";
// import portBlair from "../assets/internationalPresence/port-blair.webp";
// import russia from "../assets/internationalPresence/russia.webp";
// import singapore from "../assets/internationalPresence/singapore.webp";
// import uae from "../assets/internationalPresence/uae.webp";
// import uk from "../assets/internationalPresence/uk.webp";
// import usa from "../assets/internationalPresence/usa.webp";



// icons for "Why Gati Shiftin and Packers" Section
// import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
// import Groups3Icon from '@mui/icons-material/Groups3';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// Images for Brand That Trusted Us

// import ContactForm from "../components/ContactForm";

// import { Helmet } from "react-helmet-async";


// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper
// } from "@mui/material";
// import BrandList from "../components/BrandsList";
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <>
            <Helmet>

                <title>About Safe Shifting Packers | Trusted Packers and Movers in India</title>
                <meta name="description" content="Learn about Safe Shifting Packers – a reliable packers and movers company in India offering safe, affordable, and professional home, office, and vehicle relocation services." />
                <meta name="keywords" content="About Safe Shifting Packers, Packers and Movers Company, Trusted Packers and Movers, Relocation Services India, Home Shifting Services, Office Relocation, Vehicle Transportation" />
                <meta name="author" content="Safe Shifting Packers" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Safe Shifting Packers | Professional Relocation Services" />
                <meta property="og:description" content="Know more about Safe Shifting Packers – your trusted partner for safe and hassle-free moving solutions across India." />
                <meta property="og:url" content="https://safeshiftingpackers.com/about" />
                <meta property="og:site_name" content="Safe Shifting Packers" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Safe Shifting Packers | Trusted Moving Company" />
                <meta name="twitter:description" content="Safe Shifting Packers provides reliable, secure, and affordable packing and moving services across India." />

                <link rel="canonical" href="https://safeshiftingpackers.com/about" />
            </Helmet>
            <section id="company-info">
                <div className="container">
                    <div className="img-bx">
                        <img src={about_company_photo} alt="About Gati Shifting Packers – Trusted packers and movers" title="about gati shifting packers" loading="lazy" />
                    </div>
                    <div className="details">
                        <h1>About Us</h1>
                        <p>
                            At Safexpress, we redefine the moving experience by offering end-to-end packers and movers solutions across India. Whether you're relocating locally or to another state, we make every transition seamless, stress-free, and efficient.

                            Our expert team handles everything—from careful packing with premium materials to timely transportation and safe delivery. With clear, upfront pricing and personalized moving plans, we’ve become the go-to choice for individuals, families, and professionals.
                        </p>

                        <ul>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> 100% Safety Assurance</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> Skilled & Trained Manpower</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> 24/7 Real-Time Support</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> On-Time Pickup & Delivery</li>
                            <li><CheckCircleIcon className="icon"></CheckCircleIcon> Premium Packing Supplies</li>
                        </ul>
                        <button className="contact-btn" >Enquiry Now</button>
                    </div>
                </div>
            </section>
            <section className="about-overview">
                <div className="container">

                    <div className="left-content">
                        <h2>An Overview of Market Leader in Supply Chain & Logistics</h2>

                        <p>
                            Safexpress started its journey in 1997 with a mission of delivering
                            logistics excellence to its customers and ensuring their future success
                            through its impeccable network, direct routes, 24 x 7 operations
                            continuity and high-quality services.
                        </p>

                        <p>
                            Over time, the firm has firmly entrenched itself as the
                            <strong>‘Knowledge Leader’</strong> and
                            <strong>‘Market Leader’</strong> of supply chain & logistics industry in
                            India.
                        </p>

                        <h3>Who we are?</h3>

                        <p>
                            Safexpress is India’s largest logistics and supply chain services company,
                            offering a complete spectrum of logistics services including Express
                            Distribution, 3PL & Consulting to more than 5000 customers in B2B domain
                            and also serves C2C customers through specially crafted, value-added
                            express distribution services.
                        </p>

                        <p>
                            With its expertise across industries ranging from Healthcare, Automotive,
                            Hi-Tech, FMCG, Consumer Electronics to Engineering, Books & Periodicals
                            and Alliance Partner Management, Safexpress meets diverse customer needs
                            efficiently.
                        </p>
                    </div>

                    <div className="right-content">
                        <div className="info-card vision">
                            <h4>Vision</h4>
                            <p>
                                To become the most preferred partner to provide a single window
                                solution for entire supply chain and logistics needs of our esteemed
                                customers Pan India and thereby contribute to their as well as
                                country’s growth.
                            </p>
                        </div>

                        <div className="info-card mission">
                            <h4>Mission</h4>
                            <p>
                                We shall internalize a customer-centric & people-centric work culture,
                                which demonstrates a proactive, result-oriented, zero conflict &
                                problem-solving attitude towards surpassing company objectives through
                                perfect alignment with company policies & guidelines.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section id="our-services">
                <h1>Our Services</h1>
                <div className="container">
                    <div className="card">
                        <div className="img-bx">
                            <img src={houseShiftingImg} alt="Professional house shifting services by Gati Shifting Packers in India" title="HouseShiftingservices" loading="lazy" />
                        </div>
                        <h4>Household</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={commercialImg} alt="Safe and reliable commercial shifting by Gati Shifting Packers" title="commercialshifting" loading="lazy" />
                        </div>
                        <h4>Luggage</h4>
                    </div>

                    <div className="card">
                        <div className="img-bx">
                            <img src={bikeImg} alt="Gati Shifting Packers providing safe bike and motorcycle transportation services" title="biketransportation" loading="lazy" />
                        </div>
                        <h4>Bike</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={carImg} alt="Gati Shifting Packers team handling secure vehicle transport" title="Carservice" loading="lazy" />
                        </div>
                        <h4>Car</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={petImg} alt="Professional pet relocation services by Gati Shifting Packers" title="petTransportation" loading="lazy" />
                        </div>
                        <h4>Pet</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={internationalImg} alt="Professional international movers and packers – Gati Shifting Packers" title="internationalservice" loading="lazy" />
                        </div>
                        <h4>International</h4>
                    </div>
                    <div className="card">
                        <div className="img-bx">
                            <img src={officeImg} alt="Secure and efficient office shifting by Gati Shifting Packers" title="officeshifting" loading="lazy" />
                        </div>
                        <h4>Office</h4>
                    </div>

                    <div className="card">
                        <div className="img-bx">
                            <img src={storageImg} alt="Safe and reliable storage services by Gati Shifting Packers" title="Storageservice" loading="lazy" />
                        </div>
                        <h4>Storage</h4>
                    </div>
                </div>
            </section>


            <section className="six-grid-section">
                <div className="six-grid">

                    <div className="grid-item image">
                        <img src="https://www.safexpress.com/assets/images/Safex-found-fg.jpg" alt="Foundation" />
                    </div>

                    <div className="grid-item content">
                        <h3>Safexpress Foundation</h3>
                        <p>
                            As an ethical partner to our stakeholders and a responsible corporate,
                            Safexpress aims to fulfil its social and environmental commitments
                            through its foundation.
                        </p>
                        <a href="#">More</a>
                    </div>

                    <div className="grid-item image">
                        <img src="https://www.safexpress.com/assets/images/value-strategy-fg.jpg" alt="Teamwork" />
                    </div>

                    <div className="grid-item content">
                        <h3>Vision and Strategy</h3>
                        <p>
                            Safexpress provides plethora of customised and express logistics
                            solutions to cater to the supply chain and logistics requirements
                            of its customers.
                        </p>
                        <a href="#">More</a>
                    </div>

                    <div className="grid-item image">
                        <img src="https://www.safexpress.com/assets/images/work-culture-fg.jpeg" alt="Values" />
                    </div>

                    <div className="grid-item content">
                        <h3>Work Culture</h3>
                        <p>
                            Safexpress offers unlimited growth & learning opportunities to anyone
                            who wishes to associate and work with India’s most preferred logistics
                            and SCM brand.
                        </p>
                        <a href="#">More</a>
                    </div>

                </div>
            </section>


        </>
    )
}

export default About;