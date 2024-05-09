import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TT from '../../images/Tunisie-Telecom-logo.png';
import { useParams } from 'react-router-dom';
import '../../App.css';  // Import the CSS file
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import ContactForm from './ContactForm';
import Stars from '../../components/StarRanking';
const opencage = require('opencage-api-client');
const DashboardSurvery10 = () => {
  const { iduser } = useParams();
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);
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
      navigate(`/opinionsurvey/${iduser}`); // Navigate to opinionsurvey with user id
    } else {
      alert('Please select your satisfaction level.'); // Show alert if no choice is made
    }
  };
  const handlePreviousButtonClick = () => {
    navigate(`/generallyspeaking/${iduser}`);
  };
  
  return (
      <div className="App">
         <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>
         <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
          <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
              <Header/>
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
      <div style={{ width: '30%', height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div> {/* Progress */}
  </div>
 
  <span>10%</span>
</div>




</div>


<div style={{ width: 1220, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16 }}>
            <div className="question-container">
              <h2 style={{ marginBottom: '30px', textAlign: 'center', fontFamily: "Revert", marginTop: '90px' }}>Overall, what is your level of satisfaction?</h2>
              <h2 style={{ marginBottom: '50px', textAlign: 'center', fontFamily: "Revert" }}>in relation to the Prices and Rates of ABCD TELEPHONE CALLS?</h2>
              <div style={{}}>
                <div style={{ flex: '0 1 50%', paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: "500px" }}>
                  <Stars onStarClick={handleStarClick}/>
                </div>
              </div>
            </div>
            <div className="buttons-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '200px 100px 200px'}}>
        <button onClick={handlePreviousButtonClick} style={{backgroundColor: 'transparent', color: '#00CED1', border: '1px solid #00CED1', padding: '10px', borderRadius: '10px',height:'50px', width: '130px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', marginTop: '150px'}}>Previous</button>

  <button onClick={handleNextButtonClick} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', position:"relative", left:300, width: '13%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};


  

export default DashboardSurvery10;
