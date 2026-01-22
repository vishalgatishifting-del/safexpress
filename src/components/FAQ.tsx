import { useState } from "react";
import "../styles/FAQ.scss";

const faqs = [
  {
    q: "Are my belongings safe during the move?",
    a: "Yes, at Safeshiftingpackers, the safety of your belongings is our top priority. We use high-quality packing materials, trained professionals, and secure transportation methods to ensure your items are protected throughout the move.",
  },
  {
    q: "Do you offer office relocation services?",
    a: "Absolutely. Safeshiftingpackers provides complete office relocation services including packing, dismantling, transportation, and reinstallation, ensuring minimal disruption to your business operations.",
  },
  {
    q: "How do I book your moving services?",
    a: "Booking with Safeshiftingpackers is simple. You can call us, message us on WhatsApp, or fill out the enquiry form on our website. Our team will contact you with a customized quotation.",
  },
  {
    q: "Can I change my moving date after booking?",
    a: "Yes, you can reschedule your moving date. We request you to inform Safeshiftingpackers at least 24–48 hours in advance so we can make the necessary arrangements.",
  },
  {
    q: "Do you provide packing materials?",
    a: "Yes, we provide all necessary packing materials such as cartons, bubble wrap, stretch film, and protective covers to ensure safe packing of your household or office items.",
  },
  {
    q: "Do you offer insurance for my belongings?",
    a: "Yes, Safeshiftingpackers offers transit insurance options to give you complete peace of mind. Our team will guide you through the insurance process during booking.",
  },
  {
    q: "How long does a typical move take?",
    a: "The duration of a move depends on the size of the move, distance, and type of service. Local moves usually take one day, while long-distance moves may take a few days.",
  },
  {
    q: "Do you offer interstate moving services?",
    a: "Yes, Safeshiftingpackers specializes in both local and interstate moving services across India with reliable delivery timelines.",
  },
  {
    q: "Are your movers trained professionals?",
    a: "Yes, all our staff members are professionally trained and experienced in handling packing, lifting, loading, and unloading with utmost care.",
  },
  {
    q: "What if I need storage solutions?",
    a: "Safeshiftingpackers provides safe and secure warehouse storage solutions for short-term and long-term needs, with 24/7 security and proper inventory management.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>
                {index + 1}. {item.q}
              </span>
              <span className="arrow">⌄</span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
