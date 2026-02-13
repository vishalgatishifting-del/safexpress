import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../assets/Logo/logo.jpeg";
import "../styles/Navbar.scss";
import whatsappIcon from "../assets/whatsappIcon.webp";
import callIcon from "../assets/call.webp";
import gmailIcon from "../assets/gmailIcon.webp";
import { COMPANY } from "../config/Company";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <img src={Logo} alt="Safexpress Logo" />
          </div>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li onClick={() => setOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/about">About Us</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/faq">FAQs</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>

        {/* Toggle Button */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <CloseIcon className="toogleIcon" /> : <MenuIcon className="toogleIcon" />}
        </div>
      </nav>
      <div className="action-button">

        <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href={`tel:+91${COMPANY.phone}`}>
          <img src={callIcon} alt="Call" />
        </a>
        <a href={`mailto:${COMPANY.email}`}>
          <img src={gmailIcon} alt="Email" />
        </a>
      </div>
    </>

  );
};

export default Navbar;
