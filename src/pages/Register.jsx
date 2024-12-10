import React from 'react';
import Form from '../components/Form';
import Logo_Tale from "../images/Logo_Tale.png";
import iconoir_language from "../images/iconoir_language.png";
import Left_background from "../images/Left_background.png";
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className="register-container">
            <div className="left-section">
                <div className="logo-container">
                    {/* Wrap the logo in the Link component */}
                    <Link to="/login">
                        <img src={Logo_Tale} alt="Logo" className="logo" />
                    </Link>                    <div className="language-selector">
                        <img src={iconoir_language} alt="Language" className="language-icon" />
                        <select className="language-dropdown">
                            <option value="en">EN</option>
                            <option value="fr">FR</option>
                        </select>
                    </div>
                </div>
                <Form />
            </div>
            <div className="right-section">
                <img src={Left_background} alt="Background" className="background-image" />
                <div className="text-overlay">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start your journey with us</p>
                </div>
            </div>
        </div>
    );
}

export default Register;
