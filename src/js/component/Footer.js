import React from "react";

export const Footer = () => {
	return (
		<footer className="page-footer font-small cyan darken-3">
			<div className="social-cont mb-5 text-center">
				<i className=" facebook fab fa-facebook" />
				<i className=" twitter fab fa-twitter-square" />
				<i className=" instagram fab fa-instagram" />
			</div>

			<div className="footer-cr footer-copyright text-center py-3">
				© 2019 Copyright:
				<a href="https://mdbootstrap.com/education/bootstrap/">
					{" "}
					FernandoFunez.com
				</a>
			</div>
		</footer>
	);
};
