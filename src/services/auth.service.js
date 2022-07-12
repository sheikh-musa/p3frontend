import axios from "axios";

// const API_URL = "http://localhost:3001/api/auth/";
const API_URL = "http://localhost:3001/";
// const API_URL = "https://sdic4g5.herokuapp.com/";

const register = (values) => {
	const { username, email, password, firstName, lastName } = values;
	return axios.post(API_URL + "register", {
		username,
		email,
		password,
		firstName,
		lastName,
	});
};

const login = async (values) => {
	const { login, password } = values;
	const response = await axios.post(API_URL + "login", {
		login,
		password,
	});
	console.log(response);
	console.log(response.data);
	if (response.data.message == "Login successful") {
		console.log("saving data to localstorage");
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

const logout = async () => {
	localStorage.removeItem("user");
	const response = await axios.post(API_URL + "signout");
	return response.data;
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
