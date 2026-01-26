import QuickMenu from "./QuickMenu";
import "../styles/Hero.scss"

const Hero = () => {
  return (
    <section className="hero">
      <QuickMenu />

      <div className="hero-content">
        <h1>
          Experience the fastest and most reliable delivery anytime, anywhere
          in India
        </h1>
        <p>365 days operational, fastest & safest logistics network across India.</p>

      </div>
    </section>
  );
};

export default Hero;
