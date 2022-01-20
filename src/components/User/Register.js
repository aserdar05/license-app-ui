import { Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { BoxArrowInRight } from "react-bootstrap-icons";
import useAlert from "../../hook/useAlert";

const Register = (props) => {
  const [validated, setValidated] = useState();
  const [addAlert, removeAlert] = useAlert();

  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const birthDateRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const registerSubmitHandler = (event) => {
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      var registerData = {
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        email: emailRef.current.value,
        birthDate: birthDateRef.current.value,
        password: passwordRef.current.value,
        roleId: 1
      };
      if(registerData.password !== passwordConfirmRef.current.value){
        addAlert('warning', 'Password values entered mismatch!');
        return;
      }
      else{
        removeAlert();
        console.log(registerData);
        setValidated(true);
        props.onRegisterSuccess(registerData);
      }
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={registerSubmitHandler}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          ref={nameRef}
          required
          type="text"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          ref={surnameRef}
          required
          type="text"
          placeholder="Enter surname"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
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
      <Form.Group className="mb-3" controlId="formBirth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          ref={birthDateRef}
          required
          type="date"
          placeholder="Enter date of birth"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passwordRef}
          required
          type="password"
          placeholder="Enter Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPasswordConfirm">
        <Form.Label>Password Confirm</Form.Label>
        <Form.Control
          ref={passwordConfirmRef}
          required
          type="password"
          placeholder="Reenter Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
        <BoxArrowInRight />
      </Button>
    </Form>
  );
};

export default Register;
