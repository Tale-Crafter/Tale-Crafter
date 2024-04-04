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
import Stars from "../../components/StarRanking";

const DashboardSurvery907 = () => {
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
      navigate('/dashboard908'); // Navigate to opinionsurvey with user id
    } else {
      alert('Please select your satisfaction level.'); // Show alert if no choice is made
    }
  };
  const handlePreviousButtonClick = () => {
    navigate('/dashboard906');
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
            <div style={{ marginTop: "100px", width: 1220, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="question-container" style={{ textAlign: 'center',marginLeft:"30px" }}>
                <audio controls style={{ width: '702px', height: '64px', borderRadius: '8px', margin: 'auto' }}>
                        <source src="audio.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div style={{ fontFamily: 'Revert', fontSize: '18px', fontWeight: '700', letterSpacing: '0em', margin: 'auto',marginTop:"40px" }}>
                        Here's the advert in full, do you remember hearing it now?
                    </div>
                    <div style={{ }}>
                        <Stars onStarClick={handleStarClick} />
                    </div>
                </div>
                    <button onClick={handlePreviousButtonClick} style={{backgroundColor: 'transparent', color: '#00CED1', border: '1px solid #00CED1', padding: '10px', borderRadius: '10px',height:'300px', width: '120px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', marginTop: '350px',marginRight:"700px"}}>Previous</button>
                    </div>
                    <button 
    onClick={handleNextButtonClick} 
    style={{
        marginTop: "760px",
        marginLeft: "400px",
        borderColor: "transparent",
        color: 'white',
        fontSize: 14,
        fontFamily: 'revert',
        fontWeight: '600',
        wordWrap: 'break-word',
        position: "absolute",
        right: "200px", // Adjusted position to move the button more to the right
        width: '8%', // Adjusted width to make the button smaller
        height: '3%',
        padding: 16,
        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex'
    }}
> Next</button></div>
         

     
    );
};

export default DashboardSurvery907;