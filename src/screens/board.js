import { Row, Col, Button, Image, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import "../App.css";

function Boards() {
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
			      <Nav.Link href="#board">EDIT ACCOUNT</Nav.Link>
          <div className="px-2">
            <Button className="rounded-pill fw-bold mx-auto px-5" variant="light" size="md">LOGOUT</Button>
          </div>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 

      {/* Image */}
      <Col className="ms-auto pt-5">
        <Image 
          src="https://img.freepik.com/free-vector/flat-business-team-scrum-board-with-sticky-notes-teamwork-working-together-discussing-organizing-project-schedule-scheme-methodology-group-people-programming-with-tasks-tracker-office_88138-937.jpg?w=826&t=st=1657171672~exp=1657172272~hmac=42f2db1e84caa8386be633629304f5fda8e771f621be6bb548817d6736add750" 
          fluid 
          rounded
          className=""
        />
      </Col>
    </Row>  
  );
}

export default Boards;