import Header from "../containers/Header";
import WhatGPT3 from "../containers/WhatGPT3";

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
