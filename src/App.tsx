import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./containers/Navbar";
import {Footer} from './containers/Footer';
import  {HomePage}  from "./pages/HomePage";
import  {ContactUs}  from "./pages/ContactUs";
import {AboutUsPage} from './pages/AboutUsPage';


function App() {
	return (
		<div className="App">
			<div className="blue_background">
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/contactUs" element={<ContactUs />} />
						<Route path="/about-us" element={<AboutUsPage />} />
					</Routes>
          <Footer />
				</Router>
			</div>
		</div>
	);
}

export default App;
