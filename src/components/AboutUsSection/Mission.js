import React from "react";
import USVetsLogo from "./Images/USVetsLogo.png"
import Car from "./Images/Car.png"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import GetInvolved from "../GetInvolvedComponent";

function TopText() {
    return (
        <div>
            <h2>Our Mission</h2>

            <h3>
            The mission of Kingdom Man Ministry is to inspire men to live with generational vision; we do that in three steps. Reach Men, Foster Discipleship, and Live like Jesus. 
            </h3>
        </div>
    )
}

function Partners() {
 return (
     <div>
         <h2> Partners</h2>

         <img src={USVetsLogo} alt="Logo" />
         <img src={Car} alt="Car image" />
     </div>
 )
}

function GetInvolved() {
    return (
        <div>
            <Link to="/GetInvolved">
                <Button variant="btn btn-warning">
                Get Involved
                </Button>
            </Link>
        </div>
    )
}

function Mission() {
    return (
        <div>
            <TopText />
            <Partners />
        </div>
    )
}

export default Mission;