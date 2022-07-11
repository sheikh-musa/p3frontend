import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FormInput from "../components/FormInput.jsx";

// import AuthService from "../services/auth.service";
import { useAuth } from "../services/use-auth";

function Signup() {
	const auth = useAuth();
	const [values, setValues] = useState({
		username: "",
		email: "",
		firstName: "",
		lastName: "",
		password: "",
	});

	const inputs = [
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "Username",
			errorMessage:
				"Username should be 3-16 characters and shouldn't include any special character!",
			label: "Username",
			pattern: "^[A-Za-z0-9]{3,16}$",
			required: true,
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeholder: "Email",
			errorMessage: "It should be a valid email address!",
			label: "Email",
			required: true,
		},
		{
			id: 3,
			name: "firstName",
			type: "text",
			placeholder: "First Name",
			label: "First Name",
		},
		{
			id: 4,
			name: "lastName",
			type: "text",
			placeholder: "Last Name",
			label: "Last Name",
		},
		{
			id: 5,
			name: "password",
			type: "password",
			placeholder: "Password",
			errorMessage:
				"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
			label: "Password",
			pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
			required: true,
		},
		{
			id: 6,
			name: "confirmPassword",
			type: "password",
			placeholder: "Confirm Password",
			errorMessage: "Passwords don't match!",
			label: "Confirm Password",
			pattern: values.password,
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		auth.signup();
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	console.log(values);

	return (
		<Row>
			{/* Signup Form */}
			<Col className="bg-danger py-4" sm={5}>
				<h2 className="text-light text-center fw-bold px-5 my-4 mx-5">Create account here</h2>

				<div className="app">
					<Form onSubmit={handleSubmit}>
						{inputs.map((input) => (
							<FormInput
								className="ms-5 mb-3"
								key={input.id}
								{...input}
								value={values[input.name]}
								onChange={onChange}
							/>
						))}

						{/* Signup Button */}
						<div className="px-5 pt-2">
							<Button
								type="submit"
								className="rounded-pill fw-bold mx-auto mt-2 mb-4 px-5"
								variant="dark"
								size="md"
							>
								Sign me up!
							</Button>
						</div>
					</Form>
				</div>
			</Col>

			{/* Image */}
			<Col className="shadow-lg rounded mx-5 my-4 pt-3">
				<Image
					src="https://img.freepik.com/free-vector/flat-design-youth-day-concept_52683-39926.jpg?w=740&t=st=1656903325~exp=1656903925~hmac=33e9dff3a8fe461c27bb145bddb05c73705296b9c5c665495b02310b067fea9a"
					fluid
					rounded
					width={900}
					className=""
					alt=""
				/>
			</Col>
		</Row>
	);
}

export default Signup;

// import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// // import AuthService from "../services/auth.service";
// // import { useAuth } from "./use-auth.js";

// function Signup() {
// 	// const auth = useAuth();
// 	// const [validated, setValidated] = useState(false);
// 	const [signUpObj, setSignUpObj] = useState({
// 		firstName: "",
// 		lastName: "",
// 		username: "",
// 		email: "",
// 		password: "",
// 		passwordRepeat: "",
// 	});

// 	const handleChange = (e) => {
// 		setSignUpObj({ ...signUpObj, [e.target.id]: e.target.value });
// 	};
// 	const handleSubmit = (event) => {
// 		// const form = event.currentTarget;
// 		// if (form.checkValidity() === false) {
// 		event.preventDefault();
// 		// event.stopPropagation();
// 		// AuthService.register(signUpObj);
// 		// auth.signup(signUpObj.email, signUpObj.password);
// 		// }
// 		// setValidated(true);
// 	};
// 	return (
// 		<Row>
// 			{/* Signup Form */}
// 			<Col className="bg-danger py-4" sm={5}>
// 				<h2 className="text-light text-center fw-bold px-5 my-4 mx-5">Create account here</h2>

// 				<Form onSubmit={handleSubmit}>
// 					<Form.Group className="mx-5 mb-3" controlId="firstName" onChange={handleChange}>
// 						<Form.Control required type="text" placeholder="First name" />
// 					</Form.Group>

// 					<Form.Group className="mx-5 mb-3" controlId="lastName" onChange={handleChange}>
// 						<Form.Control required type="text" placeholder="Last name" />
// 					</Form.Group>

// 					<Form.Group className="mx-5 mb-3" controlId="username" onChange={handleChange}>
// 						<Form.Control required type="username" placeholder="Username" />
// 					</Form.Group>

// 					<Form.Group className="mx-5 mb-3" controlId="email" onChange={handleChange}>
// 						<Form.Control required type="email" placeholder="E-mail" />
// 					</Form.Group>

// 					<Form.Group className="mx-5 mb-3" controlId="password" onChange={handleChange}>
// 						<Form.Control required type="password" placeholder="Password" />
// 					</Form.Group>

// 					<Form.Group className="mx-5 mb-3" controlId="passwordRepeat" onChange={handleChange}>
// 						<Form.Control required type="password" placeholder="Repeat password" />
// 					</Form.Group>

// 					{/* Signup Button */}
// 					<div className="px-5 pt-2">
// 						<Button
// 							type="submit"
// 							className="rounded-pill fw-bold mx-auto mt-2 mb-4 px-5"
// 							variant="dark"
// 							size="md"
// 						>
// 							Sign me up!
// 						</Button>
// 					</div>
// 				</Form>
// 			</Col>

// 			{/* Image */}
// 			<Col className="shadow-lg rounded mx-5 my-4 pt-3">
// 				<Image
// 					src="https://img.freepik.com/free-vector/flat-design-youth-day-concept_52683-39926.jpg?w=740&t=st=1656903325~exp=1656903925~hmac=33e9dff3a8fe461c27bb145bddb05c73705296b9c5c665495b02310b067fea9a"
// 					fluid
// 					rounded
// 					width={900}
// 					className=""
// 				/>
// 			</Col>
// 		</Row>
// 	);
// }

// export default Signup;
