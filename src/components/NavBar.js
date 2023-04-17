
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'; 
import './stylesheets/NavBar.css';
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/sleep-calculator/">Home</Link>
                <Link to="/sleep-calculator/information">Information</Link>
                <a href="https://twitter.com/ThiQuynhNg55803" target='_blank'>Twitter</a>
            </div>
        </nav>
     );
}
 
export default NavBar;