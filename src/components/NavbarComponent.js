import React from "react";
import {
  Navbar,
  Nav,
  Offcanvas,
  Container,
} from "react-bootstrap";
import {
  BrowserRouter as Router,

} from "react-router-dom";
//import Logo from "/assets/images/logo"

import logo from "../images/logo.png";

function NavbarComp() {
  return (
    <div>
      <div>
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href={logo}></Navbar.Brand>
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
                    <Nav.Link href="/"> Home</Nav.Link>{" "}
                    {/* Use NavLink -- not working right now.*/}
                    <Nav.Link href="/Camp"> Camp</Nav.Link>{" "}
                    {/* Camp Breaks the page. FIX THIS!! */}
                    <Nav.Link href="/About"> About</Nav.Link>
                    <Nav.Link href="/GetInvolved"> Get Involved</Nav.Link>
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
