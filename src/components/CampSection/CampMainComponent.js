import React, { Component } from 'react';
import Video from "./VideoComponent.js"
import GuestSpeakers from './GuestSpeakersComponent.js';
import Location from './LocationComponent.js';
//import TravelersComponent from "./CampSection/TravelersSection/TravelersComponent";
import Schedule from './ScheduleComponent.js';
import Camping from './CampingComponent.js';
import About from '../AboutUsComponent.js';

function Camp () {
  return (
    <div>
      <Video />
      <GuestSpeakers />
      <Location />

      <Schedule />
      <Camping />
      <About />
    </div>
  )
}

export default Camp;