import React from "react";

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
					<h5 className="title card-title">People</h5>
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
