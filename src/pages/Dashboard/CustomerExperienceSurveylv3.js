// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import { FaEyeSlash, FaEye, FaCheck, FaArrowDown,FaAngleDown,FaPlus } from 'react-icons/fa';

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import HeadcomponentAssistance from "./HeadcomponentAssistance";
import AccountAreaHeader from "./AccountAreaHeader";
import ContactF from "./ContactF";
import BusinessLeftsidebar from "./BusinessLeftsidebar";
import BHeader from "./BHeader";
import EndPopup from "./EndPopup";
import SubBrandPopup from "./SubBrandPopup";
import ProductOffers from "./ProductOffers";
import CreateSurveyImage from "./CreateSurveyImage";
import CreateSurveySound from "./CreateSurveySound";
import Stars from "./StarRankingBus";
import Oneto10Component from "./1to10Component";



const opencage = require('opencage-api-client');


const Preview = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [checkboxValues, setCheckboxValues] = useState(Array(5).fill(false));
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showConfirmation1, setShowConfirmation1] = useState(false);
    const [textareaContent, setTextareaContent] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [checkboxValues1, setCheckboxValues1] = useState(Array(3).fill(false));
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate = useNavigate();
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedStars, setSelectedStars] = useState(null); // State to track user's choice
    const [NextButtonEnabled, setNextButtonEnabled] = useState(null); // State to track user's choice

    const cities = [
        'Ryazan', 'Hampton (VA)', 'San Isidro', 'Tampa (FL)', 'Hagen', 'Morón', 'Aurora (IL)', 'Sterlitamak',
        'Bahía Blanca', 'Baton Rouge (LA)', 'Cincinnati (OH)', 'Wuppertal', 'San Juan', 'Salem (OR)', 'Omsk',
        'Krasnodar', 'Khabarovsk', 'Cologne', 'La Plata', 'North Las Vegas (NV)', 'Kiel', 'Lübeck', 'Gelsenkirchen'
    ];



    const handleCityChange = (city) => {
        const selectedIndex = selectedCities.indexOf(city);
        let newSelectedCities = [];

        if (selectedIndex === -1) {
            newSelectedCities = [...selectedCities, city];
        } else if (selectedIndex === 0) {
            newSelectedCities = selectedCities.slice(1);
        } else if (selectedIndex === selectedCities.length - 1) {
            newSelectedCities = selectedCities.slice(0, -1);
        } else if (selectedIndex > 0) {
            newSelectedCities = [
                ...selectedCities.slice(0, selectedIndex),
                ...selectedCities.slice(selectedIndex + 1),
            ];
        }

        setSelectedCities(newSelectedCities);

    };




    const handleAgeChange = (age) => {
        setSelectedAge(age);
    };

    const ages = [
        'Under 15 years old', '[15-19] years', '[20-24] years', '[25-29] years', '[30-39] years', '[40-49] years', '[50-59] years', '[60-69] years', '[70+] years'
    ];

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };


    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleStarClick = (newRating) => {
        setSelectedStars(newRating); // Update state on user interaction
        setNextButtonEnabled(true); // Enable Next button when user selects a rating
    };
    const handleTextareaChange = (event) => {
        const content = event.target.value;
        setTextareaContent(content);
        setCharCount(content.length);
    };

    const handleBackClick = () => {
        // Redirect to /Surveys
        navigate(`/Surveys`);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        setSelectedFiles(files);
    };

    const handleSubmit = () => {
        // Handle submitting files (e.g., send them to a server)
        if (selectedFiles) {
            console.log('Selected Files:', selectedFiles);
            // Here you can perform actions like uploading files to a server
        } else {
            console.log('No files selected.');
        }
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        const selectedFilesArray = Array.from(files);
        setSelectedFiles(selectedFilesArray);
        // Automatically submit files here or trigger an upload function
        // For demonstration, I'm logging the selected files to the console
        console.log('Selected Files:', selectedFilesArray);
    };
    const isNextDisabled = textareaContent.trim() === '' || textareaContent.length > 1000;


    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleNext = () => {
        setShowConfirmation(true);
    };
    const handleNext1 = () => {
        setShowConfirmation1(true);
    };
    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };
    const handleCloseConfirmation1 = () => {
        setShowConfirmation1(false);
    };
    const handleCheckboxChange1 = (index) => {
        const newCheckboxValues = [...checkboxValues1];
        newCheckboxValues[index] = !newCheckboxValues[index];
        setCheckboxValues1(newCheckboxValues);
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
    const handleValidateConfirmation1 = () => {
        // Your logic for validation goes here
        console.log("Validated");
        setShowConfirmation1(false);
    };
    // Constants
    const borderRadius = 16;
    const mainColor = '#00BDA9';
    const secondaryColor = '#F9DC5C';
    const tertiaryColor = '#FFA3BF';
    const gradientColor = 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)';

    const [formData, setFormData] = useState({
        nom: '',
        category: '-Select-',
        SubBrand: '-Select-',
        Product: '-Select-'
    });


    const predefinedMessages = {
        nom: 'Enter your First Name',
        prenom: 'Enter your Last Name',
        email: 'Enter your email address',
        numero: 'Enter your Number',
        sujet: '', // No predefined message for the subject
        description: '', // No predefined message for the description
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Check if the input is a number for the 'numero' field
        if (name === 'numero' && isNaN(value)) {
            return; // Do not update state if the value is not a number
        }

        // Check if the input value matches any predefined message
        if (predefinedMessages.hasOwnProperty(name) && value === predefinedMessages[name]) {
            // If it matches, replace the predefined message with an empty string
            setFormData((prevData) => ({ ...prevData, [name]: '' }));
        } else {
            // If the input value is not a predefined message, update the state
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };


    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
            <div style={{filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} style={{filter: showConfirmation || showConfirmation1 ?  'blur(5px)' : 'none'}} />
            </div>
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BHeader/>
                <div style={{width: 1400, height: 250, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Intégrez le formulaire de contact ici */}
                    <div style={{position:"relative",top:-80}}>
                        <div style={{left: 40, top: 105, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Creating a new survey</div>
                        <div style={{left: 190, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Survey Initiation</div>
                        <div style={{width: 157, left: 340, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Question<br/>Development</div>
                        <div style={{width: 160, left: 540, top: 193, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Review and Preview</div>
                        <div style={{width: 160, left: 715, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
                        <div style={{width: 156, left: 890, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Survey Validation</div>
                        <div style={{width: 149, left: 1067, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
                        <div style={{width: 24, height: 24, left: 190, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 24, height: 24, left: 365, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 24, height: 24, left: 540, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                            <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />

                        </div>
                        <div style={{width: 24, height: 24, left: 715, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 24, height: 24, left: 890, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 24, height: 24, left: 1065, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 143, height: 0, left: 536, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                        <div style={{width: 143, height: 0, left: 711, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                        <div style={{width: 143, height: 0, left: 886, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                        <div style={{width: 143, height: 0, left: 1061, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                        <div style={{width: 143, height: 0, left: 361, top: 171, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 1400, height: 350, left: 340, top: 350, position: 'absolute', background: 'white', borderRadius: 16,display: 'flex', justifyContent: 'center'}} >
                    <div style={{alignItems: 'center', top: 25, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Generally speaking, compared to other operators, would you say ABCD is ?</div>
                    <div style={{width: 400, height: 150, left: -40, top: 270, position: 'absolute'}}>
                        <label style={{ margin: '0 150px', position: 'absolute', cursor: 'pointer', display: 'block', textAlign: 'center',top:-100 }}>
                            <input type="checkbox" name="language" value="Best" onChange={() => handleLanguageChange('Best')} checked={selectedLanguage === 'Best'} style={{ display: 'none' }} />
                            <span style={{ marginLeft: 5, position: "absolute", color: selectedLanguage === 'Best' ? '#00BDA9' : 'black', top: -7 }}>Best</span>
                            <div style={{ width: 20, height: 20, borderRadius: '50%', border: selectedLanguage === 'Best' ? '5px solid #00BDA9' : '3px solid #CCCCCC', position: 'absolute', top: -10, left: -40 }} />
                        </label>
                        <label style={{ margin: '0 150px', position: 'absolute', cursor: 'pointer', display: 'block', top: -30, textAlign: 'center' }}>
                            <input type="checkbox" name="language" value="Similar, equal" onChange={() => handleLanguageChange('Similar, equal')} checked={selectedLanguage === 'Similar, equal'} style={{ display: 'none' }} />
                            <span style={{ marginLeft: 5, position: "absolute", color: selectedLanguage === 'Similar, equal' ? '#00BDA9' : 'black', top:-37 ,width:150,textAlign: 'LEFT'}}>Similar, equal</span>
                            <div style={{ width: 20, height: 20, borderRadius: '50%', border: selectedLanguage === 'Similar, equal' ? '5px solid #00BDA9' : '3px solid #CCCCCC', position: 'absolute', top: -40, left: -40 }} />
                        </label>
                        <label style={{ margin: '0 150px', position: 'absolute', cursor: 'pointer', display: 'block', top: +40, textAlign: 'center' }}>
                            <input type="checkbox" name="language" value="Moins bien" onChange={() => handleLanguageChange('Moins bien')} checked={selectedLanguage === 'Moins bien'} style={{ display: 'none' }} />
                            <span style={{ marginLeft: 5, position: "absolute", color: selectedLanguage === 'Moins bien' ? '#00BDA9' : 'black', top:-65 ,width:150,textAlign: 'LEFT' }}>Moins bien</span>
                            <div style={{ width: 20, height: 20, borderRadius: '50%', border: selectedLanguage === 'Moins bien' ? '5px solid #00BDA9' : '3px solid #CCCCCC', position: 'absolute', top: -70, left: -40 }} />
                        </label>
                    </div>
                </div>
                <div style={{width: 1400, height: 600, left: 340, top: 720, position: 'absolute', background: 'white', borderRadius: 16,display: 'flex', justifyContent: 'center'}} >
                    <div style={{alignItems: 'center', top: 25, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>What is your city?</div>
                    <div style={{alignItems: 'center', top: 65, position: 'absolute', color: '#999999', fontSize: 18, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>(Multiple choice)</div>
                    <div style={{ top: 80, position: 'absolute', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '5px', marginLeft: '50px', marginTop: '50px' }}>
                        {cities.map(city => (
                            <label key={city} style={{ width:200,marginRight:160,marginLeft:160,marginTop: 15, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="checkbox"
                                    value={city}
                                    checked={selectedCities.includes(city)}
                                    onChange={() => handleCityChange(city)}
                                    style={{ display: 'none' }}
                                />
                                <span
                                    style={{
                                        width: '27px',
                                        height: '27px',
                                        border: '3px solid ' + (selectedCities.includes(city) ? '#00BDA9' : '#CCCCCC'),
                                        borderRadius: '20%',
                                        display: 'inline-block',
                                        marginRight: '5px',
                                        backgroundColor: selectedCities.includes(city) ?  '#00BDB9' : 'transparent',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                            {selectedCities.includes(city) && (
                                <svg viewBox="0 4 8 8" style={{ fill: 'white', width: '80%', height: '80%', display: 'inline-block' }}>
                                    <path d="M1.5 9l2 2 4-4-1-1-3 3-1-1z" />
                                </svg>
                            )}
                        </span>
                                <span style={{ color: selectedCities.includes(city) ? '#00BDA9' : '#111', fontSize: '16px' }}>{city}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div style={{width: 1400, height: 700, left: 340, top: 1350, position: 'absolute', background: 'white', borderRadius: 16,display: 'flex', justifyContent: 'center'}} >
                    <div style={{alignItems: 'center', top: 25, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>What is your age?</div>
                    <div style={{ marginTop :15 , width: 400, height: 400, left: -30, top: 120, position: 'absolute', display: 'flex', flexDirection: 'column'  }}>
                        {ages.map((age, index) => (
                            <label key={index} style={{ width:300 ,margin: '1px 200px', position: 'absolute', cursor: 'pointer', display: 'flex', textAlign: 'center', top: 60 * index }}>
                                <input type="radio" name="age" value={age} onChange={() => handleAgeChange(age)} checked={selectedAge === age} style={{ display: 'none' }} />
                                <span style={{ left:15,marginLeft: 5, position: "absolute", color: selectedAge === age ? '#00BDA9' : 'black', top: 12 }}>{age}</span>
                                <div style={{ width: 20, height: 20, borderRadius: '50%', border: selectedAge === age ? '5px solid #00BDA9' : '3px solid #CCCCCC', position: 'absolute', top: -10, left: -40 ,margin:20}} />
                            </label>
                        ))}
                    </div>
                </div>
                <div style={{marginBottom:65,width: 1400, height: 700, left: 340, top: 2100, position: 'absolute', background: 'white', borderRadius: 16,display: 'flex', justifyContent: 'center'}} >
                    <div className="question-container" style={{position:'absolute',left:350, top:55,textAlign: 'center',marginLeft:"10px" }}>
                        <audio controls style={{ width: '702px', height: '64px', borderRadius: '0px', margin: 'auto' }}>
                            <source src="audio.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    <div style={{alignItems: 'center', top: 225, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Here's the advert in full, do you remember seeing/hearing it now?</div>
                    <div style={{ position:"absolute",top:370,flex: '0 1 50%',left:-200, paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: "650px" }}>
                        <Stars onStarClick={handleStarClick}/>
                    </div>
                    <Oneto10Component></Oneto10Component>
                    <div style={{left:485,alignItems: 'center', top: 490, position: 'absolute', color: '#111111', fontSize: 20, fontFamily: 'revert', fontWeight: '500',  wordWrap: 'break-word'}}>1</div>
                    <div style={{left:595,alignItems: 'center', top: 490, position: 'absolute', color: '#111111', fontSize: 20, fontFamily: 'revert', fontWeight: '500',  wordWrap: 'break-word'}}>2</div>
                    <div style={{left:705,alignItems: 'center', top: 490, position: 'absolute', color: '#111111', fontSize: 20, fontFamily: 'revert', fontWeight: '500',  wordWrap: 'break-word'}}>3</div>
                    <div style={{left:815,alignItems: 'center', top: 490, position: 'absolute', color: '#111111', fontSize: 20, fontFamily: 'revert', fontWeight: '500',  wordWrap: 'break-word'}}>4</div>
                    <div style={{left:925,alignItems: 'center', top: 490, position: 'absolute', color: '#111111', fontSize: 20, fontFamily: 'revert', fontWeight: '500',  wordWrap: 'break-word'}}>5</div>
                    <div style={{left:425,alignItems: 'center', top: 550, position: 'absolute', color: '#999999', fontSize: 20, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Very disatisfied</div>
                    <div style={{left:885,alignItems: 'center', top: 550, position: 'absolute', color: '#999999', fontSize: 20, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Very satisfied</div>
                </div>
            </div>
        </div>
    );
};

export default Preview ;


