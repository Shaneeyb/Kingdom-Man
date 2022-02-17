import React from "react";

function Footer() {
  const style = {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "0E1822",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  };

  return (
    <div style={style}>
      <p>This is some content in sticky footer</p>
    </div>
  );
}

export default Footer;
