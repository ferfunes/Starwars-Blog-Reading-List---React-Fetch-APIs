import React from "react";

//////////Character1 Luke-skywalker

export class Characters extends React.Component {
	constructor() {
		super();

		this.state = {
			character: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {
				let { character } = this.state;
				character.people = data.results;
				this.setState({ character: data.results[0] });
				console.log(data);
			});
	}
	render() {
		return (
			<div className="card-characters card col-lg-3 col-md-6  ">
				<div className="card-body">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
					<h6 className="card-subtitle mb-2 text-muted">
						Name: {this.state.character.name}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Height: {this.state.character.height}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Birth Year: {this.state.character.birth_year}
					</h6>
				</div>
			</div>
		);
	}
}

//////////Character2 C-3PO

export class Characters2 extends React.Component {
	constructor() {
		super();

		this.state = {
			character: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {
				let { character } = this.state;
				character.people = data.results;
				this.setState({ character: data.results[1] });
				console.log(data);
			});
	}
	render() {
		return (
			<div className="card-characters card col-lg-3 col-md-6  ">
				<div className="card-body">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpeg?region=0%2C1%2C1408%2C792&width=768"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
					<h6 className="card-subtitle mb-2 text-muted">
						Name: {this.state.character.name}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Height: {this.state.character.height}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Birth Year: {this.state.character.birth_year}
					</h6>
				</div>
			</div>
		);
	}
}

//////////Character3 r2-d2

export class Characters3 extends React.Component {
	constructor() {
		super();

		this.state = {
			character: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {
				let { character } = this.state;
				character.people = data.results;
				this.setState({ character: data.results[2] });
				console.log(data);
			});
	}
	render() {
		return (
			<div className="card-characters card col-lg-3 col-md-6  ">
				<div className="card-body">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpeg?region=0%2C0%2C1536%2C864&width=768"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
					<h6 className="card-subtitle mb-2 text-muted">
						Name: {this.state.character.name}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Height: {this.state.character.height}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Birth Year: {this.state.character.birth_year}
					</h6>
				</div>
			</div>
		);
	}
}

//////////Character4 Darth Vader

export class Characters4 extends React.Component {
	constructor() {
		super();

		this.state = {
			character: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {
				let { character } = this.state;
				character.people = data.results;
				this.setState({ character: data.results[3] });
				console.log(data);
			});
	}
	render() {
		return (
			<div className="card-characters card col-lg-3 col-md-6  ">
				<div className="card-body">
					<img
						src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768"
						className="card-img-top"
						alt="..."
					/>
					<h5 className="title card-title" />
					<h6 className="card-subtitle mb-2 text-muted">
						Name: {this.state.character.name}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Height: {this.state.character.height}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						Birth Year: {this.state.character.birth_year}
					</h6>
				</div>
			</div>
		);
	}
}
