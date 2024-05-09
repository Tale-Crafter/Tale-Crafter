import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";

const OneanswerSurv = () => {
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

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} style={{filter: showConfirmation ? 'blur(5px)' : 'none'}} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <Header/>
                <div style={{width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <div style={{ width: 75, top: 20, left: 0, position: 'absolute' }}>
                        <img style={{ width: 48, height: 48,position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + '/surv2logo.png'} />
                        <div style={{ width: 172, height: 46, left: 68, top: 20, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Tunisie Telecom</div>
                        <div style={{position:"relative",top:25,left:975,width: 350, height: '100%', border: '3px rgba(0, 0, 0, 0.10) solid'}}></div>
                        <div style={{position:"relative",top:19,left:975,width: 125, height: '100%', border: '3px #00BDA9 solid'}}></div>
                        <div style={{position:"relative",top:6,left:1310,color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>30%</div>
                    </div>
                    <div style={{width: '100%', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Generally speaking, compared to other operators, would you say ABCD is ?</div>
                    <div style={{ marginTop: 20 }}>
                        {/* Radio buttons for languages */}
                        <div>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="Best" onChange={() => handleLanguageChange('Best')} checked={selectedLanguage === 'Best'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-100,position:"absolute", color: selectedLanguage === 'Best' ? '#00BDA9' : 'black' }}>Best</span>
                                <div style={{ width: selectedLanguage === 'Best' ? 20 : 20, height: selectedLanguage === 'Best' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'Best' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="Similar, equal" onChange={() => handleLanguageChange('Similar, equal')} checked={selectedLanguage === 'Similar, equal'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-50,position:"absolute", color: selectedLanguage === 'Similar, equal' ? '#00BDA9' : 'black' }}>Similar, equal</span>
                                <div style={{ width: selectedLanguage === 'Similar, equal' ? 20 : 20, height: selectedLanguage === 'Similar, equal' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'Similar, equal' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -50, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="Moins bien" onChange={() => handleLanguageChange('Moins bien')} checked={selectedLanguage === 'Moins bien'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-0,position:"absolute", color: selectedLanguage === 'Moins bien' ? '#00BDA9' : 'black' }}>English</span>
                                <div style={{ width: selectedLanguage === 'Moins bien' ? 20 : 20, height: selectedLanguage === 'Moins bien' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'Moins bien' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: 0, left: -40 }} />
                            </label>
                        </div>
                    </div>
                    <div style={{border: '3px solid #00BDA9',position:"relative",left:-520,top:220,width: '8%', height: '2%', padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </div>

                    {/*<button onClick={handleNext} style={{position:"relative",left:520,top:220,width: '8%', height: '2%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>*/}
                    {/*    <span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Next</span>*/}
                    {/*</button>*/}
                    <button onClick={handleNext} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:520,top:220,width: '13%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
                </div>
            </div>
        </div>
    );
};

export default OneanswerSurv;
