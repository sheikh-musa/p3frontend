import { Row, Col, Button, Image, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
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

      {/* Text */}
      <Col className="bg-warning" sm={5}>
        <h1 className="text-light fw-bold px-5 pt-5 mt-3 mx-5">STAY FOCUS AND ORGANIZED</h1>
        <h2 class="text-dark fw-bold px-5 py-3 mx-5">
          Simply drag and drop <br/> your things to do, and get more things done
        </h2>
        <div className="px-5">
          <Button className="fw-bolder rounded-pill mt-2 mb-5 mx-5 px-5" variant="danger" size="lg">SIGNUP</Button>
        </div>
      </Col>

      {/* Image */}
      <Col className="shadow-lg p-3 bg-white rounded mr-5 pt-5">
        <Image 
          src="https://img.freepik.com/free-vector/flat-scrum-task-board-with-hands-team-members-color-paper-stickers-group-software-developers-create-work-project-schedule-with-sticky-notes-teamwork-development-sprint-planning-concept_88138-909.jpg?w=740&t=st=1656858745~exp=1656859345~hmac=2b20f74da4923f3f8d35048812f4c54158d9a984e86ceaf52ac391d5fdcdc5ed" 
          fluid 
          rounded
          className=""
        />
      </Col>
    </Row>  
  );
}

export default Home;