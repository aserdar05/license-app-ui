import { Container, Row, Col, Card } from "react-bootstrap";
import { Fragment } from "react/cjs/react.production.min";
import Login from "../../components/User/Login";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import useHttp from "../../hook/useHttp";
import { useEffect } from "react";
import { authActions } from "../../store";
import useAlert from "../../hook/useAlert";
import { getUserByEmailPassword } from "../../lib/userRepository";
import "./LoginPage.css";

const LoginPage = () => {
  const [addAlert, removeAlert] = useAlert();
  const dispatch = useDispatch();
  const { sendRequest, status, data: loadedUser } = useHttp(getUserByEmailPassword);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      if(loadedUser){
        removeAlert();
        dispatch(authActions.login({
          email: loadedUser.email,
          name: loadedUser.name,
          surname: loadedUser.surname,
          roleId: loadedUser.roleId 
        }));
        if(loadedUser.roleId === 1){
          navigate('/user/dashboard');
        }
        else if(loadedUser.roleId === 2){
          navigate('/admin/dashboard');
        }
        else{
          navigate('/login');
        }
      }
      else{
        addAlert('warning', 'Username or Password is invalid!');
      }
    }
  }, [status, navigate, loadedUser, dispatch, addAlert, removeAlert]);

  const loginActionHandler = (loginData) => {
    sendRequest(loginData);
  };

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8">
            <Card>
              <Card.Header>Login Using Email and Password</Card.Header>
              <Card.Body>
                <Login onLoginAction={loginActionHandler} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default LoginPage;
