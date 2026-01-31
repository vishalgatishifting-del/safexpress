import "../styles/HowWeMakeMoveEasy.scss";
import step1png from "../assets/HowWeMakeMoveEasy/step1.png"
import step2png from "../assets/HowWeMakeMoveEasy/step2.png"
import step3png from "../assets/HowWeMakeMoveEasy/step3.png"
import step4png from "../assets/HowWeMakeMoveEasy/step4.png"

const steps = [
  {
    title: "Share Your Moving Details",
    text: "Provide us with your moving information — origin, destination, and moving date — and we’ll handle the rest.",
    image: step1png
  },
  {
    title: "Free Pre-Move Consultation",
    text: "Connect with our relocation experts for a quick assessment and personalized moving plan tailored to your needs.",
    image: step2png,
  },
  {
    title: "Get Customized Quotations",
    text: "Receive clear, competitive quotes designed to fit your budget — no hidden fees or surprise costs.",
    image: step3png,
  },
  {
    title: "Enjoy Hassle-Free Moving",
    text: "Relax while our professionals manage every detail — packing, transport, and delivery — for a smooth move.",
    image: step4png,
  },
];

const HowWeMakeMoveEasy = () => {
  return (
    <section className="move-easy">
      <h2 className="section-title">How We Make Your Move Easy</h2>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card"  data-step={index + 1} key={index}>
            <div className="image-box">
              <img src={step.image} alt={step.title} />
            </div>

            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeMakeMoveEasy;
