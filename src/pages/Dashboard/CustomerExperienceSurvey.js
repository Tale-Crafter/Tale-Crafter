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
            <div style={{width: '100%', height: '100%', position: 'relative',left:0, background: 'none', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>

                <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>
                    <button style={{background:"none",border:"none",position:"absolute",left:40,marginTop:30,color: 'black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Customer Experience Survey - Consulting Company</button>
                    <button style={{width:147,border:"none",position: 'absolute',right:40,marginTop:30, height: '100%', paddingLeft: 16, paddingRight: 16, paddingTop: 20, paddingBottom: 20, background: '#F9BC33', borderRadius: 8, justifyContent: 'center', alignItems: 'center', gap: 14, display: 'inline-flex',textAlign:"center"}}>
                        <div style={{textAlign:"center",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 30, wordWrap: 'break-word'}}>Continue</div>
                    </button>
                    <div style={{width: 1850, height: 388, left: 24, top: 94, position: 'absolute', background: 'white', borderRadius: 16}} />
                    <div style={{ width: "100%", left: 150, top: 0, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}><AIComponent1/></div>
                </div>
                <div style={{width: 1850, height: 388, left: 24, top: 500, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{ width: "100%", left: -50, top: 430, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}><AIComponent2/></div>

                <div style={{width: 1850, height: 388, left: 24, top:905, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{ width: "100%", left: -50, top: 835, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}><AIComponent3/></div>

                <div style={{ position: 'relative', background: 'none',top:1220}}>
                    <div style={{paddingTop:50,width: 1850, height: 388, left: 24, top: 94, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <div className="question-container" style={{ textAlign: 'center',marginLeft:"10px" }}>
                        <audio controls style={{ width: '702px', height: '64px', borderRadius: '0px', margin: 'auto' }}>
                            <source src="audio.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>

                    </div>

                    <div style={{ position:"relative",top:70,flex: '0 1 50%', paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: "650px" }}>
                        <Stars onStarClick={handleStarClick}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerExperienceSurvey;
