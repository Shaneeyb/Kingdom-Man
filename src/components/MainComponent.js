import React, { useState } from "react";
import NavbarComp from "./NavbarComponent";
import Home from "./HomeComponent";
import About from "./AboutUsComponent";
import Camp from "./CampSection/CampMainComponent";
import GetInvolved from "./GetInvolvedComponent";
import { Routes, Route, BrowserRouter as Router  } from "react-router-dom";
import InfoText from "./CampSection/TravelersSection/InfoComponent";
import TravelersTab from "./CampSection/TravelersSection/TravelersComponent";
import Hotels from "./CampSection/TravelersSection/HotelsComponent";
import FAQ from "./CampSection/TravelersSection/FAQComponent";
import Covid from "./CampSection/TravelersSection/CovidComponent";

function Main(params) {

  const txtAndBGStyle = {
    backgroundColor: "#0E1822",
    color: "white",
    width: "100",
    overflow: "hidden", //doesn't seem to fix the extra white space. :(
  height: "100", 
  margin: "0px",
  padding: "0px"
  }
  

  return (
    <div style={txtAndBGStyle} 
    >
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

            <Route path="/CampSection/TravelersSection/InfoComponent" element={<InfoText />} />
            <Route path="/CampSection/TravelersSection/TransportationComponent" element={<TravelersTab />} />
            <Route path="/CampSection/TravelersSection/HotelsComponent" element={<Hotels />} />
            <Route path="/CampSection/TravelersSection/CovidComponent" element={<Covid />} />
            <Route path="/CampSection/TravelersSection/FAQComponent" element={<FAQ />} />


          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default Main;

