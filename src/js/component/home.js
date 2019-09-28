import React from "react";
import { NavBar } from "./NavBar.js";
import { Card } from "./Card.js";

//include images into your bundle

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<NavBar />
				<Card />
			</div>
		);
	}
}
