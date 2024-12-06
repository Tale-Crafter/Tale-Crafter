import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';
import BLeftBackground from '../../components/BLeftBackground';

function LoginOne() {
    const navigate = useNavigate();

    const handleSocialLogin = (provider) => {
        const domain = "dev-8ja5z27gacw183vf.eu.auth0.com";
        const clientId = "P5ePbyjmq6xLc09ZxshMaqkwcNmVbKNX";
        const redirectUri = `${window.location.origin}/home`;

        const authUrl = `https://${domain}/authorize?response_type=token&client_id=${clientId}&connection=${provider}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location.href = authUrl;
    };

    useEffect(() => {
        const hash = window.location.hash;

        if (hash.includes("access_token")) {
            const params = new URLSearchParams(hash.replace("#", "?"));
            const accessToken = params.get("access_token");

            if (accessToken) {
                localStorage.setItem("accessToken", accessToken);
                window.history.replaceState(null, null, " ");
                navigate("/home");
            }
        }
    }, [navigate]);

    return (
        <div className="login">
            <h2 className="loginTitle">Sign in to TALE</h2>

            <div className="social-icons">
                <button onClick={() => handleSocialLogin('google-oauth2')} className="socialButton">
                    <img src={`${process.env.PUBLIC_URL}/bmail.png`} alt="Google" />
                </button>
                <button onClick={() => handleSocialLogin('linkedin')} className="socialButton">
                    <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
                </button>
                <button onClick={() => handleSocialLogin('facebook')} className="socialButton">
                    <img src={`${process.env.PUBLIC_URL}/fbf.png`} alt="Facebook" />
                </button>
                <button onClick={() => handleSocialLogin('twitter')} className="socialButton">
                    <img src={`${process.env.PUBLIC_URL}/bx.png`} alt="Twitter" />
                </button>
            </div>

            <p className="emailAccount">Or use your email account</p>
            <div className="emailLogin">
                <input
                    type="email"
                    placeholder="Email"
                    className="emailInput"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="passwordInput"
                />
                <button
                    onClick={() => handleSocialLogin('email')}
                    className="emailButton"
                >
                    Login with Email
                </button>
            </div>

            <p className="reCAPTCHA">
                This site is protected by reCAPTCHA and the <u>Google Privacy Policy</u> and <u>Terms of Service</u> apply.
            </p>

            <div className="signupLink">
                <span style={{ color: "#666", fontWeight: "400" }}>Don't have an account?</span>
                <span style={{ color: "#000", fontWeight: "600" }}>Sign up here</span>
            </div>

            <BLeftBackground />
        </div>
    );
}

export default LoginOne;
