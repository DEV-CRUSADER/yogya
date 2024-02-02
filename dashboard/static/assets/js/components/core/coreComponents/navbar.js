import React, { useState, useEffect } from "react";
import {
	BrowserRouter as BrowserRouter,
	HashRouter,
	Route,
	Link,
} from "react-router-dom";


//importing css
import { Colors } from "../../../../../css/color.css";
import { Css } from "../../../../../css/navbar.css";


export function Navbar(props) {

	const [activeTab, setActiveTab] = useState(null);

	useEffect(() => {
		const index = nav_links.findIndex((link) => link.to === location.pathname);
		setActiveTab(index);
	}, [location.pathname]);

	const nav_links = [
		{
			to: "/",
			label: "Home",
		},
		{
			to: "/resources",
			label: "Resources",
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

	const handleLinkClick = (index) => {
		setActiveTab(index);

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
				<div className="container-fluid p-2 px-4">
					<Link 
						className="navbar-brand text-decoration-none" to="/" 
						style={{ 
							fontWeight: "bold", 
							fontFamily: "Lora" 
						}}>
						Yogya Capital
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
									className={`nav-link custom-nav-link ${activeTab === index ? "active_tab" : ""} text-decoration-none`}
									to={link.to}
									onClick={() => handleLinkClick(index)}
								>
									{link.label}
								</Link>
							))}
						</ul>
						{/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0 "> */}
              {/* <li className="nav-but px-1">
                <Link className=" btn btn-self" to="#">
                  Sign up
                </Link>
              </li>
              <li className="nav-but px-1">
                <Link className=" btn btn-core-primary-outline" to="#">
                  login
                </Link>
              </li>
            </ul> */}
					</div>
				</div>
			</nav>

		</>
	);
}