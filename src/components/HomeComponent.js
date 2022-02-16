import React from "react";
//import CampfireBG from "/images/CampfireBG.jpg"

function Home() {
  function HeaderText() {
    return (
      <div>
        <h1>Kingdom Man</h1>
        <h3>Jan 1st - 3rd. 2022</h3>
        <h3>94-877 Lumiaina St, Waipahu, HI 96797 </h3>
      </div>
    );
  }

  function RegisterBtn() {
    return (
      <button class="btn btn-danger" onClick="activateLasers()">Activate Lasers</button>
    );
  }

    return(
      <div
        style={{
          backgroundImage: "url(" +
          "https://images.unsplash.com/photo-1470549584009-d347338fc0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"+")"
        }}
        >
        <HeaderText />
        <RegisterBtn />
      </div>
    )
}

export default Home;
