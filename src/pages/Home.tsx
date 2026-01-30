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
        <p>Tailor-made value added services to suit varied supply chain and logistics Pan India requirements for enterprises as well as individuals.   </p>
        {/* <div className="btns">
          <button>Core Services</button>
          <button>Enterprise Services</button>
          <button>Individual Services</button>
          <button>Other Services</button>
        </div> */}
        <div className="details">
          <div className="images">
            <div className="card">
              <div className="img">
                <img src={truckImg} />
              </div>
              <div className="text">
                <h4>Express Distribution Surface</h4>
                <ul>
                  <li>Fastest, daily & direct connectivity across India with Fastest Average Transit Time in industry.</li>
                  <li>
                    Continously expanded network of gateways with an average coverage radius per gateway-less than 33 kms.
                  </li>
                </ul>
                <a href="#">Learn More</a>
              </div>
            </div>

            <div className="card">
              <div className="img">
                <img src={flightImg} />
              </div>
              <div className="text">
                <h4>Express Distribution Air</h4>
                <ul>
                  <li>Fastest, regular, door-step connectivity enabled by largest, multimodal network of surface gateways and exclusive air hubs with 76 airport connectivity.</li>
                  <li>
                    Strategic tie-up with all the major airlines with preferred slots for cargo to-and from 76 airport connectivity.
                  </li>
                </ul>
                <a href="#">Learn More</a>
              </div>
            </div>

            <div className="card">
              <div className="img">
                <img src={shipImg} />
              </div>
              <div className="text">
                <h4>Express Distribution in Ships</h4>
                <ul>
                  <li>Fastest, daily & direct connectivity across India with Fastest Average Transit Time in industry.</li>
                  <li>
                    Continously expanded network of gateways with an average coverage radius per gateway-less than 33 kms.
                  </li>
                </ul>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>

            {/* Left Image */}
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            {/* Right Content */}
            <div className="service-content">
              <h3>{service.title}</h3>

              {/* Tabs */}
              <div className="tabs">
                <span>Packing & Unpacking Assistance</span>
                <span>Loading & Unloading</span>
              </div>

              {/* Why choose */}
              <div className="why">
                <p className="why-title">Why Choose Us?</p>
                <div className="icons">
                  <div>
                    <i className="fa-solid fa-user-check"></i>
                    <span>Trained Professionals</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-truck-fast"></i>
                    <span>Comprehensive Relocation</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-shield-halved"></i>
                    <span>Superior Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="service-actions">
              <button className="call">📞 Call Now</button>
              <button className="details">View Details</button>
              <button className="quote">Get Quote</button>
              <button className="chat">💬 Chat Now</button>
            </div>

          </div>
        ))}
      </div>

      
      <section id="google-review-sec">
        <div className="container">
          <div className="text-box">
            <h1>Trusted by Thousands of <span className="primary-color">Happy Customers</span></h1>
            <p>Real experiences from customers who trusted Gati Shifting Packers for safe, timely, and stress-free relocation.</p>
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


      <HowWeMakeMoveEasy></HowWeMakeMoveEasy>
      <HappyClients></HappyClients>


      <FAQ />
    </>
  );
};

export default Home;
