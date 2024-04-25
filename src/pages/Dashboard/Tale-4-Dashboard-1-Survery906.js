import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import TT from '../../images/Tunisie-Telecom-logo.png';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import './dashboard.css';
import QuestionComponent from '../../components/QuestionComponent';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import BrainImg from "../../images/BrainImg.jpg";
import ImagesComponent from '../../components/ImagesComponent';

const DashboardSurvery906 = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedChoice, setSelectedChoice] = useState(null); // State to track selected choice
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleChoiceChange = (choice) => {
        setSelectedChoice(choice);
    };

    const goToPreviousPage = () => {
        navigate('/dashboard905');
    };

    const goToNextPage = () => {
        if (selectedChoice !== null) {
            navigate('/dashboard907');
        }
    };

    const images = [
        {
            original: 'BrainImg.jpg',
        },
        {
            original: 'BrainImg.jpg',
            
        },
       
    ];

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
                                
                                <div style={{ width: '300px', height: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', marginRight: '5px' }}>
                                    <div style={{ width: '90%', height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div> {/* Progress */}
                                </div>
                               
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "100px", width: 1220, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="question-container" style={{ textAlign: 'center',marginLeft:"30px" }}>
                    
                    <div style={{ fontFamily: 'Revert', fontSize: '18px', fontWeight: '700', letterSpacing: '0em', margin: 'auto',marginTop:"40px" }}>
                        Here's the advert in full, do you remember seeing it now?
                    </div>
                    <div style={{ }}>
                        <QuestionComponent onChange={handleChoiceChange} />
                    </div>
                </div>
            <div style={{marginTop:"100px",border: '3px solid #00BDA9',position:"relative",left:-320,top:180,width: '12%', height: '7%', padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div onClick={goToPreviousPage} style={{ color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </div>
                    </div>
                    <button onClick={goToNextPage} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:1420,top:750,width: '12%', height: '5%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
               
            </div>
    );
};

export default DashboardSurvery906;

