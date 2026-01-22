import "../styles/home.scss";
import Hero from "../components/Hero.tsx";

const Home = () => {
  return (
    <>
      <Hero />
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
                <img src="https://www.safexpress.com/assets/images/home-surface.png" />
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
                <img src="https://www.safexpress.com/assets/images/home-surface.png" />
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
                <img src="https://www.safexpress.com/assets/images/home-surface.png" />
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
    </>
  );
};

export default Home;
