
import { Link } from 'react-router-dom';


const MainNavBar = () => {
    return (
        <div>
        <Link to='/'>Form</Link>
        <Link to='/details'>Details</Link>
        </div>
    );
};

export default MainNavBar;