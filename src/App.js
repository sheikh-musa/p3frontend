import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import AuthService from "./services/auth.service";
// import { ProvideAuth } from "./services/use-auth";

import Home from "./screens/home.js";
import Navigation from "./screens/navigation";
import Signup from "./screens/signup.js";
import Login from "./screens/login.js";
import EditAccount from "./screens/editAccount.js";
import Boards from "./screens/board.js";

function App() {
	return (
		<>
			{/* <ProvideAuth> */}
			<Routes>
				<Route element={<Navigation />}>
					<Route path="/" element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
				</Route>
			</Routes>
			{/* </ProvideAuth> */}
		</>
	);
}

export default App;
