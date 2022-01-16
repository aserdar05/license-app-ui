import { Col, Container, Row } from "react-bootstrap";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import "./Layout.css";
import SideBar from "./SideBar/SideBar";

const Layout = (props) => {
  const alertInfo = useSelector((state) => state.alert);
  return (
    <Fragment>
      <Container fluid className="full-height">
        <Row className="full-height">
          <Col md="auto" className="p-0">
            <SideBar/>
          </Col>
          <Col className="p-0">
            <MainNavigation />
            {alertInfo.show === true && (
            <Alert variant={alertInfo.type}>{alertInfo.message}</Alert>
          )}
          
            <main>{props.children}</main>
          </Col>
        </Row>
        <Row>
          

        </Row>
      </Container>
    </Fragment>
  );
};

export default Layout;
