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
import {useNavigate} from "react-router-dom";
const opencage = require('opencage-api-client');
const DashboardSurvery50 = () => {
  const { iduser } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate instead of useHistory
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedChoice, setSelectedChoice] = useState(""); // State to track user choice

  const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
  };

  // Function to handle radio button change
  const handleRadioChange = (event) => {
      setSelectedChoice(event.target.value);
  };

  // Function to handle text input change
  const handleTextInputChange = (event) => {
      setSelectedChoice(event.target.value);
  };
  const handlePreviousButtonClick = () => {
    navigate('/dashboard40'); // Use navigate to navigate to the previous page
};

// Function to handle navigation to the next page
const handleNextButtonClick = () => {
    if (selectedChoice) {
        navigate('/dashboard60'); // Use navigate to navigate to the next page
    }
};
  return (
      <div className="App">





  <div className="question-container">
    <h2 style={{ marginBottom: '70px', textAlign: 'center', marginTop: '95px'}}>What is your age?</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: '0 1 50%',  paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: "100px" }}>
              <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
                  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleRadioChange} />
                  Under 15 years old
              </label>
              <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
                  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleRadioChange}/>
                  [15-19] years
              </label>
              <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
                  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}onChange={handleRadioChange} />
                  [20-24] years
              </label>
              <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
                  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleRadioChange}/>
                  [25-29] years
              </label>
              <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
                  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleRadioChange}/>
                  [30-39] years
              </label>
          </div>
          <div style={{ flex: '0 1 50%',  paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
              <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
                  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleRadioChange}/>
                  [40-49] years
              </label>
              <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
                  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}onChange={handleRadioChange} />
                  [50-59] years
              </label>
              <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
                  <input type="radio" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}onChange={handleRadioChange} />
                  [60-69] years
              </label>
              <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
                  <input type="radio" name="status" value="other" style={{ marginRight: '5px', transform: 'scale(1.5)' }}onChange={handleRadioChange} />
                  70 years and over
              </label>
          </div>


      </div>
</div>


</div>
  );
};


  

export default DashboardSurvery50;
