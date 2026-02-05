import "../styles/QuickMenu.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
Link

const QuickMenu = () => {
    return (
        <div className="quick-menu">
            <a href="https://www.instagram.com/saf_eexpress/">
                <InstagramIcon className='icon'></InstagramIcon>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61587270281087">
                <FacebookIcon className='icon'></FacebookIcon>
            </a>
            <a href="https://x.com/SPackers48232">
                <XIcon className='icon'></XIcon>
            </a>
            <a href="https://in.pinterest.com/shiftingsafexpress/">
                <PinterestIcon className='icon'></PinterestIcon>
            </a>
            <a href="https://www.youtube.com/@Safeexpress11">
                <YouTubeIcon className='icon'></YouTubeIcon>
            </a>
        </div>
    );
};

export default QuickMenu;
