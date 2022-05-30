import React from "react";
import Video from "./VideoComponent.js";
import GuestSpeakers from "./GuestSpeakersComponent.js";
import Location from "./LocationComponent.js";
import Schedule from "./ScheduleComponent.js";
import Camping from "./CampingComponent.js";
import TravelersTab from "./TravelersSection/TravelersComponent.js";

function Camp() {
  
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        Kingdom Man Camp 2022
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          classname="container"
          style={{
            position: "relative",
            justifyContent: "center",
            backgroundAttachment: "fixed",
            boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .5)",
            backdropFilter: "blur(5px)",
            backgroundColor: "#6c757d4d",
            width: "90%",
            textAlign: "left",
            padding: "10px 10px",
            top: "10px",
            borderRadius: "25px",
            marginBottom: "110px",
          }}
        >
          <h5
            style={{
              textAlign: "center",
              padding: "20px",
            }}
          >
            Kingdom Man Camp 2022
          </h5>

          <Video />
          <GuestSpeakers />
          <Location />
          <TravelersTab />
          <Schedule />
          <Camping />
        </div>
      </div>
    </div>
  );
}

export default Camp;
