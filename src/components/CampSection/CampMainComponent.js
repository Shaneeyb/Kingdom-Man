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
      <section style={sectionStyle}>
        <GuestSpeakers />
      </section>
      <section style={sectionStyle}>
        <Location />
      </section>
      <section style={sectionStyle}>
        <TravelersTab />
      </section>
      <section style={sectionStyle}>
        <Schedule />
      </section>
      <section style={sectionStyle}>
        <Camping />
      </section>
    </div>
  );
}

export default Camp;
