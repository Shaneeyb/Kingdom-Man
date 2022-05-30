import React from "react";
import { useNavigate } from "react-router-dom"

function TopText() {

  return (
    <div>
      <h2
        style={{
          padding: "10px",
          textAlign: "center",
        }}
      >
        Camping
      </h2>

      <div>
        <img
          src="https://images.unsplash.com/photo-1610912763956-2d9374070090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="camping"
          className="d-block w-100"
          style={{
            borderRadius: "25px",
            boxShadow: "0 0 10px rgba(0,0,0,0.63)",
          }}
        />
      </div>

      <p
        style={{
          padding: "20px",
        }}
      >
        You will be sleeping _________. Description of campground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
    </div>
  );
}


function RegisterBtn() {

  let navigate= useNavigate();


    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding: "10px"}}>
        <a href="https://inspirechurch.brushfire.com/arise-2023/527463">
          <button 
          className="btn btn-danger" 
          //onClick={() => navigate("/")}
            >Register</button>
        </a>
        
      </div>
    );
}

function Camping() {
    return (
        <div>
            <TopText />
            <RegisterBtn />
        </div>
    )
}

export default Camping;