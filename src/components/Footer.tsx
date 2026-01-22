import React from "react";
import Logo from "../assets/Logo/logo.jpeg"
import "../styles/Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* LEFT LOGO SECTION */}
        <div className="footer__brand">
          <img
            src={Logo}
            alt="Safexpress Logo"
            className="footer__logo"
          />
          <p className="footer__tagline">Distribution Redefined</p>

          <img
            src="https://www.safexpress.com/assets/images/iso-27001.png"
            alt="ISO 27001"
            className="footer__iso"
          />
        </div>

        {/* COLUMNS */}
        <div className="footer__columns">
          <div className="footer__col">
            <h4>Company Information</h4>
            <ul>
              <li>About us</li>
              <li>Group companies</li>
              <li>Technology</li>
              <li>Infrastructure</li>
              <li>Pincodes served</li>
              <li>Transit policy</li>
              <li>Carriage Policy</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Help Center</h4>
            <ul>
              <li>Shipment tracking</li>
              <li>Book now</li>
              <li>Customer portal</li>
              <li>GST support</li>
              <li>Branch locator</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li>Industries</li>
              <li>Enterprise services</li>
              <li>Individual services</li>
              <li>Other services</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Media Center</h4>
            <ul>
              <li>Press releases</li>
              <li>Media coverage</li>
              <li>Blog</li>
              <li>Fasttrack</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Associate with us</h4>
            <ul>
              <li>Open a business account</li>
              <li>Careers</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer__bottom">
        <div className="footer__links">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
          <span>CSR Policy</span>
        </div>

        <p className="footer__copyright">
          © 2025 SAFEXPRESS. All rights reserved.
        </p>

        <p className="footer__note">
          The website is best experienced on Chrome, Firefox and Edge Browsers
          with System Resolution 150% and Browser Resolution 100%
        </p>
      </div>
    </footer>
  );
};

export default Footer;
