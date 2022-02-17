import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
//import kenobi from "./src/images/kenobi.jpg"

function Title() {
    return (
        <h2>Guest Speakers</h2>
    )
}

function Pictures() {
    return (
        <div style={{
          padding: "40px"
        }}>
            <Carousel variant="light">
  <Carousel.Item>
    <img
    src="https://assets3.thrillist.com/v1/image/2928355/1536x1024/crop;webp=auto;jpeg_quality=60;progressive.jpg" 
    alt="Obi-Wan"
      className="d-block w-100"
    />
    <Carousel.Caption>
      <h5>Obi-Wan Kenobi</h5>
      <p>The greatest of all times!!!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/12/One-Punch-Man-Saitama-Says-OK.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5" 
     alt="Saitama" 
      className="d-block w-100"
    />
    <Carousel.Caption>
      <h5>Saitama</h5>
      <p>Aka, One Punch Man</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    src="https://preview.redd.it/qwwri9fw4b471.png?width=853&format=png&auto=webp&s=43739004a428a020f95d7334e808d007f1394e68"
    alt="Bokuto"
      className="d-block w-100"
    />
    <Carousel.Caption>
      <h5>Oikawa</h5>
      <p>The Great King.</p>
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
            <Pictures />
        </div>
    )
}

export default GuestSpeakers;