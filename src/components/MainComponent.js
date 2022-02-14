import React from "react";
import NavbarComp from "./NavbarComponent";
import Home from "./HomeComponent";
import About from "./AboutUsComponent";
import Camp from "./CampSection/CampMainComponent";
import GetInvolved from "./GetInvolvedComponent";
import {
  Routes,
  Route
} from "react-router-dom";

function Main(params) {
  return (
    <div>
      <div>
        <NavbarComp />
      </div>
      <div>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Camp" element={<Camp />} />
          <Route path="/" element={<Home />} />
          <Route path="/GetInvolved" element={<GetInvolved />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
