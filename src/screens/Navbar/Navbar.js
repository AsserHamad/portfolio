import { Link, useHistory } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const history = useHistory();
    console.log(history.location)
    return (
        <div className="navbar-container">
            <div className="navbar-logo"><span>Asser's Portfolio</span></div>
            <div className="navbar-pages">
                <Link className={`navbar-link ${history.location.pathname === '/' && 'active'}`}>Home</Link>
                <Link className={`navbar-link ${history.location.pathname !== '/ndg' && 'navbar-link-active'}`}>Fullstack</Link>
            </div>
        </div>
    )
}

export default Navbar;