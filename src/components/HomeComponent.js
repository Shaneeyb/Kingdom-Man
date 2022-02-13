import App from "../App";
import React from "react";

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
      <button onClick="activateLasers()">Activate Lasers</button>
    );
  }

    return(
      <div>
        <HeaderText />
        <RegisterBtn />
      </div>
    )
}

export default Home;
