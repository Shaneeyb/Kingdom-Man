import React from "react";

function TopText() {
    reutrn (
        <div>
            <h2> Who We Are</h2>

            <h3>
            Kingdom Man Ministry at Inspire Church is leading the way in Hawaii to reach men and teach them how to live an authentic life as Jesus did. We partner with the Men’s 33 Series to equip each man with the necessary tools to help them discover what it means to live with a generational vision.
            </h3>
        </div>
    )
}

function Carousel() {
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

function WhoWeAre() {
    return (
        <div>
            <TopText />
            <Carousel />
        </div>
    )
}

export default WhoWeAre;