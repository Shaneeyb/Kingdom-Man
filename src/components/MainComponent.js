import React, { useState } from "react";
import NavbarComp from "./NavbarComponent";
import Home from "./HomeComponent";
import About from "./AboutUsComponent";
import Camp from "./CampSection/CampMainComponent";
import GetInvolved from "./GetInvolvedComponent";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import InfoText from "./CampSection/TravelersSection/InfoComponent";
import TravelersTab from "./CampSection/TravelersSection/TravelersComponent";
import Hotels from "./CampSection/TravelersSection/HotelsComponent";
import FAQ from "./CampSection/TravelersSection/FAQComponent";
import Covid from "./CampSection/TravelersSection/CovidComponent";

function Main(params) {
  const txtAndBGStyle = {
    color: "white",
    width: "100%",
    padding: "0px",
    //backgroundColor: "#0E1822",
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

            <Route
              path="/CampSection/TravelersSection/InfoComponent"
              element={<InfoText />}
            />
            <Route
              path="/CampSection/TravelersSection/TransportationComponent"
              element={<TravelersTab />}
            />
            <Route
              path="/CampSection/TravelersSection/HotelsComponent"
              element={<Hotels />}
            />
            <Route
              path="/CampSection/TravelersSection/CovidComponent"
              element={<Covid />}
            />
            <Route
              path="/CampSection/TravelersSection/FAQComponent"
              element={<FAQ />}
            />
           
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default Main;


/*

<div
        className="App"
        style={{
          //backgroundImage: `url("https://images.unsplash.com/photo-1470549584009-d347338fc0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80")`,
          backgroundColor: "#0E1822",
          width: "70%",
          height: "auto",
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          backgroundPosition: "center center no-repeat",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

*/