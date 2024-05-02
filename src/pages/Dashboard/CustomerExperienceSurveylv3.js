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
import VerylikelyVierge from "./VerylikelyVierge";
import Verylikely from "./BusVerylikely";
import Stars from "./StarRankingBus";
import QuestionComponent from "../../components/QuestionComponent";
import AIComponent1 from "./AIComponent1";
import AIComponent2 from "./AIComponent2";
import AIComponent3 from "./AIComponent3";

const opencage = require('opencage-api-client');


const CustomerExperienceSurvey = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [checkboxValues, setCheckboxValues] = useState(Array(5).fill(false));
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showConfirmation1, setShowConfirmation1] = useState(false);
    const [textareaContent, setTextareaContent] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [checkboxValues1, setCheckboxValues1] = useState(Array(3).fill(false));
    const [selectedFiles, setSelectedFiles] = useState([]);
    const navigate = useNavigate();
    const [selectedStars, setSelectedStars] = useState(null); // State to track user's choice
    const [nextButtonEnabled, setNextButtonEnabled] = useState(false); // State to enable/disable Next button

    const [errorMessage, setErrorMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };


    const handleStarClick = (newRating) => {
        setSelectedStars(newRating); // Update state on user interaction
        setNextButtonEnabled(true); // Enable Next button when user selects a rating
    };

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleTextareaChange = (event) => {
        const content = event.target.value;
        setTextareaContent(content);
        setCharCount(content.length);
    };

    const handleBackClick = () => {
        // Redirect to /Surveys/:iduser
        navigate(`/Surveys/${iduser}`);
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
            <div style={{width: '100%', height: '100%', position: 'relative',left:0, background: 'none', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BHeader/>


                <div style={{width: 1590, height: 178, left: 295, top: 80, position: 'absolute', background: 'white', borderRadius: 16,alignItems:"center"}}>
                    <div style={{left: 40, top: 25, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Customer Experience Survey - Consulting Company</div>
                    <div style={{left: 190, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Survey Initiation</div>
                    <div style={{width: 157, left: 340, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Question<br/>Development</div>
                    <div style={{width: 160, left: 530, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Review and Preview</div>
                    <div style={{width: 160, left: 700, top: 123, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
                    <div style={{width: 149, left: 870, top: 123, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
                    <div style={{width: 24, height: 24, left: 190, top: 91, position: 'absolute'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                        {/*<div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />*/}
                    </div>
                    <div style={{width: 24, height: 24, left: 365, top: 91, position: 'absolute'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                    </div>
                    <div style={{width: 24, height: 24, left: 540, top: 91, position: 'absolute'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                        <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />
                    </div>
                    <div style={{width: 24, height: 24, left: 715, top: 91, position: 'absolute'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                    </div>

                    <div style={{width: 24, height: 24, left: 890, top: 91, position: 'absolute'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                    </div>
                    <div style={{width: 143, height: 0, left: 536, top: 101, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                    <div style={{width: 143, height: 0, left: 711, top: 101, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 143, height: 0, left: 886, top: 101, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 143, height: 0, left: 361, top: 101, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                </div>
                <div style={{width: 1590, height: 388, left: 295, top: 280, position: 'absolute', background: 'white', borderRadius: 16}}/>

                <div style={{ width: "75%", left: 400, top: 170, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}><AIComponent1/></div>
                <div style={{width: 1590, height: 388, left: 295, top: 500, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{ width: "70%", left: 300, top: 430, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}><AIComponent2/></div>

                <div style={{width: 1590, height: 388, left: 295, top:905, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{ width: "75%", left: 300, top: 835, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}><AIComponent3/></div>

                <div style={{ position: 'relative', background: 'none',top:1220}}>
                    <div style={{paddingTop:50,width: 1590, height: 388, left: 295, top: 94, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <div className="question-container" style={{ textAlign: 'center',marginLeft:"10px" }}>
                        <audio controls style={{ width: '702px', height: '64px', borderRadius: '0px', margin: 'auto' }}>
                            <source src="audio.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>

                    </div>

                    <div style={{ position:"relative",top:70,flex: '0 1 50%', paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: "500px" }}>
                        <Stars onStarClick={handleStarClick}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerExperienceSurvey;
