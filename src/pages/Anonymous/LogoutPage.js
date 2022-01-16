import Logout from "../../components/User/Logout";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();
  const logoutSuccessHandler = () => {
    setTimeout(() => {
        navigate('/login');
     }, 1000);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="1">
          <Logout onLogoutSuccess={logoutSuccessHandler} />
        </Col>
      </Row>
    </Container>
  );
};

export default LogoutPage;
