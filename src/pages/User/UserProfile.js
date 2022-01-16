import Profile from "../../components/User/Profile";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Fragment } from "react/cjs/react.production.min";

const UserProfile = () => {
  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="12">
            <Card className="mt-20">
              <Card.Header>User Profile Page</Card.Header>
              <Card.Body>
                <Profile userData={{
                    email: 'serdaraydin1987@gmail.com',
                    name: 'Serdar',
                    surname: 'AYDIN',
                    birthDate: '1987-09-03'
                }}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UserProfile;
