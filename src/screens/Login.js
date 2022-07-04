import {
	Switch,
	Route,
	Link,
	Redirect,
	useRouteMatch,
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
import MainBoard from './MainBoard';

const axios = require('axios').default;
const instance = axios.create({
	baseURL: 'https://sdic4g5.herokuapp.com/',
	// baseURL: "http://localhost:3001/",
});

function Login() {
	// let { path, url } = useRouteMatch();

	const [signIn, setSignIn] = useState(false);
	const [board, setBoard] = useState({});
	const [token, setToken] = useState('');
	const userSignIn = ({ board, token }) => {
		setBoard(board);
		setToken(token);
		setSignIn(true);
	};
	return (
		<>
			<h3>Login</h3>
			{!signIn && <Auth login={userSignIn} />}
			{/* {signIn && <UserBoard boardData={board} userToken={token} />} */}
			{/* <div>
				<Link to={`${url}/mainboard`}>Mainboard from Login</Link>
			</div>
			<Switch>
				<Route exact path={path} />
				<Route path={`${path}/:mainboard`}>
					<MainBoard />
				</Route>
			</Switch> */}
		</>
	);
}

function Auth(props) {
	let history = useHistory();
	const [logErr, setLogErr] = useState('');
	const [emailadd, setemailadd] = useState('');
	const [pwd, setpwd] = useState('');

	const [show, setShow] = useState(false);
	function handleClose() {
		setShow(false);
	}
	const handleShow = () => setShow(true);

	const handleChange = (event) => {
		setemailadd(event.target.value);
		console.log('value is:', event.target.value);
	};
	const handleChange1 = (event) => {
		setpwd(event.target.value);
		console.log('value is:', event.target.value);
	};
	const wannalogin = (event) => {
		event.preventDefault();
		console.log("I'm working");
		// 👇️ value of input field
		console.log('handleClick 👉️', emailadd);
		console.log('handleClick 👉️', pwd);
		instance
			.post('/login', {
				password: pwd,
				email: emailadd,
			})
			.then(function (response) {
				console.log(response.data.data);
				console.log('token', response.data.data.token);
				props.login({
					board: response.data.data.board,
					token: response.data.data.token,
				});
				history.push('/mainboard');
			})
			.catch(function (error) {
				console.log(error.response.data.message);
				setLogErr(error.response.data.message);
			});
	};

	return (
		<>
			<Form.Floating>
				<Form.Control
					id='floatingInputCustom'
					type='email'
					onChange={handleChange}
					placeholder='name@example.com'
					style={{ width: '100%', height: 'auto' }}
				/>
				<label htmlFor='floatingInputCustom'>Email address</label>
			</Form.Floating>

			<Form.Floating>
				<Form.Control
					id='floatingPasswordCustom'
					type='password'
					onChange={handleChange1}
					placeholder='Password'
					style={{ width: '100%', height: 'auto' }}
				/>
				<label htmlFor='floatingPasswordCustom'>Password</label>
			</Form.Floating>
			<span style={{ color: 'red' }}>{logErr}</span>
			<Button variant='info' type='login' size='l' onClick={wannalogin}>
				Log in
			</Button>
		</>
	);
}

export default Login;
