import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";
import { RecommendationsPage } from "./pages/RecommendationsPage";
import { QuestionsPage } from "./pages/QuestionsPage";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="blue_background">
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/recommendations" element={<RecommendationsPage />} />
						<Route path="/questions" element={<QuestionsPage />} />
					</Routes>
				</Router>
			</div>
		</div>
	);
}

export default App;
