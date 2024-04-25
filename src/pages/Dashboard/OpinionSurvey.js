import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";

const OpinionSurvey = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [textareaContent, setTextareaContent] = useState('');
    const [charCount, setCharCount] = useState(0);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleTextareaChange = (event) => {
        const content = event.target.value;
        setTextareaContent(content);
        setCharCount(content.length);
    };

    const handleNext = () => {
        setShowConfirmation(true);
    };

    const isNextDisabled = textareaContent.trim() === '' || textareaContent.length > 1000;

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} style={{filter: showConfirmation ? 'blur(5px)' : 'none'}} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease'}}>
                <Header/>
                <div style={{width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <div style={{ width: 75, top: 20, left: 0, position: 'absolute' }}>
                        <img style={{ width: 48, height: 48,position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + '/surv2logo.png'} />
                        <div style={{ width: 172, height: 46, left: 68, top: 20, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Tunisie Telecom</div>
                        <div style={{position:"relative",top:25,left:975,width: 350, height: '100%', border: '3px rgba(0, 0, 0, 0.10) solid'}}></div>
                        <div style={{position:"relative",top:19,left:975,width: '100%', height: '100%', border: '3px #00BDA9 solid'}}></div>
                        <div style={{position:"relative",top:6,left:1310,color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>10%</div>
                    </div>
                    <div style={{position:"relative",top:150,width: '100%', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>Overall, what is your level of satisfaction?<br/>in relation to the Prices and Rates of ABCD TELEPHONE CALLS?</div>

                    <div style={{position:"relative",top:200,left:420,width: '40%', height: '30%', borderRadius: 16, border: '1px #CCCCCC solid'}}>
                        <textarea style={{width: '90%', height: '90%', border: 'none', outline: 'none', resize: 'none', padding: '8px', fontFamily:"revert"}} placeholder="Enter your thoughts here" value={textareaContent} onChange={handleTextareaChange} />
                        <div
                            style={{
                                position:"relative",
                                left:250,
                                color: 'rgba(0, 0, 0, 0.30)',
                                fontSize: 12,
                                fontFamily: 'revert',
                                fontWeight: '700',
                                lineHeight: 3,
                                wordWrap: 'break-word',
                            }}
                        >
                            {charCount}/1000
                        </div>
                    </div>

                    <div style={{border: '3px solid #00BDA9',position:"relative",left:-520,top:400,width: '8%', height: '2%', padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </div>


                    <button onClick={handleNext} disabled={isNextDisabled} style={{color: isNextDisabled ? '#666666' : 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:520,top:400,width: '13%', height: '7%', padding: 16, background: isNextDisabled ? 'lightgray' : 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
                </div>
            </div>
        </div>
    );
};

export default OpinionSurvey;
