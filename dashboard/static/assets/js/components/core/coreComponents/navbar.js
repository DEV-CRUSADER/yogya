import React, { useState, useEffect } from "react";
import {
	BrowserRouter as BrowserRouter,
	HashRouter,
	Route,
	Link,
	useLocation,
} from "react-router-dom";

import { APICaller } from "../../common/scripts/server";
import { notyf } from "../../common/utils/notfy";
import { TabTitle } from "../scripts/general_function";

//importing css
import "../../../../../css/initial_style.css";
import "../../../../../css/navbar.css";


export function Navbar() {

	const currentLocation = useLocation();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState("");

	useEffect(() => {
		CheckLogin();
	}, []);

	if (currentLocation.pathname === "/"){
		TabTitle("Scoop Investment");
	} else if (currentLocation.pathname === "/resources"){
		TabTitle("SI | Resources");
	} else if (currentLocation.pathname === "/mutual-funds"){
		TabTitle("SI | Mutual Funds");
	} else if (currentLocation.pathname === "/contact"){
		TabTitle("SI | Contact");
	}

	function CheckLogin() {
		APICaller.CheckLoginStatusAPI().then((response) => {
			if (response.status === true) {
				setIsLoggedIn(true);
				setUserName(capitalizeEachWord(response.username));
			}
		});
	}

	function LogoutUser() {
		APICaller.LogoutUserAPI().then((response) => {
			if (response.status === true) {
				setIsLoggedIn(false);
				setUserName("");
				notyf.success("Logged Out SuccessFully")
			}
		})
	}

	const capitalizeEachWord = (str) => {
		return str
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	const nav_links = [
		{
			to: "/",
			label: "Home",
		},
		{
			to: "/resources",
			label: "Resources",
		},
		{
			to: "https://scoopinvestment.substack.com",
			label: "Blog",
		},
		// {
		//   to: "/mutual-funds",
		//   label: "Mutual Funds",
		// },
		{
			to: "/contact",
			label: "Contact Us",
		},
	];

	const handleLinkClick = () => {
		const device_links = document.getElementById("navbarSupportedContent");
		device_links.classList.remove("show");
	};

	return (
		<>
			<nav
				className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
				style={{
					background: "#000",
					boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
				}}
			>
				<div className="container-fluid px-4">
					<Link
						className="navbar-brand text-decoration-none" to="/"
						style={{
							fontWeight: "bold",
							fontFamily: "Lora"
						}}>
						<div className="d-flex flex-column align-items-center px-3"
							style={{
								color: "var(--secondary-color)"
							}}
						>
							<span style={{
								fontFamily: "DelicateSans",
								fontSize: "1.7rem"
							}}>SCOOP</span>
							<span style={{
								marginTop: "-10px",
								fontFamily: "DelicateSans",
								fontSize: "1.3rem"
							}}>INVESTMENT</span>
						</div>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							{nav_links.map((link, index) => (
								<Link
									key={link.to}
									className={`nav-link custom-nav-link text-decoration-none text-dark
										${currentLocation.pathname === link.to ? "active_tab" : ""
										}`}
									to={link.to}
									onClick={() => handleLinkClick(index)}
									target={link.to.startsWith("http") ? "_blank" : ""}
								>
									{link.label}
								</Link>
							))}
						</ul>
						{(!isLoggedIn) ? (
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
								<li className="nav-but px-1">
									<Link className="btn btn-self text-decoration-none" to="/register">
										Sign up
									</Link>
								</li>
								<li className="nav-but px-1">
									<Link className=" btn text-decoration-none btn-core-primary-outline" to="/login">
										login
									</Link>
								</li>
							</ul>
						) : (
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
								<div className="dropdown">
									<Link
										className="btn dropdown-toggle text-decoration-none text-center user-btn px-3 py-2"
										to="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{userName}&nbsp;
										<span className="p-1 rounded-circle border border-2">
											<i className="fa-solid fa-user"></i>
										</span>
									</Link>

									<ul className="dropdown-menu" style={{
										width: "150px",
									}} aria-labelledby="dropdownMenuLink">
										<li>
											<span 
												className="dropdown-item text-decoration-none text-center text-danger" 
												onClick={() => LogoutUser()}
												style={{
													cursor: "pointer"
												}}
											>
												Logout&nbsp;<i className="fa-solid fa-right-from-bracket"></i>
											</span>
										</li>
									</ul>
								</div>
							</ul>
						)}
					</div>
				</div>
			</nav>

		</>
	);
}