import React from "react";
import Carousel from "react-bootstrap/Carousel";
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

//import kenobi from "./src/images/kenobi.jpg"

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
            src="https://assets3.thrillist.com/v1/image/2928355/1536x1024/crop;webp=auto;jpeg_quality=60;progressive.jpg"
            alt="Obi-Wan"
          />
          <CardBody>
            <b>
              <CardTitle>Obi-Wan Kenobi</CardTitle>{" "}
            </b>
            <CardSubtitle>the Negotiator. </CardSubtitle>
            <CardText>
              Coming all the way from Ewa beach is Pastor _____
            </CardText>
            <Button>Pastor _____</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/12/One-Punch-Man-Saitama-Says-OK.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
            alt="Saitama"
          />
          <CardBody>
            <b>
              <CardTitle>Saitama</CardTitle>{" "}
            </b>
            <CardSubtitle>Caped Baldy</CardSubtitle>
            <CardText>
              Coming all the way from Ewa beach is Pastor _____
            </CardText>
            <Button>Pastor _____</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://preview.redd.it/qwwri9fw4b471.png?width=853&format=png&auto=webp&s=43739004a428a020f95d7334e808d007f1394e68"
            alt="Bokuto"
          />
          <CardBody>
            <b>
              <CardTitle>Oikawa</CardTitle>{" "}
            </b>
            <CardSubtitle>The Great King</CardSubtitle>
            <CardText>
              Coming all the way from Ewa beach is Pastor _____
            </CardText>
            <Button>Pastor _____</Button>
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