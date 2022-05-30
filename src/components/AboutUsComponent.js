import React from "react";
//import Car from "./Images/Car.png"
//import USVetsLogo from "./Images/USVetsLogo.png"

function TopText() {
  const style = {
    h1: {
      textAlign: "center",
      position: "relative",
      
    },
    p: {
      textAlign: "center",
      position: "relative",
    },
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          position: "relative",
          top: "80px"
        }}
      >
        About Us
      </h1>
    </div>
  );
}

function BottomText() {
  const style = {
    h3: {
      textAlign: "center",
      position: "relative",
      
    },
    p: {
      textAlign: "center",
      position: "relative",
    },
  };

  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          position: "relative",
        }}
      >
        Who We Are
      </h3>
      <p
        style={{
          textAlign: "center",
          position: "relative",
          paddingBottom: "20px",
          borderBottom: ".5px solid white",
        }}
      >
        Kingdom Man Ministry is a Men’s ministry birthed out of our Senior
        Pastor, Mike Kai’s heart to lead men into an authentic Christ-centered
        life. We believe that through the lessons and principles found in Jesus’
        life we can disciple each other to reject passivity, accept
        responsibility, lead courageously and invest eternally.
      </p>

      <h3 style={style.h3}>Our Mission</h3>

      <p style={style.p}>
        The mission of Kingdom Man Ministry is to inspire men to live with
        generational vision; we do that in three steps. Reach Men, Foster
        Discipleship, and Live like Jesus.
      </p>
    </div>
  );
}

const style = {
  frost: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    backgroundAttachment: "fixed",
    boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .5)",
    backdropFilter: "blur(5px)",
    backgroundColor:"#6c757d4d",
    width: "90%",
    textAlign: "center",
    padding: "10px 10px",
    top: "100px",
    borderRadius: "25px",
  },
};

function About() {
  return (
    <div >
      <TopText />
      <div style={{
      display: "flex",
      justifyContent: "center",
    }}>
      <div classname="container" style={style.frost}>
        <BottomText />
      </div>
      </div>
    </div>
  );
}

export default About;
