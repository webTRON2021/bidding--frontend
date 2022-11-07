import { Nav, Navbar, Container } from "react-bootstrap";

import {Link} from "react-router-dom";



const NavBar = () => {
  return (
    <section className="navbar_section">
      
        <Navbar>
          <Container fluid>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/add-product">Add Bid</Nav.Link>
                  <Nav.Link as={Link} to="service">Our Services</Nav.Link>
                  <Nav.Link as={Link} to="/product">Products</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Conatct Us</Nav.Link>
                </Nav>
          </Container>
        </Navbar>
      
    </section>
  );
};

export default NavBar;
