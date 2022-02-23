import React from 'react';
//import Flexbox from 'flexbox-react';

// width="100%" height="500"
//Flexbox flexDirection='column' minWidth='100%' minHeight='500'
//Flexbox flexGrow={1} minWidth="100%"
/* 
div style={{
            width:100%,
            display: flex,
            justify-content: center,
            flex: "auto",
            flexGrow: "1",
            flexDirection: "column"

        }}>
*/

function KMVideo() {
    return (
        <div className="container h-100">
            <div>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/328889318?h=7476b833b8" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}


function Text() {
    return (
        <div>
            <p style={{
        padding: "30px"
      }}>
            Kingdom Man Ministry at Inspire Church is leading the way in Hawaii to reach men and teach them how to live an authentic life as Jesus did. We partner with the Men’s 33 Series to equip each man with the necessary tools to help them discover what it means to live with a generational vision.
            </p>
        </div>
    )
}

function Video() {
    return (
        <div>
            <KMVideo />
            <Text />
        </div>
    )
}

export default Video;