import { Row, Col, Button, Image, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "../App.css";
import Board from "react-trello";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

function Boards() {
	const [currentUser, setCurrentUser] = useState(undefined);
	const navigate = useNavigate();
	useEffect(() => {
		const user = AuthService.getCurrentUser();
		if (user) {
			setCurrentUser(user);
			// console.log(user.board);
		} else {
			navigate("/login");
		}
	}, []);

	function handleDataChange(newData) {
		console.log(newData);
		AuthService.board(newData, currentUser.token);
		// instance
		// 	.put("/board", {
		// 		board: newData,
		// 		token: props.userToken,
		// 	})
		// 	.then(function (response) {
		// 		console.log(response);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error.response.data.message);
		// 	});
	}
	return (
		<Row>
			{currentUser && (
				<Board
					data={currentUser.board}
					draggable
					editable
					addCardTitle="Add Item"
					onDataChange={handleDataChange}
				/>
			)}
			{/* Image */}
			<Col className="ms-auto pt-5">
				<Image
					src="https://img.freepik.com/free-vector/flat-business-team-scrum-board-with-sticky-notes-teamwork-working-together-discussing-organizing-project-schedule-scheme-methodology-group-people-programming-with-tasks-tracker-office_88138-937.jpg?w=826&t=st=1657171672~exp=1657172272~hmac=42f2db1e84caa8386be633629304f5fda8e771f621be6bb548817d6736add750"
					fluid
					rounded
					className=""
				/>
			</Col>
		</Row>
	);
}

export default Boards;
