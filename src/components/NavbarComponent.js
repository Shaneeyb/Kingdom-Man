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
  const styles={
    color: "white",
    padding: "30px",
    fontSize: 50
  }
  return (
    <div>
      <div>
        <Navbar
        variant="dark"
          expand={false}
          style={{
            height: "80px",
            display: "flex",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            top: "0",
            fontSize: "1.3rem",
          }}
        >
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src={logo}
                style={{
                  width: "80px",
                  height: "80px",
                }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            {/* Navbar Offcampus creates the hamburger menu */}
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              style={{
                backgroundColor: 'black',
                opacity: ".7"
                
              }}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body
             
              >
                <Router>
                  <Nav navbar className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link 
                    style={styles}
                    href="/"
                    > Home</Nav.Link>{" "}
                    <Nav.Link 
                    style={styles}
                    href="/Camp"
                    > Camp</Nav.Link>{" "}
                    <Nav.Link 
                    style={styles}
                    href="/About"
                    > About</Nav.Link>
                    <Nav.Link 
                    style={styles}
                    href="/GetInvolved"
                    > Get Involved</Nav.Link>
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
