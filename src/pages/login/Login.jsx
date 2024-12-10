import React from 'react';
import LoginOne from '../login/LoginOne';
import Left_background from "../../images/Left_background.png";
import iconoir_language from "../../images/iconoir_language.png";
import '../../styles/login.css';
import blogotale from "../../images/Logo_Tale.png";
import '../../styles/leftBackgroundStyle.css';

function Login() {
    const navbarStyle = {
        // flex: 1,
        position: 'relative',
        borderRadius: '30px',
        overflow: 'hidden', // Make sure the image stays within the container
    };
    const textStyle = {
        position: 'absolute',
        top: '32%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#fff',
        fontSize: '1.125rem', // Use rem for font sizing
        textAlign: 'center',
        zIndex: 1,
    };
    const imglanguage = {
        position: 'absolute',
        top: '16px',
        right: '20px',
        zIndex: 2,
    };
    return (
        <div className="loginPage">
            <div className="container">
                <div className="leftSection" style={navbarStyle}>
                    <img src={Left_background} alt="Background" style={{ objectFit: 'cover' }} />
                    <div style={textStyle}>
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                    </div>
                </div>

                <div className="rightSection">
                    {/* Logo Section - Responsive */}
                    <div className="logoTale" style={{
                        backgroundImage: `url(${blogotale})`,
                        width: '20vw',  // Make width responsive (20% of viewport width)
                        maxWidth: '126px',  // Maximum width for large screens
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position:"absolute",
                        top:0
                    }}>
                    </div>
                    <div style={imglanguage}>
                        <img src={iconoir_language} alt="Language" />
                        <select className="language-dropdown" style={{ position: 'relative', top: -10, border: 'none' }}>
                            <option value="en" style={{ fontSize: '14px' }}>EN</option>
                            <option value="fr" style={{ fontSize: '14px' }}>FR</option>
                        </select>
                    </div>
                    <LoginOne />
                </div>
            </div>

            <p className="reCAPTCHA">
                This site is protected by reCAPTCHA and the <u>Google Privacy Policy</u> and <u>Terms of Service</u> apply.
            </p>
        </div>
    );
};

export default Login;
