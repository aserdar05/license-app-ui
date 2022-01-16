import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './MainNavigation.css';

const MainNavigation = () => {
  const authInfo = useSelector((state) => state.auth);
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">License App From React</Navbar.Brand>
          {!authInfo.isAuthenticated && (
            <Nav className="me-auto">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </Nav>
          )}

          {authInfo.isAuthenticated && (
            <NavDropdown
              title={authInfo.name + " " + authInfo.surname}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="link">
                <NavLink to="/user/profile" className="link">
                  {authInfo.email}
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
                <NavLink to="/logout" className="link">
                  Logout
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            // <Navbar.Collapse className="justify-content-end">
            //   <Navbar.Text>{authInfo.email}</Navbar.Text>
            // </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavigation;
