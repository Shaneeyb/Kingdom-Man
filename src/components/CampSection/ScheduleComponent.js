import { withWidth } from "@material-ui/core";
import React from "react";

function Text() {
    return (
        <div>
            <h2>
                Schedule
            </h2>
        </div>
    )
}

function GoogleSheet() {
return (
    <div style={{
        padding: "30px"
        
      }}>
        <iframe 
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQrvHKOw4-CrKRRj7BXzdaBu-vfxbn_TBNS6n0WJxRfHezIDu-fWohLzK_3zUJYkP1vIBrO5tUsZIMX/pubhtml?widget=true&amp;headers=false" 
        width="100%" height="500vh"
        

        >
        </iframe>
    </div>
)
}

function Schedule() {
    return (
        <div>
            <Text />
            <GoogleSheet />
        </div>
    )
}

export default Schedule;