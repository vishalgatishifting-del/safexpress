import "../styles/home.scss"; 1
import Hero from "../components/Hero.tsx";
import FAQ from "../components/FAQ.tsx";
import ZohoForm from "../components/ZohoForm.tsx";
import { useState } from "react";

import visionandforward from "../assets/Home/vissionandforward.png"
import technology from "../assets/Home/technology.png"
import network from "../assets/Home/network.png"
import infrastructure from "../assets/Home/infrastructure.png"

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

      <ProductImageSlider images={sliderImages}></ProductImageSlider>
      <section id="our-services">
        <h1>Our Services</h1>
        <p>Tailor-made value added services to suit varied supply chain and logistics Pan India requirements for enterprises as well as individuals.   </p>
        <div className="btns">
          <button>Core Services</button>
          <button>Enterprise Services</button>
          <button>Individual Services</button>
          <button>Other Services</button>
        </div>
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

      <section className="question-cta">
        <div className="cta-box">

          {/* Left Icon */}
          <div className="cta-icon">
            <img src="https://vedantapackersandmovers.com/img/delivery-truck.gif" alt="Support Truck" />
          </div>

          {/* Center Content */}
          <div className="cta-content">
            <h3>
              Have A <span>Q</span>uestion?
            </h3>
            <p>
              Message us on Whatsapp or Call our Experts and plan your shifting
              NOW!
            </p>
          </div>

          {/* Right Contact */}
          <div className="cta-contact">
            <div className="icons">
              <a href="tel:+8756319252" className="call">
                <img src="https://vedantapackersandmovers.com/img/telephone.png" />
              </a>
              <a
                href="https://wa.me/8756319252"
                target="_blank"
                rel="noreferrer"
                className="whatsapp"
              >
                <img src="https://vedantapackersandmovers.com/img/whatsapp.png" />
              </a>
            </div>
            <span className="number">+91 8756319252</span>
          </div>

        </div>
      </section>



      <section className="how">
        <div className="how__container">
          {/* HEADER */}
          <h2 className="how__title">HOW DO WE DO IT?</h2>
          <p className="how__desc">
            With its expertise & experience garnered in the last 28 years,
            Safexpress has created a sustainable business model to cater the
            businesses’ & individuals’ supply chain & logistics management needs,
            through which it delivers value to all its stakeholders as a win-win
            proposition, that further guarantees their future growth &
            sustainability.
          </p>

          {/* ROW 1 */}
          <div className="how__row">
            <div className="how__image">
              <img src={visionandforward} alt="Vision" />
              <div className="how__rating">★★★★★</div>
            </div>

            <div className="how__content">
              <h3>Vision & Way Forward</h3>
              <p>
                Safexpress's vision is to become ‘Most Preferred Supply Chain &
                Logistics Company’ by providing a supply chain & logistic support
                that can serve as a tool to enhance customers future growth.
              </p>
            </div>

            <div className="how__image">
              <img src={technology} alt="Technology" />
            </div>

            <div className="how__content">
              <h3>Technology</h3>
              <p>
                Safexpress leverages cutting-edge technological solutions to
                ensure a uniform, seamless, and value-added experience for
                customers nationwide.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="how__row">
            <div className="how__content">
              <h3>Network</h3>
              <p>
                Safexpress operates it network 24*7*365 days in a year that
                compromises of over 850 gateways, well connected with each other
                through its direct and regular routes to ensure fastest
                deliveries within the shortest transit time.
              </p>
            </div>

            <div className="how__image">
              <img src={network} alt="Network" />
            </div>

            <div className="how__content">
              <h3>Infrastructure</h3>
              <p>
                Ultra Modern, cross-dock infrastructure strategically positioned
                in close proximity to the major National Highways of India & with
                an overall spread of over 21.2 million square feet area to
                smoothly meet the logistics requirements of its customers.
              </p>
            </div>

            <div className="how__image">
              <img src={infrastructure} alt="Infrastructure" />
            </div>
          </div>
        </div>
      </section>
      <section id="why-prefer-section">
        <h1 className="heading">WHY PREFER SAFEXPRESS?</h1>
        <p> Safexpress has been at the forefront of being a customer-centric organization by providing 100% ethical, compliant, efficient and reliable services as a one-stop shop for all supply chain & logistics requirements of its customers, ensuring fastest and safest connectivity across India. </p>

        <div className="cards">


          <div className="card">
            <img src="https://www.safexpress.com/assets/images/customer-centric.jpg" />
            <h3>Customer-Centricity</h3>
            <ul>
              <li>Customer-oriented processes & customized solutions offered as per customer requirements</li>
              <li>No questions asked & zero conflict philosophy</li>
              <li>Custodians first, Carriers later</li>
            </ul>
          </div>
          <div className="card">
            <img src="https://www.safexpress.com/assets/images/operations-excellence.jpg" />
            <h3>Operational Excellence</h3>
            <ul>
              <li>India’s leading & largest logistics & supply chain organization - acknowledged by Limca Book of Records </li>
              <li>Direct reach to every square inch of real Bharat – Tier II, III cities & Towns</li>
              <li>24 by 7, 365 days live network operational on all holidays, Sundays</li>
            </ul>
          </div>
          <div className="card">
            <img src="https://www.safexpress.com/assets/images/reliable.jpg" />
            <h3>Reliable & Ethical</h3>
            <ul>
              <li>ISO 27001 certified organization</li>
              <li>100% legally compliant & ethical company</li>
              <li>100% adherence to the State & Central government norms along with GST & E-Waybill compliance</li>
            </ul>
          </div>

          <div className="card">
            <img src="https://www.safexpress.com/assets/images/sustainable.jpg" />
            <h3>Sustainable Practices</h3>
            <ul>
              <li>Regular ‘Go Green’ initiatives & drives to minimize the impact of its business operations</li>
              <li>‘Special Green Zones’ & Rainwater harvesting facilities at all logistics parks</li>
              <li>100% use of Euro VI standard fleet</li>
            </ul>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default Home;
