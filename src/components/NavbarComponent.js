import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Offcanvas,
  NavLink,
  Container,
  //NavLink,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./AboutUsComponent";
import Camp from "./CampSection/CampMainComponent";
import GetInvolved from "./GetInvolvedComponent";
import Home from "./HomeComponent";

//import logo from "/public/images/logo.png"



function NavbarComp() {
  return (
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
            <NavLink to="/"> Home</NavLink> {/* Use NavLink -- not working right now.*/}
            <Link to="/Camp"> Camp</Link> {/* Link -- working but displaying inside the navbar, not the browser site*/}
            <NavLink to="/About"> About</NavLink>
            <Link to="/GetInvolved"> Get Involved</Link>
            <Routes>
              <Route path="/About" element={<About />} />
              <Route path="/Camp" element={<Camp />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/GetInvolved" element={<GetInvolved />} />
            </Routes>
          </Nav>
          </Router>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
</div>
  );
}

export default NavbarComp;
