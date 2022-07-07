import { Card, Col, Row, Image, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Features() {
  return (
    <Stack className="bg-primary">
      
      {/* Text */}
      <h2 className="text-light text-end fw-semibold mb-5 mt-4 mx-5">Wondering how to organize and manage multiple projects at once?
      <br/> Start by applying the right management tools.</h2>
      
      {/* Feature Cards */}
      <Row className="g-4 bg-dark px-5 pb-5">
        <Col lg={3}>
          <Card className="bg-light">
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/designer-collection-concept_52683-37016.jpg?w=740&t=st=1656901276~exp=1656901876~hmac=561e61f83ae1ea39d2cc0915af8fe5e73ff08a858d8137a85d2bd7e2cd22bfe2" />
            <Card.Body>
              <Card.Title className="fw-bolder text-dark">Streamline your workflow
              </Card.Title>
              <Card.Text className="text-dark">
              Remove any unnecessary steps or manual work, reduce the risk of making critical mistakes and improves operational efficiency.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className="bg-light">
            <Card.Img/>
            <Image
            src="https://img.freepik.com/free-vector/flat-design-female-team-leader_52683-54980.jpg?w=740&t=st=1656901232~exp=1656901832~hmac=3f54ba650b2aa73ac46c194d5de4e3f4cfb0e969b7f12a7581570777cd44c016" />
            <Card.Body>
              <Card.Title className="fw-bolder text-dark">Coordinate your team</Card.Title>
              <Card.Text className="text-dark">
              Processes and strategies organizations use to help their teams collaborate more effectively on their individual and collective goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className="bg-light">
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/home-delivery-worker-collection_52683-37011.jpg?w=740&t=st=1656901879~exp=1656902479~hmac=c7427f953e3bd12ad079fab608a385b6638960e03fddb79d10ba76ec0034fe50" />
            <Card.Body>
              <Card.Title className="fw-bolder text-dark">Practice efficient load balancing
              </Card.Title>
              <Card.Text className="text-dark">
              Ensure the teams remain on task and the work that needs doing gets done as soon as possible
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className="bg-light">
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/hand-drawn-illustration-female-team-leader_52683-54982.jpg?w=740&t=st=1656901677~exp=1656902277~hmac=2b98bad433018db65836f7f6fde8c52c559e525559548297901a44f0dbc580b3" />
            <Card.Body>
              <Card.Title className="fw-bolder text-dark">Manage deadline overlaps
              </Card.Title>
              <Card.Text className="text-dark">
              Prioritize overlapping or competing deadlines and allocate resources for competing projects.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>  

      </Row>
    </Stack>
  );
}

export default Features;