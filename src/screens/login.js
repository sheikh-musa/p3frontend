import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
  return (
    <Row>
      
      {/* Navigation bar */}
      <Navbar bg="dark justify-content-end py-3" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">FEATURES</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          <div className="px-2">
            <Button className="rounded-pill fw-bold mx-auto px-5" variant="danger" size="md">SIGNUP</Button>
          </div>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  

      {/* Login Form */}
      <Col className="bg-warning py-5" sm={5}>
        <h2 className="text-dark text-center fw-bold px-5 mt-5 mx-5">Hey there!</h2>
        <h1 className="text-light text-center fw-bold px-5 mx-5">Welcome back</h1>              

        <Form>
          <Form.Group className="mx-5 mt-5 mb-3" controlId="formBasicEmail">
            <Form.Control type="username" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Text className="mx-5 mb-4 text-light">
            Forgot Password
          </Form.Text>

        {/* Login Button */}
        <div className="px-5 mt-3">
          <Button className="rounded-pill fw-bold text-light mx-auto mt-2 mb-4 px-5" variant="dark" size="md">Log me in!</Button>
        </div>
        </Form>
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