import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LeftBackground from '../../components/LeftBackground';
import axios from 'axios';

function ForgotPasswordThree() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [verificationToken, setVerificationToken] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validatePassword = () => {
        const containsSymbolNumber = /[!@#$%^&*()_+\-={};':"\\|,.<>?0-9]/.test(password);
        const hasValidLength = password.length >= 8;

        if (containsSymbolNumber && hasValidLength) {
            setStrength('strong');
        } else if (hasValidLength) {
            setStrength('Good');
        } else {
            setStrength('weak');
        }
    };

    // Extract the verification token from URL params
    // Extract the verification token from URL params
    useEffect(() => {
        const params = new URLSearchParams(window.location.hash.substring(1));  // Remove the '#' at the start
        const token = params.get('access_token');
        console.log("Token:", token);

        if (token) {
            setVerificationToken(token);  // Store the token for further API calls
        } else {
            console.error("No access token found in URL.");
        }
    }, []);


    const handlePasswordReset = async (e) => {
        e.preventDefault();
        if (strength === 'weak') {
            setError('Password strength is too weak.');
            return;
        }
        try {
            // Send the password reset request to Auth0
            await axios.post('https://dev-8ja5z27gacw183vf.eu.auth0.com/api/v2/tickets/password-change', {
                client_id: 'P5ePbyjmq6xLc09ZxshMaqkwcNmVbKNX',
                password,
                // connection: 'email',
                token: verificationToken,
                },
                {
                    headers: {
                        Authorization: `Bearer ${verificationToken}`, // Ensure proper format
                    },
                }
                );

            setSuccess(true);
            setError(null);

            // Redirect to login or success page
            setTimeout(() => navigate('/login'), 3000);
        } catch (err) {
            console.error(err);
            setError('Failed to reset password. Please try again.');
        }
    };

    return (
        <>
            <LeftBackground mainText={"Forget PWD?"} detailsText={"Don't worry :))"} />
            <div className="container" style={{ textAlign: 'center', paddingTop: '50px' }}>
                <h1>Create New Password</h1>
                {success ? (
                    <p style={{ color: '#198754' }}>Password reset successful! Redirecting to login...</p>
                ) : (
                    <form onSubmit={handlePasswordReset}>
                        <div style={{ paddingTop: '30px' }}>
                            <label>Password</label>
                            <div style={{ display: "flex", paddingTop: "15px", position: "relative" }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter a new password"
                                    style={{
                                        width: '400px',
                                        height: '51px',
                                        border: '2px solid #00C0FC',
                                        padding: '12px',
                                    }}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        validatePassword();
                                    }}
                                />
                                <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                                    {showPassword ? (
                                        <FaEyeSlash onClick={togglePasswordVisibility} style={{ cursor: 'pointer', color: "#606060" }} />
                                    ) : (
                                        <FaEye onClick={togglePasswordVisibility} style={{ cursor: 'pointer', color: "#606060" }} />
                                    )}
                                </div>
                            </div>
                            <div style={{ paddingTop: '20px' }}>
                                Password Strength: <span style={{ color: strength === 'strong' ? '#198754' : strength === 'Good' ? '#0d6efd' : '#dc3545' }}>
                                    {strength}
                                </span>
                            </div>
                        </div>
                        {error && <p style={{ color: '#dc3545' }}>{error}</p>}
                        <button
                            type="submit"
                            style={{
                                background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                                width: '400px',
                                height: '51px',
                                padding: '16px',
                                borderRadius: '10px',
                                color: 'white',
                                textAlign: 'center',
                                lineHeight: '19px',
                                fontFamily: 'TaleBlue, sans-serif',
                                fontSize: '14px',
                                cursor: 'pointer',
                                border: 'none',
                                outline: 'none',
                                marginTop: '20px',
                            }}
                        >
                            Reset Password
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}

export default ForgotPasswordThree;
