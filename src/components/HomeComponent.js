import React from "react";
//import CampfireBG from "/images/CampfireBG.jpg"

function Home() {
  function HeaderText() {

const styles = {
  main: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  date: {
    textAlign: "center"
  }
}

    return (
      <div>
        <div className="container">
            <div className="row">
              <div className="mx-auto">
        <h1 style={styles.main}>Kingdom Man</h1>
        <h4 style={styles.date}>Jan 1st - 3rd. 2022</h4>
        <h4 style={styles.date}>94-877 Lumiaina St, Waipahu, HI 96797 </h4>
              </div>
            </div>
          </div>
      </div>
    );
  }

  function RegisterBtn() {
    function RegisterRoute() {
      return (
        <div>

        </div>
      )
    }


    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', padding: "80px"}}>
          <button className="btn btn-danger" onClick={RegisterRoute()} >Activate Lasers</button>
      </div>
    );
  }

    return(
      <div
        >
        <HeaderText />
        <RegisterBtn />
      </div>
    )
}

export default Home;
