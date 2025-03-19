import "../styles/style.scss";
import { Container, Row, Col } from "react-bootstrap/";

function NavBar() {
  return (
    <>
      {/* Navigation bar */}
      <Container className="bg-light px-3 py-3" fluid>
        <Row>
          <Col className="text-center">Localstream</Col>
        </Row>
      </Container>
    </>
  );
}

export default NavBar;
