import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    <div
      style={{
        paddingBottom: "20px",
        borderBottom: ".5px solid white",
      }}
    >
      <Swiper slidesPerView={"auto"} spaceBetween={20} className="swiper">
        <SwiperSlide className="swiper-slide">
          <img
            src="https://content.thriveglobal.com/wp-content/uploads/2021/09/Kai.jpeg"
            alt="Mike Kai"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://content.thriveglobal.com/wp-content/uploads/2021/09/Kai.jpeg"
            alt="Mike Kai"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://content.thriveglobal.com/wp-content/uploads/2021/09/Kai.jpeg"
            alt="Mike Kai"
          />
        </SwiperSlide>
      </Swiper>
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
 */
