import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationPanel } from "./components/Navigation";
import { Homepage } from "./pages/HomePage";
import { Activities } from "./pages/Activties";
import { Questions } from "./pages/Questions";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<NavigationPanel />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/activities" element={<Activities />} />
					<Route path="/questions" element={<Questions />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
