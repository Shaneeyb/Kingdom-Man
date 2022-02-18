import React from "react";
import { Carousel } from "react-bootstrap";
//import Car from "./Images/Car.png"
//import USVetsLogo from "./Images/USVetsLogo.png"

function TopText() {

  const style = {
    h1: {
      textAlign: "center",
      padding: "30px 80px",
    },
    p: {
      textAlign: "center",
      padding: "20px 80px",
    },
  };

    return (
        <div>
            <h1 style={style.h1}>Who We Are</h1>

            <p style={style.p}>
            Kingdom Man Ministry at Inspire Church is leading the way in Hawaii to reach men and teach them how to live an authentic life as Jesus did. We partner with the Men’s 33 Series to equip each man with the necessary tools to help them discover what it means to live with a generational vision.
            </p>
        </div>
    )
}

function Pictures() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/5a7cc3b0914e6b8d66356df6/1583451774613-OL9YXDIHB6FEG3QZ36O0/eb4efec1-93e1-4f07-83b5-cf77faab8ff3.JPG?format=2500w"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/5a7cc3b0914e6b8d66356df6/1583451775696-EPSMZ8MWQ5Z1I636MP2W/fa49ebc6-2d4a-4c69-a30d-35a856f89567.JPG?format=2500w"
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/5a7cc3b0914e6b8d66356df6/1583451774420-D8G3WTZM49LVPTOA0YO3/d27fc804-6acc-468c-9116-57deddfaa3e9.JPG?format=2500w"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/5a7cc3b0914e6b8d66356df6/1583451772788-6V7WKVV6SKMIUV3PQVK5/303d85b4-4d4c-44f7-8b13-458134003078.JPG?format=2500w"
      alt="Fourth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/5a7cc3b0914e6b8d66356df6/1583451763831-Z4V0OZVNOZF2E8T1A4NW/8f3c2011-297e-42ea-bb98-c8a98ebe04ab.JPG?format=2500w"
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}

function BottomText() {

  const style = {
    h2: {
      textAlign: "center",
      padding: "30px 80px",
    },
    p: {
      textAlign: "center",
      padding: "20px 80px",
    },
  };



    return (
        <div>
            <h2 style={style.h2}>Our Mission</h2>

            <p style={style.p}>
            The mission of Kingdom Man Ministry is to inspire men to live with generational vision; we do that in three steps. Reach Men, Foster Discipleship, and Live like Jesus. 
            </p>
        </div>
    )
}

function Partners() {
    return (
        <div>
            
        </div>
    )
}

function About () {
    return (
        <div>
            <TopText />
            <Pictures />
            <div
            style={{
          padding: "40px",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          color: "black"
        }}>
            <BottomText />
            </div>
            <Partners />
        </div>
    )
}

export default About;