import React, {useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import Leftsidebar from "./Leftsidebar";
import {useNavigate, useParams} from "react-router-dom";
import Header from "./Header";
import LanguagePage from "./LanguagePage";
import Datasecurity from "./Datasecurity";
import VerylikelyVierge from "./VerylikelyVierge";
import {Link} from 'react-router-dom';
const Container = ({ children }) => (
    <div className="Appsd">
        {children}
    </div>
);

const InfoBox = ({ points, color }) => (
    <div style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', ...color }}>
        <div style={{ textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>{points} points</div>
    </div>
);

const InfoBox1 = ({ titre, num, color}) => (
    <div style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', ...color }}>
        <div style={{ textAlign: 'right', color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '900', wordWrap: 'break-word' }}>{num}.</div>
        <div style={{ textAlign: 'right', color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>{titre}?</div>
    </div>
);

const TextStyle = {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'revert',
    wordWrap: 'break-word',
};

const LiveSurvey = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const [showLanguageComponent, setShowLanguageComponent] = useState(false);

    const handleBackClick = () => {
        // Redirect to /Surveys/:iduser
        navigate(`/Surveys/${iduser}`);
    };

    const handleStartClick = () => {
        // Hide all styles and show the language component
        setShowLanguageComponent(true);
    };
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [textareaContent, setTextareaContent] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [checkboxValues, setCheckboxValues] = useState(Array(5).fill(false));

    const handleTextareaChange = (event) => {
        const content = event.target.value;
        setTextareaContent(content);
        setCharCount(content.length);
    };


    const isNextDisabled = textareaContent.trim() === '' || textareaContent.length > 1000;


    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleNext = () => {
        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };
    const handleCheckboxChange = (index) => {
        const newCheckboxValues = [...checkboxValues];
        newCheckboxValues[index] = !newCheckboxValues[index];
        setCheckboxValues(newCheckboxValues);
    };
    const handleValidateConfirmation = () => {
        // Your logic for validation goes here
        console.log("Validated");
        setShowConfirmation(false);
    };
    // Constants
    const borderRadius = 16;
    const mainColor = '#00BDA9';
    const secondaryColor = '#F9DC5C';
    const tertiaryColor = '#FFA3BF';
    const gradientColor = 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)';

    return (
        <Container>
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <Header />
            {!showLanguageComponent && (
                <div style={{ left: 100, width: '80%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                    {/* Background elements */}
                    <div style={{ width: 1400, height: 800, left: 250, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }} >
                        <div style={{position:"absolute",left:1300,top:10,width: '3%', height: '3%', paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: '#ED1C24', borderRadius: 4, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', color: 'white', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>• Live</div>
                        </div>
                    {/* Number of Questions */}
                    <InfoBox1 titre={"Vestibulum ac massa in dui vehicula commodo"} num={1} color={{ ...TextStyle, paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, left: 20, top: 40, position: 'absolute' }} />
                    <div style={{ position: 'absolute',left: -80, top: 180 }}>
                        {/* Radio buttons for languages */}
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="Yes" onChange={() => handleLanguageChange('Yes')} checked={selectedLanguage === 'Yes'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-100,position:"absolute", color: selectedLanguage === 'Yes' ? '#00BDA9' : 'black' }}>Yes</span>
                                <div style={{ width: selectedLanguage === 'Yes' ? 20 : 20, height: selectedLanguage === 'Yes' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'Yes' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                <input type="radio" name="language" value="No" onChange={() => handleLanguageChange('No')} checked={selectedLanguage === 'No'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:40,top:-50,position:"absolute", color: selectedLanguage === 'No' ? '#00BDA9' : 'black' }}>No</span>
                                <div style={{ width: selectedLanguage === 'No' ? 20 : 20, height: selectedLanguage === 'No' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedLanguage === 'No' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: -50, left: -40 }} />
                            </label>
                    </div>
                    {/* Points Earned */}
                    <InfoBox1 titre={"Curabitur quis dolor accumsan, rhoncus tortor at, ultrices massa"} num={2} color={{ ...TextStyle, paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, left: 20, top: 170, position: 'absolute' }} />
                        {/* Checkboxes */}
                        {/* Checkboxes */}
                        {/* Checkboxes */}
                        <div style={{ position: 'absolute', left: 20, top: 205 }}>
                            {Array.from(Array(5).keys()).map(index => (
                                <label key={index} style={{ margin: '0 10px', marginBottom: '20px', position: 'relative', cursor: 'pointer', display: 'block' }}>
                                    <input type="checkbox" onChange={() => handleCheckboxChange(index)} checked={checkboxValues[index]} style={{ display: 'none' }} />
                                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                        <div style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 8, border: '3px #CCCCCC solid' }}>
                                            {checkboxValues[index] && (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00BDA9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:34,height:34, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <span style={{ position:"relative",top:8,marginLeft: 50, color: checkboxValues[index] ? '#00BDA9' : 'black' }}>Option {index + 1}</span>
                                </label>
                            ))}
                        </div>

                    <InfoBox1 titre={"Nullam et lorem et turpis pharetra consectetur eget sodales risus"} num={3} color={{ ...TextStyle, paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, left: 20, top: 400, position: 'absolute' }} />

                    <div style={{position:"relative",top:445,left:30,width: '95%', height: '17%', borderRadius: 16, border: '1.5px #CCCCCC solid'}}>
                        <textarea style={{width: '90%', height: '90%', border: 'none', outline: 'none', resize: 'none', padding: '8px', fontFamily:"revert"}} placeholder="Enter your thoughts here" value={textareaContent} onChange={handleTextareaChange} />
                        <div
                            style={{
                                position:"absolute",
                                left:1275,
                                color: 'rgba(0, 0, 0, 0.30)',
                                fontSize: 12,
                                fontFamily: 'revert',
                                fontWeight: '700',
                                lineHeight: 1,
                                wordWrap: 'break-word',
                            }}
                        >
                            {charCount}/1000
                        </div>
                    </div>
                        <InfoBox1 titre={"Turpis pharetra consectetur eget sodales risus"} num={4} color={{ ...TextStyle, paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, left: 20, top: 580, position: 'absolute' }} />
                        <div style={{position:"absolute",top:620,left:30,width: '100%', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>(With 0 “not at all/not at all likely” & 10 “without hesitation/Very likely”)</div>
                        <div style={{ width: "100%", left: -220, top: 310, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}><VerylikelyVierge/></div>

                        {/* Title */}
                    <div style={{ width: 993, left: 60, top: 15, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Mauris egestas leo vel nulla tincidunt, ac molestie sem consectetur</div>

                    {/* Back button */}
                    <button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 20, top: 13, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
                        <div style={{ width: 32, height: 32, position: 'relative' }}>
                            <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
                        </div>
                    </button>


                    {/* Start button */}
                    <div onClick={handleStartClick} style={{ width: 170, padding: 16, left: 1180, top: 735, position: 'absolute', background: gradientColor, borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer' }}>
                    <Link to="/livesurvey1/:iduser">
                        <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Submit</div>
                    </Link>
                    </div>
                </div>
                </div>

            )}
            {showLanguageComponent && <Datasecurity />}
        </Container>
    );
};

export default LiveSurvey;
