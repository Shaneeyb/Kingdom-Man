import React from 'react';

function Header() {
    return (
        <div>
            <h2>
                Location
            </h2>
            <h3>
            Address: 94-877 Lumiaina St, Waipahu, HI 96797
            </h3>
        </div>
    )
}

function Map() {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14858.910378855982!2d-158.001719!3d21.400628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e44ca46b2170c7a!2sInspire%20Church!5e0!3m2!1sen!2sus!4v1644614382529!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}

function LocationDesc() {
    return (
        <h3>
            We choose this location because it is close to our heart. The ___ is known for housing christian events and they have blessed us to be able to host this event. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
    )
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