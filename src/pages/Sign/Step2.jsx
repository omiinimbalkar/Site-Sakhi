import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Step2 = ({ nextStep, prevStep }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [errors, setErrors] = useState({});

    const handleContinue = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!password.trim()) newErrors.password = 'Password is required';
        if (!confirmPassword.trim()) newErrors.confirmPassword = 'Confirm password is required';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!agreed) newErrors.agreed = 'You must agree to terms';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            nextStep(); // Only proceed if no errors
        }
    };

    return (
        <Form>
            <h6 className="fw-semibold">Secure your account</h6>
            <p className="text-muted small">Choose a strong password to protect your data</p>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    label={<>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></>}
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    isInvalid={!!errors.agreed}
                    feedback={errors.agreed}
                    feedbackType="invalid"
                />
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Check
                    type="checkbox"
                    defaultChecked
                    label="Send me helpful tips, resources, and updates for women entrepreneurs"
                />
            </Form.Group>

            <div className="d-flex justify-content-between">
                <Button variant="outline-secondary" onClick={prevStep}>Back</Button>
                <Button className="btn-teal" onClick={handleContinue}>Continue</Button>
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

export default Step2;
