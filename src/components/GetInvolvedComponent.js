import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

function Join() {
  const style = {
    h1: {
      textAlign: "center",
    },
    h3: {
      textAlign: "center",
      padding: "10px",
    },
  };

  let navigate= useNavigate();

  return (
    <div>
      <h3 style={style.h3}>Become Who you Were Created to Be</h3>

      <h4 style={style.h3}>Join a Men's 33 group</h4>

      <p style={style.h3}>
        You were not meant to live this life alone. By joining a men’s group,
        you will take the first step in connecting with other like-minded men
        who will keep you accountable on your journey to living with Authentic
        Manhood.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
          borderBottom: ".5px solid white",
        }}
      >
        <a href="https://inspirechurch.brushfire.com/arise-2023/527463">
          <button
            className="btn btn-danger"
            onClick={() => navigate("/RegisterComponent")}
          >
            Register
          </button>
        </a>
      </div>
    </div>
  );
}



function BottomTextAndForm() {
  const style = {
    h1: {
      textAlign: "center",
      paddingTop: "20px"
    },
    h3: {
      padding: "20px",
    },
  };

  return (
    <div>
      <div>
        <h1 style={style.h1}>Get Involved!</h1>
        <p style={style.h3}>
          LIFE IS BETTER TOGETHER. WHETHER IT’S WITH A STRONG CONNECT GROUP OF
          MEN GROWING IN FAITH TOGETHER, OR A POWERFUL SERVICE OR CAMP WITH
          INCREDIBLE SPEAKERS, WE BELIEVE GOD HAS A UNIQUE AND PURPOSEFUL WILL
          FOR EACH MAN TO FULFILL - AND WE WANT TO HELP YOU DISCOVER IT!
        </p>
      </div>
      <div>
        <Container>
          <Form style={{
              padding: "20px"
            }}>
            <Form.Group controlId="form.Name" >
              <Form.Label style={style.form} >Name</Form.Label>
              <Form.Control type="text" placeholder="First & Last" />
            </Form.Group>
            <Form.Group controlId="form.Email">
              <Form.Label style={style.form} >Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email@example.com"
              />
            </Form.Group>
            <Form.Group controlId="form.Textarea">
              <Form.Label style={style.form} >Inspire Location</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Waikele" />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

function GetInvolved() {
  return (
    <div>
      <h1
        style={{
          padding: "10px",
          textAlign: "center",
        }}
      >
        {" "}
        Get Involved!{" "}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          classname="container"
          style={{
            position: "relative",
            justifyContent: "center",
            backgroundAttachment: "fixed",
            boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .5)",
            backdropFilter: "blur(5px)",
            backgroundColor: "#6c757d4d",
            width: "90%",
            textAlign: "left",
            padding: "10px 10px",
            top: "10px",
            borderRadius: "25px",
            marginBottom: "110px",
          }}
        >
          <Join />
          <BottomTextAndForm />
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
