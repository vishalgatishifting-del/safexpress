import React, { useState } from "react";
import "../styles/Contact.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Enquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <>
     <section className="contact-hero">
      <div className="overlay">
        <h1>Contact Us</h1>

        <p>
          Need more information or help? We would be more than happy to assist
          you anytime. Our dedicated teams are constantly working to answer your
          queries and resolve any issues. Call our centralised customer care now
          <strong> 8756319252 </strong>
          or mail us at{" "}
          <span className="highlight">safexpressshifting@gmail.com</span>.
        </p>
      </div>
    </section>
    <div className="contact-page">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          
          <label>*Name</label>
          <input
            type="text"
            name="name"
            placeholder="Type Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>*Email</label>
          <input
            type="email"
            name="email"
            placeholder="Type Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>*Phone</label>
          <div className="phone-box">
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone No"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="button" className="verify-btn">Verify</button>
          </div>

          <label>*Select Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="Enquiry">Enquiry</option>
            <option value="Support">Support</option>
            <option value="Complaint">Complaint</option>
          </select>

          <label>*Message</label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
