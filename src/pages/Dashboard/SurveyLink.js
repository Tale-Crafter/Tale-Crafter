
// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
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
const opencage = require('opencage-api-client');

const SquareButton = ({ title, description, imageUrl, to }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { iduser } = useParams();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link to={to} style={{ textDecoration: 'none', display: "inline-block", marginTop: "150px", border: "1px solid lightgrey", borderRadius: "10px", textAlign: "center", padding: "20px", width: "272px", height: "276px", transition: "background-color 0.3s", marginLeft: 20 ,backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.04)' : 'transparent' }}onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <div>
                <img src={imageUrl} alt={title} style={{ width: 20, height: 20, marginBottom: "10px" }} />
                <h3 style={{ color: "#111111", fontSize: "16px", fontFamily: "revert", fontWeight: "700" }}>{title}</h3>
                <p style={{ color: "#666", fontFamily: "revert", fontSize: "14px" }}>{description}</p>
            </div>

        </Link>
    );
};
const Surveylink = () => {
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
    const [isFocused, setIsFocused] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [link, setLink] = useState('');
    const [showSocialButtons, setShowSocialButtons] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    const generateLink = () => {
        // Replace 'your_account_id' and 'your_survey_id' with your actual account ID and survey ID
        const accountId = 'r';
        const baseUrl = 'https://fr.tale.com/r/';
        const surveyId = 'TJDFLJ6';
        const generatedLink = `${baseUrl}${accountId}/${surveyId}`;

        setLink(generatedLink);
        setShowSocialButtons(true);

    };
    const handleCopy = () => {
        // Create a new input element to copy the text from
        const tempInput = document.createElement('input');
        tempInput.value = link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Set isCopied to true to show the "Copied!" message
        setIsCopied(true);

        // Reset isCopied after 2 seconds
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
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
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BHeader/>
                <div style={{width: 1400, height: 800, buttom:20,left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Intégrez le formulaire de contact ici */}
                    <div style={{position:"relative",top:-80}}>
                        <div style={{left: 40, top: 105, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Creating a new survey</div>
                        <div style={{left: 190, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Survey Initiation</div>
                        <div style={{width: 157, left: 340, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Question<br/>Development</div>
                        <div style={{width: 160, left: 540, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Review and Preview</div>
                        <div style={{width: 160, left: 715, top: 193, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
                        <div style={{width: 156, left: 890, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Survey Validation</div>
                        <div style={{width: 149, left: 1067, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
                        <div style={{width: 24, height: 24, left: 190, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                            {/*<div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />*/}
                        </div>
                        <div style={{width: 24, height: 24, left: 365, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 24, height: 24, left: 540, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />

                        </div>
                        <div style={{width: 24, height: 24, left: 715, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                            <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />

                        </div>
                        <div style={{width: 24, height: 24, left: 890, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 24, height: 24, left: 1065, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 143, height: 0, left: 536, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                        <div style={{width: 143, height: 0, left: 711, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                        <div style={{width: 143, height: 0, left: 886, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                        <div style={{width: 143, height: 0, left: 1061, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                        <div style={{width: 143, height: 0, left: 361, top: 171, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>



                    </div>


                    <Link to="/chsurvey2">
                        <div  >
                            <div style={{left: 90, top: 180, position: 'absolute', color: '#111111', fontSize: 18, fontFamily: 'REVERT', fontWeight: '400',  wordWrap: 'break-word'}}>Back</div>
                            <img src={process.env.PUBLIC_URL + '/retour.png'} style={{top:178,left:60,width: 28.44, height: 32, position: 'absolute'}}></img>
                        </div>
                    </Link>

                    <div style={{left: 50, top: 260, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Share a survey link</div>

                    <div style={{right: 30, top: 260, position: 'absolute', color: '#999999', fontSize: 18, fontFamily: 'REVERT', fontWeight: '400',  wordWrap: 'break-word'}}> Link created: 5/29/2025</div>

                    <div style={{left: 50, top: 300, position: 'absolute', color: '#111111', fontSize: 18, fontFamily: 'REVERT', fontWeight: '400',  wordWrap: 'break-word'}}>Copy this URL to share your survey. For example, paste it in an email, on a website, or share it on social media.</div>

                    <div style={{left: 50, top: 350, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Link name</div>

                    <div style={{ width: 868, height: 96, left: 44, top: 380, position: 'absolute' }}>

                        <input style={{width: 840,
                            height: 51,
                            left: 0,
                            top: 25,
                            position: 'absolute',
                            background: 'rgba(17, 17, 17, 0.10)',
                            borderColor: isFocused ? '#00BDA9' : 'transparent',
                            borderRadius: 10,
                            padding: '0 10px',
                        }}
                               onFocus={handleFocus}
                               onBlur={handleBlur}
                        />
                        {!isFocused && (
                            <div
                                style={{
                                    left: 16,
                                    top: 41,
                                    position: 'absolute',
                                    color: 'rgba(0, 0, 0, 0.40)',
                                    fontSize: 14,
                                    fontFamily: 'revert',
                                    fontWeight: '400',
                                    wordWrap: 'break-word'
                                }}
                            >
                                Enter your Link Name
                            </div>
                        )}
                    </div>
                    <div style={{left: 50, top: 500, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Your link</div>

                    <div>
                        <div style={{ width: 868, height: 116, left: 44, top: 530, position: 'absolute' }}>
                            <div
                                style={{
                                    width: 840,
                                    height: 71,
                                    left: 0,
                                    top: 25,
                                    position: 'absolute',
                                    background: 'rgba(17, 17, 17, 0.10)',
                                    borderRadius: 10,
                                    padding: '0 10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <img
                                    src={process.env.PUBLIC_URL + '/lien.png'} // Path to your icon image
                                    alt="Link Icon"
                                    style={{ width: 40, height: 40, marginRight: 10 }}
                                />
                                <input
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                        background: 'transparent',
                                        outline: 'none',
                                        fontSize: 16,
                                        fontFamily: 'revert',
                                        fontWeight: '400',
                                    }}
                                    value={link}
                                    readOnly
                                />
                            </div>
                            <button
                                style={{
                                    border: "none",
                                    position: "absolute",
                                    top: 38,
                                    right: 20,
                                    width: 147,
                                    height: 51,
                                    padding: 16,
                                    background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    display: 'inline-flex'
                                }}
                                onClick={() => { generateLink(); handleCopy(); }}
                            >
                                <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>{isCopied ? "Copied!" : "Copy"}</div>
                            </button>
                        </div>
                        {showSocialButtons && (
                            <div>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <button style={{
                                        border: "none",
                                        position: "absolute",
                                        top: 650,
                                        left: 45,
                                        width: 220,
                                        height: 71,
                                        padding: 16,
                                        background: '#064DD7',
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'inline-flex'
                                    }}>
                                        <img
                                            src={process.env.PUBLIC_URL + '/facebook-icon.png'} // Path to your Facebook icon image
                                            alt="Facebook Icon"
                                            style={{ width: 30, height: 30, marginRight: 10 }}
                                        />
                                        <div style={{ color: 'White', fontSize: 24, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word' }}>Facebook</div>
                                    </button>
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <button style={{
                                        border: "none",
                                        position: "absolute",
                                        top: 650,
                                        left: 290,
                                        width: 220,
                                        height: 71,
                                        padding: 16,
                                        background: '#0673D7',
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'inline-flex'
                                    }}>
                                        <img
                                            src={process.env.PUBLIC_URL + '/linkedin.png'} // Path to your linkedin icon image
                                            alt="linkedin Icon"
                                            style={{ width: 30, height: 30, marginRight: 10 }}
                                        />
                                        <div style={{ color: 'White', fontSize: 24, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word' }}>LinkedIN</div>
                                    </button>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <button style={{
                                        border: "none",
                                        position: "absolute",
                                        top: 650,
                                        left: 530,
                                        width: 220,
                                        height: 71,
                                        padding: 16,
                                        background: '#00A3FF',
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'inline-flex'
                                    }}>
                                        <img
                                            src={process.env.PUBLIC_URL + '/twitter.png'} // Path to your linkedin icon image
                                            alt="twitter Icon"
                                            style={{ width: 30, height: 30, marginRight: 10 }}
                                        />
                                        <div style={{ color: 'White', fontSize: 24, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word' }}>Twitter/X</div>
                                    </button>
                                </a>
                            </div>
                        )}
                    </div>

                    <button style={{border:"none",position:"absolute",top:730,right:30,width: 147, height: 51, padding: 16, background: '#DDDDDD', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Next</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Surveylink;
