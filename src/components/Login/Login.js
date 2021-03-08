import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";
import { login } from "../../actions/user";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logUser = () => {
    dispatch(login(values));
  };

  const { onChange, onSubmit, Clear, values } = useForm(logUser, {
    username: "",
    password: "",
  });

  return (
    <Container className="mt-5">
      <Card border="primary">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Card.Title>Enter your details and start to chat</Card.Title>
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

export default Login;
