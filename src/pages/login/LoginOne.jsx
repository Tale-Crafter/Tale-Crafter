import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/login.css';
import BLeftBackground from '../../components/BLeftBackground';
import { setAuthToken } from "../Dashboard/Api";
import Logo_Tale from "../../images/Logo_Tale.png";
import iconoir_language from "../../images/iconoir_language.png";
import Left_background from "../../images/Left_background.png";

function LoginOne() {
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading, getAccessTokenSilently, handleRedirectCallback } = useAuth0();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const domain = "dev-8ja5z27gacw183vf.eu.auth0.com";
    const clientId = "P5ePbyjmq6xLc09ZxshMaqkwcNmVbKNX";

    // Handle social login (direct login with social provider)
    const handleSocialLogin = async (provider) => {
        if (loading) return;
        setLoading(true);
        try {
            const authUrl = `https://${domain}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${window.location.origin}&connection=${provider}&scope=openid profile email`;
            window.location.href = authUrl;
        } catch (error) {
            console.error('Login failed', error);
            setLoading(false);
        }
    };

    // Handle redirect and token exchange after authentication (Social login)
    useEffect(() => {
        const handleAuthRedirect = async () => {
            if (window.location.search.includes('code')) {
                try {
                    await handleRedirectCallback();
                    await fetchToken();
                } catch (error) {
                    console.error("Error handling redirect callback:", error);
                }
            }
        };

        const fetchToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                if (token) {
                    localStorage.setItem('auth_token', token);
                    setAuthToken(token);
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching token silently:', error);
            }
        };

        if (!isLoading && !isAuthenticated) {
            handleAuthRedirect();
        }
    }, [isAuthenticated, isLoading, getAccessTokenSilently, handleRedirectCallback, navigate]);

    // Handle email/password login (password grant)
    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch(`https://${domain}/oauth/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    client_id: clientId,
                    grant_type: 'password',
                    username: email,
                    password: password,
                    audience: `https://${domain}/api/v2/`,
                    scope: 'openid profile email',
                    connection: 'Username-Password-Authentication',
                }),
            });

            const data = await response.json();

            if (response.ok) {
                const accessToken = data.access_token;
                localStorage.setItem('auth_token', accessToken);
                setAuthToken(accessToken);
                navigate('/');
            } else {
                setErrorMessage(data.error_description || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="login">
            <h2 className="loginTitle">Sign in to TALE</h2>

            <div className="socialIcons">
                <button onClick={() => handleSocialLogin('google-oauth2')} className="socialButton">
                    <img src={`${process.env.PUBLIC_URL}/bmail.png`} alt="Google" />
                </button>
                <button onClick={() => handleSocialLogin('facebook')} className="socialButton">
                    <img src={`${process.env.PUBLIC_URL}/fbf.png`} alt="Facebook" />
                </button>
            </div>

            <p className="emailAccount">Or use your email account</p>

            <div className="emailLogin">
                <div className="inputGroup">
                    <label className="inputLabel">Email Address</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="inputField"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="inputGroup">
                    <label className="inputLabel">Password</label>
                    <div className="passwordGroup">
                        <input
                            type="password"
                            placeholder="Password"
                            className="inputField"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="forgotPassword" onClick={() => navigate('/ForgotPassword')}>Forgot?</button>
                    </div>
                </div>

                <button
                    onClick={handleEmailLogin}
                    className="submitButton"
                    disabled={loading || !email || !password}
                >
                    {loading ? 'Logging in...' : 'Login with Email'}
                </button>
            </div>

            {errorMessage && <p className="error">{errorMessage}</p>}

            <div className="signupLink">
                <span>Don't have an account? </span>
                <span className="signupRedirect" onClick={() => navigate('/register')}>Sign up here</span>
            </div>
        </div>
    );
}

export default LoginOne;
