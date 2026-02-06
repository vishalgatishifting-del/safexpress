import "../styles/home.scss"; 1
import Hero from "../components/Hero.tsx";
import FAQ from "../components/FAQ.tsx";
import ZohoForm from "../components/ZohoForm.tsx";
import { useState } from "react";

import justDialCertificateImg from "../assets/homePagePng/justDialCertificate.png"
import MSMECertificateImg from "../assets/homePagePng/MSMECertificate.png"
import incorporationCertificate from "../assets/homePagePng/incorporationCertificate.png"
// import GSTIncorporation from "../assets/homePagePng/GSTCertificate.png"
// import ISOcertificate from "../assets/homePagePng/isoCertificate.png"
// import gatiCertificate from "../assets/homePagePng/gatiCertificate.png"

// import visionandforward from "../assets/Home/vissionandforward.png"
// import technology from "../assets/Home/technology.png"
// import network from "../assets/Home/network.png"
// import infrastructure from "../assets/Home/infrastructure.png"

import truckImg from "../assets/Home/truck.webp"
import flightImg from "../assets/Home/flight.png"
import shipImg from "../assets/Home/ship.png"
import OfficeLocation from "../components/OfficeLocation.tsx";


import ProductImageSlider from "../components/PackingImageSlider"
import feature1Img from "../assets/homePagePng/feature1.jpg"
import feature2Img from "../assets/homePagePng/feature2.jpg"
import feature3Img from "../assets/homePagePng/feature3.jpg"
import feature4Img from "../assets/homePagePng/feature4.jpg"
import feature5Img from "../assets/homePagePng/feature5.jpeg"
import feature6Img from "../assets/homePagePng/feature6.jpeg"
import feature7Img from "../assets/homePagePng/feature7.jpeg"
import feature8Img from "../assets/homePagePng/feature8.jpeg"
import feature9Img from "../assets/homePagePng/feature9.jpg"
import feature10Img from "../assets/homePagePng/feature10.jpg"
import feature11Img from "../assets/homePagePng/feature11.jpg"
import feature12Img from "../assets/homePagePng/feature12.jpg"
import feature13Img from "../assets/homePagePng/feature13.jpg"
import feature14Img from "../assets/homePagePng/feature14.jpg"
import feature15Img from "../assets/homePagePng/feature15.jpg"
import feature16Img from "../assets/homePagePng/feature16.jpg"
import feature17Img from "../assets/homePagePng/feature17.jpg"
import feature18Img from "../assets/homePagePng/feature18.jpg"
import feature19Img from "../assets/homePagePng/feature19.jpg"
import feature20Img from "../assets/homePagePng/feature20.jpg"
import feature21Img from "../assets/homePagePng/feature21.jpg"
import feature22Img from "../assets/homePagePng/feature22.jpg"
import feature23Img from "../assets/homePagePng/feature23.jpg"
import feature24Img from "../assets/homePagePng/feature24.jpg"
import feature25Img from "../assets/homePagePng/feature25.jpg"
import feature26Img from "../assets/homePagePng/feature26.jpeg"
import feature27Img from "../assets/homePagePng/feature27.png"



import isoBadge from "../assets/Home/isoicon.png"
import googleRatingBadge from "../assets/Home/5star.png"
import trustedBadge from "../assets/Home/trusted.png"
import HowWeMakeMoveEasy from "../components/HowWeMakeMoveEasy.tsx";
import HappyClients from "../components/HappyClients.tsx";




import googleRatingImg from "../assets/Home/ghs-google-rating.png"
import { Link } from "react-router-dom";
import TrustUsSection from "../components/TrustUsSection.tsx";


import truck3Img from "../assets/Home/truck3.webp"
import carLoadingImg from "../assets/Home/carLoading.webp"
import ship2Img from "../assets/Home/ship.webp"
import ship2 from "../assets/Home/ship2.webp"
import airplaneImg from "../assets/Home/airplane.webp"
import truck2 from "../assets/Home/truck2.webp"



import {COMPANY} from "../config/Company"

