import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserAvatar } from "./UserAvatar";

import "../styles/Navigation.css";

export const NavigationPanel = () => {
	return (
		<div>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink to="/" className="nav-logo">
						Roamio
					</NavLink>
					<div className="nav-menu">
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
						<li>
							<UserAvatar />
						</li>
					</div>
				</div>
			</nav>
		</div>
	);
};
