import { Nav, Navbar, Container } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <section className="navbar_section">
      <Navbar>
        
        <Container fluid>
          <Nav className="justify-content-start flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/"
            active={location.pathname==="/"}
            >
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add-bid"
            active={location.pathname==="/add-Bid"}
            >
              Add Bid
            </Nav.Link>

            <Nav.Link as={Link} to="/product"
            active={location.pathname==="/product"}
            >
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/contact"
            active={location.pathname==="/contact"}
            >
              Conatct Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
