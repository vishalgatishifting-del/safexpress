import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "../styles/TopBar.scss";

const TopBar = () => {
  return (
    <>
    
      {/* <div className="mobile-friendly-whatsapp-strip">
        <WhatsAppIcon></WhatsAppIcon>
        <span>Click to Chat Now</span>
      </div> */}

      <div className="topbar">
      <div className="topbar-left">
        <a href="mailto:safexpressshifting@gmail.com">
          <EmailIcon className="icon" />
          <span>safexpressshifting@gmail.com</span>
        </a>

        <a href="tel:8756319252">
          <CallIcon className="icon" />
          <span>8756319252</span>
        </a>
      </div>

      <div className="topbar-right">
        <a href="#" aria-label="Facebook">
          <FacebookIcon />
        </a>
        <a href="#" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="#" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href="#" aria-label="Pinterest">
          <PinterestIcon />
        </a>
      </div>
    </div>
    </>
    
  );
};

export default TopBar;
