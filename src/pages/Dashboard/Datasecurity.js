// // App.js
// import React from 'react';
// import MoralContract from './MoralContract';
//
// const Datasecurity = () => {
//     const handleAccept = () => {
//         // Logic when the user accepts
//         // For example, save the acceptance status to local storage
//         localStorage.setItem('moralContractAccepted', 'true');
//         // You may also want to redirect the user or perform other actions
//         // depending on your application's requirements.
//     };
//
//     const handleDecline = () => {
//         // Logic when the user declines
//         // For example, you might redirect the user to a different page
//         window.location.href = '/home/:userid';
//         // Alternatively, you could display a message or take other actions.
//     };
//
//     return (
//         <div>
//             <MoralContract onAccept={handleAccept} onDecline={handleDecline} />
//         </div>
//     );
// };
//
// export default Datasecurity;
// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import MoralContract from './MoralContract';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import LanguagePage from "./LanguagePage";
const opencage = require('opencage-api-client');


const Datasecurity = () => {
    const navigate = useNavigate();

    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [showLanguageComponent, setShowLanguageComponent] = useState(false);

    const handleBackClick = () => {
        // Redirect to /Surveys/:iduser
        navigate(`/Surveys/${iduser}`);
    };

    const handleStartClick = () => {
        // Hide all styles and show the language component
        navigate(`/Language/${iduser}`);
    };
    const handleAccept = () => {
        const termsCheckbox = document.getElementById('termsCheckbox');

        if (termsCheckbox && !termsCheckbox.checked) {
            alert("You must agree to the terms and conditions before proceeding.");
            return;
        }
        // Logic when the user accepts
        // For example, save the acceptance status to local storage

        localStorage.setItem('moralContractAccepted', 'true');
        window.location.href =`/language/${iduser}`;

        // You may also want to redirect the user or perform other actions
        // depending on your application's requirements.

    };

    const handleDecline = () => {
        // Logic when the user declines
        // For example, you might redirect the user to a different page
        window.location.href =`/home/${iduser}`;
        // Alternatively, you could display a message or take other actions.
    };



    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
                <Header/>
                    <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                    <div style={{width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Intégrez le formulaire de contact ici */}
                    <MoralContract onAccept={handleAccept} onDecline={handleDecline} />
                </div>
            </div>
            </div>
    );
};

export default Datasecurity;
