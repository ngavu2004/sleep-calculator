
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <Navbar bg="light" expand="lg">
              <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/Information">About</Nav.Link>
                  <Nav.Link href='https://twitter.com/ThiQuynhNg55803' target="_blank">Twitter</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;