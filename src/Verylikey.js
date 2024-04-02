import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'; // Import the CSS file

import Header from './pages/Dashboard/Header';
import Leftsidebar from './pages/Dashboard/Leftsidebar';

const Verylikely = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedRate, setSelectedRate] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleRateSelect = (rate) => {
        setSelectedRate(selectedRate === rate ? null : rate); // Deselect rate if already selected
    };
    const [selectedLanguage, setSelectedLanguage] = useState('');


    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleNext = () => {
        setShowConfirmation(true);
    };


    // Define the rates for selection
    const rates = [
        '#FF1713',
        '#FA423F',
        '#FF633A',
        '#FF8529',
        '#FFC200',
        '#F5DE07',
        '#E4C500',
        '#C0CB00',
        '#9CCD00',
        '#76CC00',
        '#2AB100',
    ];

    return (
        <div className="App">
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    background: '#EFEFEF',
                    marginLeft: !sidebarVisible ? -100 : 0,
                    transition: 'margin-left 0.3s ease',
                }}
            >
                <div
                    style={{
                        width: 1400,
                        height: 736,
                        left: 340,
                        top: 80,
                        position: 'absolute',
                        background: 'white',
                        borderRadius: 16,
                        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.15)', // Add shadow effect
                    }}
                >
                    <div style={{ width: 75, top: 20, left: 0, position: 'absolute' }}>
                        <img style={{ width: 48, height: 48,position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + '/surv2logo.png'} />
                        <div style={{ width: 172, height: 46, left: 68, top: 20, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Tunisie Telecom</div>
                        <div style={{position:"relative",top:25,left:975,width: 350, height: '100%', border: '3px rgba(0, 0, 0, 0.10) solid'}}></div>
                        <div style={{position:"relative",top:19,left:975,width: 125, height: '100%', border: '3px #00BDA9 solid'}}></div>
                        <div style={{position:"relative",top:6,left:1310,color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>30%</div>
                    </div>
                    <div style={{position:"relative",top:170,width: '100%', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>Between 0 and 10, to what extent would you recommend ABCD to those <br></br> around you?</div>
                    <div style={{position:"relative",top:170,width: '100%', textAlign: 'center', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 2.5, wordWrap: 'break-word'}}>(With 0 “not at all/not at all likely” & 10 “without hesitation/Very likely”)</div>                    {/* Loop through rates and create selectable elements */}
                    {rates.map((rate, index) => (
                        <div
                            key={index}
                            style={{
                                width: 78,
                                height: 96,
                                left: 252 + index * 88,
                                top: 338,
                                position: 'absolute',
                                cursor: 'pointer', // Add cursor pointer
                            }}
                            onClick={() => handleRateSelect(index)} // Handle rate selection on click
                        >
                            <div
                                style={{
                                    width: 78,
                                    height: 96,
                                    left: 0,
                                    top: 0,
                                    position: 'absolute',
                                    background: selectedRate === index ? 'white' : rate,
                                    color: selectedRate === index ? 'black' : 'white',
                                    borderRadius: 16,
                                    boxShadow: selectedRate === index ? '0px 20px 30px rgba(0, 0, 0, 0.15)' : '0px 20px 30px rgba(0, 0, 0, 0.15)',
                                    border: selectedRate === index ? '3px #00BDA9 solid' : 'none',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    position: 'relative', // Add position relative
                                }}
                            >
                                {/* Show the number on each blank */}
                                {index}
                                {/* Show the OK icon on selected blanks */}
                                {selectedRate === index && (
                                    <img src={process.env.PUBLIC_URL + '/ok.png'}
                                        style={{
                                            position: 'absolute',
                                            width:18,
                                            height:18,
                                            top: 3,
                                            right: 2,
                                            color: 'green',
                                            fontSize: 2,
                                        }}
                                        OK
                                    />
                                )}
                            </div>
                        </div>
                    ))}

                    <div style={{position:"relative",top:380,left:-400,width: '100%', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>0=Not at all likely</div>
                    <div style={{position:"relative",top:365,left:-180,width: '100%', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>10=Very likely</div>
                    <div style={{border: '2px solid #00BDA9',position:"relative",left:-520,top:570,width: '8%', height: '2%', padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </div>

                    {/*<button onClick={handleNext} style={{position:"relative",left:520,top:220,width: '8%', height: '2%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>*/}
                    {/*    <span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Next</span>*/}
                    {/*</button>*/}
                    <button onClick={handleNext} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:520,top:570,width: '13%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
                </div>
            </div>
        </div>
    );
};

export default Verylikely;