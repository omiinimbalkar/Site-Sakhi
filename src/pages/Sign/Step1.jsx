import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Step1 = ({ nextStep }) => {
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formIsValid = form.firstName && form.lastName && form.email;

        setValidated(true);

        if (formIsValid) {
            nextStep(); // go to next step only if valid
        }
    };

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <h6 className="fw-semibold">Let's get to know you</h6>
            <p className="text-muted small">We'll use this to personalize your experience</p>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder="First name"
                            isInvalid={validated && !form.firstName}
                        />
                        <Form.Control.Feedback type="invalid">First name is required</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            placeholder="Last name"
                            isInvalid={validated && !form.lastName}
                        />
                        <Form.Control.Feedback type="invalid">Last name is required</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-4">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    isInvalid={validated && !form.email}
                />
                <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="w-100 btn-teal">Continue</Button>
            <p className="text-center mt-3">
                or sign up with</p>
            <div className="mb-3">
                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleSocialLogin("Google")}>
                    <i className="bi bi-google me-2 text-danger"></i> Continue with Google
                </button>
                <button className="btn btn-outline-secondary w-100" onClick={() => handleSocialLogin("Facebook")}>
                    <i className="bi bi-facebook me-2 text-primary"></i> Continue with Facebook
                </button>
            </div>
            <div className="text-center mt-3">
                Already have an account? <Link to="/login">Sign In</Link>
            </div>
        </Form>
    );
};

export default Step1;


// <button className="btn btn-link btn-sm px-0" >
//     <Link to="/login">Sign In</Link>
// </button>