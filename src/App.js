import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/logo.jpg";

import AuthService from "./services/auth.service";
import EventBus from "./services/EventBus";

import Home from "./screens/home.js";
import Signup from "./screens/signup.js";
import Login from "./screens/login.js";
import EditAccount from "./screens/editAccount.js";
import Boards from "./screens/board.js";

function App() {
	const [currentUser, setCurrentUser] = useState(undefined);
	useEffect(() => {
		const user = AuthService.getCurrentUser();
		// console.log(user);
		if (user) {
			setCurrentUser(user);
		}

		EventBus.on("logout", () => {
			logOut();
		});

		return () => {
			EventBus.remove("logout");
		};
	}, []);

	const logOut = () => {
		AuthService.logout();
		setCurrentUser(undefined);
	};
	return (
		<>
			<Navbar bg="dark justify-content-end py-3" variant="dark" expand="lg">
				<Container>
					<Link to={"/"} className="navbar-brand">
						<img src={logo} style={{ height: "75px" }} alt="Responsive image"></img>
					</Link>
					<div className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to="/home" className="nav-link">
								HOME
							</Link>
						</li>
						{currentUser && (
							<li className="nav-item">
								<Link to={"/board"} className="nav-link">
									BOARD
								</Link>
							</li>
						)}
					</div>

					{/* <Navbar.Brand href="#home"></Navbar.Brand> */}
					{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto fw-bold">
							{currentUser ? (
								<div className="navbar-nav ml-auto">
									<li className="nav-item">
										<Link to={"/profile"} className="nav-link">
											PROFILE
										</Link>
									</li>
									<li className="nav-item">
										<a href="/" className="nav-link" onClick={logOut}>
											LOG OUT
										</a>
									</li>
								</div>
							) : (
								<div className="navbar-nav ml-auto">
									<li className="nav-item">
										<Link to={"/login"} className="nav-link">
											LOGIN
										</Link>
									</li>

									<li className="nav-item">
										<Link to={"/signup"} className="nav-link">
											SIGN UP
										</Link>
									</li>
								</div>
							)}
							{/* <Nav.Link href="#features">FEATURES</Nav.Link>
							<Nav.Link href="#contact">CONTACT</Nav.Link> */}

							<div className="px-2">
								{/* <Button className="rounded-pill fw-bold mx-auto px-5" variant="warning" size="md"> */}
								{/* LOGIN */}
								{/* <Link to="/login" className="nav-link"> */}
								{/* LOGIN */}
								{/* </Link> */}
								{/* </Button> */}
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/profile" element={<EditAccount />} />
				<Route path="/board" element={<Boards />} />
			</Routes>
		</>
	);
}

export default App;
