import React from 'react';
import HomePage from '../screens/HomePage';
import Login from '../screens/Login';
import Logout from '../screens/Logout';
import Signup from '../screens/SignUp';
import MainBoard from '../screens/MainBoard';
import AccountDetails from '../screens/AccountDetails';
import EditAccount from '../screens/EditAccount';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NavRouter extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/login' component={Login} />
					<Route path='/signup' component={Signup} />
				</Switch>
			</Router>
		);
	}
}

export default NavRouter;
