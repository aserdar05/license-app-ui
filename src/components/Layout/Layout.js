import { Container, Row } from "react-bootstrap";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

const Layout = (props) => {
  const alertInfo = useSelector((state) => state.alert);
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <MainNavigation />
        </Row>
        <Row>
          {alertInfo.show === true && (
            <Alert variant={alertInfo.type}>{alertInfo.message}</Alert>
          )}

          <main className={classes.main}>{props.children}</main>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Layout;
