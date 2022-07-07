import { Stack, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Contact() {
  return (
    <Stack className="bg-danger pb-3">
      
      {/* Text */}
      <h2 className="text-light text-center fw-bold pt-3 mx-5">Contact Us</h2>

      {/* Image */}
      <Col className="mx-auto mt-1 mb-3">
        <Image 
          src="https://img.freepik.com/free-vector/illustration-people-working-together_52683-22181.jpg?w=740&t=st=1656901058~exp=1656901658~hmac=c2acd58a90e70d1a7ac2578c65b8ad28e22506b37475365add8e509e6ebdaf3f" 
          fluid 
          rounded
          width={700}
          alt=""
        />
      </Col>

      {/* Text */}
      <h5 className="text-light text-center mx-5">
        Main Location : 25, Main St, Tampines SG{"   "}Phone : 64578978{"   "}Email Address : group5@gmail.com
      </h5>
    </Stack>
  );
}

export default Contact;