import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		<>
			<div className="box">
				<div className="counter">
					<i className="far fa-clock fa-6x" />
				</div>

				<div className="counter">
					<h1>Horas</h1>
					<h1>{props.hours}</h1>
				</div>
				<div className="counter">
					<h1>Minutos</h1>
					<h1>{props.mins}</h1>
				</div>
				<div className="counter">
					<h1>Segundos</h1>
					<h1>{props.seconds}</h1>
				</div>
			</div>
		</>
		/*<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>*/
	);
}
