import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Navigation() {
	return (
		<>
			{/* Navigation bar */}
			<Navbar bg="dark justify-content-end py-3" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home"></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto fw-bold">
							<Nav.Link href="#home">
								<Link to="/">HOME</Link>
							</Nav.Link>
							<Nav.Link href="#features">
								FEATURES{/* <Link to="/#features">FEATURES</Link> */}
							</Nav.Link>
							<Nav.Link href="#contact">
								CONTACT{/* <Link to="/#contact">CONTACT</Link> */}
							</Nav.Link>
							<div className="px-2">
								<Button className="rounded-pill fw-bold mx-auto px-5" variant="warning" size="md">
									{/* LOGIN */}
									<Link to="/login">LOGIN</Link>
								</Button>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}
