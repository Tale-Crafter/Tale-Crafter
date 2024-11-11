import React, { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import ConfirmationPopup from "./ConfirmationPopup";
import {Button} from "@mui/material";
import EndPopup from "./EndPopup";

const LanguagePage = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleNext = () => {
        setShowConfirmation(true);
    };
    const handleBackClick = () => {
        // Redirect to /Surveys
        navigate(`/Surveys`);
    };
    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    const handleValidateConfirmation = () => {
        // Your logic for validation goes here
        console.log("Validated");
        setShowConfirmation(false);
    };
    return (
        <div className="App">
            <div style={{filter: showConfirmation ? 'blur(5px)' : 'none' }}>
                <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} style={{filter: showConfirmation ? 'blur(5px)' : 'none'}} />
            </div>
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation ? 'blur(5px)' : 'none' }}>
                <Header/>
                <div style={{width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >

                    <div style={{position:"absolute",left:1300,top:10,width: '3%', height: '3%', paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: '#ED1C24', borderRadius: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>• Live</div>
                    </div>
                    <div style={{ width: 993, left: -65, top: 15, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Mauris egestas leo vel nulla tincidunt, ac molestie sem consectetur</div>

                    {/* Back button */}
                    <button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 20, top: 13, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
                        <div style={{ width: 32, height: 32, position: 'relative' }}>
                            <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
                        </div>
                    </button>
                    <div style={{width: '100%', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'revert', fontWeight: '700', lineHeight: 22, wordWrap: 'break-word'}}>1. Phasellus et tellus molestie, venenatis lectus eget, mollis turpis?</div>
                    <div style={{ marginTop: 20 }}>
                        {/* Radio buttons for languages */}
                        <div>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="Yes" onChange={() => handleLanguageChange('Yes')} checked={selectedLanguage === 'Yes'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-100,position:"absolute", color: selectedLanguage === 'Yes' ? '#00BDA9' : 'black' }}>Yes</span>
                                <div style={{ width: selectedLanguage === 'Yes' ? 20 : 20, height: selectedLanguage === 'Yes' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'Yes' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="No" onChange={() => handleLanguageChange('No')} checked={selectedLanguage === 'No'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-50,position:"absolute", color: selectedLanguage === 'No' ? '#00BDA9' : 'black' }}>No</span>
                                <div style={{ width: selectedLanguage === 'No' ? 20 : 20, height: selectedLanguage === 'No' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'No' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -50, left: -40 }} />
                            </label>
                        </div>
                    </div>


                    <button onClick={handleNext} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:520,top:220,width: '13%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
                </div>
            </div>
            {showConfirmation && <EndPopup onClose={handleCloseConfirmation} onValidate={handleValidateConfirmation} />}
        </div>
    );
};

export default LanguagePage;
