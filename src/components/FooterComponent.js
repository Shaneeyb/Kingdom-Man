import React from "react";

function Footer() {
  const style = {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "#0E1822", //"0E1822",
    bottom: 0,
    left: 0,
    width: "100%",
  };

  return (
    <div style={style}>
      <p> * Footer * This website has been made with love.</p>
    </div>
  );
}

export default Footer;
