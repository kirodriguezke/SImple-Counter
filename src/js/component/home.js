import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	return (
		<>
			<div className="box">
				<div className="contador">
					<i className="far fa-clock fa-6x" />
				</div>

				<div className="contador">
					<h1>Horas</h1>
					<h1>{props.horas}</h1>
				</div>
				<div className="contador">
					<h1>Minutos</h1>
					<h1>{props.minutos}</h1>
				</div>
				<div className="contador">
					<h1>Segundos</h1>
					<h1>{props.seconds}</h1>
				</div>
				<button
					type="button"
					className="btn btn-outline-warning btn-lg"
					onClick={() => {
						clearInterval(loop1);
					}}>
					Stop counter
				</button>
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
