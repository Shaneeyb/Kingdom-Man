import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faHouse, faCampground, faHandshake } from "@fortawesome/free-solid-svg-icons";


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
              <Nav.Link
                href="/"
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FontAwesomeIcon icon={faHouse} className="fa-xl" />
                Home
              </Nav.Link>
              <Nav.Link
                href="/Camp"
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FontAwesomeIcon icon={faCampground} className="fa-xl" />
                Camp
              </Nav.Link>
              <Nav.Link
                href="/About"
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FontAwesomeIcon icon={faCircleInfo} className="fa-xl" />
                About
              </Nav.Link>
              <Nav.Link
                href="/GetInvolved"
                style={{
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FontAwesomeIcon icon={faHandshake} className="fa-xl" />
                Join
              </Nav.Link>
            </div>
          </Nav>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
