import React from "react";
import PropTypes from "prop-types";

export class Planets extends React.Component {
	render(props) {
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
						Name: {this.props.name}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted" />
					<h6 className="card-subtitle mb-2 text-muted" />
				</div>
			</div>
		);
	}
}

Planets.propTypes = {
	name: PropTypes.string
};
