import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import Leftsidebar from "./Leftsidebar";
import Header from "./Header"; // Import the CSS file

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

                    <div style={{position:"relative",top:170,marginLeft:250,width: '80%', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>Between 0 and 10, to what extent would you recommend ABCD to those <br></br> around you?</div>
                    <div style={{position:"relative",top:170,marginLeft:250,width: '80%', textAlign: 'center', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 2.5, wordWrap: 'break-word'}}>(With 0 “not at all/not at all likely” & 10 “without hesitation/Very likely”)</div>                    {/* Loop through rates and create selectable elements */}
                    {rates.map((rate, index) => (
                        <div
                            key={index}
                            style={{
                                width: 78,
                                height: 96,
                                left: 555 + index * 88,
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

                    <div style={{position:"relative",top:380,left:-360,width: '100%', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>0=Not at all likely</div>
                    <div style={{position:"relative",top:365,left:-400,width: '100%', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>10=Very likely</div>


                    {/*<button onClick={handleNext} style={{position:"relative",left:520,top:220,width: '8%', height: '2%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>*/}
                    {/*    <span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Next</span>*/}
                    {/*</button>*/}
                </div>
    );
};

export default Verylikely;
