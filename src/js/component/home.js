import React from "react";
import { NavBar } from "./NavBar.js";
import { Planets } from "./Planets.js";
import { Characters } from "./Characters.js";
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

						<Planets className="planet1" />

						<Planets className="planet2" />

						<Planets className="planet3" />
					</div>
				</div>
				<hr className="hr-top" />
				<p className="pText">People</p>
				<hr className="hr-bottom" />

				<div className="container">
					<div className="row">
						<Characters className="Character0" />

						<Characters className="Character1" />

						<Characters className="Character2" />

						<Characters className="Character3" />
					</div>
				</div>
				<div className="Footer-cont">
					<Footer />
				</div>
			</div>
		);
	}
}
