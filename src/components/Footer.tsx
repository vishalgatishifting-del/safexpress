// import React from "react";
import "../styles/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import logo from "../assets/Logo/logo.jpeg"

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
            <li>Packers and Movers</li>
            <li>Hire Truck Online</li>
            <li>Storage Services</li>
            <li>Car Transportation</li>
            <li>Bike Transportation</li>
          </ul>
        </div>

        {/* Pages */}
        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li>Contact</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Map */}
        <div className="footer-col map">
          <a className="trustpilot" href="#">
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
            <p>Packers and Movers in Delhi</p>
            <p>Packers and Movers in Ghaziabad</p>
            <p>Packers and Movers in Gurgaon</p>
            <p>Packers and Movers in Noida</p>
          </div>

          <div>
            <p>Packers and Movers in Faridabad</p>
            <p>Packers and Movers in Chennai</p>
            <p>Packers and Movers in Mumbai</p>
            <p>Packers and Movers in Pune</p>
          </div>

          <div>
            <p>Packers and Movers in Hyderabad</p>
            <p>Packers and Movers in Bangalore</p>
            <p>Packers and Movers in Ahmedabad</p>
            <p>Packers and Movers in Kolkata</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Safexpress Logistics Pvt Ltd. All Rights Reserved.</p>

        <div className="bottom-links">
          <span>Our partner sites</span>
          <span className="partner">MOVER</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
