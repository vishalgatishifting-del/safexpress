import { useState } from "react";
import QuickMenu from "./QuickMenu";
import ZohoForm from "./ZohoForm";
import "../styles/Hero.scss"

const Hero = () => {
  const [, successCondition] = useState<boolean>(false)
  return (
    <section className="hero">
      <QuickMenu />

      <div className="hero-content">
        <h1>
          Experience the fastest and most reliable delivery anytime, anywhere
          in India
        </h1>
        <p>365 days operational, fastest & safest logistics network across India.</p>

      <ZohoForm successCondition={successCondition}></ZohoForm>
      </div>
    </section>
  );
};

export default Hero;
