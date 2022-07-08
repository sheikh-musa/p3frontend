import axios from "axios";

// const API_URL = "http://localhost:3001/api/auth/";
const API_URL = "http://localhost:3001/";
// const API_URL = "https://sdic4g5.herokuapp.com/";

const register = (username, email, password, firstName, lastName) => {
	return axios
		.post(API_URL + "register", {
			username,
			email,
			password,
			firstName,
			lastName,
		})
		.then(function (response) {
			console.log(response);
			// handleClose();
		})
		.catch(function (error) {
			console.log(error.response.data.message);
			// setRegErr(error.response.data.message);
		});
};

const login = (username, password) => {
	return axios
		.post(API_URL + "signin", {
			username,
			password,
		})
		.then((response) => {
			if (response.data.username) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}

			return response.data;
		});
};

const logout = () => {
	localStorage.removeItem("user");
	return axios.post(API_URL + "signout").then((response) => {
		return response.data;
	});
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
	register,
	login,
	logout,
	getCurrentUser,
};

export default AuthService;
