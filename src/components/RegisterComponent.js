import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";


function Register() {

    const style = {
        h1: {
          textAlign: "center",
          padding: "40px 80px",
        },
        h3: {
          textAlign: "center",
          padding: "10px 80px",
        },
      };

      

  return (
    <div>
      <div>
        <h1 style={style.h1}>Sign Up!</h1>
        <p style={style.h3}>
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
              <Form.Control
                type="email"
                placeholder="MySuperGreatEmailAddress@example.com"
              />
            </Form.Group>
            <Form.Group controlId="form.Textarea">
              <Form.Label>Inspire Location</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Tatooine" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Register;