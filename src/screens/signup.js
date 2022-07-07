import { Row, Col, Button, Image, Form, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Signup() {
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
            <Button className="rounded-pill fw-bold mx-auto px-5" variant="warning" size="md">LOGIN</Button>
          </div>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  

      {/* Signup Form */}
      <Col className="bg-danger py-4" sm={5}>
        <h2 className="text-light text-center fw-bold px-5 my-4 mx-5">Create account here</h2>              
              
        <Form>
          <Form.Group className="mx-5 mb-3" controlId="formBasicEmail">
            <Form.Control type="firstName" placeholder="First name" />
          </Form.Group>

          <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
            <Form.Control type="lastName" placeholder="Last name" />
          </Form.Group>

          <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
            <Form.Control type="username" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>

          <Form.Group className="mx-5 mb-3" controlId="formBasicEmail">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mx-5 mb-3" controlId="formBasicPassword">
            <Form.Control type="repeatPassword" placeholder="Repeat password" />
          </Form.Group>
        
        {/* Signup Button */}
        <div className="px-5 pt-2">
          <Button className="rounded-pill fw-bold mx-auto mt-2 mb-4 px-5" variant="dark" size="md">Sign me up!</Button>
        </div>
        </Form>
            </Col>

      {/* Image */}
      <Col className="shadow-lg rounded mx-5 my-4 pt-3">
         <Image 
          src="https://img.freepik.com/free-vector/flat-design-youth-day-concept_52683-39926.jpg?w=740&t=st=1656903325~exp=1656903925~hmac=33e9dff3a8fe461c27bb145bddb05c73705296b9c5c665495b02310b067fea9a" 
          fluid 
          rounded
          width={900}
          className=""
        />
      </Col>
    </Row>
  );
}

export default Signup;