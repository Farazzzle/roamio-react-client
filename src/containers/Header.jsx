import React from "react";
import globe from "../assets/travel_globe.png";
import "../stylesheets/header.css";

const Header = () => (
	<div className="gpt3__header section__padding" id="home">
		<div className="gpt3__header-content">
			<h1 className="gradient__text">Plan your travel with activities recommended just for YOU.</h1>
			<p>
				Don't know what to do on your holiday or vacation? Roamio is here just for you. Simply answer some
				questions on the questions page so we have an idea of what you like, then go to recommendations page and
				Ta-Da, the activities shown will be based on your answers. The more questions you answer, the better the
				recommendations. Happy travelling!
			</p>
		</div>

		<div className="gpt3__header-image">
			<img src={globe} alt="globe" />
		</div>
	</div>
);

export default Header;
