import React, { useState } from 'react'

import SocialMedia from '../../components/SocialMedia';
import LeftBackground from '../../components/LeftBackground';
import { useParams } from 'react-router-dom';

import '../../styles/login.css'
import { Link, useNavigate } from 'react-router-dom';

function LoginOne() {
    const { iduser } = useParams();


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        if (!inputValue.includes('@')) {
            setEmailError('An email address must contain a single @');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const inputValue = e.target.value;
        setPassword(inputValue);
        if (inputValue.length < 6) {
            setPasswordError('The password requires a minimum of 6 characters');
        } else {
            setPasswordError('');
        }
    };

    const isFormValid = emailError === '' && passwordError === '' && email !== '' && password !== '';
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (isFormValid) {
            console.log('Form submitted successfully!');
            navigate(`/home/${iduser}`);
        } else {
            console.log('Form is not valid. Errors:');
            if (emailError) {
                console.log('Email error:', emailError);
            }
            if (passwordError) {
                console.log('Password error:', passwordError);
            }
        }
    };




    const titleStyle = {
        color: "#000",
        //fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
        width: "96px",
        height: "19px",
        top: "-2px",
        position: "absolute",

    };
    const placeholderStyle = {
        width: "400px",
        height: "51px",
        flexShrink: "0",
        borderRadius: "10px",
        top: "25px",
        position: "absolute",

    };
    const errorStyle = {
        color: "#ED1C24",
        // fontFamily: "Open Sans",
        fontSize: "14px",
        width: "400px",
        height: "51px",
        flexShrink: "0",
        borderRadius: "10px",
        bottom: "-50px",
        position: "absolute",

    };
    const buttonStyle = {
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
    }

    return (
        <div className='login'>
            <text className="loginTitle">Sign in to TALE</text>
            <SocialMedia />
            <span className="emailAccount">Or use your email account</span>
            <span className="reCAPTCHA">This site is protected by reCAPTCHA and the <u>Google Privacy Policy</u> and  <u>Terms of Service </u> apply.</span>
            <div className="loginForm">
                <label style={titleStyle}>Email Address</label>
                <input style={placeholderStyle}
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailError && <p style={errorStyle}>{emailError}</p>}

            </div>
            <div className="passwordForm">

                <label style={titleStyle}>Password</label>
                <input style={placeholderStyle}
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {passwordError && <p style={errorStyle}>{passwordError}</p>}
                <span>
                    <Link to="/ForgotPasswordOne" className='forgotPasswordLabel'>
                        Forgot?
                    </Link>
                </span>
            </div>

            <div>
                <div className='signupLink'>
                    <span style={{ color: "#666", fontWeight: "400", }}>Don't have an account? </span>
                    <span style={{ color: "#000", fontWeight: "600", }}>
                        <Link to="/Register">
                            <span>Sign up</span>
                        </Link>
                    </span>
                </div>
                <div className='nextButton'>
                    <button style={buttonStyle} disabled={!isFormValid} onClick={handleSubmit}>
                        Sign in
                    </button>

                </div>
            </div>
            <LeftBackground mainText={"Hello, Friend!"}
                detailsText={"To stay connected with us, please log in using your personal information"} />
        </div>
    )
}

export default LoginOne
