import React from "react";
import {
  Navbar,
  Nav,
  Offcanvas,
  NavLink,
  Container,
} from "react-bootstrap";
import {
  BrowserRouter as Router,

} from "react-router-dom";

//import logo from "/public/images/logo.png"

function NavbarComp() {
  return (
    <div>
      <div>
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">Logo Here</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            {/* Navbar Offcampus creates the hamburger menu */}
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Router>
                  <Nav navbar className="justify-content-end flex-grow-1 pe-3">
                    <NavLink to="/"> Home</NavLink>{" "}
                    {/* Use NavLink -- not working right now.*/}
                    <NavLink to="/Camp"> Camp</NavLink>{" "}
                    {/* Camp Breaks the page. FIX THIS!! */}
                    <NavLink to="/About"> About</NavLink>
                    <NavLink to="/GetInvolved"> Get Involved</NavLink>
                  </Nav>
                </Router>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarComp;
