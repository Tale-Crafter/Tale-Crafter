import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/forgotPassword.css';
import LeftBackground from '../../components/LeftBackground';

function ForgotPassword() {
    const { domain, clientId } = {
        domain: "dev-8ja5z27gacw183vf.eu.auth0.com",
        clientId: "P5ePbyjmq6xLc09ZxshMaqkwcNmVbKNX"
    };

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        // Validate email format
        if (!inputValue.includes('@') || !inputValue.includes('.')) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        if (!emailError && email) {
            try {
                // Make the POST request to Auth0 passwordless API with the correct connection
                const response = await axios.post(`https://${domain}/passwordless/start`, {
                    client_id: clientId,
                    connection: 'email',  // Using the passwordless email connection
                    email,
                    send: 'link', // Send reset email link
                    authParams: {
                        redirect_uri: 'http://localhost:3000/ChangePassword' // The URI to redirect the user after clicking the reset link
                    }
                });

                if (response.status === 200) {
                    setEmailSent(true);  // Trigger the UI change to inform the user
                }
            } catch (error) {
                console.error("Error sending reset email", error);
                alert("An error occurred while sending the reset email. Please try again.");
            }
        }
    };


    return (
        <div className="forgotPassword">
            {emailSent ? (
                <>
                    <img src={require('../../images/emailSentIcon.png')} alt='Email Sent Icon' className='emailSentIconStyle' />
                    <span className="forgotPasswordTitle">Email Sent</span>
                    <span className="forgotPasswordInfo">
                        We have sent you an email at <span style={{ color: '#ED1C24' }}>{email}</span>.
                        Check your inbox and follow the instructions to reset your account password.
                    </span>
                    <div className='forgotPasswordEmail'>
                        <div className='didntRecieveEmail'>
                            <span>Did not receive email? </span>
                            <span style={{ color: "#00C0FC", fontWeight: "600" }}>
                                <Link to="/">Resend Email</Link>
                            </span>
                        </div>
                        <div className='wrongEmail'>
                            <span>Wrong email address? </span>
                            <span style={{ color: "#00C0FC", fontWeight: "600" }}>
                                <Link to="/ForgotPasswordOne">Change email address</Link>
                            </span>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <span className="forgotPasswordTitle">Forgot Password</span>
                    <span className="forgotPasswordInfo">
                        Kindly provide the email address linked to your account. We will send you instructions via email on how to reset your password.
                    </span>
                    <form onSubmit={handleForgotPassword}>
                        <div className="forgotPasswordForm">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <p className="errorMessage">{emailError}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={!!emailError || !email}
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
                            }}
                        >
                            Send Email
                        </button>
                    </form>

                    <div className="rememberPassword">
                        <span>Remember Password? </span>
                        <span style={{ color: "#000", fontWeight: "600" }}>
                            <Link to="/login">Login</Link>
                        </span>
                    </div>
                </>
            )}
            <LeftBackground mainText={"Forget PWD?"} detailsText={"Don't worry :))"} />
        </div>
    );
}

export default ForgotPassword;
