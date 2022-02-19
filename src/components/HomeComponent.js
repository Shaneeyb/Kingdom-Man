import React from "react";
import Register from "./RegisterComponent";
//import CampfireBG from "/images/CampfireBG.jpg"
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  function HeaderText() {
    const styles = {
      main: {
        textAlign: "center",
        fontWeight: "bold",
        padding: "40px",
        fontSize: "60px"
      },
      date: {
        textAlign: "center",
        padding: "none"
      },
    };

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="mx-auto">
              <h1 style={styles.main}>Kingdom Man</h1>
              <h4 style={styles.date}>Jan 1st - 3rd. 2022</h4>
              <h4 style={styles.date}>
                94-877 Lumiaina St, Waipahu, HI 96797{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
 

/*
  style={{
            textAlign: "center",
            padding: "3vh",
            border: "none",
            height: "80px",
            width: "300px",
            fontSize: "60px",
            justifyContent: "center",
          }}
*/

  function RegisterBtn() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
        }}
      >
        <button
          className="btn btn-danger"
          onClick={() => navigate("/RegisterComponent")}
          style={{
            padding: "3vh",
            border: "none",
            height: "80px",
            width: "300px",
            fontSize: "60px",
            textAlign: "center"

          }}
        >
          Register
        </button>
      </div>
    );
  }

  return (
    <div>
      <HeaderText />
      <RegisterBtn />
    </div>
  );
}

export default Home;
