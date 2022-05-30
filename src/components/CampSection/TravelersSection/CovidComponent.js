import React, { useState } from "react";

function Text() {
    return (
      <div
        style={{
          padding: "20px",
        }}
      >
        <b>
          <h2
            style={{
              padding: "5px",
              textAlign: "center",
            }}
          >
            COVID
          </h2>
        </b>
        <p
          style={{
            padding: "10px",
          }}
        >
          As you may or may not know, Hawaii is taking covid very seriously.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h5
          style={{
            padding: "10px",
          }}
        >
          Do I have to be vaccinated to attend Kingdom Man?
        </h5>

        <p>
          Yes. In order of hawaii state law, you must show proof of vaccination
          card as well of ID. We will check these when we check your ticket.
        </p>

        <h5
          style={{
            padding: "10px",
          }}
        >
          How does the travel system work during covid?
        </h5>

        <p>
          When traveling from outside the state of Hawaii, you will be required
          to fill out the Safe travels requirements
          <b>
            <a href="https://travel.hawaii.gov/#/">HERE </a>
          </b>
          or go to the website, https://travel.hawaii.gov/#/. For more
          information, check out
          <b>
            <a href="https://www.gohawaii.com/travel-requirements">THIS</a>
          </b>
          website. https://www.gohawaii.com/travel-requirements.
        </p>
        <h5
          style={{
            padding: "10px",
          }}
        >
          If you have any questions regarding the covid policies, ask them in
          the form below.
        </h5>
      </div>
    );
}

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="btn btn-primary"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};


function Covid() {
    return (
        <div>
            <Text />
            <ContactForm />
        </div>
    )
}


export default Covid;