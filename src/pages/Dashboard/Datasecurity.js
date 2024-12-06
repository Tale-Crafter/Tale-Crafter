import React, { useEffect, useState } from 'react';
import './App.css';  // Import the CSS file
import MoralContract from './MoralContract';
import {useParams} from "react-router-dom";

const Datasecurity = ({sidebarVisible}) => {
    const { idSurvey } = useParams();

    const handleAccept = () => {
        const termsCheckbox = document.getElementById('termsCheckbox');

        if (termsCheckbox && !termsCheckbox.checked) {
            alert("You must agree to the terms and conditions before proceeding.");
            return;
        }
        localStorage.setItem('moralContractAccepted', 'true');
        window.location.href = `/tlanguage/${idSurvey}`;
    };
    const handleDecline = () => {
        window.location.href =`/home`;
    };

    return (
        <div className="App">
                    <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                    <div style={{width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <MoralContract onAccept={handleAccept} onDecline={handleDecline} />
                </div>
            </div>
            </div>
    );
};
export default Datasecurity;