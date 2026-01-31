import QuickMenu from "./QuickMenu";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <QuickMenu />

      <div className="hero-content">
        <h1>
          Fast, Reliable & Secure <br />
          Logistics Across India
        </h1>

        <p>
          365 days operational with India’s fastest and safest delivery network.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Get Quote</button>
          <button className="secondary-btn">Track Order</button>
        </div>
{/* 
        <div className="track-box">
          <h3>Track Your Shipment</h3>
          <div className="track-form">
            <input type="text" placeholder="Enter Tracking ID" />
            <button>Track</button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
