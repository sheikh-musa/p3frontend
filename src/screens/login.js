import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FormInput from "../components/FormInput.jsx";
import AuthService from "../services/auth.service.js";
import { useNavigate } from "react-router-dom";

function Login() {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [values, setValues] = useState({
		login: "",
		password: "",
	});

	const inputs = [
		{
			id: 1,
			name: "login",
			type: "text",
			placeholder: "Username/email",
			label: "Login",
			required: true,
		},
		{
			id: 2,
			name: "password",
			type: "password",
			placeholder: "Password",
			label: "Password",
			required: true,
		},
	];

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		console.log(values);
		e.preventDefault();
		setMessage("");
		setLoading(true);
		if (values.login != "" && values.password != "") {
			AuthService.login(values).then(
				() => {
					navigate("/board");
					window.location.reload();
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();

					setLoading(false);
					setMessage(resMessage);
				}
			);
		} else {
			setLoading(false);
		}
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	// console.log(values);

	return (
		<Row>
			{/* Login Form */}
			<Col className="bg-warning py-5" sm={5}>
				<h2 className="text-dark text-center fw-bold px-5 mt-5 mx-5">Hey there!</h2>
				<h1 className="text-light text-center fw-bold px-5 mx-5">Welcome back</h1>

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

						{/* Login Button */}
						<div className="px-5 mt-3">
							<Button
								type="submit"
								className="rounded-pill fw-bold text-light mx-auto mt-2 mb-4 px-5"
								variant="dark"
								size="md"
								disabled={loading}
							>
								{loading && <span className="spinner-border spinner-border-sm"></span>}
								Log me in!
							</Button>
						</div>
					</Form>
				</div>
				{message && (
					<div className="form-group">
						<div className="alert alert-danger" role="alert">
							{message}
						</div>
					</div>
				)}
			</Col>

			{/* Image */}
			<Col className="shadow-lg rounded mx-5 my-4 pt-3">
				<Image
					src="https://img.freepik.com/free-vector/flat-design-youth-day-concept_52683-39925.jpg?w=740&t=st=1656903313~exp=1656903913~hmac=89796ba2228313be185f5f9e37e005599229b94a46e003450b7794f985d79f37"
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

export default Login;

//  import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from "react-bootstrap";
//  import "bootstrap/dist/css/bootstrap.min.css";

//  function Login() {
//  	return (
//  		<Row>
//  			  {/* Login Form */}
//  			<Col className="bg-warning py-5" sm={5}>
//  				<h2 className="text-dark text-center fw-bold px-5 mt-5 mx-5">Hey there!</h2>
//  				<h1 className="text-light text-center fw-bold px-5 mx-5">Welcome back</h1>

//  				<Form>
//  					<Form.Group className="mx-5 mt-5 mb-3" controlId="formBasicEmail">
//  						<Form.Control type="username" placeholder="Username" />
//  					</Form.Group>

//  					<Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
//  						<Form.Control type="password" placeholder="Password" />
//  					</Form.Group>

//  					<Form.Text className="mx-5 mb-4 text-light">Forgot Password</Form.Text>

//  					{/* Login Button */}
//  					<div className="px-5 mt-3">
//  						<Button
// 							className="rounded-pill fw-bold text-light mx-auto mt-2 mb-4 px-5"
// 							variant="dark"
// 							size="md"
// 						>
// 							Log me in!
// 						</Button>
// 					</div>
// 				</Form>
// 		</Col>

// 		{/* Image */}
// 		<Col className="shadow-lg rounded mx-5 my-4 pt-3">
// 		<Image
// 		  src="https://img.freepik.com/free-vector/flat-design-youth-day-concept_52683-39925.jpg?w=740&t=st=1656903313~exp=1656903913~hmac=89796ba2228313be185f5f9e37e005599229b94a46e003450b7794f985d79f37"
// 		  fluid
// 		  rounded
// 		  width={900}
// 		  className=""
// 		  alt=""
// 		/>
// 		</Col>

// 	  </Row>
// 	);
// }

// export default Login;
