import { Button, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Alert_Comp from "../../components/Alert/Alert_Comp";
import Spinner_comp from "../../components/Spinner/Spinner_comp";
import Toast_Comp from "../../components/Toast/Toast_Comp";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const history = useNavigate();

  const {user} = useSelector((state) => state.auth);
      const formSubmitHandler = async(e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/auth/register",{
              userName,
                email,
                password,
                confirmPassword,
            });
        localStorage.setItem("token", response.data.token);
        setToast(true);                    
        console.log(response);
        history("/login");

      }
  

  useEffect(() => {
    if(user && user.role==="Student")
    {
      history('/dashboard')
    }
    else if(user && user.role==="Admin")
    {
      history('/admin-dashboard')
    }
    else if(user && user.role==="Teacher")
    {
      history('/teacher-dashboard')
    }

  }, [user])

  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Container>
        <Toast_Comp
          setToast={setToast}
          renderToast={toast}
          msg="Registration Success Please Login"
        />
        <Row className="mx-auto mt-5">
          <Col md={6} className="mx-auto mt-5 ">
            <Paper className="p-4 shadow rounded">
              <Typography
                className="text-center text-primary mb-3"
                variant="h5"
              >
                Register Here
              </Typography>
              {loading && <Spinner_comp />}
              {error && error.user && (
                <Alert_Comp variant="danger" msg={error.user} />
              )}

              <Form onSubmit={formSubmitHandler}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="Enter Your Username"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.userName}
                  </span>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                  />
                  <span style={{ color: "red" }}>{error && error.email}</span>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.password}
                  </span>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <span style={{ color: "red" }}>
                    {error && error.confirmPassword}
                  </span>
                </Form.Group>
                <Typography style={{ color: "GrayText" }} variant="subtitle2">
                  Already Have an account?
                  <Link to="/login">Login Here</Link>
                </Typography>
                <Button
                  className="mt-2"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
