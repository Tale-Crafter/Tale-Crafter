import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import ConfirmationPopup from "./ConfirmationPopup";
import {Button} from "@mui/material";

const LanguagePage = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleNext = () => {
        setShowConfirmation(true);
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
                    <div style={{ width: 75, top: 20, left: 0, position: 'absolute' }}>
                        <img style={{ width: 48, height: 48,position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + '/surv2logo.png'} />
                        <div style={{ width: 172, height: 46, left: 68, top: 20, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Tunisie Telecom</div>
                    </div>
                    <div style={{width: '100%', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Choisissez la langue dans laquelle vous souhaitez répondre aux questions</div>
                    <div style={{ marginTop: 20 }}>
                        {/* Radio buttons for languages */}
                        <div>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="العربية" onChange={() => handleLanguageChange('العربية')} checked={selectedLanguage === 'العربية'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-100,position:"absolute", color: selectedLanguage === 'العربية' ? '#00BDA9' : 'black' }}>العربية</span>
                                <div style={{ width: selectedLanguage === 'العربية' ? 20 : 20, height: selectedLanguage === 'العربية' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'العربية' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="Française" onChange={() => handleLanguageChange('Française')} checked={selectedLanguage === 'Française'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-50,position:"absolute", color: selectedLanguage === 'Française' ? '#00BDA9' : 'black' }}>Française</span>
                                <div style={{ width: selectedLanguage === 'Française' ? 20 : 20, height: selectedLanguage === 'Française' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'Française' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -50, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="English" onChange={() => handleLanguageChange('English')} checked={selectedLanguage === 'English'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-0,position:"absolute", color: selectedLanguage === 'English' ? '#00BDA9' : 'black' }}>English</span>
                                <div style={{ width: selectedLanguage === 'English' ? 20 : 20, height: selectedLanguage === 'English' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'English' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: 0, left: -40 }} />
                            </label>
                        </div>
                    </div>
                    <Button style={{border: '2px solid #00BDA9',position:"relative",left:-520,top:220,width: '11.5%', height: '6.5%', padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}   onClick={() => { window.location.href = `/dataverification/${iduser}`; }}
                    >
                        <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </Button>

                    {/*<button onClick={handleNext} style={{position:"relative",left:520,top:220,width: '8%', height: '2%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>*/}
                    {/*    <span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Next</span>*/}
                    {/*</button>*/}
                    <button onClick={handleNext} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:520,top:220,width: '13%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
                </div>
            </div>
            {showConfirmation && <ConfirmationPopup onClose={handleCloseConfirmation} onValidate={handleValidateConfirmation} />}
        </div>
    );
};

export default LanguagePage;
