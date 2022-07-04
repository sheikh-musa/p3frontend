import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import MainBoard from './MainBoard';
import EditAccount from './EditAccount';

function AccountDetails() {
	let { path, url } = useRouteMatch();

	return (
		<>
			<h3>Account Details</h3>
			<div>
				{/* <Link to={`${url}/editaccount`}>Edit Account</Link> */}
				<Link to='/edit-account'>Edit Account</Link>
			</div>
			<div>
				<Link to='/mainboard'>Back</Link>
			</div>
			<Switch>
				{/* <Route path={`${path}/:editaccount`}>
					<EditAccount />
				</Route> */}
				<Route path='/edit-account' component={EditAccount} />
			</Switch>
		</>
	);
}

export default AccountDetails;
