/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./css/navbar.css";
import Logo from "./Logo"

function Navbar() {
  return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top navbar">
			<div className="container-fluid">
				<HashLink className="navbar-brand" to="#top">
					<div className="navbar-heading">
						<div className="navbar-logo-container">
							{<Logo className="logo logo-navbar" />}
						</div>
						<div className="navbar-heading-text">
							<span
								className="navbar-brand"
								id="header-name-static"
								href="Atlantis"
							>
								Atlantis <br /> <span id="header-tag">A Smart Paradise</span>
							</span>
						</div>
					</div>
				</HashLink>
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
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink to="/home">
								<span
									className="nav-link active"
									aria-current="page"
									href="/home"
								>
									Home
								</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<HashLink smooth to="/home/announcements">
								<span
									className="nav-link"
									id="about-link"
									href="/home/announcements"
								>
									Announcements
								</span>
							</HashLink>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Admin
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<HashLink to="/home/admin/make-announcements">
										<span className="dropdown-item" href="Make Announcements">
											Make Announcements
										</span>
									</HashLink>
								</li>
								<li>
									<NavLink to="/home/admin/view-complaints">
										<span
											className="dropdown-item"
											id="latest-issue-home"
											href="View Complaints"
										>
											View Complaints
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/home/admin/view-suggestions">
										<span
											className="dropdown-item"
											id="latest-issue-home"
											href="View Suggestions"
										>
											View Suggestions
										</span>
									</NavLink>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								More
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<HashLink to="/home/suggestions">
										<span className="dropdown-item" href="Make Suggestions!">
											Suggestions
										</span>
									</HashLink>
								</li>
								<li>
									<NavLink to="/home/complaints">
										<span
											className="dropdown-item"
											id="latest-issue-home"
											href="Register Complaints!"
										>
											Complaints
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/home/home-reservations">
										<span
											className="dropdown-item"
											id="latest-issue-home"
											href="Make Reservations"
										>
											Home Reservations
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/home/theatre-reservations">
										<span
											className="dropdown-item"
											id="latest-issue-home"
											href="Make Reservations"
										>
											Theatre Reservations
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/home/restaurant-reservations">
										<span
											className="dropdown-item"
											id="latest-issue-home"
											href="Make Reservations"
										>
											Restaurant Reservations
										</span>
									</NavLink>
								</li>
							</ul>
						</li>
						<HashLink smooth to="#contact-us">
							<li className="nav-item">
								<span className="nav-link" id="contact-link">
									Contact Us
								</span>
							</li>
						</HashLink>
						<li className="nav-item">
							<span className="nav-link" id="contact-link">
								<a
									onClick={() => {
										localStorage.removeItem('user')
				            window.location.replace('/')
									}}
								>
									Logout
								</a>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;