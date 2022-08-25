import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="gpt3__navbar">
			<div className="gpt3__navbar-links">
				<div className="gpt3__navbar-links_logo">
					<img alt="Logo Here" />
					{/* <img src={logo} alt="Logo" /> */}
				</div>
				<div className="gpt3__navbar-links_container">
					<NavLink
						to="/"
						style={({ isActive }) => ({
							borderBottom: isActive ? "#ff4820 solid 2px" : "",
						})}
						className="nav_item"
					>
						Home
					</NavLink>
					<NavLink
						to="/recommendations"
						className="nav_item"
						style={({ isActive }) => ({
							borderBottom: isActive ? "#ff4820 solid 2px" : "",
						})}
					>
						Recommendations
					</NavLink>
					<NavLink
						to="/questions"
						style={({ isActive }) => ({
							borderBottom: isActive ? "#ff4820 solid 2px" : "",
						})}
						className="nav_item"
					>
						Questions
					</NavLink>
				</div>
			</div>
			<div className="gpt3__navbar-sign">
				<button type="button" style={{ color: "black", background: "#fff" }}>
					Sign In
				</button>
				<button type="button">Sign up</button>
			</div>
			<div className="gpt3__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
				) : (
					<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
				)}
				{toggleMenu && (
					<div className="gpt3__navbar-menu_container scale-up-center">
						<div className="gpt3__navbar-menu_container-links-sign">
							<button type="button" className="sign_in_button">
								Sign In
							</button>
							<button type="button">Sign up</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
