import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../App.css'; // Import the CSS file
import Leftsidebar from "./Leftsidebar";
import TT from '../../images/Tunisie-Telecom-logo.png';
import Header from "./Header";
import './dashboard.css';
import NumbersComponent from '../../components/NumbersComponent';
import {useState} from 'react'; 
const DashboardSurvery904 = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = React.useState(true);
    const [selectedNumber, setSelectedNumber] = React.useState(null);
    const [selectedRate, setSelectedRate] = useState(null);

    const navigate = useNavigate();

    const handleRateSelect = (rate) => {
        setSelectedRate(selectedRate === rate ? null : rate); // Deselect rate if already selected
    };
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const goToPreviousPage = () => {
        navigate('/dashboard903');
    };

    const goToNextPage = () => {
        if (selectedRate !== null) {
        
            navigate('/dashboard905'); 
        }
    };

    return (
        <div>
            <div className="App">
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
                                {/* Progress Bar */}
                                <div style={{ width: '300px', height: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', marginRight: '5px' }}>
                                    <div style={{ width: '90%', height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div> {/* Progress */}
                                </div>
                                {/* Text */}
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "200px", width: 1420, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="question-container" style={{ textAlign: 'center' }}>
                    <audio controls style={{ width: '702px', height: '64px', borderRadius: '8px', margin: 'auto' }}>
                        <source src="audio.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div style={{ fontFamily: 'Revert', fontSize: '18px', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', textAlign: 'center' }}>Here's the advert in full, do you remember hearing it now?</div>
                    <div>
                        <NumbersComponent selectedRate={selectedNumber} onNumberSelect={setSelectedNumber} handleRateSelect={handleRateSelect} />
                    </div>
                    <div style={{position:"relative",top:220,left:-370,width: '100%', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>0=Not at all likely</div>
                    <div style={{position:"relative",top:200,left:200,width: '100%', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>10=Very likely</div>
                    <div style={{marginLeft:"100px",border: '2px solid #00BDA9',position:"relative",left:-520,top:250,width: '20%', height: '2%', padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}onClick={goToPreviousPage}>Previous</div>
                    </div>
                    <button style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:520,top:250,width: '20%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex',marginRight:'30px'}} onClick={goToNextPage}> Next</button>
                </div>
                </div>
                
            </div>
        
    );
};

export default DashboardSurvery904;
