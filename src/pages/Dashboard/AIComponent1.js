import React, { useState } from 'react';
import LogoTale from '../../images/LogoTale.png';
import EmailSentIcon from '../../images/emailSentIcon.png';
import Buttons from '../../components/Buttons';
import TT from '../../images/Tunisie-Telecom-logo.png';
import { useParams } from 'react-router-dom';
import '../../App.css';  // Import the CSS file
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import ContactForm from './ContactForm';
import {useNavigate} from 'react-router-dom';

const opencage = require('opencage-api-client');
const DashboardSurvery30 = () => {
  const { iduser } = useParams();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate instead of useHistory
  const [selectedChoice, setSelectedChoice] = useState(""); // State to track user choice

  const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
  };


  const handleRadioChange = (event) => {
      setSelectedChoice(event.target.value);
  };

  
  const handleTextInputChange = (event) => {
      setSelectedChoice(event.target.value);
  };
  const handlePreviousButtonClick = () => {
    navigate('/dashboard20'); // Use navigate to navigate to the previous page
};

// Function to handle navigation to the next page
const handleNextButtonClick = () => {
    if (selectedChoice) {
        navigate('/dashboard40'); // Use navigate to navigate to the next page
    }
};

  
 
  return (
      <div className="App">




  <div className="question-container">
    <h2 style={{ marginBottom: '50px', textAlign: 'center',font:"revert", position:"absolute",top:150}}>Generally speaking, compared to other operators, would you say ABCD is ?</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between',position:"absolute",top:250 }}>
      <div style={{ flex: '0 1 50%', paddingRight: '100px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',marginLeft:"0px"  }}>
      <label style={{ paddingBottom: '10px', fontSize: '20px', display: 'flex', alignItems: 'center' }}>
  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleRadioChange} />
  <p style={{ fontFamily: "revert", fontWeight: 400, fontSize: "16px", lineHeight: "24px", margin: 0 }} >Best</p>
</label>
<label style={{ paddingBottom: '10px', fontSize: '20px', display: 'flex', alignItems: 'center' }}>
  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleRadioChange} />
  <p style={{ fontFamily: "revert", fontWeight: 400, fontSize: "16px", lineHeight: "24px", margin: 0 }}>Similar,Equal</p>
</label>
<label style={{ paddingBottom: '10px', fontSize: '20px', display: 'flex', alignItems: 'center' }}>
  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleRadioChange}/>
  <p style={{ fontFamily: "revert", fontWeight: 400, fontSize: "16px", lineHeight: "24px", margin: 0 }}>Less good</p>
</label>
        </div>
        </div>

</div>
</div>
  );
};

export default DashboardSurvery30;
