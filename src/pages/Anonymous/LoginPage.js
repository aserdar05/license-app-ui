import { Container, Row, Col, Card } from "react-bootstrap";
import { Fragment } from "react/cjs/react.production.min";
import Login from "../../components/User/Login";
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const loginSuccessHandler = () => {
    navigate('/user/dashboard');
  };

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card className="mt-20">
              <Card.Header>Login Using Email and Password</Card.Header>
              <Card.Body>
                <Login onLoginSuccess={loginSuccessHandler} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default LoginPage;
