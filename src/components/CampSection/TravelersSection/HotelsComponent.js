import React from "react";

function TopText() {

  const styles = {
    h2: {
      textAlign: "center",
      padding: "20px"
    },
    other: {
      textAlign: "center",
      padding: "10px"
    }
  };
  return (
    <div>
      <h2 style={styles.h2} >Name Of Hotel</h2>
      <h3 style={styles.other} >Hotel Address Here:</h3>
      <p style={styles.other} >
        Hotel Desc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>
  );
}

function Map() {
  return (
    <div style={{
      padding: "56.25% 0 0 0",
      position: "relative",
    }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14858.910378855982!2d-158.001719!3d21.400628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e44ca46b2170c7a!2sInspire%20Church!5e0!3m2!1sen!2sus!4v1644614382529!5m2!1sen!2sus" width="600" height="450" style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    }} allowFullScreen="" loading="lazy"></iframe>
  </div>
  );
}

function BottomText() {

  const styles = {
    other: {
      textAlign: "center",
      padding: "20px"
    }
  }

  return (
    <div>
      <p style={styles.other}>
        Destance to Inspire, distance to Kingdom Man Location. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a href="https://www.marriott.com/en-us/hotels/hnlmc-waikiki-beach-marriott-resort-and-spa/rooms/#">
          <h3>Reserve a room!</h3>
          </a>
      
    </div>
  );
}

function Hotels() {
    return (
        <div>
            <TopText />
            <Map />
            <BottomText />
        </div>
    )
}

export default Hotels;