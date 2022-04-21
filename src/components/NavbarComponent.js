import React from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarComp() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      <Navbar variant="dark">
        <Nav
          className="navbar fixed-bottom navbar-light"
          role="navigation"
          style={{
            borderTop: "solid .5px #C5C6D0",
            backgroundColor: "#000000",
          }}
        >
          <Nav className="w-100">
            <div className=" d-flex justify-content-around w-100 flex-row">
              <Nav.Link href="/" className="fas-house-blank">
                <FontAwesomeIcon icon="fas-light fa-house" />
                Home
              </Nav.Link>
              <Nav.Link href="/About"> About</Nav.Link>
              <Nav.Link href="/Camp"> Camp</Nav.Link>
              <Nav.Link href="/GetInvolved">join</Nav.Link>
            </div>
          </Nav>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
