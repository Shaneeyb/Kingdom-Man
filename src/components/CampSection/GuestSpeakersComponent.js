import React from "react";
import { Carousel } from "react-bootstrap";
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
  return (
    <h2
      style={{
        padding: "10px",
        textAlign: "center",
      }}
    >
      Guest Speakers
    </h2>
  );
}

function Pictures() {
  return (
    <div>
      <Carousel
        controls={false}
        interval={null}
        style={{
          padding: "20px",
          borderBottom: ".5px solid white",
        }}
      >
        <Carousel.Item>
            <div className="containerImg" style={{width:"100%", height: "300px"}} />
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://content.thriveglobal.com/wp-content/uploads/2021/09/Kai.jpeg"
              alt="Obi-Wan"
              className="containerImg"
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
              >
                Pastor Mike Kai
              </Button>
            </CardBody>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
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
              >
                Pastor Mike Kai
              </Button>
            </CardBody>
          </Card>
        </Carousel.Item>
      </Carousel>
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

/*
<Card
            style={{
              borderRadius: "25px",
            }}
          >
            <CardImg
              style={{
                borderRadius: "25px",
              }}
              top
              width="100%"
              src="https://content.thriveglobal.com/wp-content/uploads/2021/09/Kai.jpeg"
              alt="Obi-Wan"
            />
          </Card>
 */