const Home = () => {


  const sliderImages = [
    feature1Img,
    feature2Img,
    feature3Img,
    feature4Img,
    feature5Img,
    feature6Img,
    feature7Img,
    feature8Img,
    feature9Img,
    feature10Img,
    feature11Img,
    feature12Img,
    feature13Img,
    feature14Img,
    feature15Img,
    feature16Img,
    feature17Img,
    feature18Img,
    feature19Img,
    feature20Img,
    feature21Img,
    feature22Img,
    feature23Img,
    feature24Img,
    feature25Img,
    feature26Img,
    feature27Img,
  ]





  const services = [
    {
      title: "Corporate Moving",
      image: "https://vedantapackersandmovers.com/img/y1.jpg",
    },
    {
      title: "Industrial Moving",
      image: "https://vedantapackersandmovers.com/img/y2.jpg",
    },
    {
      title: "Residential Moving",
      image: "https://vedantapackersandmovers.com/img/y3.jpg",
    },
    {
      title: "Car Transfer / Transport / Moving",
      image: "https://vedantapackersandmovers.com/img/y4.jpg",
    },
    {
      title: "International Moving",
      image: "https://vedantapackersandmovers.com/img/y5.jpg",
    },
    {
      title: "Storage And Warehousing",
      image: "https://vedantapackersandmovers.com/img/y6.webp",
    },
  ];

  const stages = [
    {
      step: "1",
      title: "Assign the Service",
      desc: "Once you are content with our quotation, you proceed to reserve our services.",
      image: "https://vedantapackersandmovers.com/img/assign.gif",
    },
    {
      step: "2",
      title: "Packing & Loading",
      desc: "We will carefully pack all your belongings and securely load them into our vehicle.",
      image: "https://vedantapackersandmovers.com/img/preloder.gif",
    },
    {
      step: "3",
      title: "Transportation",
      desc: "Your goods will be delivered to your destination by our reliable vehicle.",
      image: "https://vedantapackersandmovers.com/img/delivery-truck.gif",
    },
    {
      step: "4",
      title: "Unloading",
      desc: "We will handle the unloading of the goods and ensure a secure relocation.",
      image: "https://vedantapackersandmovers.com/img/unloading.gif",
    },
  ];


  const [, successCondition] = useState<boolean>(false)
  return (
    <>
      <Hero />

      <div className="form-container">
        <div className="container">
          <div className="text">
            <h1>Safe, Reliable & Budget-Friendly Moving Services</h1>
            <span>Why Safe Shifting Packers and Movers is the Right Choice?</span>
            <ul>
              <li>Affordable pricing with uncompromised service quality</li>
              <li>Skilled professionals for packing, loading, and transportation</li>
              <li>On-time and hassle-free relocation experience</li>
              <li>Premium-quality packing materials to ensure maximum safety</li>
              <li>Complete solutions for home, office & corporate shifting</li>
              <li>Secure and convenient storage facilities available</li>
            </ul>
            {/* <img src={formSVG} /> */}
          </div>
          <ZohoForm successCondition={successCondition}></ZohoForm>
        </div>
      </div>

      <section id="certificate-section">
        {/* <h1 className="trustLine">India’s Trusted Packers & Movers – 24x7 Support</h1> */}
        <div className="container">
          <div className="card">
            <a href={justDialCertificateImg} className="hidden" target="_blank">
              Click To View
            </a>
            <img src={justDialCertificateImg} />
            <h3>JustDial Certificate</h3>
          </div>
          <div className="card">
            <a href={MSMECertificateImg} className="hidden" target="_blank">
              Click To View
            </a>
            <img src={MSMECertificateImg} />
            <h3>MSME Ceritificate</h3>
          </div>
          <div className="card">
            <a href={incorporationCertificate} className="hidden" target="_blank">
              Click To View
            </a>
            <img src={incorporationCertificate} />
            <h3>Incorporation Certificate</h3>
          </div>
        </div>
      </section>

      <ProductImageSlider images={sliderImages}></ProductImageSlider>


      <section id="badge-section">
        <div className="container">
          <div className="card">
            <img src={isoBadge} />
            <h3>ISO 9001:2015</h3>
            <p>Certificate No: 2713SAFV2021, for Courier Services, Packers & Movers, Transportation and Storage of Goods.</p>
          </div>


          <div className="card">
            <img src={googleRatingBadge} />
            <h3>5 Star Ratings</h3>
            <p>We have been rated 5 stars by our valuable clients in multiple platforms like Google, Facebook etc.</p>
          </div>
          <div className="card">
            <img src={trustedBadge} />
            <h3>15+ Years of Trust</h3>
            <p>Since 2007, we are at your service expanding all over the country to be one of the best Packers and Movers company.</p>
          </div>
        </div>
      </section>
     <section id="our-services">
  <h1>Our Services</h1>
  <p>
    Tailor-made value added services to suit varied supply chain and logistics
    Pan India requirements for enterprises as well as individuals.
  </p>

  <div className="details">
    <div className="images">
      {[ 
        { img: truckImg, title: "Express Distribution Surface" },
        { img: flightImg, title: "Express Distribution Air" },
        { img: shipImg, title: "Express Distribution in Ships" }
      ].map((item, i) => (
        <div className="card" key={i}>
          <div className="img">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="text">
            <h4>{item.title}</h4>
            <ul>
              <li>
                Fastest connectivity across India with industry-leading transit
                time.
              </li>
              <li>
                Strong network coverage with strategically placed gateways.
              </li>
            </ul>
            <Link to="/contact-us">Get Quote</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <div className="services-grid">
  {services.map((service, index) => (
    <div className="service-card" key={index}>

      {/* Image */}
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>

      {/* Content */}
      <div className="service-content">
        <h3>{service.title}</h3>

        <div className="tabs">
          <span>Packing & Unpacking</span>
          <span>Loading & Unloading</span>
          <span>Door to Door Service</span>
        </div>

        <div className="why">
          <p className="why-title">Why Choose Us</p>
          <div className="icons">
            <div>
              <i className="fa-solid fa-user-check"></i>
              <span>Trained Staff</span>
            </div>
            <div>
              <i className="fa-solid fa-truck-fast"></i>
              <span>Fast Delivery</span>
            </div>
            <div>
              <i className="fa-solid fa-shield-halved"></i>
              <span>Safe Handling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="service-actions">
        <button className="primary"><a href={`tel:${COMPANY.phone}`}>📞 Call Now</a></button>
        <button className="primary whatsapp"><a href={COMPANY.whatsapp}>💬 WhatsApp</a></button>
        <button className="secondary"><Link to="/contact-us">Get Quote</Link></button>
        <button className="secondary"><Link to="/service">View Details</Link></button>
      </div>

    </div>
  ))}
</div>



      <section id="google-review-sec">
        <div className="container">
          <div className="text-box">
            <h1>Trusted by Thousands of <span className="primary-color">Happy Customers</span></h1>
            <p>Real experiences from customers who trusted Safexpress for safe, timely, and stress-free relocation.</p>
          </div>
          <div className="img-rating-box">
            <Link className="detail-link" to="/review">
              <img src={googleRatingImg} alt="googt rating png" />
              <span>4.9 ★★★★★</span>
              <span>1000+ Reviews</span>
              <span>Based on genuine customer reviews</span>
            </Link>
            <Link to="/review" className="review-btn">Leave a Review</Link>
          </div>
        </div>
      </section>

      <section className="shifting-stages">
        <h2>Our Shifting Stages</h2>

        <div className="stages-grid">
          {stages.map((item, index) => (
            <div className="stage-card" key={index}>

              <span className="step">{item.step}</span>

              <div className="icon">
                <img src={item.image} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </div>
          ))}
        </div>
      </section>


      <OfficeLocation></OfficeLocation>

      <TrustUsSection></TrustUsSection>


      <HowWeMakeMoveEasy></HowWeMakeMoveEasy>
      <HappyClients></HappyClients>

      <section id="about-company-cards">
        <div className="container">
          <div className="card">
            <img src={truck3Img} alt="truck png" />
            <h2>PACKING AND MOVING</h2>
            <p>We offer a range of packing and moving services from packing your entire household to packing selected items only or fragile item and any other furniture.</p>
          </div>
          <div className="card">
            <img src={carLoadingImg} alt="car png" />
            <h2>CAR TRANSPORT SERVICES</h2>
            <p>Movers Aryavarta Association, are one of India's finest car carrier service providers. Our car transport services have been satisfactorily used by clients from corporates.</p>
          </div>
          <div className="card">
            <img src={ship2Img} alt="ship png" />
            <h2>CORP. GOODS RELOCATION</h2>
            <p>Reckoned across the country for our efficient and reliable cargo moving and packing services, we undertake corporate Goods Relocation Service as per the requirements.</p>
          </div>
          <div className="card">
            <img src={ship2} alt="ship png" />
            <h2>FREIGHT FORWARDING</h2>
            <p>We offer our customers the best Freight Forwarding services, which are provided by means of air as well as sea.With the help of an efficient team, we have emerged...</p>
          </div>
          <div className="card">
            <img src={airplaneImg} alt="airplane png" />
            <h2>INTERNATIONAL LOGISTICS</h2>
            <p>We offer our customers the best Freight Forwarding services, which are provided by means of air as well as sea.With the help of an efficient team, we have emerged...
              (neeche thoda cut ho gaya hai image me)</p>
          </div>
          <div className="card">
            <img src={truck2} alt="truck png" />
            <h2>LOADING & UNLOADING</h2>
            <p>A crucial part of every relocation process, the loading and unloading is executed by highly skilled teams. The goods are loaded and unloaded with the use of pulleys,lifters etc...</p>
          </div>
        </div>
      </section>


      <FAQ />
    </>
  );
};

export default Home;
