import {
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import AccountDetails from './AccountDetails';
import EditAccount from './EditAccount';
import Logout from './Logout';
import data from '../data.json';
import Board from 'react-trello';

const axios = require('axios').default;
const instance = axios.create({
	baseURL: 'https://sdic4g5.herokuapp.com/',
	// baseURL: "http://localhost:3001/",
});

function MainBoard(props) {
	let { path, url } = useRouteMatch();
	let { mainboard } = useParams();

	function handleDataChange(newData) {
		console.log(props.userToken, newData);
		instance
			.put('/board', {
				board: newData,
				token: props.userToken,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error.response.data.message);
			});
	}

	return (
		<>
			<h3>MainBoard</h3>
			<Board
				data={props.boardData}
				draggable
				editable
				addCardTitle='Add Item'
				onDataChange={handleDataChange}
			/>
			<div>
				<Link to={`${url}/myaccount`}>My Account from Mainboard</Link>
			</div>

			<Switch>
				<Route exact path={path} />
				<Route path={`${path}/:myaccount`}>
					<AccountDetails />
				</Route>
				{/* <Route path='/my-account'>
					<AccountDetails />
				</Route>
				<Route path='/edit-account'>
					<EditAccount />
				</Route> */}
			</Switch>
		</>
	);
}

export default MainBoard;
