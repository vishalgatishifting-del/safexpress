import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {COMPANY} from "../config/Company"

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
        <a href={`mailto:${COMPANY.email}`}>
          <EmailIcon className="icon" />
          <span>{COMPANY.email}</span>
        </a>

        <a href={`tel:${COMPANY.phone}`}>
          <CallIcon className="icon" />
          <span>{COMPANY.phone}</span>
        </a>
      </div>

      <div className="topbar-right">
        <a href={COMPANY.facebook} aria-label="Facebook">
          <FacebookIcon />
        </a>
        <a href={COMPANY.intagram} aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href={COMPANY.linkedin} aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={COMPANY.pinterest} aria-label="Pinterest">
          <PinterestIcon />
        </a>
      </div>
    </div>
    </>
    
  );
};

export default TopBar;
