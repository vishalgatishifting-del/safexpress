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
              <img src="/assets/vision.jpg" alt="Vision" />
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
              <img src="/assets/technology-map.jpg" alt="Technology" />
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
              <img src="/assets/network-map.jpg" alt="Network" />
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
              <img src="/assets/infrastructure.jpg" alt="Infrastructure" />
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
