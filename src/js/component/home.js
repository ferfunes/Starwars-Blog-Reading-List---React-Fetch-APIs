import React from "react";
import { NavBar } from "./NavBar.js";
import { Card } from "./Card.js";

//include images into your bundle

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json
				});
			});
	}

	render() {
		let { isLoaded, items } = this.state;

		if (!isLoaded) {
			return <div> Loading...</div>;
		} else {
			return (
				<div className="home">
					<NavBar />
					<Card />
					<ul>
						{items.map(data => (
							<li key={data.name}>
								Name: {data.name} | Mass: {data.email}
							</li>
						))}
					</ul>
				</div>
			);
		}
	}
}
