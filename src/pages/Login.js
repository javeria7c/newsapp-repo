// import "./App.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();

    let result = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: name, password: password }),
    });
    const res = await result.json();
    res.token && localStorage.setItem("token", res.token);

    navigate("/homepage");
  }

  return (
    <div className="form-body">
      <div className=" form-flex-container">
        <Container
          className="bg-white m-auto "
          style={{ width: "440px", boxShadow: "3px 3px 10px grey" }}
        >
          <Form className="form-innerdiv">
            <Row>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Control
                    className="form-control-lg"
                    style={{ backgroundColor: "rgb(252, 247, 247)" }}
                    type="text"
                    value={name}
                    placeholder="username"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formPassword">
                  <Form.Control
                    className="form-control-lg"
                    style={{ backgroundColor: "rgb(252, 247, 247)" }}
                    type="text"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <br />
              </Col>
            </Row>
            <button
              className="btn-lg"
              variant="success"
              onClick={(e) => login(e)}
            >
              LOGIN
            </button>
            <h className="line1">Not Registered?</h>
            <h className="line2"> Create an account</h>
          </Form>
        </Container>
      </div>
    </div>
  );
}
export default LoginForm;
