import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../assets/Logo/logo.jpeg";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
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
        {open ? <CloseIcon className="toogleIcon" /> : <MenuIcon className="toogleIcon"/>}
      </div>
    </nav>
  );
};

export default Navbar;
