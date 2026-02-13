import "../styles/QuickMenu.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { COMPANY } from "../config/Company";


const QuickMenu = () => {
    return (
        <div className="quick-menu">
            <a href={COMPANY.intagram}>
                <InstagramIcon className='icon'></InstagramIcon>
            </a>
            <a href={COMPANY.facebook}>
                <FacebookIcon className='icon'></FacebookIcon>
            </a>
            <a href={COMPANY.twitter}>
                <XIcon className='icon'></XIcon>
            </a>
            <a href={COMPANY.pinterest}>
                <PinterestIcon className='icon'></PinterestIcon>
            </a>
            <a href={COMPANY.youtube}>
                <YouTubeIcon className='icon'></YouTubeIcon>
            </a>
        </div>
    );
};

export default QuickMenu;
