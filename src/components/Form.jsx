import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './BButton';
import '../styles/signup.css';
import { FaEyeSlash, FaEye, FaCheck } from 'react-icons/fa';
import axios from 'axios';

function Signup() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState('');
    const [passwordStrength, setPasswordStrength] = useState({
        containsNameOrEmail: false,
        length: false,
        containsSymbolOrNumber: false,
        containsUppercase: false
    });
    const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

    const domain = "dev-8ja5z27gacw183vf.eu.auth0.com";
    const clientId = "P5ePbyjmq6xLc09ZxshMaqkwcNmVbKNX";

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validatePassword = (password) => {
        const emailLower = email.toLowerCase();
        const passwordStrengthObj = {
            containsNameOrEmail: !password.toLowerCase().includes(emailLower), // check if password contains email
            length: password.length >= 8, // check if password has at least 8 characters
            containsSymbolOrNumber: /[\W_0-9]/.test(password), // check if password contains a symbol or number
            containsUppercase: /[A-Z]/.test(password) // check if password contains at least one uppercase letter
        };
        setPasswordStrength(passwordStrengthObj);

        // Calculate password strength
        if (passwordStrengthObj.length && passwordStrengthObj.containsSymbolOrNumber && passwordStrengthObj.containsUppercase) {
            setStrength('Strong');
            setIsNextButtonEnabled(true); // Enable next button when strong password
        } else if (passwordStrengthObj.length) {
            setStrength('Medium');
            setIsNextButtonEnabled(false); // Disable next button if password is not strong enough
        } else {
            setStrength('Weak');
            setIsNextButtonEnabled(false); // Disable next button if password is weak
        }
    };

    useEffect(() => {
        if (password) {
            validatePassword(password);
        }
    }, [password]);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email);

        // Move to step 2 for password setup
        setStep(2);
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `https://${domain}/dbconnections/signup`,
                {
                    client_id: clientId,
                    email,
                    password,
                    connection: 'Username-Password-Authentication',
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                setSuccess(true);
                setError(null);
                alert('Signup successful');
                // Redirect to Verif page and pass email as part of the URL
                navigate(`/Verif?email=${encodeURIComponent(email)}`);
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);

            // Custom error handling: Show message if email already exists
            if (error.response?.status === 400) {
                setError('Email is already used!');
            } else {
                setError(error.response?.data?.error_description || error.message);
            }
            setSuccess(false);
        }
    };

    const FormStyle = {
        backgroundColor: '#FFFFF',
        padding: '5vw',
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0em',
        position: 'relative',
        minHeight: '700px',
    };

    const passwordStyle = {
        padding: '5vw',
        paddingTop: '5vw',
        textAlign: 'center',
        minHeight: '700px',
        position: 'relative',
    };

    const getColor = () => {
        switch (strength) {
            case 'Strong':
                return 'green';
            case 'Medium':
                return 'orange';
            default:
                return 'red';
        }
    };

    const renderContent = () => {
        if (step === 1) {
            return (
                <>
                    <div className="container" style={FormStyle}>
                        <div><h1>Create Account</h1></div>
                        {/*<div>*/}
                        {/*    /!* Social login buttons *!/*/}
                        {/*    <span>*/}
                        {/*        <a href="https://www.linkedin.com">*/}
                        {/*            <img src={FB} className="rounded" alt="Facebook" style={{ width: 56, height: 56 }} />*/}
                        {/*        </a>*/}
                        {/*    </span>&nbsp;&nbsp;&nbsp;&nbsp;*/}
                        {/*    <span>*/}
                        {/*        <a href="https://www.linkedin.com">*/}
                        {/*            <img src={Gmail} className="rounded" alt="Gmail" />*/}
                        {/*        </a>*/}
                        {/*    </span>&nbsp;&nbsp;&nbsp;&nbsp;*/}
                        {/*    <span>*/}
                        {/*        <a href="https://www.facebook.com">*/}
                        {/*            <img src={X} className="rounded" alt="X" />*/}
                        {/*        </a>*/}
                        {/*    </span>&nbsp;&nbsp;&nbsp;&nbsp;*/}
                        {/*    <span>*/}
                        {/*        <a href="https://www.linkedin.com">*/}
                        {/*            <img src={Linkedin} className="rounded" alt="Linkedin" />*/}
                        {/*        </a>*/}
                        {/*    </span>*/}
                        {/*</div>*/}
                        <div style={{ color: '#666666', paddingTop: '15px' }}>Or use your email account</div>
                        <div style={{ paddingTop: '40px', textAlign: 'left' }}>
                            <form onSubmit={handleEmailSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label"><strong>Email Address</strong><br /></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="Email"
                                        placeholder="Enter your email"
                                        style={{ width: '100%', maxWidth: '470px', height: '51px', border: '2px solid #00C0FC', padding: '16px', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10 }}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <br />
                                <div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            style={{ width: '24px', height: '24px' }}
                                            type="checkbox"
                                            id="gridCheck"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="gridCheck" style={{ paddingLeft: '12px' }}>
                                            You agree to the <u><strong>Terms of Use</strong></u> and <strong><u>Privacy Notice</u></strong>
                                        </label>
                                    </div>
                                </div>
                                <div style={{ paddingBottom: '17px', paddingTop: '17px' }}>
                                    <div className="form-check" >
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                            style={{ width: '24px', height: '24px' }}
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="gridCheck" style={{ paddingLeft: '12px' }}>
                                            By agreeing, you'll receive information and special offers about <br /> our products via email. You can unsubscribe from these emails at any time.
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <Button type="submit" />
                                </div>
                            </form>
                            <div style={{ color: '#666666', textAlign: 'center', paddingTop: '20px' }}>
                                Have an account? <a href="/login" style={{ color: '#000000' }}><strong> Sign-In</strong></a></div>
                        </div>
                    </div>
                </>
            );
        } else if (step === 2) {
            return (
                <>
                    <div className="container" style={passwordStyle}>
                        <div><h1>Create Password</h1></div>
                        <div style={{ textAlign: 'left', paddingTop: '30px' }}>
                            <form onSubmit={handlePasswordSubmit}>
                                <div>
                                    <label htmlFor="formGroupPassword" className="form-label"><strong>Password</strong></label>
                                    <div style={{ display: "flex", paddingTop: "15px", position: "relative" }}>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            id="formGroupPassword"
                                            placeholder="Enter a password"
                                            style={{ width: '100%', maxWidth: '380px', height: '35px', border: '0px solid black', padding: '12px', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10 }}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                                            {showPassword ? (
                                                <FaEyeSlash
                                                    onClick={togglePasswordVisibility}
                                                    style={{ width: '19px', height: '19px', cursor: 'pointer', color: "#606060" }}
                                                />
                                            ) : (
                                                <FaEye
                                                    onClick={togglePasswordVisibility}
                                                    style={{ width: '19px', height: '19px', cursor: 'pointer', color: "#606060" }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    {success && <p style={{ color: 'green' }}>Signup successful!</p>}

                                    <div style={{ paddingTop: '20px', display: 'flex', color: '#666666', fontSize: '16' }}>
                                        Password Strength:
                                        <div style={{ color: getColor(), paddingLeft: '15px' }}>{strength}</div>
                                    </div>

                                    <div>
                                        <div style={{ display: "flex" }}>
                                            <div className="form-check">
                                                <FaCheck
                                                    className="form-check-input"
                                                    style={{
                                                        marginTop: '5px',
                                                        border: '2px solid',
                                                        borderRadius: '14px',
                                                        width: '24px',
                                                        height: '24px',
                                                        marginBottom: '15px',
                                                        marginRight: '5px',
                                                        color: passwordStrength.containsNameOrEmail ? '#00BDA9' : '#999999',
                                                        fontSize: 20
                                                    }}
                                                />
                                                <label className="form-check-label" htmlFor="gridCheckp1" style={{ position:"relative", top:-20, paddingLeft: '12px', color: '#666666' }} >
                                                    Must not contain your name or email
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div className="form-check">
                                                <FaCheck
                                                    className="form-check-input"
                                                    style={{
                                                        border: '2px solid',
                                                        borderRadius: '14px',
                                                        width: '24px',
                                                        height: '24px',
                                                        marginBottom: '15px',
                                                        marginRight: '5px',
                                                        color: passwordStrength.length ? '#00BDA9' : '#999999',
                                                        fontSize: 20
                                                    }}
                                                />
                                                <label className="form-check-label" htmlFor="gridCheckp2" style={{ position:"relative", top:-20, paddingLeft: '12px', color: '#666666' }} required>
                                                    At least 8 characters
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", paddingBottom: '24px' }}>
                                            <div className="form-check" >
                                                <FaCheck
                                                    className="form-check-input"
                                                    style={{
                                                        border: '2px solid',
                                                        borderRadius: '14px',
                                                        width: '24px',
                                                        height: '24px',
                                                        marginBottom: '15px',
                                                        marginRight: '5px',
                                                        color: passwordStrength.containsSymbolOrNumber ? '#00BDA9' : '#999999',
                                                        fontSize: 20
                                                    }}
                                                />
                                                <label className="form-check-label" htmlFor="gridCheckp3" style={{ position:"relative", top:-20, paddingLeft: '12px', color: '#666666' }} required>
                                                    Contains a symbol or a number
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", paddingBottom: '24px' }}>
                                            <div className="form-check" >
                                                <FaCheck
                                                    className="form-check-input"
                                                    style={{
                                                        border: '2px solid',
                                                        borderRadius: '14px',
                                                        width: '24px',
                                                        height: '24px',
                                                        marginBottom: '15px',
                                                        marginRight: '5px',
                                                        color: passwordStrength.containsUppercase ? '#00BDA9' : '#999999',
                                                        fontSize: 20
                                                    }}
                                                />
                                                <label className="form-check-label" htmlFor="gridCheckp3" style={{ position:"relative", top:-20, paddingLeft: '12px', color: '#666666' }} required>
                                                    Contains an Uppercase letter
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Button type="submit" disabled={!isNextButtonEnabled} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            );
        }
    };

    return renderContent();
}

export default Signup;
