import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import TT from '../../images/Tunisie-Telecom-logo.png';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import './dashboard.css';
import { Link } from 'react-router-dom';
import EmojiComponent from '../../components/EmojisComponent';
const DashboardSurvery909 = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedEmoji, setSelectedEmoji] = useState(null); // State to track selected emoji
    const navigate = useNavigate(); // Import useNavigate

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
   

  // Function to handle radio button choice
  const handleEmojiSelect = (emojiSrc) => {
    setSelectedEmoji(emojiSrc);
};

  // Function to handle Next button click
  const handleNextButtonClick = () => {
    if (selectedEmoji) {
        navigate('/dashboard901'); // Navigate to /dashboard901 if emoji selected
    } else {
        alert('Please select an emoji.'); // Show alert if no emoji selected
    }
};
  // Function to handle Previous button click
  const handlePreviousButtonClick = () => {
    navigate('/dashboard908'); // Navigate to /dashboard80 on Previous button click
};
    return (    <div className="App">
    <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>
        <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
        <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
            <Header/>
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
                        <div style={{ width: '90%', height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div> {/* Progress */}
                    </div>
                    {/* Text */}
                    <span>90%</span>
                </div>
            </div>
            <div style={{ marginTop: "100px", width: 1220, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="question-container">
                    <video width="640" height="300" controls>
                        <source src="video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div style={{ fontFamily: 'Revert', fontSize: '18px', fontWeight: '700', letterSpacing: '0em' }}>
                        Here's the advert in full, do you remember seeing/hearing it now?
                    </div>
                    <div style={{ marginLeft:"10px" }}>
                    <EmojiComponent onEmojiSelect={handleEmojiSelect} selectedEmoji={selectedEmoji} />
                    </div>
                    <div className="buttons-container" style={{  display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '500px' }}>
                        <div style={{marginTop:"50px", marginRight:"1100px",marginLeft:"-200px",flex: '1', textAlign: 'left' }}>
                            <Link to="/dashboard80" style={{ textDecoration: 'none' }}>
                                <button style={{ backgroundColor: 'transparent', color: '#00CED1', border: '1px solid #00CED1', padding: '10px', borderRadius: '10px', width: '100px', textAlign: 'center' }}>Previous</button>
                            </Link>
                        </div>
                        <div style={{ flex: '1' , textAlign: 'right' }}>
    <button style={{ marginTop: "50px", backgroundColor: '#00CED1', color: '#fff', border: 'none', padding: '10px', borderRadius: '10px', width: '100px', textAlign: 'center' }} onClick={handleNextButtonClick} disabled={!selectedEmoji} >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      );
};

export default DashboardSurvery909;