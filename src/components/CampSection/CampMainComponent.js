import React from 'react';
import Video from "./VideoComponent.js"
import GuestSpeakers from './GuestSpeakersComponent.js';
import Location from './LocationComponent.js';
//import TravelersComponent from "./CampSection/TravelersSection/TravelersComponent";
import Schedule from './ScheduleComponent.js';
import Camping from './CampingComponent.js';
import TravelersTab from './TravelersSection/TravelersComponent.js';

function Camp () {
  return (
    <div>
    <Video />
      <GuestSpeakers />
      <Location />
      <TravelersTab />
      <Schedule />
      <Camping />
    </div>
  )
}

export default Camp;