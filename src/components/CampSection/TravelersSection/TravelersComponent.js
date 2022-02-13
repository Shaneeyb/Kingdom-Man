import React, { Component } from 'react';

function TravelersNav() {
    return (
        <div>
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
        </div>
    )
}

export default TravelersNav;