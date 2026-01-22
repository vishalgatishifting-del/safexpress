import DescriptionIcon from '@mui/icons-material/Description';
import StartIcon from '@mui/icons-material/Start';
import "../styles/QuickMenu.scss"
import { Link } from 'react-router-dom';
Link

const QuickMenu = () => {
    return (
        <div className="quick-menu">
            <Link to="/">
                <DescriptionIcon className='icon'></DescriptionIcon>
                GST
            </Link>
            <Link to="/">
                <DescriptionIcon className='icon'></DescriptionIcon>
                MSME
            </Link>
            <Link to="/">
                <DescriptionIcon className='icon'></DescriptionIcon>
                JustDial
            </Link>
            <Link to="/">
                <StartIcon className='icon'></StartIcon>
                Book
            </Link>
        </div>
    );
};

export default QuickMenu;
