import React from "react";
import { Carousel } from "react-bootstrap";
//import Car from "./Images/Car.png"
//import USVetsLogo from "./Images/USVetsLogo.png"

function TopText() {
    return (
        <div>
            <h1>Who We Are</h1>

            <p>
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
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

function BottomText() {
    return (
        <div>
            <h2>Our Mission</h2>

            <p>
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
            <BottomText />
            <Partners />
        </div>
    )
}

export default About;