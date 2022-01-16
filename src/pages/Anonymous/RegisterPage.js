import { Container, Row, Col, Card } from "react-bootstrap";
import { Fragment } from "react/cjs/react.production.min";
import Register from "../../components/User/Register";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const registerSuccessHandler = () => {
    navigate('/user/dashboard');
  };
  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card className="mt-20">
              <Card.Header>Register New User</Card.Header>
              <Card.Body>
                <Register onRegisterSuccess={registerSuccessHandler}  />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default RegisterPage;
