//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

let secondsCounter = 0;
let minsCounter = 0;

let mins = 0;
let hours = 0;

setInterval(function() {
	secondsCounter += 1;
	minsCounter += 1;

	if (secondsCounter % 60 == 0) {
		mins += 1;
		secondsCounter = 0;
	}
	if (minsCounter % 3600 == 0) {
		hours += 1;
		mins = 0;
		minsCounter = 0;
	}
	ReactDOM.render(
		<Home seconds={secondsCounter} mins={mins} hours={hours} />,
		document.querySelector("#app")
	);
}, 1 * 1000);
