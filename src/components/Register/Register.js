import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { register } from "../../actions/user";
import { ERROR } from "../../constants/actionTypes";

function Register() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const registerUser = () => {
    if (values.password === values.passwordAgain) {
      dispatch(
        register({ username: values.username, password: values.password })
      );
    } else {
      dispatch({ type: ERROR, payload: "Passwords are not equal" });
    }
  };

  const { onChange, onSubmit, Clear, values } = useForm(registerUser, {
    username: "",
    password: "",
    passwordAgain: "",
  });

  return (
    <Container className="mt-5 mb-5">
      {user ? user._id ? <Redirect to="/chat" /> : <div /> : <div />}
      <Card bg="dark" text="white">
        <Card.Header>Register</Card.Header>
        <Card.Body>
          <Card.Title>Create a user to start</Card.Title>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={onChange}
                name="username"
                value={values.username}
                type="text"
                placeholder="username"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={onChange}
                name="password"
                value={values.password}
                type="password"
                placeholder="password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password Again</Form.Label>
              <Form.Control
                onChange={onChange}
                name="passwordAgain"
                value={values.passwordAgain}
                type="password"
                placeholder="password again"
              />
            </Form.Group>
            {user ? (
              user.error ? (
                <Alert className="mt-3" variant="danger">
                  <h6>{user.error}</h6>
                </Alert>
              ) : (
                <div />
              )
            ) : (
              <div />
            )}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Register;
