import { Row, Col, Button, Image, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Landing() {
	return (
		<Row>
			{/* Text */}
			<Col className="bg-warning" sm={5}>
				<h1 className="text-light fw-bold px-5 pt-5 mt-3 mx-5">STAY FOCUS AND ORGANIZED</h1>
				<h2 class="text-dark fw-bold px-5 py-3 mx-5">
					Simply drag and drop <br /> your things to do, and get more things done
				</h2>

				<div className="px-5">
					<Button className="fw-bolder rounded-pill mt-2 mb-5 mx-5 px-5" variant="danger" size="lg">
						<Link to="/signup">SIGNUP</Link>
					</Button>
				</div>
			</Col>

			{/* Image */}
			<Col className="shadow-lg p-3 bg-white rounded mr-5 pt-5">
				<Image
					src="https://img.freepik.com/free-vector/flat-scrum-task-board-with-hands-team-members-color-paper-stickers-group-software-developers-create-work-project-schedule-with-sticky-notes-teamwork-development-sprint-planning-concept_88138-909.jpg?w=740&t=st=1656858745~exp=1656859345~hmac=2b20f74da4923f3f8d35048812f4c54158d9a984e86ceaf52ac391d5fdcdc5ed"
					fluid
					rounded
					className=""
				/>
			</Col>
		</Row>
	);
}
