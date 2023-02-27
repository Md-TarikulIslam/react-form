import { Link } from 'react-router-dom';
import './MainNavBar.css'


const MainNavBar = () => {
    return (
        <div className='navStyle'>
        <Link className='individual-nav' to='/'>Form</Link>
        <Link className='individual-nav' to='/details'>Details</Link>
        </div>
    );
};

export default MainNavBar;