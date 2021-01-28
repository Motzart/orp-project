import { Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">ORP Project</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
          <Link to="/">Home</Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
