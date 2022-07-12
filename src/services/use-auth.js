import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// const API_URL = "http://localhost:3001/api/auth/";
const API_URL = "http://localhost:3001/";
// const API_URL = "https://sdic4g5.herokuapp.com/";

// Add your Firebase credentials
// firebase.initializeApp({
// 	apiKey: "AIzaSyAxNde2X3XFY0i4wQMMQ2fz1Tu9en60CEs",
// 	authDomain: "workstack-auth.firebaseapp.com",
// 	projectId: "workstack-auth",
// 	storageBucket: "workstack-auth.appspot.com",
// 	messagingSenderId: "910563153395",
// 	appId: "1:910563153395:web:23bb442535e104d7342e86",
// 	measurementId: "G-34D0WD03XS",
// });
const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
	return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
	const [user, setUser] = useState(null);
	// Wrap any Firebase methods we want to use making sure ...
	// ... to save the user to state.
	// const signin = (email, password) => {
	// 	return firebase
	// 		.auth()
	// 		.signInWithEmailAndPassword(email, password)
	// 		.then((response) => {
	// 			setUser(response.user);
	// 			return response.user;
	// 		});
	// };
	const signup = (values) => {
		const { username, email, password, firstName, lastName } = values;
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
				setUser(response.data.data);
			})
			.catch(function (error) {
				console.log(error.response.data.message);
			});
	};
	// const signout = () => {
	// 	return firebase
	// 		.auth()
	// 		.signOut()
	// 		.then(() => {
	// 			setUser(false);
	// 		});
	// };
	// const sendPasswordResetEmail = (email) => {
	// 	return firebase
	// 		.auth()
	// 		.sendPasswordResetEmail(email)
	// 		.then(() => {
	// 			return true;
	// 		});
	// };
	// const confirmPasswordReset = (code, password) => {
	// 	return firebase x   `Sc
	// 		.auth()
	// 		.confirmPasswordReset(code, password)
	// 		.then(() => {
	// 			return true;
	// 		});
	// };
	// Subscribe to user on mount
	// Because this sets state in the callback it will cause any ...
	// ... component that utilizes this hook to re-render with the ...
	// ... latest auth object.
	// useEffect(() => {
	// 	const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
	// 		if (user) {
	// 			setUser(user);
	// 		} else {
	// 			setUser(false);
	// 		}
	// 	});
	// 	// Cleanup subscription on unmount
	// 	return () => unsubscribe();
	// }, []);
	// Return the user object and auth methods
	return {
		user,
		// signin,
		signup,
		// signout,
		// sendPasswordResetEmail,
		// confirmPasswordReset,
	};
}
