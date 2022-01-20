import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Login = (props) => {
  //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let emailRef = useRef();
  let passwordRef = useRef();
  let checkedRef = useRef();

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    var loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      checked: checkedRef.current.checked,
    };
    console.log(loginData);

    props.onLoginAction(loginData);
  };

  return (
    <Form noValidate onSubmit={loginSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={emailRef}
          required
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passwordRef}
          required
          type="password"
          placeholder="Enter Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check ref={checkedRef} type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
        <ArrowRightCircle className="ml-5" />
      </Button>
    </Form>
  );
};

export default Login;
