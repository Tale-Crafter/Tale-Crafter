import React, { useState } from "react"

import '../../styles/forgotPassword.css'
import { Link, useNavigate } from 'react-router-dom';
import LeftBackground from '../../components/LeftBackground';
import { useUser } from "./UserContext";

function ForgotPasswordOne() {

    const { setUserEmail } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        if (!inputValue.includes('@')) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleForgotPassword = () => {
        if (!emailError) {
            setUserEmail(email); // Set the email in the context
            console.log('Redirecting to reset password page...');
            navigate('/ForgotPasswordTwo');
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
        <div className='forgotPassword'>
            <span className="forgotPasswordTitle">Forgot Password</span>
            <span className="forgotPasswordInfo">
                Kindly provide the email address linked to your account. We will send you instructions via email on how to reset your password
            </span>
            <form action="/forgotpassword" method="post" onSubmit={handleForgotPassword}>
                <div className="forgotPasswordForm">
                    <label style={titleStyle}>Email Address</label>
                    <input
                        style={placeholderStyle}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {emailError && <p style={errorStyle}>{emailError}</p>}
                </div>
                <div className="sendEmailButton">
                    <button
                        style={buttonStyle}
                        type="submit"  
                        disabled={!!emailError}>
                        Send Email
                    </button>
                </div>
            </form>

            <div className="rememberPassword">
                <span>Remember Password? </span>
                <span style={{ color: "#000", fontWeight: "600", }}>
                    <Link to="/login">
                        <span>Login</span>
                    </Link>
                </span>
            </div>

            <LeftBackground mainText={"Forget PWD?"} detailsText={"Don't worry :))"} />
        </div>
    )
}

export default ForgotPasswordOne