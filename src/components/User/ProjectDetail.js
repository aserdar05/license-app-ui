import { Form, Row, Col, Button } from "react-bootstrap";
import { useRef, useState } from "react";

const ProjectDetail = (props) => {
  const [validated, setValidated] = useState();
  const nameRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const statusRef = useRef();
  const detailRef = useRef();

  let projectData = {};
  const isUpdate = props && props.project;
  if (isUpdate) {
    projectData = props.project;
  }

  const projectSaveSubmitHandler = (event) => {
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      var projectData = {
        name: nameRef.current.value,
        startDate: startDateRef.current.value,
        endDate: endDateRef.current.value,
        status: statusRef.current.value,
        detail: detailRef.current.value,
      };
      setValidated(true);
      props.onAddProject(projectData);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={projectSaveSubmitHandler}>
      <Form.Group as={Row} className="mb-3" controlId="formProjectName">
        <Form.Label column sm="2">
          Project Name
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={nameRef} type="text" value={projectData.name} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Start Date
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={startDateRef} type="date" value={projectData.startDate} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          End Date
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={endDateRef} type="date" value={projectData.endDate} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Project Status
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={statusRef} type="text" value={projectData.status} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Project Detail
        </Form.Label>
        <Col sm="10">
          <Form.Control ref={detailRef} as="textarea" rows={3} value={projectData.detail} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant="primary" type="submit">
            {isUpdate ? "Update" : "Save"}
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default ProjectDetail;
