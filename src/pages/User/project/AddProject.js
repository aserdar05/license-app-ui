import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProjectDetail from "../../../components/User/ProjectDetail";
import useHttp from "../../../hook/useHttp";
import { saveProject } from "../../../lib/projectRepository";

const AddProject = (event) => {
  const { sendRequest, status } = useHttp(saveProject);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/user/projects");
    }
  }, [status, navigate]);
  
  const projectAddHandler = (projectData) => {
    sendRequest(projectData);
  };

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="12">
            <Card className="mt-20">
              <Card.Header>Add New Project</Card.Header>
              <Card.Body>
                <ProjectDetail onAddProject={projectAddHandler} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddProject;
