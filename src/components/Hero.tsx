import QuickMenu from "./QuickMenu";

const Hero = () => {
  return (
    <section className="hero">
      <QuickMenu />

      <div className="hero-content">
        <h1>
          Experience the fastest and most reliable delivery anytime, anywhere
          in India
        </h1>

        <p>
          365 days operational, fastest & safest logistics network across India.
        </p>

        <button className="primary-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
