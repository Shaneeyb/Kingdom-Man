import React from "react";
import Video from "./VideoComponent.js";
import GuestSpeakers from "./GuestSpeakersComponent.js";
import Location from "./LocationComponent.js";
//import TravelersComponent from "./CampSection/TravelersSection/TravelersComponent";
import Schedule from "./ScheduleComponent.js";
import Camping from "./CampingComponent.js";
import TravelersTab from "./TravelersSection/TravelersComponent.js";

function Camp() {
  const sectionStyle = {
    textAlign: "center",
    padding: "40px 80px",
    whiteBG: {
      padding: "40px",
      backgroundColor: "white",
      height: "100%",
      width: "100%",
      color: "black",
      textAlign: "center",
      padding: "40px 80px",
    },
    transparentBG: {
      textAlign: "center",
    padding: "40px 80px",
      backgroundImage: `url("https://images.unsplash.com/photo-1470549584009-d347338fc0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80")`, 
		backgroundPosition: 'bottom',
		backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw'
    }
  };
  return (
    <div>
      <h1 style={{
        textAlign: "center",
        padding: "20px"
      }}>Kingdom Man Camp 2022</h1>
      <section style={sectionStyle}>
        <Video />
      </section>
      <section style={sectionStyle.whiteBG}>
        <GuestSpeakers />
      </section>
      <section style={sectionStyle.transparentBG}>
        <Location />
      </section>
      <section style={sectionStyle.whiteBG}>
        <TravelersTab />
      </section>
      <section style={sectionStyle.transparentBG}>
        <Schedule />
      </section>
      <section style={sectionStyle.whiteBG}>
        <Camping />
      </section>
    </div>
  );
}

export default Camp;
