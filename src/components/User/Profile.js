import { Form, Row, Col, Button } from "react-bootstrap";
import SaveIcon from '../UI/Icons/SaveIcon';

const Profile = (props) => {
  const userData = props.userData;
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={userData.email} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" value={userData.name} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Surname
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" value={userData.surname} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          BirthDate
        </Form.Label>
        <Col sm="10">
          <Form.Control type="date" value={userData.birthDate} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="primary" type="submit">
            Update
            { <SaveIcon /> }
          </Button>
        </Col>
      </Form.Group>
      {/* <Button variant="primary" type="submit" className="float-end">
            Update
            { <ArrowInRight /> }
          </Button> */}
    </Form>
  );
};

export default Profile;
