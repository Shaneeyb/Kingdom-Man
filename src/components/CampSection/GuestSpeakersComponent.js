import React, { Component } from 'react';

function Title() {
    return (
        <h2>Guest Speakers</h2>
    )
}

function Carousel() {
    return (
        <div>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=f5f5f5"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Obi-Wan Knobi</h5>
      <p>He is the greatest of all times. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=eee"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Anikin Skywalker</h5>
      <p>Spoiler, he turns to the dark side.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=e5e5e5"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>R2D2</h5>
      <p>Cheeky astromech.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

function GuestSpeakers() {
    return (
        <div>
            <Title />
            <Carousel />
        </div>
    )
}

export default GuestSpeakers;