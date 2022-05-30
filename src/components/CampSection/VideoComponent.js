import React from "react";


function KMVideo() {
  return (
    <div>
      <div
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/328889318?h=7476b833b8&title=0&byline=0&portrait=0"
          frameBorder="0"
          allow="autoplay fullscreen picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            borderRadius: "25px",
            boxShadow: "0 0 10px rgba(0,0,0,0.63)",
          }}
          title="Kingdom Man Camp 2019 Recap"
        ></iframe>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div>
      <p
        style={{
          padding: "20px",
          borderBottom: ".5px solid white"
        }}
      >
        Kingdom Man Ministry at Inspire Church is leading the way in Hawaii to
        reach men and teach them how to live an authentic life as Jesus did. We
        partner with the Men’s 33 Series to equip each man with the necessary
        tools to help them discover what it means to live with a generational
        vision.
      </p>
    </div>
  );
}

function Video() {
  return (
    <div>
      <KMVideo />
      <Text />
    </div>
  );
}

export default Video;
