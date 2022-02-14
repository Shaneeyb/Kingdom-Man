import React from 'react';

function KMVideo() {
    return (
        <div>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/328889318?h=7476b833b8" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        </div>
    )
}

function Text() {
    return (
        <div>
            <h3>
            Kingdom Man Ministry at Inspire Church is leading the way in Hawaii to reach men and teach them how to live an authentic life as Jesus did. We partner with the Men’s 33 Series to equip each man with the necessary tools to help them discover what it means to live with a generational vision.
            </h3>
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