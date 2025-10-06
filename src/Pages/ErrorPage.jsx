import { Button, Col, Container, Row } from "react-bootstrap";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  
  const handelBack = () => {
    navigate("/", {replace:true});
  }

  return (
    <Container>
      <Row>
        <Col>
          <div className="mt-5  text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Button variant="link"  onClick={handelBack}>Back</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
