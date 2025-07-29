import React from 'react';
// import './SignupPage.css';
import '../Common.css'
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col, ProgressBar } from 'react-bootstrap';

const SignupPage = () => {
  return (
    <Layout>
      <div className="signup-wrapper">
      <Container className="signup-card shadow-lg p-4 bg-white rounded">
        <div className="text-center mb-3">
          <img src="/logo192.png" alt="Site-Sakhi Logo" className="logo-img" />
          <h4 className="mt-2 fw-bold">Join Our Community!</h4>
          <p className="text-muted">Start building your dream website in minutes</p>
        </div>

        <div className="mb-3 text-muted d-flex justify-content-between small">
          <span>Step 1 of 3</span>
          <span>33% Complete</span>
        </div>
        <ProgressBar now={33} className="mb-4" />

        <h6 className="mb-3 fw-semibold">Let's get to know you</h6>
        <p className="text-muted small">We'll use this to personalize your experience</p>

        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-4">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Button variant="teal" type="submit" className="w-100 mb-3">
            Continue
          </Button>

          <div className="text-center text-muted mb-3">or sign up with</div>

          <Row className="mb-3">
            <Col>
              <Button variant="outline-secondary" className="w-100">
                <i className="fab fa-google me-2"></i>Google
              </Button>
            </Col>
            <Col>
              <Button variant="outline-secondary" className="w-100">
                <i className="fab fa-facebook me-2"></i>Facebook
              </Button>
            </Col>
          </Row>

          <div className="text-center mb-3">
            Already have an account? <a href="#" className="text-primary fw-semibold">Sign in</a>
          </div>

          <div className="text-center small text-muted bg-light p-2 rounded">
            <i className="fas fa-shield-alt me-1"></i>Your information is encrypted and secure. We never share your data.
          </div>
        </Form>
      </Container>
    </div>
  </Layout>
  );
};

export default SignupPage;
