import { Container, Row, Col, Card } from "react-bootstrap";
import { Fragment } from "react/cjs/react.production.min";
import Register from "../../components/User/Register";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hook/useHttp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { addUser } from "../../lib/userRepository";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { sendRequest, status, data: userData } = useHttp(addUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      dispatch(authActions.login({ 
        token: '7E3AF83B-6262-4901-B356-13EF274EB811',
        userData: {
          email: userData.email,
          name: userData.name,
          surname: userData.surname,
          roleId: 1  
        }
      }));
      navigate("/user/dashboard");
    }
  }, [status, navigate, dispatch, userData]);

  const registerSuccessHandler = (registerData) => {
    sendRequest(registerData);
  };
  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8">
            <Card>
              <Card.Header>Register New User</Card.Header>
              <Card.Body>
                <Register onRegisterSuccess={registerSuccessHandler} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default RegisterPage;
