import React from "react";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<a className="navbar-brand">Navbar</a>
			<form className="form-inline">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
			</form>
		</nav>
	);
};
