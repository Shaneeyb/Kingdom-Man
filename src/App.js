import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainComponent';
import"./index.css"
//import HomeComponent from "./components/homeComponent.js"


function App() {
return (
	<div style={{
		backgroundImage: `url("https://images.unsplash.com/photo-1470549584009-d347338fc0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80")`, 
		backgroundPosition: 'bottom',
		backgroundAttachment: "fixed",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: 'auto'
	}}>
		<Main />
	</div>
);
}

export default App;
