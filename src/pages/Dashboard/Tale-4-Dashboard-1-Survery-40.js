import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import TT from '../../images/Tunisie-Telecom-logo.png';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
const opencage = require('opencage-api-client');


const DashboardSurvery40 = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate instead of useHistory
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
      navigate('/dashboard30'); // Use navigate to navigate to the previous page
  };
  
  // Function to handle navigation to the next page
  const handleNextButtonClick = () => {
      if (selectedChoice) {
          navigate('/dashboard50'); // Use navigate to navigate to the next page
      }
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
    {/* Progress Bar */}
    <div style={{ width: '300px', height: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', marginRight: '5px' }}>
        <div style={{ width: '40%', height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div> {/* Progress */}
    </div>
    {/* Text */}
    <span>40%</span>
</div>



 
</div>


<div style={{ width: 1220, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16 }}>
  <div className="question-container">
    <h2 style={{ marginBottom: '70px', textAlign: 'center', marginTop: '90px'  }}>What is your age?</h2>
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
<div className="buttons-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '150px 100px 200px'}}>
        <button onClick={handlePreviousButtonClick} style={{backgroundColor: 'transparent', color: '#00CED1', border: '1px solid #00CED1', padding: '10px', borderRadius: '10px',height:'50px', width: '130px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', marginTop: '150px'}}>Previous</button>

  <button onClick={handleNextButtonClick} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', position:"relative", left:300, width: '13%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
</div>
</div>


</div>
</div>
</div>
</div>
    );
};

export default DashboardSurvery40;
