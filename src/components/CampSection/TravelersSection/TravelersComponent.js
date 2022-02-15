import React from "react";
import { Tabs, Tab } from "react-bootstrap";

// Use Tab Components!!!!!!!

function TravelersNav() {
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </div>
  );
}

export default TravelersNav;

/*
<Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/InfoComponent">Info</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/HotelsComponent">Hotels</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/TransportationComponent">Transportation</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/CovidComponent">Covid</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/FAQComponent">FAQ</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
*/
