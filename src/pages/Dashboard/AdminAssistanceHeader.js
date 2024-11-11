import React, { useState } from 'react';
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmationPopup from './ConfirmationPopup'; // Import the ConfirmationPopup component

const Awards = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [isBanned, setIsBanned] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleBackClick = () => {
        navigate(`/GestionDesUtilisateurs`);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const toggleBan = () => {
        setIsBanned(!isBanned);
        setMenuVisible(false);
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleCloseConfirmation = () => {
        setIsBanned(false);
    };

    const handleValidateConfirmation = () => {
        // Handle validation if needed
        setIsBanned(false);
    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: isBanned ? 'blur(5px)' : 'none' }}>
            <div style={{ position: 'absolute', width: '73.5%', height: '128px', background: 'white', borderRadius: '16px', top: 85, left: 340 }}>
                <div style={{ position: 'absolute', top: '44px', right: '723px', left: '46px', bottom: '97px' }}>
                    <button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
                        <div style={{ width: 32, height: 32, position: 'relative' }}>
                            <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
                        </div>
                    </button>

                    <div style={{ position: "relative", left: 150, color: '#111111', fontSize: '38px', fontFamily: 'revert', fontWeight: 500, lineHeight: '32px', wordWrap: 'break-word', textAlign: "left" }}>
                        Arlene McCoy

                        <button onClick={toggleMenu} style={{ marginLeft: 10, background: 'transparent', border: 'none', cursor: 'pointer', position: "relative", left: 880 }}>
                            <span style={{ fontSize: '24px', color: '#333' }}>...</span>
                        </button>

                        {menuVisible && (
                            <div style={{ position: 'absolute', right: -600, top: 30, background: 'white', border: '1px solid #ccc', borderRadius: 5, boxShadow: '0 2px 5px rgba(0,0,0,0.2)', padding: 10 }}>
                                <button onClick={toggleBan} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 5 }}>
                                    {isBanned ? 'Revoke' : 'Ban'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Show popup when banned */}
            {isBanned && (
                <ConfirmationPopup
                    onClose={handleCloseConfirmation}
                    onValidate={handleValidateConfirmation}
                />
            )}
        </div>
    );
};

export default Awards;
