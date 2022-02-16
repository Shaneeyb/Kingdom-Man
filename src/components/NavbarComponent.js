import React from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
//import Logo from "/assets/images/logo"

import logo from "../images/logo.png";

function NavbarComp() {
  const logoStyle = {
    width: "80px",
    height: "80px",
  };
  return (
    <div>
      <div>
        <Navbar 
        bg="#0E1822" 
        expand={false}
        style={{
          backgroundColor: "#0E1822",
          color: "white"
        }}>
          <Container fluid>
            <Navbar.Brand>
              <img src={logo} style={{ width: "100px", height: "100px" }} />
            </Navbar.Brand>
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
                    <Nav.Link href="/Camp"> Camp</Nav.Link>{" "}
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
