import React from "react";

export const NavBar = () => {
	return (
		<nav className="navbar container-fluid ">
			<div className="logo-cont">
				<img
					className="logo"
					src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black-700x700.png"
				/>
			</div>
			<div className="form-cont">
				<div className="social-cont ">
					<i className=" facebook fab fa-facebook" />
					<i className=" twitter fab fa-twitter-square" />
					<i className=" instagram fab fa-instagram" />
				</div>
				<form className="form-inline">
					<input
						className="input form-control mr-sm-2"
						type="search"
						placeholder="Search Star Wars "
						aria-label="Search"
					/>
				</form>
			</div>
		</nav>
	);
};
