import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="text-center">
      <h2 className="mb-5">Please Register</h2>

      <Form className="w-25 mx-auto">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control placeholder="Enter your e-mail" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <NavLink to="/login">Already Registered ?</NavLink>
    </div>
  );
};

export default Register;
