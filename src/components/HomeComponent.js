import React from "react";
import { WidgetContainer } from "../WidgetContainer";
import { useState, useEffect} from "react";


function Home() {
  function HeaderText() {
    const styles = {
      main: {
        textAlign: "center",
        fontWeight: "bold",
        padding: "40px",
        fontSize: "60px",
      },
      date: {
        textAlign: "center",
        padding: "none",
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
        <a href="https://inspirechurch.brushfire.com/arise-2023/527463">
          <button
            className="btn btn-danger"
            style={{
              padding: "1rem 1rem",
              border: "none",
              width: "300px",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            Register
          </button>
        </a>
      </div>
    );
  }


  //this is for the iframe for the widget vv

  const [license, setLicense] = useState("");
  const [greeting, setGreeting] = useState();
  
  useEffect( () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); // doesn't work in IE, but who cares ;)
    const license = urlParams.get("license");
    setLicense(license);
  },[]);

  useEffect(() => {

    const handleMessage = evt => {
      if ( "greeting" in evt.data ) {
        setGreeting(evt.data.greeting);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);

  },[setGreeting]);

   //this is for the iframe for the widget ^^



  return (
    <div>
      <HeaderText />
      <RegisterBtn />
      <div
        style={{
          backgroundColor: "red",
          margin: "0",
          padding: "10",
          position: "fixed",
          bottom:"0",
          right:"0",
          width: "30%",
          height: "300px",
        }}
      >
        <WidgetContainer license={license} greeting={greeting} />
      </div>
    </div>
  );
}

export default Home;
