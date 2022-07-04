import {
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import MainBoard from './MainBoard';
import EditAccount from './EditAccount';

function AccountDetails() {
	let { path, url } = useRouteMatch();
	let { myaccount } = useParams();
	return (
		<>
			<h3>Account Details</h3>
			<div>
				<Link to={`${url}/editaccount`}>Edit Account</Link>
			</div>
			<div>
				<Link to='login/mainboard'>Back</Link>
			</div>
			<Switch>
				<Route path={`${path}/:editaccount`}>
					<EditAccount />
				</Route>
				{/* <Route path='/mainboard' component={MainBoard} />
				<Route path='/edit-acc' component={EditAccount} /> */}
			</Switch>
		</>
	);
}

export default AccountDetails;
