import React from 'react';

function Header() {
    return (
        <div>
            <h2 style={{
                padding: "20px",
                textAlign: "center"
            }}>
                Location
            </h2>
            <h5 style={{
        padding: "20px"
      }}>
            Address: 94-877 Lumiaina St, Waipahu, HI 96797
            </h5>
        </div>
    )
}

function Map() {
    return (
        <div style={{
            padding: "56.25% 0 0 0",
            position: "relative",
          }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14858.910378855982!2d-158.001719!3d21.400628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e44ca46b2170c7a!2sInspire%20Church!5e0!3m2!1sen!2sus!4v1644614382529!5m2!1sen!2sus" width="600" height="450" title='hotel' style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }} allowFullScreen="" loading="lazy"></iframe>
        </div>
    )
}

function LocationDesc() {
    return (
      <p
        style={{
          padding: "20px",
          borderBottom: ".5px solid white",
        }}
      >
        We choose this location because it is close to our heart. The ___ is
        known for housing christian events and they have blessed us to be able
        to host this event. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    );
}

function Location() {
    return (
        <div>
            <Header />
            <Map />
            <LocationDesc />
        </div>
    )
}

export default Location;