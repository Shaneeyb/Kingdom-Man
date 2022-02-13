import React, { Component } from "react";
import Home from "./HomeComponent";
import Navbar from "./NavbarComponent";

function Main(params) {
        return (
            <div>
                <Navbar />
            </div>
        )

    /*renderSwitch(param) {
        switch(param) {
          case 'Home':
            return '/HomeComponent.js';
            break;
        case "Camp 2022":
            return "./CampSection/MainCampComponent.js"
            break;
            case "About":
            return "/AboutUsComponent.js"
            break;
            case "Get Involved":
            return "/GetInvolvedComponent.js"
            break;
            
          default:
            return 'foo';
        }
      }*/
}

export default Main;