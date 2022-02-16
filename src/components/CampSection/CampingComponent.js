import React from "react";

function TopText() {
  return (
    <div>
      <h2>Camping</h2>

      <p>
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

function Picture() {
  return (
    <div>
      <a href="https://unsplash.com/photos/V7uP-XzqX18" alt="Camping" >
      </a>
    </div>
  );
}

function RegisterBtn() {
    return (
      <button onClick={null}>Register Now</button>
    );
}

function Camping() {
    return (
        <div>
            <TopText />
            <Picture />
            <RegisterBtn />
        </div>
    )
}

export default Camping;