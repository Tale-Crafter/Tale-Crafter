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
        navigate(`/tobacco3`);

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
                    <div style={{ width: 75, top: 20, left: 0, position: 'absolute' }}>
                        <img style={{ width: 48, height: 48,position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + '/ltale.png'} />
                        <div style={{textAlign:"left", width: 172, height: 46, left: 98, top: 20, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Tale</div>
                    </div>
                    <div style={{width: '100%', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'revert', fontWeight: '700', lineHeight: 22, wordWrap: 'break-word'}}>Combien de cigarettes fumez-vous par jour ?</div>
                    {/*progressbar*/}
                    <div style={{ position: 'absolute', right: 20,top:30, marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                        {/* Progress Bar */}
                        <div style={{ width: '300px', height: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', marginRight: '5px' }}>
                            <div style={{ width: '20%', height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div> {/* Progress */}
                        </div>
                        {/* Text */}
                        <span>10%</span>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        {/* Radio buttons for languages */}
                        <div>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="Yes" onChange={() => handleLanguageChange('Yes')} checked={selectedLanguage === 'Yes'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-100,position:"absolute", color: selectedLanguage === 'Yes' ? '#00BDA9' : 'black' }}>Moins de 10 cigarettes</span>
                                <div style={{ width: selectedLanguage === 'Yes' ? 20 : 20, height: selectedLanguage === 'Yes' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'Yes' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="No" onChange={() => handleLanguageChange('No')} checked={selectedLanguage === 'No'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-50,position:"absolute", color: selectedLanguage === 'No' ? '#00BDA9' : 'black' }}>Entre 10 et 20 cigarettes</span>
                                <div style={{ width: selectedLanguage === 'No' ? 20 : 20, height: selectedLanguage === 'No' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'No' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -50, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="Y" onChange={() => handleLanguageChange('Y')} checked={selectedLanguage === 'Y'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:0,position:"absolute", color: selectedLanguage === 'Y' ? '#00BDA9' : 'black' }}>Entre 21 et 30 cigarettes</span>
                                <div style={{ width: selectedLanguage === 'Y' ? 20 : 20, height: selectedLanguage === 'Y' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'Y' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: 0, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="N" onChange={() => handleLanguageChange('N')} checked={selectedLanguage === 'N'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:50,position:"absolute", color: selectedLanguage === 'N' ? '#00BDA9' : 'black' }}>Plus de 30 cigarettes</span>
                                <div style={{ width: selectedLanguage === 'N' ? 20 : 20, height: selectedLanguage === 'N' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'N' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: 50, left: -40 }} />
                            </label>
                        </div>
                    </div>

                    <Button style={{border: '2px solid #00BDA9',position:"relative",left:-520,top:220,width: '11.5%', height: '6.5%', padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}   onClick={() => { window.location.href = `/tobacco`; }}
                    >
                        <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </Button>
                    <button onClick={handleNext} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:520,top:220,width: '13%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
                </div>
            </div>
            {/*{showConfirmation && <EndPopup onClose={handleCloseConfirmation} onValidate={handleValidateConfirmation} />}*/}
        </div>
    );
};

export default LanguagePage;
