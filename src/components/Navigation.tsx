import { NavLink } from "react-router-dom";
import { Activities } from "../pages/Activties";
import "../styles/Navigation.css";

export const NavigationPanel = () => {
	return (
		<div>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink to="/" className="nav-logo">
						Roamio
					</NavLink>
					<li className="nav-item">
						<NavLink to="/activities" className="nav-links">
							Activities
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/questions" className="nav-links">
							Questions
						</NavLink>
					</li>
				</div>
			</nav>
		</div>
	);
};
