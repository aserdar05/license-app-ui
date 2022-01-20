import { Fragment, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ProjectDetail from "../../../components/User/ProjectDetail";
import useHttp from "../../../hook/useHttp";
import { getProject, saveProject } from "../../../lib/projectRepository";

const AddProject = (event) => {
  const { sendRequest: sendSaveRequest, status: saveStatus } = useHttp(saveProject);
  const { sendRequest: sendGetRequest, status: getStatus, data: loadedProject } = useHttp(getProject);
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  
  const params = useParams();
  const { projectId } = params;

  useEffect(() => {
    if (saveStatus === "completed") {
      navigate("/user/projects");
    }
  }, [saveStatus, navigate]);

  useEffect(() => {
    if(projectId){
      sendGetRequest(projectId);
    }
  }, [projectId])

  useEffect(() => {
    if (getStatus === "completed") {
      setProject(loadedProject);
    }
  }, [getStatus])      
  
  const projectAddHandler = (projectData) => {
    sendSaveRequest(projectData);
  };

  const projectUpdateHandler = (projectData) => {
    //sendSaveRequest(projectData);
  };

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="12">
            <Card className="mt-20">
              <Card.Header>Add New Project</Card.Header>
              <Card.Body>
                <ProjectDetail onAddProject={projectAddHandler} onUpdateProject={projectUpdateHandler} project={project} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddProject;
