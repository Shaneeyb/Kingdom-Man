import React, { useState } from "react";
import NavbarComp from "./NavbarComponent";
import Home from "./HomeComponent";
import Camp from "./CampSection/CampMainComponent";
import GetInvolved from "./GetInvolvedComponent";
import About from "./AboutUsComponent";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


function Main() {
  const txtAndBGStyle = {
    color: "white",
    width: "100%",
    padding: "0px",
    height: '100%',
    minHeight: "100vh"
  };

  return (
    <div style={txtAndBGStyle}>
      <div>
          <NavbarComp />
      </div>

      <div>
        <Router>
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Camp" element={<Camp />} />
            <Route path="/" element={<Home />} />
            <Route path="/GetInvolved" element={<GetInvolved />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default Main;

