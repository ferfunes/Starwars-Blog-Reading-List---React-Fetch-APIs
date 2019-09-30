import React from "react";
import { NavBar } from "./NavBar.js";
import { Planets, Planets2, Planets3, Planets4 } from "./Planets.js";
import {
	Characters,
	Characters2,
	Characters3,
	Characters4
} from "./Characters.js";
import { Footer } from "./Footer.js";

//include images into your bundle

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="navbar-cont">
					<NavBar />
				</div>
				<div>
					<hr className="hr-top" />
					<p className="pText">Planets</p>
					<hr className="hr-bottom" />
				</div>
				<div className="container">
					<div className="row">
						<Planets className="planet0" />

						<Planets2 className="planet1" />

						<Planets3 className="planet2" />

						<Planets4 className="planet3" />
					</div>
				</div>
				<div>
					<hr className="hr-top" />
					<p className="pText">People</p>
					<hr className="hr-bottom" />
				</div>

				<div className="container">
					<div className="row">
						<Characters className="Character0" />

						<Characters2 className="Character1" />

						<Characters3 className="Character2" />

						<Characters4 className="Character3" />
					</div>
				</div>
				<div className="Footer-cont">
					<Footer />
				</div>
			</div>
		);
	}
}
