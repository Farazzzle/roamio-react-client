import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Button } from "@mui/material";

import "../styles/UserAvatar.css";

/* Built with https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks */

export const UserAvatar = () => {
	const dropdownRef = useRef(null);
	const [isActive, setIsActive] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const onClick = () => setIsActive(!isActive);

	const checkUserLogin = () => {
		if (isLoggedIn) {
			return (
				<div>
					<li>
						<Button
							style={{
								padding: "0.75rem",
								textTransform: "none",
								fontSize: "1rem",
								color: "black",
								width: "100%",
							}}
						>
							View Profile
						</Button>
					</li>
					<li>
						<NavLink to="/">Settings</NavLink>
					</li>
					<li>
						<NavLink to="/" style={{ color: "red" }}>
							Log Out
						</NavLink>
					</li>
				</div>
			);
		} else {
			return (
				<div>
					<li>
						<NavLink to="/">Log In</NavLink>
					</li>
					<li>
						<NavLink to="/">Register</NavLink>
					</li>
				</div>
			);
		}
	};

	return (
		<div className="menu-container">
			<button onClick={onClick} className="menu-trigger">
				<span>User</span>
				<Avatar
					src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
					alt="User Avatar"
				/>
			</button>
			<div ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
				{checkUserLogin()}
			</div>
		</div>
	);
};
