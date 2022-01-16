import { Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import ArrowInRight from "../UI/Icons/ArrowInRight";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/index";

const Login = (props) => {
  const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [validated, setValidated] = useState();
  let emailRef = useRef();
  let passwordRef = useRef();
  let checkedRef = useRef();

  const loginSubmitHandler = (event) => {
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      var loginData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        checked: checkedRef.current.checked,
      };
      console.log(loginData);
      setValidated(true);
      dispatch(authActions.login({
        email: loginData.email,
        name: 'Serdar',
        surname: 'AYDIN'
      }));
      props.onLoginSuccess();
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={loginSubmitHandler}>
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
        <ArrowInRight />
      </Button>
    </Form>
  );
};

export default Login;
