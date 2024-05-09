import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import TT from '../../images/Tunisie-Telecom-logo.png';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import './dashboard.css';


function DropdownMenu({ options, value, placeholder, handleOptionSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    handleOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-wrapper">
      <button className="btn" onClick={toggleDropdown} style={{
            top: '20%', // Adjust this value to align with the button
            left: 0, // Align with the left edge of the button
            width: '100%', // Full width
            padding: '16px',
            borderRadius: '8px',
            border: '2px solid'}}>
        <span>{value || placeholder}</span>
        <span className="bx">▼</span>
      </button>
      {isOpen && (
        <div
          className="dropdown-menu"
          style={{
            position: 'absolute',
            top: '20%', // Adjust this value to align with the button
            left: 0, // Align with the left edge of the button
            width: '20%', // Full width
            padding: '16px',
            borderRadius: '8px',
            border: '2px solid',
            backgroundColor: '#f1f1f1',
            zIndex: 1,
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const DashboardSurvery70 = () => {
  const { iduser } = useParams();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Import useNavigate

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const governorates = [
    'Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba',
    'Kairouan', 'Kasserine', 'Kebili', 'Kef', 'Mahdia', 'Manouba', 'Medenine',
    'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse',
    'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextButtonClick = () => {
    if (selectedOption) {
      navigate('/dashboard80'); // Navigate to /dashboard80 if option selected
    }
  };

  const handlePreviousButtonClick = () => {
    navigate('/dashboard60'); // Always navigate to /dashboard60 on Previous button click
  };

  return (
    <div className="App">
      <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF' }}>
        <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
          <Header />
          <div style={{ width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }}></div>
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
                <div style={{ width: '70%', height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div> {/* Progress */}
              </div>
              {/* Text */}
              <span>70%</span>
            </div>
          </div>
          <div style={{ width: 1220, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16 }}>
            <div className="question-container">
              <h2 style={{ marginBottom: '70px', textAlign: 'center', marginTop: '90px',fontFamily:"Revert" }}>What is the closest store to your place of residence?</h2>
              <div style={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  marginLeft: '50px',
backgroundColor: 'transparent', 
  color: 'gray', 
  padding: '10px', 
  borderRadius: '10px', 
  width: '400px', 
  height: '100px', 
  textAlign: 'center',
  
}}>
<div className="dropdown-container" style={{
    borderColor: "black",
    color: "grey",
    width: '340px', // Set a static width
    height: '56px', // Set a static height
    borderRadius: '10px',
    top: '25px'
}}>
    <DropdownMenu
        options={governorates}
        value={selectedOption}
        placeholder="Select Governorate"
        handleOptionSelect={handleOptionSelect}
    />
</div>
</div>
<div className="buttons-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '190px 90px 100px'}}>
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

export default DashboardSurvery70;


