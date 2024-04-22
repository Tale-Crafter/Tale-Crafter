import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import TT from '../../images/Tunisie-Telecom-logo.png';
import MultipleQuestionsComponent from '../../components/MultipleQuestionsComponent';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import './dashboard.css';
import QuestionComponent from '../../components/QuestionComponent';
import { Link } from 'react-router-dom';

const DashboardSurvery903 = () => {
    const { iduser } = useParams();
    const checkedItems=[];
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [radioChoice,setCheckedItems, setRadioChoice] = useState(null);
  const [isChecked, setChecked] = useState(false); // State to track if at least one checkbox is checked

  const navigate = useNavigate();
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const handleCheckboxChange = (isChecked) => {
      setChecked(isChecked); // Update isChecked state based on whether at least one checkbox is checked
    };
    const handleNextButtonClick = () => {
      if (isChecked) {
        navigate('/dashboard904'); // Redirect to dashboard903 only if at least one checkbox is checked
      } else {
        alert('Please select at least one choice.'); // Show alert if no checkbox is checked
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
            <div style={{ marginTop: "100px", width: 1220, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="question-container" style={{ textAlign: 'center' }}>
                <audio controls style={{ width: '702px', height: '64px', borderRadius: '8px', margin: 'auto' }}>
                        <source src="audio.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    
                    <div style={{ }}>
                        <MultipleQuestionsComponent onChange={handleCheckboxChange} />
                    </div>
                </div>
                
                <div className="buttons-container" style={{ marginLeft: "100px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', padding: '200px 100px 200px' }}>
                <Link to="/dashboard902" style={{ textDecoration: 'none' }}>

    <button style={{ marginRight: '900px', backgroundColor: 'transparent', color: '#00CED1', border: '1px solid #00CED1', padding: '10px', borderRadius: '10px', width: '100px', textAlign: 'center' }}>Previous</button>
   </Link>
    <button style={{ backgroundColor: '#00CED1', color: '#fff', border: 'none', padding: '10px', borderRadius: '10px', width: '100px', textAlign: 'center' }} onClick={handleNextButtonClick} disabled={!isChecked}>Next</button>
</div>

                </div>
            </div>
     
    );
};

export default DashboardSurvery903;