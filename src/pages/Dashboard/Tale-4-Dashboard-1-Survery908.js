import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import TT from '../../images/Tunisie-Telecom-logo.png';
import MultipleQuestionsComponent from '../../components/MultipleQuestionsComponent';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import './dashboard.css';
import QuestionComponent from '../../components/QuestionComponent';
import { Link } from 'react-router-dom';
import Verylikely from '../../Verylikey';
import NumbersComponent from '../../components/NumbersComponent';
import '../../App.css'; 
import Stars from "../../components/StarRanking";

const DashboardSurvery908 = () => {
    const { iduser } = useParams();
    const navigate = useNavigate();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedStars, setSelectedStars] = useState(null); // State to track user's choice
    const [nextButtonEnabled, setNextButtonEnabled] = useState(false); // State to enable/disable Next button
  
    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };
  
    const handleStarClick = (newRating) => {
      setSelectedStars(newRating); // Update state on user interaction
      setNextButtonEnabled(true); // Enable Next button when user selects a rating
    };
  
    const handleNextButtonClick = () => {
      if (nextButtonEnabled) {
        navigate(`/endsurvey/${iduser}`); // Navigate to opinionsurvey with user id
      } else {
        alert('Please select your satisfaction level.'); // Show alert if no choice is made
      }
    };

    const handlePreviousButtonClick = () => {
      navigate('/dashboard907');
    };
    
    return (
        <div style={{  }}> 
            <div className="App" >
                <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF' }}>
                    <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
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
        <div style={{ position: 'absolute',marginTop: "150px", width: 1420, height: 100, left: 300, top: 100, borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="question-container" style={{ textAlign: 'center' }}>
                <video controls style={{  width: '400px', height: '200px', borderRadius: '8px', margin: 'auto' }}>
                        <source src="video.mp4" type="video/mp4" />
                        Your browser does not support the video element.
                    </video>
                <div style={{ fontFamily: 'Revert', fontSize: '18px', fontWeight: 700, lineHeight: '24px', letterSpacing: '0em', textAlign: 'center' }}>Here's the advert in full, do you remember seeing it now?</div>
                    <div >
                        <Stars onStarClick={handleStarClick}/>  
                    </div>
                    
                    <div style={{backgroundColor:"white",marginLeft:"100px",border: '2px solid #00BDA9',position:"relative",left:-520,top:150,width: '25%', height: '2%', padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div  onClick={handlePreviousButtonClick}  style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </div>
                    <button onClick={handleNextButtonClick} disabled={!nextButtonEnabled} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:520,top:150,width: '25%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex',marginRight:"100px"}}> Next</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardSurvery908;

