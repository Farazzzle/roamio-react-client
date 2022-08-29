import React from "react";
import Feature from "../components/Feature";
import "../stylesheets/whatGPT3.css";

const WhatGPT3 = () => (
	<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
		<div className="gpt3__whatgpt3-feature">
			<Feature title="How it Works?" />
		</div>
		<div className="gpt3__whatgpt3-heading">
			<h1 className="gradient__text">The possibilities are beyond your imagination</h1>
		</div>
		<div className="gpt3__whatgpt3-container">
			<Feature title="Activities" text="There are over 380,000 activities in the world for you to discover." />
			<Feature
				title="Questions"
				text="Our questions are potential activities that you could do at your destination. You just need to tell us how you feel about the activity, and we will get a better idea of what you like."
			/>
			<Feature
				title="Education"
				text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
			/>
		</div>
	</div>
);

export default WhatGPT3;
