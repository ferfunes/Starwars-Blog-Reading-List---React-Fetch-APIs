import React from "react";

//////////PLanet1 alderaan

export class Planets extends React.Component {
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
			<div className="card-planets card col-lg-3 col-md-6  ">
				<div className="card-body">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=768"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
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

//////////PLanet2 yavin4

export class Planets2 extends React.Component {
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
				this.setState({ planet: data.results[1] });
				console.log(data);
			});
	}
	render() {
		return (
			<div className="card-planets card col-lg-3 col-md-6  ">
				<div className="card-body">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=768"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
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
//////////PLanet3 Dagobah

export class Planets3 extends React.Component {
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
				this.setState({ planet: data.results[3] });
				console.log(data);
			});
	}
	render() {
		return (
			<div className="card-planets card col-lg-3 col-md-6  ">
				<div className="card-body">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711&width=768"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
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

//////////Planet4 Bespin

export class Planets4 extends React.Component {
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
				this.setState({ planet: data.results[4] });
				console.log(data);
			});
	}
	render() {
		return (
			<div className="card-planets card col-lg-3 col-md-6  ">
				<div className="card-body">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878&width=768"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
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
