import { Link } from "react-router-dom";
import Logo from "../assets/Logo/logo.jpeg" 
import "../styles/Navbar.scss"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
