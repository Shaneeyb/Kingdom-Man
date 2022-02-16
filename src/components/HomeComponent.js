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
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <button class="btn btn-danger" onClick="activateLasers()">Activate Lasers</button>
        
      </div>
    );
  }

    return(
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1470549584009-d347338fc0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80")`,
          padding: '100px 0', 
          height: "100vh",
          width: '100vw',
          backgroundPosition: "center center no-repeat",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        >
        <HeaderText />
        <RegisterBtn />
      </div>
    )
}

export default Home;
