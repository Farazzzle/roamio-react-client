import Header from "../containers/header/Header";
import WhatGPT3 from "../containers/whatGPT3/WhatGPT3";

export function HomePage() {
	return (
		<div>
			<div className="blue_background">
				<Header />
			</div>
			<WhatGPT3 />
		</div>
	);
}
