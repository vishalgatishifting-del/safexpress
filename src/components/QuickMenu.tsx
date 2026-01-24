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
            <a href="/">
                <InstagramIcon className='icon'></InstagramIcon>
            </a>
            <a href="/">
                <FacebookIcon className='icon'></FacebookIcon>
            </a>
            <a href="/">
                <XIcon className='icon'></XIcon>
            </a>
            <a href="/">
                <PinterestIcon className='icon'></PinterestIcon>
            </a>
            <a href="/">
                <YouTubeIcon className='icon'></YouTubeIcon>
            </a>
        </div>
    );
};

export default QuickMenu;
