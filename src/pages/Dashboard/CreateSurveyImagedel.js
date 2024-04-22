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
const opencage = require('opencage-api-client');


const CreateSurveyImage = () => {
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

    const [errorMessage, setErrorMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

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
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                    {/* Intégrez le formulaire de contact ici */}
                <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>
                    <div style={{padding: 8, left: 1160, top: 20, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 3.45, height: 1.05, left: 10.27, top: 21, position: 'absolute', border: '2px #F9BC33 solid'}}></div>
                            <div style={{width: 18, height: 15.90, left: 3, top: 2.10, position: 'absolute', border: '2px #F9BC33 solid'}}></div>
                            <div style={{width: 9.75, height: 9.75, left: 12.75, top: 0.75, position: 'absolute', background: '#FF015C', borderRadius: 9999, border: '2px white solid'}} />
                        </div>
                    </div>
                    <div style={{padding: 8, left: 1112, top: 20, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 24, height: 24, paddingLeft: 2, paddingRight: 2, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 20, height: 14, position: 'relative'}}>
                                <div style={{width: 10, height: 3.50, left: 5, top: 4, position: 'absolute', border: '2px #F9BC33 solid'}}></div>
                                <div style={{width: 20, height: 14, left: 0, top: 0, position: 'absolute', border: '2px #F9BC33 solid'}}></div>
                            </div>
                        </div>
                    </div>
                    <img style={{width: 48, height: 48, left: 1216, top: 16, position: 'absolute', boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} src="https://via.placeholder.com/48x48" />
                    <div style={{width: 17, height: 17, left: 1247, top: 47, position: 'absolute', background: '#151515', borderRadius: 9999, border: '1px #F2F2F2 solid'}} />
                    <div style={{width: 15, height: 15, left: 1248, top: 48, position: 'absolute'}}>
                        <div style={{width: 6.25, height: 3.12, left: 4.38, top: 6.25, position: 'absolute', border: '1.33px white solid'}}></div>
                    </div>
                    <div style={{width: 48, height: 48, left: 198, top: 16, position: 'absolute', background: 'rgba(0, 0, 0, 0.04)', borderRadius: 9999}} />
                    <div style={{width: 32, height: 32, left: 206, top: 24, position: 'absolute'}}>
                        <div style={{width: 23.33, height: 15.33, left: 4.33, top: 8.33, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)'}}></div>
                    </div>
                    <div style={{width: 126, height: 44.56, left: 16, top: 16, position: 'absolute'}}>
                        <div style={{width: 125.31, height: 36.77, left: 0, top: 0.45, position: 'absolute'}}>
                            <div style={{height: 27.48, left: 52.81, top: 3.31, position: 'absolute'}}>
                                <div style={{width: 14.14, height: 27.32, left: 0, top: 0.01, position: 'absolute', background: '#111111'}}></div>
                                <div style={{width: 19.84, height: 21.97, left: 17.13, top: 5.35, position: 'absolute', background: '#111111'}}></div>
                                <div style={{width: 6.93, height: 26.82, left: 40.55, top: 0, position: 'absolute', background: '#111111'}}></div>
                                <div style={{width: 21.67, height: 22.14, left: 50.81, top: 5.34, position: 'absolute', background: '#111111'}}></div>
                            </div>
                            <div style={{width: 33.52, height: 35.68, left: -0, top: 1.09, position: 'absolute', background: 'linear-gradient(337deg, #00C0FF 0%, #00BDA9 99%)'}}></div>
                            <div style={{width: 32.20, height: 22.40, left: 6.55, top: 0, position: 'absolute', background: 'linear-gradient(59deg, #F9C82E 1%, #FE346E 99%)'}}></div>
                        </div>
                        <div style={{width: 55.32, height: 10.40, left: 69.91, top: 33.93, position: 'absolute'}}>
                            <div style={{width: 5.68, height: 7.25, left: 49.64, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                            <div style={{width: 5.68, height: 7.25, left: 43.30, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                            <div style={{width: 6.93, height: 7.25, left: 35.52, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                            <div style={{width: 6.31, height: 7.05, left: 27.61, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                            <div style={{width: 2.20, height: 10.20, left: 23.58, top: 0, position: 'absolute', background: '#666666'}}></div>
                            <div style={{width: 5.68, height: 7.25, left: 16.64, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                            <div style={{width: 6.31, height: 7.05, left: 9.10, top: 3.35, position: 'absolute', background: '#666666'}}></div>
                            <div style={{width: 7.46, height: 10.10, left: 0, top: 0.10, position: 'absolute', background: '#666666'}}></div>
                        </div>
                    </div>
                    <div style={{width: 1248, height: 1484, left: 16, top: 79, position: 'absolute', background: 'white', borderRadius: 16}} />
                    <div style={{width: 1200, height: 667, left: 40, top: 733, position: 'absolute', background: '#F5F5F5', borderRadius: 10}} />
                    <div style={{width: 24, height: 24, left: 628, top: 741, position: 'absolute'}}>
                        <div style={{width: 16, height: 6, left: 4, top: 9, position: 'absolute', background: 'rgba(0, 0, 0, 0.30)'}}></div>
                    </div>
                    <div style={{width: 1152, height: 36, left: 64, top: 773, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                            <div style={{padding: 8, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Français</div>
                            </div>
                            <div style={{padding: 8, background: 'white', borderRadius: 4, border: '1px #999999 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Arabe Tunisien</div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                                </div>
                                <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Text</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 50}} />
                                    <div style={{width: 16, height: 16, left: 8, top: 8, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                                </div>
                                <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Image</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                                </div>
                                <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Video</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                                </div>
                                <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Sound</div>
                            </div>
                        </div>
                        <div style={{width: 105, height: 36, paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 24, height: 24, paddingLeft: 2.39, paddingRight: 2.39, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 19.23, height: 14, position: 'relative'}}>
                                    <div style={{width: 19.23, height: 14, left: 0, top: 0, position: 'absolute', border: '1px black solid'}}></div>
                                    <div style={{width: 6, height: 6, left: 6.61, top: 4, position: 'absolute', border: '1px black solid'}}></div>
                                </div>
                            </div>
                            <div style={{flex: '1 1 0', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Preview</div>
                        </div>
                    </div>
                    <div style={{width: 420, height: 288, left: 430, top: 832, position: 'absolute'}}>
                        <div style={{width: 420, height: 261, left: 0, top: 27, position: 'absolute', background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20}} />
                        <div style={{width: 189, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Upload picture</div>
                        <div style={{width: 130, left: 290, top: 0, position: 'absolute', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>.jpg .png .jpeg</div>
                        <div style={{width: 388, height: 229, left: 16, top: 43, position: 'absolute', borderRadius: 20, border: '2px #CCCCCC dotted'}} />
                        <div style={{width: 212, height: 118, left: 104, top: 98, position: 'absolute'}}>
                            <div style={{width: 60, height: 60, padding: 16, left: 76, top: 0, position: 'absolute', background: 'white', borderRadius: 50, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                                <div style={{width: 28, height: 28, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'}}></div>
                            </div>
                            <div style={{left: 36, top: 68, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}>Select files to upload</div>
                            <div style={{left: 0, top: 94, position: 'absolute', color: '#666666', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>or Drag and Drop, Copy and Past Files</div>
                        </div>
                    </div>
                    <div style={{width: 260, height: 51, left: 956, top: 1169, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #CCCCCC solid'}} />
                    <div style={{width: 32, height: 32, left: 64, top: 1248, position: 'absolute'}}>
                        <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 8, border: '3px #CCCCCC solid'}} />
                    </div>
                    <div style={{width: 32, height: 32, left: 64, top: 1288, position: 'absolute'}}>
                        <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 8, border: '3px #CCCCCC solid'}} />
                    </div>
                    <div style={{left: 104, top: 1254, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Option 1</div>
                    <div style={{left: 104, top: 1294, position: 'absolute'}}><span style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Add an option or </span><span style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>add "other"</span></div>
                    <div style={{left: 1004, top: 1185, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Check Boxes</div>
                    <div style={{width: 24, height: 24, left: 1182, top: 1182, position: 'absolute'}}>
                        <div style={{width: 10, height: 5, left: 7, top: 10, position: 'absolute', border: '1.33px #111111 solid'}}></div>
                    </div>
                    <div style={{width: 868, height: 96, left: 64, top: 1144, position: 'absolute'}}>
                        <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Question</div>
                        <div style={{width: 868, height: 51, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10}} />
                        <div style={{left: 16, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Enter you question</div>
                    </div>
                    <div style={{width: 127, height: 15.99, left: 805, top: 1144, position: 'absolute', textAlign: 'right', color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>+Add a description</div>
                    <div style={{width: 1152, height: 0, left: 64, top: 1336, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 24, height: 24, padding: 4, left: 972, top: 1182, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{width: 16, height: 16, position: 'relative'}}>
                            <div style={{width: 11, height: 8, left: 5, top: 2, position: 'absolute', border: '2px #111111 solid'}}></div>
                            <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', border: '2px #111111 solid'}}></div>
                        </div>
                    </div>
                    <div style={{width: 147, height: 50, padding: 16, left: 1101, top: 1497, position: 'absolute', background: '#DDDDDD', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#666666', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Next</div>
                    </div>
                    <div style={{width: 147, height: 50, padding: 16, left: 32, top: 1497, position: 'absolute', borderRadius: 10, border: '2px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </div>
                    <div style={{width: 1200, height: 0, left: 40, top: 1481, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                    <div style={{left: 40, top: 105, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Creating a new survey</div>
                    <div style={{left: 190, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 16, wordWrap: 'break-word'}}>Survey Initiation</div>
                    <div style={{width: 126, left: 365, top: 193, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 16, wordWrap: 'break-word'}}>Question<br/>Development</div>
                    <div style={{left: 540, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
                    <div style={{left: 715, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Review and Preview</div>
                    <div style={{left: 890, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Survey Validation</div>
                    <div style={{left: 1067, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
                    <div style={{width: 24, height: 24, left: 190, top: 161, position: 'absolute'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                        <div style={{width: 16, height: 16, left: 4, top: 4, position: 'absolute'}}>
                            <div style={{width: 11.17, height: 8.38, left: 2.55, top: 4.01, position: 'absolute', background: 'white'}}></div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, left: 365, top: 161, position: 'absolute'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                        <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />
                    </div>
                    <div style={{width: 24, height: 24, left: 540, top: 161, position: 'absolute'}}>
                        <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
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
                    <div style={{width: 143, height: 0, left: 536, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 143, height: 0, left: 711, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 143, height: 0, left: 886, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 143, height: 0, left: 1061, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 143, height: 0, left: 361, top: 171, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '2px #00BDA9 solid'}}></div>
                    <div style={{width: 1200, height: 453, left: 40, top: 257, position: 'absolute', background: '#F5F5F5', borderRadius: 10}} />
                    <div style={{left: 67, top: 461, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Generate responses</div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 32, height: 18.13, position: 'relative'}}>
                                <div style={{width: 32, height: 13.87, left: 0, top: 2.13, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderRadius: 30}} />
                                <div style={{width: 18.13, height: 18.13, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                            </div>
                        </div>
                    </div>
                    <div style={{width: 1152, height: 0, left: 64, top: 504, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 1152, height: 0, left: 64, top: 437, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 24, height: 24, left: 628, top: 265, position: 'absolute'}}>
                        <div style={{width: 16, height: 6, left: 4, top: 9, position: 'absolute', background: 'rgba(0, 0, 0, 0.30)'}}></div>
                    </div>
                    <div style={{width: 1152, height: 36, left: 64, top: 297, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                            <div style={{padding: 8, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Français</div>
                            </div>
                            <div style={{padding: 8, background: 'white', borderRadius: 4, border: '1px #999999 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Arabe Tunisien</div>
                            </div>
                        </div>
                        <div style={{justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 50}} />
                                    <div style={{width: 16, height: 16, left: 8, top: 8, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                                </div>
                                <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Text</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                                </div>
                                <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Image</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                                </div>
                                <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Video</div>
                            </div>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                                </div>
                                <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Sound</div>
                            </div>
                        </div>
                        <div style={{width: 105, height: 36, paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 24, height: 24, paddingLeft: 2.39, paddingRight: 2.39, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 19.23, height: 14, position: 'relative'}}>
                                    <div style={{width: 19.23, height: 14, left: 0, top: 0, position: 'absolute', border: '1px black solid'}}></div>
                                    <div style={{width: 6, height: 6, left: 6.61, top: 4, position: 'absolute', border: '1px black solid'}}></div>
                                </div>
                            </div>
                            <div style={{flex: '1 1 0', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Preview</div>
                        </div>
                    </div>
                    <div style={{width: 260, height: 51, left: 956, top: 375, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #CCCCCC solid'}} />
                    <div style={{left: 64, top: 600, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{width: 32, height: 32, position: 'relative'}}>
                            <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 8, border: '3px #CCCCCC solid'}} />
                        </div>
                        <div><span style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Add an option or </span><span style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>add "other"</span></div>
                    </div>
                    <div style={{width: 24, height: 24, padding: 4, left: 972, top: 388, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{width: 16, height: 16, position: 'relative'}}>
                            <div style={{width: 11, height: 8, left: 5, top: 2, position: 'absolute', border: '2px #111111 solid'}}></div>
                            <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', border: '2px #111111 solid'}}></div>
                        </div>
                    </div>
                    <div style={{left: 1004, top: 391, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Check Boxes</div>
                    <div style={{width: 24, height: 24, left: 1182, top: 388, position: 'absolute'}}>
                        <div style={{width: 10, height: 5, left: 7, top: 10, position: 'absolute', border: '1.33px #111111 solid'}}></div>
                    </div>
                    <div style={{width: 868, height: 96, left: 64, top: 350, position: 'absolute'}}>
                        <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Question</div>
                        <div style={{width: 868, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid'}} />
                        <div style={{left: 16, top: 41, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Enter you question</div>
                    </div>
                    <div style={{width: 127, height: 19.19, left: 805, top: 350, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>+Add a description</div>
                    <div style={{width: 1152, height: 0, left: 64, top: 648, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                    <div style={{padding: 8, left: 963, top: 654, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 32, height: 32, position: 'relative'}}>
                            <div style={{width: 21, height: 21, left: 8, top: 8, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 21, height: 21, left: 3, top: 3, position: 'absolute', border: '2px #333333 solid'}}></div>
                        </div>
                        <div style={{width: 28.44, height: 32, position: 'relative'}}>
                            <div style={{width: 0, height: 8, left: 11.38, top: 15.17, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 0, height: 8, left: 16.62, top: 15.17, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 21, height: 0, left: 3.50, top: 9.83, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 15.76, height: 18.67, left: 6.12, top: 9.83, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 7.88, height: 5.34, left: 10.05, top: 4.50, position: 'absolute', border: '2px #333333 solid'}}></div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Mandatory</div>
                            <div style={{width: 32, height: 18.13, position: 'relative'}}>
                                <div style={{width: 32, height: 13.87, left: 0, top: 2.13, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderRadius: 30}} />
                                <div style={{width: 18.13, height: 18.13, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                            </div>
                        </div>
                        <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
                                <div style={{width: 3, height: 15, left: 10.50, top: 4.50, position: 'absolute', background: '#333333'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 204, padding: 16, left: 40, top: 1416, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>New question</div>
                    </div>
                    <div style={{width: 16, height: 16, padding: 1.33, left: 71, top: 1433, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{width: 13.33, height: 13.33, position: 'relative'}}>
                            <div style={{width: 13.33, height: 13.33, left: 0, top: 0, position: 'absolute', opacity: 0.50, border: '1px white solid'}}></div>
                            <div style={{width: 4, height: 4, left: 4.67, top: 4.67, position: 'absolute', border: '1px white solid'}}></div>
                        </div>
                    </div>
                    <div style={{width: 506, left: 64, top: 520, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 32, height: 32, position: 'relative'}}>
                                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 8, border: '3px #CCCCCC solid'}} />
                            </div>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Option 1</div>
                        </div>
                        <div style={{width: 21.33, height: 24, position: 'relative'}}>
                            <div style={{width: 0, height: 6, left: 8.54, top: 11.38, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                            <div style={{width: 0, height: 6, left: 12.46, top: 11.38, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                            <div style={{width: 15.75, height: 0, left: 2.62, top: 7.37, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                            <div style={{width: 11.82, height: 14, left: 4.59, top: 7.37, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                            <div style={{width: 5.91, height: 4.01, left: 7.54, top: 3.38, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                        </div>
                    </div>
                    <div style={{width: 506, left: 64, top: 560, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                            <div style={{width: 32, height: 32, position: 'relative'}}>
                                <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 8, border: '3px #CCCCCC solid'}} />
                            </div>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Option 2</div>
                        </div>
                        <div style={{width: 21.33, height: 24, position: 'relative'}}>
                            <div style={{width: 0, height: 6, left: 8.54, top: 11.38, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                            <div style={{width: 0, height: 6, left: 12.46, top: 11.38, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                            <div style={{width: 15.75, height: 0, left: 2.62, top: 7.37, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                            <div style={{width: 11.82, height: 14, left: 4.59, top: 7.37, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                            <div style={{width: 5.91, height: 4.01, left: 7.54, top: 3.38, position: 'absolute', border: '1.50px #333333 solid'}}></div>
                        </div>
                    </div>
                    <div style={{padding: 8, left: 956, top: 1344, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 32, height: 32, position: 'relative'}}>
                            <div style={{width: 21, height: 21, left: 8, top: 8, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 21, height: 21, left: 3, top: 3, position: 'absolute', border: '2px #333333 solid'}}></div>
                        </div>
                        <div style={{width: 28.44, height: 32, position: 'relative'}}>
                            <div style={{width: 0, height: 8, left: 11.38, top: 15.17, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 0, height: 8, left: 16.62, top: 15.17, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 21, height: 0, left: 3.50, top: 9.83, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 15.76, height: 18.67, left: 6.12, top: 9.83, position: 'absolute', border: '2px #333333 solid'}}></div>
                            <div style={{width: 7.88, height: 5.34, left: 10.05, top: 4.50, position: 'absolute', border: '2px #333333 solid'}}></div>
                        </div>
                        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Mandatory</div>
                            <div style={{width: 32, height: 18.13, position: 'relative'}}>
                                <div style={{width: 32, height: 13.87, left: 0, top: 2.13, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderRadius: 30}} />
                                <div style={{width: 18.13, height: 18.13, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                            </div>
                        </div>
                        <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
                                <div style={{width: 3, height: 15, left: 10.50, top: 4.50, position: 'absolute', background: '#333333'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default CreateSurveyImage;
