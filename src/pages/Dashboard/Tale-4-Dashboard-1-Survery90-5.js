import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import TT from '../../images/Tunisie-Telecom-logo.png';
import Leftsidebar from "./Leftsidebar";
import Header from "./Header";
import '../../App.css';

const DashboardSurvery905 = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedRate, setSelectedRate] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
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

    const handleRateSelect = (rate) => {
        setSelectedRate(selectedRate === rate ? null : rate); // Deselect rate if already selected
    };

    const goToPreviousPage = () => {
        navigate('/dashboard904');
    };

    const goToNextPage = () => {
        if (selectedRate !== null) {
            // Navigate to the next page only if a choice has been made
            navigate('/dashboard906'); // Navigate to '/dashboard906'
        }
    };

    return (
        <div>
            <div className="App" >
                <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF' }}>
                    <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
                    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                        <Header />
                        <div style={{ width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }}>
                        </div>
                        <div style={{ width: 1220, height: 100, left: 360, top: 80, position: 'absolute', background: 'white', borderRadius: 16, display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
                                <div>
                                    <img src={TT} alt="tt" style={{ width: '100px', height: '100px', color: '#111111', fontSize: 20, fontFamily: 'revert', fontWeight: '500', lineHeight: 1, wordWrap: 'break-word' }}></img>
                                </div>
                                <div>
                                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}>
                                        Tunisie Telecom <br />
                                    </span>
                                </div>
                            </div>
                            <div style={{ position: 'absolute', right: '0', marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '300px', height: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', marginRight: '5px' }}>
                                    <div style={{ width: '90%', height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div>
                                </div>
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "150px", width: 1420, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="question-container" style={{ textAlign: 'center' }}>
                <video controls style={{ width: '400px', height: '200px', borderRadius: '8px', margin: 'auto' }}>
                        <source src="video.mp4" type="video/mp4" />
                        Your browser does not support the video element.
                    </video>
                <div style={{ fontFamily: 'Revert', fontSize: '18px', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', textAlign: 'center' }}>Here's the advert in full, do you remember seeing it now?</div>
                    <div style={{ }}>
                        {rates.map((rate, index) => (
                            <div
                                key={index}
                                style={{
                                    width: 78,
                                    height: 96,
                                    left: 252 + index * 88,
                                    top: 300,
                                    position: 'absolute',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleRateSelect(index)}
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
                                        position: 'relative',
                                    }}
                                >
                                    {index}
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
                                            alt="OK"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{position:"relative",top:200,left:-480,width: '100%', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>0=Not at all likely</div>
                    <div style={{position:"relative",top:200,left:200,width: '100%', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>10=Very likely</div>
                    <div style={{border: '2px solid #00BDA9',position:"relative",left:-520,top:250,width: '25%', height: '2%', padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div onClick={goToPreviousPage} style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </div>
                    <button onClick={goToNextPage} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:520,top:250,width: '25%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardSurvery905;
