import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


function Join() {
  return (
    <div>
      <h1> Get Involved! </h1>

      <h3>Become Who you Were Created to Be</h3>

      <h4>Join a Men's 33 group</h4>

      <p>
        You were not meant to live this life alone. By joining a men’s group,
        you will take the first step in connecting with other like-minded men
        who will keep you accountable on your journey to living with Authentic
        Manhood.
      </p>

      <button onClick="DoTheThing()">Join</button>
    </div>
  );
}

function BottomTextAndForm() {
  return (
    <div>
      <div>
        <h1>Get Involved</h1>
        <p>
          LIFE IS BETTER TOGETHER. WHETHER IT’S WITH A STRONG CONNECT GROUP OF
          MEN GROWING IN FAITH TOGETHER, OR A POWERFUL SERVICE OR CAMP WITH
          INCREDIBLE SPEAKERS, WE BELIEVE GOD HAS A UNIQUE AND PURPOSEFUL WILL
          FOR EACH MAN TO FULFILL - AND WE WANT TO HELP YOU DISCOVER IT!
        </p>
      </div>
      <div>
        <Container>
          <Form>
            <Form.Group controlId="form.Name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Obi-Wan Kenobi" />
            </Form.Group>
            <Form.Group controlId="form.Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="MySuperGreatEmailAddress@example.com" />
            </Form.Group>
            <Form.Group controlId="form.Textarea">
              <Form.Label>Inspire Location</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Tatooine"/>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
}

function GetInvolved() {
    return (
        <div>
            <Join />
            <BottomTextAndForm />
        </div>
    )
}

export default GetInvolved;
