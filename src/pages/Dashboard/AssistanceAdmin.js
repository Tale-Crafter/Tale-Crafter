import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';  // Import the CSS file
import ContactF from './ContactF';
import ContactD from './ContactD'; // Import ContactD
// import Survey from './Survey'; // Import Survey component
// import RecomPoints from './RecomPoints'; // Import RecomPoints component
import BHeader from "./BHeader";
import AdminLeftsidebar from "./AdminLeftsidebar";
import AdminAssistanceHeader from "./AdminAssistanceHeader";
import ConfirmationPopup from './ConfirmationPopup';
import AdminPopup from "./AdminPopup";
import Survey from "./Survey";
import QuickSurveyEmpty from "./QuickSurveyEmpty";
import SurveyAdmin from "./SurveyAdmin";
import RecomPoints from "./RecomPoints"; // Import the ConfirmationPopup component

const AssistanceAdmin = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [isBanned, setIsBanned] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Informations'); // State for selected tab

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
        <div className="App">
            <div style={{ filter: isBanned ? 'blur(5px)' : 'none' }}>
                <AdminLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            </div>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: '#EFEFEF',
                marginLeft: !sidebarVisible ? -100 : 0,
                transition: 'margin-left 0.3s ease',
                filter: isBanned ? 'blur(5px)' : 'none'  // Apply blur if banned or menu visible
            }}>
                <BHeader />

                <div style={{ width: 1400, height: 650, left: 340, top: 230, position: 'absolute', background: 'white', borderRadius: 16 }}>
                    <div style={{ position: 'absolute', width: '100%', height: '128px', background: 'white', borderRadius: '16px', top: -145, left: 0 }}>
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
                                {/* Show popup when banned */}
                                {isBanned && (
                                    <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, background: 'rgba(237, 28, 36, 0.15)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                        <div style={{ color: '#ED1C24', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word' }}>le compte a été définitivement banni</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Tab Options */}
                    <div style={{ width: 'auto', height: '0px', padding: '25px 25px 12px',gap: 100, position: 'relative', display: 'flex', justifyContent: 'flex-start', alignItems: 'center',   flexDirection: 'row',flexWrap: 'nowrap',     borderBottom: '1px solid lightgrey' }}>
                        <div
                            onClick={() => setSelectedOption('Informations')}
                            style={{
                                cursor: 'pointer',
                                color: selectedOption === 'Informations' ? 'black' : '#666666',
                                fontWeight: selectedOption === 'Informations' ? 'bold' : 'normal',
                                borderBottom: selectedOption === 'Informations' ? '2px black solid' : 'none'
                            }}
                        >
                            Informations
                        </div>
                        <div
                            onClick={() => setSelectedOption('Enquête')}
                            style={{
                                cursor: 'pointer',
                                color: selectedOption === 'Enquête' ? 'black' : '#666666',
                                fontWeight: selectedOption === 'Enquête' ? 'bold' : 'normal',
                                borderBottom: selectedOption === 'Enquête' ? '2px black solid' : 'none'
                            }}
                        >
                            Enquête
                        </div>
                        <div
                            onClick={() => setSelectedOption('Points et récompense')}
                            style={{
                                cursor: 'pointer',
                                color: selectedOption === 'Points et récompense' ? 'black' : '#666666',
                                fontWeight: selectedOption === 'Points et récompense' ? 'bold' : 'normal',
                                borderBottom: selectedOption === 'Points et récompense' ? '2px black solid' : 'none'
                            }}
                        >
                            Points et récompense
                        </div>
                    </div>

                    {/* Conditionally Render Based on Selected Option */}
                    <div style={{ padding: 20 }}>
                        {selectedOption === 'Informations' && (isBanned ? <ContactD /> : <ContactF />)}
                        {selectedOption === 'Enquête' && <SurveyAdmin />}
                        {selectedOption === 'Points et récompense' && <RecomPoints />}
                    </div>
                </div>
            </div>

            {/* Show popup when banned */}
            {isBanned && (
                <AdminPopup
                    onClose={handleCloseConfirmation}
                    onValidate={handleValidateConfirmation}
                />
            )}
        </div>
    );
};

export default AssistanceAdmin;
