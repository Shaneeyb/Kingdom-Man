import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";

function Title() {
  return <h2>Guest Speakers</h2>;
}

function Pictures() {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://content.thriveglobal.com/wp-content/uploads/2021/09/Kai.jpeg"
            alt="Obi-Wan"
          />
          <CardBody>
            <b>
              <CardTitle>Mike Kai</CardTitle>{" "}
            </b>
            <CardSubtitle>Inspire Waikele Pastor </CardSubtitle>
            <CardText>
              Coming all the way from Ewa beach is Pastor Waikele
            </CardText>
            <Button 
            href="https://www.inspirechurch.live/about/" 
            color="primary"
            >Pastor Mike Kai</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://content.thriveglobal.com/wp-content/uploads/2021/09/Kai.jpeg"
            alt="Saitama"
          />
          <CardBody>
          <b>
              <CardTitle>Mike Kai</CardTitle>{" "}
            </b>
            <CardSubtitle>Inspire Waikele Pastor </CardSubtitle>
            <CardText>
              Coming all the way from Ewa beach is Pastor Waikele
            </CardText>
            <Button 
            href="https://www.inspirechurch.live/about/" 
            color="primary"
            >Pastor Mike Kai</Button>
            </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://content.thriveglobal.com/wp-content/uploads/2021/09/Kai.jpeg"
            alt="Bokuto"
          />
          <CardBody>
          <b>
              <CardTitle>Mike Kai</CardTitle>{" "}
            </b>
            <CardSubtitle>Inspire Waikele Pastor </CardSubtitle>
            <CardText>
              Coming all the way from Ewa beach is Pastor Waikele
            </CardText>
            <Button 
            href="https://www.inspirechurch.live/about/" 
            color="primary"
            >Pastor Mike Kai</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

function GuestSpeakers() {
  return (
    <div>
      <Title />
      <Pictures />
    </div>
  );
}

export default GuestSpeakers;