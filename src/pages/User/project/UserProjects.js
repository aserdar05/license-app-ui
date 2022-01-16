import { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectList from "../../../components/User/ProjectList";
import { getAllProjects } from "../../../lib/projectRepository";
import useHttp from "../../../hook/useHttp";

const UserProjects = () => {
  const [projects, setProjects] = useState({});
  const { sendRequest, status, data: projectList } = useHttp(getAllProjects);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (status === "completed") {
      setProjects(projectList);
    }
  }, [status, projectList]);

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="12">
            <Card className="mt-20">
              <Card.Header>User Profile Page</Card.Header>
              <Card.Body>
                <ProjectList projectList={projects}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UserProjects;
