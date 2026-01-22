import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

import "../styles/TopBar.scss"
// import { Link } from 'react-router-dom';
const TopBar = () => {
    return (
        <div className="topbar">
            <div className="left">
                <a href='mailto:safepress@gmail.com'>
                    <span><EmailIcon className='icon'></EmailIcon>safexpressshifting@gmail.com</span>
                </a>
                <a href='phone:safepress@gmail.com'>
                    <span><CallIcon className='icon'></CallIcon>8756319252</span>
                </a>
            </div>
            <div className="right">
                <a href='mailto:safepress@gmail.com'><span><FacebookIcon className='icon'></FacebookIcon></span></a>
                <a href='mailto:safepress@gmail.com'><span><InstagramIcon className='icon'></InstagramIcon></span></a>
                <a href='mailto:safepress@gmail.com'><span><LinkedInIcon className='icon'></LinkedInIcon></span></a>
                <a href='mailto:safepress@gmail.com'><span><PinterestIcon className='icon'></PinterestIcon></span></a>
            </div>
        </div>
    );
};

export default TopBar;
