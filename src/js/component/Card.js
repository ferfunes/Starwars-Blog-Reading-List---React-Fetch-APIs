import React from "react";

export class Card extends React.Component {
	constructor() {
		super();

		this.state = {
			planet: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/planets/")
			.then(response => response.json())
			.then(data => {
				let { planet } = this.state;
				planet.planets = data.results;
				this.setState({ planet: data.results[0] });
				console.log(data);
			});
	}
	render() {
		return (
			<div className="card col-lg-3 col-md-6 mb-4 ">
				<div className="card-body">
					<h5 className="card-title">Planets</h5>
					<h6 className="card-subtitle mb-2 text-muted">
						Name: {this.state.planet.name}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Terrain: {this.state.planet.terrain}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Climate: {this.state.planet.climate}
					</h6>
				</div>
			</div>
		);
	}
}
