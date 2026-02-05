// import React from "react";
import "../styles/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import logo from "../assets/Logo/logo.jpeg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Footer */}
      <div className="footer-top">
        {/* Brand Section */}
        <div className="footer-col brand">
          <h2 className="logo">Safexpress</h2>
          <p className="tagline">Safexpress Relocation Services!</p>

          <p className="desc">
            Safexpress is India's First Packers and Movers crafted for Luxury
            Shifting, Tailored for Your House!
          </p>

          <div className="social-icons">
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <LinkedInIcon />
            <XIcon />
            <WhatsAppIcon />
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <Link to="/storage">Storage Services</Link>
            <Link to="/car-storage">Car Storage</Link>
            <Link to="/bike-storage">Bike Storage</Link>
            <Link to="/home-shifting">Home Shifting</Link>
            <Link to="/office-relocation">Office Relocation</Link>
            <Link to="/car-bike-transport">Car/Bike Transport</Link>
            <Link to="/pet-relocation">Pet Relocation</Link>
            <Link to="/commercial-shifting">Commercial Shifting</Link>
          </ul>
        </div>

        {/* Pages */}
        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/contact-us">Contact</Link></li>
            <li><Link to="/who-we-are">Who We Are</Link></li>
            <li><Link to="/why-safexpress">Why Safexpress</Link></li>
            <li><Link to="/photo-gallery">Photo Gallery</Link></li>
            <li><Link to="/video-gallery">Video Gallery</Link></li>
            {/* <li><Link to="/video-gallery">Photo Gallery</Link></li> */}
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/safety-standard">Safety Standard</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div className="footer-col map">
          <a className="trustpilot" href="https://www.trustpilot.com/">
            Review us on ⭐ Trustpilot
          </a>

          <img className="logo" src={logo} />
        </div>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <div className="service-tabs">
          <button className="active">PACKERS AND MOVERS</button>
          <button>HIRE MINI TRUCK</button>
          <button>STORAGE</button>
          <button>CAR TRANSPORT</button>
          <button>BIKE TRANSPORT</button>
        </div>

        <div className="cities">
          <div>
            <p><Link to="/city/delhi">Packers and Movers in Delhi</Link></p>
            <p><Link to="/city/ghaziabad">Packers and Movers in Ghaziabad</Link></p>
            <p><Link to="/city/gurgaon">Packers and Movers in Gurgaon</Link></p>
            <p><Link to="/city/noida">Packers and Movers in Noida</Link></p>

            <p><Link to="/city/ajmer">Packers and Movers in Ajmer</Link></p>
            <p><Link to="/city/aizawl">Packers and Movers in Aizawl</Link></p>
            <p><Link to="/city/ahmednagar">Packers and Movers in Ahmednagar</Link></p>

          </div>

          <div>
            <p><Link to="/city/faridabad">Packers and Movers in Faridabad</Link></p>
            <p><Link to="/city/chennai">Packers and Movers in Chennai</Link></p>
            <p><Link to="/city/mumbai">Packers and Movers in Mumbai</Link></p>
            <p><Link to="/city/pune">Packers and Movers in Pune</Link></p>

            <p><Link to="/city/adoni">Packers and Movers in Adoni</Link></p>
            <p><Link to="/city/adilabad">Packers and Movers in Adilabad</Link></p>
            <p><Link to="/city/ahmedabad">Packers and Movers in Ahmedabad</Link></p>

          </div>

          <div>
            <p><Link to="/city/hyderabad">Packers and Movers in Hyderabad</Link></p>
            <p><Link to="/city/banglore">Packers and Movers in Bangalore</Link></p>
            <p><Link to="/city/ahmedabad">Packers and Movers in Ahmedabad</Link></p>
            <p><Link to="/city/kolkata">Packers and Movers in Kolkata</Link></p>

            <p><Link to="/city/gurgaon">Packers and Movers in Gurgaon</Link></p>
            <p><Link to="/city/ghaziabad">Packers and Movers in Ghaziabad</Link></p>
            <p><Link to="/city/agartala">Packers and Movers in Agartala</Link></p>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Safexpress Logistics Pvt Ltd In Collaboration with Gatisafe Express Private Limited. All Rights Reserved.</p>

        <div className="bottom-links">
          <span><Link to="/privacy-policy">Our partner sites</Link></span>
          <span className="partner"><Link to="/privacy-policy">MOVER</Link></span>
          <span><Link to="/terms-condition">Terms & Conditions</Link></span>
          <span><Link to="/privacy-policy">Privacy Policy</Link></span>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
