import Login from './Login';
import MainBoard from './MainBoard';
import SignUp from './SignUp';
import AccountDetails from './AccountDetails';
import EditAccount from './EditAccount';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function HomePage() {
	return (
		<>
			<h3>Home Page</h3>
			{/* login and signup buttons */}
			<Link to='/signup'>
				<button>Sign Up</button>
			</Link>
			<Link to='/login'>
				<button>Login</button>
			</Link>
			{/* router starts here */}
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/signup' component={SignUp} />
				<Route path='/mainboard' component={MainBoard} />
				<Route path='/edit-account' component={EditAccount} />
				<Route path='/my-account' component={AccountDetails} />
			</Switch>
		</>
	);
}

export default HomePage;
