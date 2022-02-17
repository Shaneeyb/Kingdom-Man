import React from "react";

function TopText() {
  return (
    <div>
      <h2 style={{
        padding: "40px"
      }}>Camping</h2>

      <div>
      <img
     src="https://images.unsplash.com/photo-1610912763956-2d9374070090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
     alt="camping" 
      className="d-block w-100"
    />
    </div>

      <p style={{
        padding: "30px"
      }}>
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
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding: "10px"}}>
          <button class="btn btn-danger" onClick="activateLasers()">Register</button>
        
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