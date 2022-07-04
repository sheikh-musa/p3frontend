import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from 'react-router-dom';
import '../App.css';
import data from '../data.json';
import Board from 'react-trello';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Login from './Login';

const axios = require('axios').default;
const instance = axios.create({
	baseURL: 'https://sdic4g5.herokuapp.com/',
	// baseURL: "http://localhost:3001/",
});

function SignUp() {
	const [signIn, setSignIn] = useState(false);
	const [board, setBoard] = useState({});
	const [token, setToken] = useState('');
	const userSignIn = ({ board, token }) => {
		setBoard(board);
		setToken(token);
		setSignIn(true);
	};

	return (
		<div>
			{!signIn && <Auth login={userSignIn} />}
			{/* {signIn && <UserBoard boardData={board} userToken={token} />} */}
		</div>
	);
}

function Auth(props) {
	let history = useHistory();
	const [regErr, setRegErr] = useState('');
	const [show, setShow] = useState(false);
	function handleClose() {
		setShow(false);
		setRegErr('');
		setUsername2('');
		setEmail2('');
		setPwd2('');
	}
	const handleShow = () => setShow(true);

	const [username2, setUsername2] = useState('');
	const [email2, setEmail2] = useState('');
	const [pwd2, setPwd2] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const handleChange2 = (event) => {
		setUsername2(event.target.value);
		console.log('username is:', event.target.value);
	};
	const handleChange3 = (event) => {
		setEmail2(event.target.value);
		console.log('email is:', event.target.value);
	};
	const handleChange4 = (event) => {
		setPwd2(event.target.value);
		console.log('password is:', event.target.value);
	};

	const handleChange5 = (event) => {
		setFirstName(event.target.value);
		console.log('first name is:', event.target.value);
	};

	const handleChange6 = (event) => {
		setLastName(event.target.value);
		console.log('first name is:', event.target.value);
	};

	const wannaregister = (event) => {
		event.preventDefault();
		console.log("I'm working");
		// 👇️ value of input field
		console.log('username 👉️', username2);
		console.log('email 👉️', email2);
		console.log('pwd2 👉️', pwd2);
		console.log('firstName 👉️', firstName);
		console.log('lastName 👉️', lastName);
		instance
			.post('/register', {
				username: username2,
				password: pwd2,
				email: email2,
				firstName: firstName,
				lastName: lastName,
			})
			.then(function (response) {
				console.log(response);
				handleClose();
				history.push('/login');
			})
			.catch(function (error) {
				console.log(error.response.data.message);
				setRegErr(error.response.data.message);
			});
	};

	return (
		<>
			<h3>Sign Up</h3>
			<Button variant='warning' type='Register' size='sm' onClick={handleShow}>
				Register
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Register</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group
							as={Row}
							className='mb-3'
							controlId='formHorizontalEmail'
						>
							<Form.Label column sm={3}>
								First Name
							</Form.Label>
							<Col sm={8}>
								<Form.Control
									type='text'
									placeholder='Given Name'
									onChange={handleChange5}
								/>
							</Col>
						</Form.Group>

						<Form.Group
							as={Row}
							className='mb-3'
							controlId='formHorizontalEmail'
						>
							<Form.Label column sm={3}>
								Last Name
							</Form.Label>
							<Col sm={8}>
								<Form.Control
									type='text'
									placeholder='Family Name'
									onChange={handleChange6}
								/>
							</Col>
						</Form.Group>

						<Form.Group
							as={Row}
							className='mb-3'
							controlId='formHorizontalName'
						>
							<Form.Label column sm={3}>
								Username
							</Form.Label>
							<Col sm={8}>
								<Form.Control
									type='username'
									placeholder='Username'
									onChange={handleChange2}
									autoFocus
								/>
							</Col>
						</Form.Group>

						<Form.Group
							as={Row}
							className='mb-3'
							controlId='formHorizontalEmail'
						>
							<Form.Label column sm={3}>
								Email
							</Form.Label>
							<Col sm={8}>
								<Form.Control
									type='email'
									placeholder='Email'
									onChange={handleChange3}
								/>
							</Col>
						</Form.Group>

						<Form.Group
							as={Row}
							className='mb-3'
							controlId='formHorizontalPassword'
						>
							<Form.Label column sm={3}>
								Password
							</Form.Label>
							<Col sm={8}>
								<Form.Control
									type='password'
									placeholder='Password'
									onChange={handleChange4}
								/>
								<Form.Text id='passwordHelpBlock' muted>
									Your password must be 8-20 characters long, contain letters
									and numbers, and must not contain spaces, special characters,
									or emoji.
								</Form.Text>
							</Col>
							<span style={{ color: 'red' }}>{regErr}</span>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
					<Router>
						<Link to='/login'>
							<Button variant='primary' onClick={wannaregister}>
								Sign Up
							</Button>
						</Link>
						<Switch>
							<Route path='/login' component={Login} />
						</Switch>
					</Router>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default SignUp;
