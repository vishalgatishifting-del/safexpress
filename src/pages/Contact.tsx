import { useState, type FormEvent  } from "react";
import "../styles/Contact.scss";
import { submitForm } from "../api/formAPI";
import "../styles/Common.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    From: "",
    To: "",
    Goods: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      // setLoading(true);
  
      try {
        await submitForm({ ...formData, landingPage: window.location.href });
        // successCondition(true);
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          From: "",
          To: "",
          Goods: "",
        });
      } catch (err) {
        alert("Error submitting form");
      } finally {
        // setLoading(false);
      }
    };

  return (
    <>
      {/* HERO */}
      <section className="contact-hero top-element">
        <div className="overlay">
          <h1>Get in Touch with Safexpress</h1>
          <p>
            Looking for safe & professional packing and moving services?
            Our team is here to help you anytime.
          </p>
          <p className="contact-info">
            📞 <strong>8756319252</strong> &nbsp; | &nbsp;
            ✉️ <span>safexpressshifting@gmail.com</span>
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="contact-page">
        <div className="contact-card">
          <h2>Request a Free Quote</h2>
          <p className="sub-text">
            Fill in your details and our team will call you shortly.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Your full name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="Phone"
                placeholder="Mobile number"
                value={formData.Phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Email address"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Pick Up Location</label>
              <input
                type="text"
                name="From"
                placeholder="From city / area"
                value={formData.From}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Delivery Location</label>
              <input
                type="text"
                name="To"
                placeholder="To city / area"
                value={formData.To}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Goods Details</label>
              <textarea
                name="Goods"
                placeholder="Household items, office goods, etc."
                value={formData.Goods}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Get Free Quote
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
