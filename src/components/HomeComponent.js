import React from "react";


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

  return (
    <div>
      <HeaderText />
      <RegisterBtn />
    </div>
  );
}

export default Home;
