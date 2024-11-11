import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import MoralContract from './MoralContract';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";

const Datasecurity = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const handleAccept = () => {
        const termsCheckbox = document.getElementById('termsCheckbox');

        if (termsCheckbox && !termsCheckbox.checked) {
            alert("You must agree to the terms and conditions before proceeding.");
            return;
        }
        localStorage.setItem('moralContractAccepted', 'true');
        window.location.href =`/tlanguage/:idSurvey`;
    };
    const handleDecline = () => {
        window.location.href =`/home`;
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
                    <MoralContract onAccept={handleAccept} onDecline={handleDecline} />
                </div>
            </div>
            </div>
    );
};
export default Datasecurity;