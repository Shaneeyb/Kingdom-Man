import React from "react";
import InfoText from "./InfoComponent";
import TransportationText from "./TransportationComponent";
import Hotels from "./HotelsComponent";
import FAQ from "./FAQComponent";
import Covid from "./CovidComponent";


const TravelersTab = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div 
    position="static"
    >
      <h1 style={{
        padding: "20px"
      }}>Travelers</h1>
      
      {selectedTab === 0 && <InfoText />}
      {selectedTab === 1 && <Hotels />}
      {selectedTab === 2 && <TransportationText />}
      {selectedTab === 3 && <Covid />}
      {selectedTab === 4 && <FAQ />}
    </div>
  );
};

export default TravelersTab;

