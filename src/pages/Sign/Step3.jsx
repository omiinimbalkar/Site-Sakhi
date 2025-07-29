import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Step3 = ({ prevStep }) => {
    const [businessName, setBusinessName] = useState('');
    const [businessType, setBusinessType] = useState('');
    const [experience, setExperience] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!businessType || !experience) {
            setError('Please fill all required fields.');
        } else {
            setError('');
            // Proceed with account creation or next step
            alert('Form submitted!');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h6 className="fw-semibold">Tell us about your business</h6>
            <p className="text-muted small">This helps us customize your experience</p>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-3">
                <Form.Label>Business Name (Optional)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Your business name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>What type of business? <span className="text-danger">*</span></Form.Label>
                <Form.Select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    required
                >
                    <option value="">Select your business type</option>
                    <option>Retail</option>
                    <option>Service</option>
                    <option>Manufacturing</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Business experience level <span className="text-danger">*</span></Form.Label>
                <Form.Select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                >
                    <option value="">Select your experience level</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Expert</option>
                </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={prevStep}>Back</Button>
                <Button type="submit" className="btn-teal">Create Account</Button>
            </div>
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

export default Step3;
