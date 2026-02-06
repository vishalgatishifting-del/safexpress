import React, { useState, type FormEvent, type ChangeEvent } from "react";
import "../styles/ZohoForm.scss";
import { submitForm } from "../api/formAPI";
import CircularProgress from "@mui/material/CircularProgress";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

type FormData = {
  Name: string;
  Email: string;
  Phone: string;
  From: string;
  To: string;
  Goods: string;
};

interface Props {
  successCondition: React.Dispatch<React.SetStateAction<boolean>>;
}

const ZohoForm: React.FC<Props> = ({ successCondition }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    Email: "",
    Phone: "",
    From: "",
    To: "",
    Goods: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitForm({ ...formData, landingPage: window.location.href });
      successCondition(true);
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
      setLoading(false);
    }
  };

  return (
    <div className="zoho-contact-form">
      <h3>Let us Contact You</h3>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <PersonIcon />
          <input
            type="text"
            name="Name"
            placeholder="Enter Your Name*"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <PhoneIcon />
          <input
            type="text"
            name="Phone"
            placeholder="Enter phone number*"
            value={formData.Phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <EmailIcon />
          <input
            type="email"
            name="Email"
            placeholder="Enter Your Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <LocationOnIcon />
          <input
            type="text"
            name="From"
            placeholder="Enter Your Pick Up Point*"
            value={formData.From}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <LocationOnIcon />
          <input
            type="text"
            name="To"
            placeholder="Enter Your Delivery Point*"
            value={formData.To}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <ChatBubbleOutlineIcon />
          <input
            type="text"
            name="Goods"
            placeholder="Good Details"
            value={formData.Goods}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? <CircularProgress size={22} /> : "REQUEST A CALLBACK"}
        </button>
      </form>
    </div>
  );
};

export default ZohoForm;
