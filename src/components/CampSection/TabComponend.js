import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function TravelersTab() {

  return (
    <div style={{}}>
      <Tabs
        defaultActiveKey="info"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="info" title="Info">
          <h2 style={{
            textAlign: "center"
          }}>General Information</h2>
          <p
            style={{
              padding: "10px",
              borderBottom: ".5px solid white",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Tab>
        <Tab eventKey="covid" title="Covid">
          <h2
            style={{
              padding: "10px",
              textAlign: "center",
            }}
          >
            COVID
          </h2>
          <div
            style={{
              padding: "10px",
            }}
          >
            <p
              style={{
                textAlign: "center",
              }}
            >
              As you may or may not know, Hawaii is taking covid very seriously.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h5>- Do I have to be vaccinated to attend Kingdom Man?</h5>

            <p>
              Yes. In order of hawaii state law, you must show proof of
              vaccination card as well of ID. We will check these when we check
              your ticket.
            </p>

            <h5
              style={{
                paddingBottom: "10px",
                borderBottom: ".5px solid white",
              }}
            >
              If you have any questions regarding the covid policies, ask them
              in the form below.
            </h5>
          </div>
        </Tab>
        <Tab eventKey="hotels" title="Hotels">
          <div
            style={{
              borderBottom: ".5px solid white",
              padding: "10px",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h2>Hotels </h2>
              <h5>Name Of Hotel</h5>
              <h6>Hotel Address Here:</h6>
            </div>
            <p>
              Hotel Desc. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14858.910378855982!2d-158.001719!3d21.400628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e44ca46b2170c7a!2sInspire%20Church!5e0!3m2!1sen!2sus!4v1644614382529!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Tab>

        <Tab eventKey="faq" title="FAQ">
          <div
            style={{
              borderBottom: ".5px solid white",
              padding: "10px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
              }}
            >
              FAQ
            </h2>

            <h3>Question</h3>

            <p>Answer.</p>

            <h3>Question</h3>

            <p>Answer.</p>

            <h3>Question</h3>

            <p>Answer.</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TravelersTab;
