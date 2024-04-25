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
import Select from "react-select";
import EmojiComponent from "../../components/EmojisComponent";
import EmojiComponentSurvey from "../../components/EmojisComponentSurvey";
const opencage = require('opencage-api-client');


const CreateSurveySTEP7 = () => {
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
    const [selectedLanguage1, setSelectedLanguage1] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [youtubeLink, setYoutubeLink] = useState('');
    const [uploadedLink, setUploadedLink] = useState('');
    const [selectedEmoji, setSelectedEmoji] = useState(null); // State to track selected emoji
    const [selectedOption2, setSelectedOption2] = useState('');
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('');
    const [selectedOption5, setSelectedOption5] = useState('');
    const [selectedOption6, setSelectedOption6] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedFiles([...selectedFiles, ...files]);
    };

    const uploadFiles = () => {
        // Simulating upload progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setUploadProgress(0);
                setSelectedFiles([]);
            }
        }, 1000);
    };
    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    const handleFocus1 = () => {
        setIsFocused1(true);
    };

    const handleBlur1 = () => {
        setIsFocused1(false);
    };
    const handleFocus2 = () => {
        setIsFocused2(true);
    };

    const handleBlur2 = () => {
        setIsFocused2(false);
    };
    const handleFocus3 = () => {
        setIsFocused3(true);
    };

    const handleBlur3 = () => {
        setIsFocused3(false);
    };
    const handleToggle = () => {
        setIsChecked((prevState) => !prevState);
    };

    const handleChange3 = (e) => {
        setSelectedOption3(e.target.value);
    };
    const handleChange4 = (e) => {
        setSelectedOption4(e.target.value);
    };
    const handleChange5 = (e) => {
        setSelectedOption5(e.target.value);
    };
    const handleChange6 = (e) => {
        setSelectedOption6(e.target.value);
    };
    const handleOptionClick2 = (option2) => {
        setSelectedOption2(option2);
    };

    const handleLanguageChange1 = (language1) => {
        setSelectedLanguage1(language1);
    };
    // Function to handle radio button choice
    const handleEmojiSelect = (emojiSrc) => {
        setSelectedEmoji(emojiSrc);
    };
    const handleToggle1 = () => {
        setIsChecked1((prevState) => !prevState);
    };
    const handleLinkChange = (e) => {
        setYoutubeLink(e.target.value);
    };

    const handleUpload = () => {
        // Here you can add validation or processing logic before setting the uploaded link
        setUploadedLink(youtubeLink);
    };

    const handleDelete = () => {
        setUploadedLink('');
        setYoutubeLink('');
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
    const options = [
        { value: 'Radio box', label: 'Radio box', icon: '/box.png' },
        { value: 'Check boxes', label: 'Check boxes', icon: '/check.png' },

        { value: 'Dropdown', label: 'Dropdown', icon: '/drop.png' },
        { value: 'Single textbox', label: 'Single textbox', icon: '/textbox.png' },
        { value: 'Comment', label: 'Comment Box', icon: '/Comment.png' },
        { value: 'Choice of 1 to 10', label: 'Choice of 1 to 10', icon: '/choice.png' },
        { value: 'Smile rating', label: 'Smile rating', icon: '/smile.png' },
        { value: 'Star rating', label: 'Star rating', icon: '/star.png' },

        // Add other options with their respective icons
    ];
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

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
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
                <div style={{width: 1400, height: 1225, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Intégrez le formulaire de contact ici */}
                    <div style={{position:"relative",top:-80}}>
                        <div style={{left: 40, top: 105, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Creating a new survey</div>
                        <div style={{left: 190, top: 193, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Survey Initiation</div>
                        <div style={{width: 157, left: 340, top: 193, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Question<br/>Development</div>
                        <div style={{width: 160, left: 540, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
                        <div style={{width: 160, left: 715, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Review and Preview</div>
                        <div style={{width: 156, left: 890, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Survey Validation</div>
                        <div style={{width: 149, left: 1067, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
                        <div style={{width: 24, height: 24, left: 190, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                            {/*<div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />*/}
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
                        <div style={{width: 143, height: 0, left: 361, top: 171, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                    </div>
                    <div style={{position:"relative",top:-80}}>
                        <div style={{padding:50,paddingLeft:20,width: 1200, height: 780, left: 40, top: 249, position: 'absolute', background: '#F5F5F5', borderRadius: 10}} />


                        <div style={{width: 24, height: 24, left: 40, top: 924, position: 'absolute'}}>
                            <div style={{width: 16, height: 6, left: 15, top: 4, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', background: 'rgba(0, 0, 0, 0.30)'}}></div>
                        </div>

                        <div style={{ width: 260, height: 51, left: 70, top: 945, position: 'absolute', zIndex:9999 }}>
                            <div style={{ width: 150, height: 51, left: 0, top: 5, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #CCCCCC solid' }}>
                                <div style={{left: 0, top: -30, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Scale</div>

                                <select
                                    style={{ width: '100%', height: '100%', background: 'none', border: 'none', outline: 'none', padding: '0 10px' }}
                                    value={selectedOption}
                                    onChange={handleChange}
                                >
                                    <option value="">-Select-</option>
                                    <option value="op1">op1</option>

                                </select>
                            </div>
                            <div style={{ left: 18, top: 16, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                                {/*{selectedOption || ''}*/}
                            </div>
                            <div style={{width: 250, height: 96, left: 180, top: -20, position: 'absolute'}}>
                                    <div
                                        style={{
                                            left: 0,
                                            top: -2,
                                            position: 'absolute',
                                            color: 'black',
                                            fontSize: 14,
                                            fontFamily: 'revert',
                                            fontWeight: '600',
                                            wordWrap: 'break-word',
                                        }}
                                    >
                                        Labeled on the left
                                    </div>
                                    <input
                                        style={{
                                            width: 250,
                                            height: 51,
                                            left: 0,
                                            top: 25,
                                            position: 'absolute',
                                            background: 'rgba(17, 17, 17, 0.10)',
                                            borderColor: isFocused1 ? '#00BDA9' : 'transparent',
                                            borderRadius: 10,
                                            padding: '0 10px',
                                        }}
                                        onFocus={handleFocus1}
                                        onBlur={handleBlur1}
                                    />
                                    {!isFocused1 && (
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
                                            Enter your question
                                        </div>
                                    )}
                                </div>
                            <div style={{width: 250, height: 96, left: 470, top: -20, position: 'absolute'}}>
                                <div
                                    style={{
                                        left: 0,
                                        top: -2,
                                        position: 'absolute',
                                        color: 'black',
                                        fontSize: 14,
                                        fontFamily: 'revert',
                                        fontWeight: '600',
                                        wordWrap: 'break-word',
                                    }}
                                >
                                    Labeled on the right
                                </div>
                                <input
                                    style={{
                                        width: 250,
                                        height: 51,
                                        left: 0,
                                        top: 25,
                                        position: 'absolute',
                                        background: 'rgba(17, 17, 17, 0.10)',
                                        borderColor: isFocused3 ? '#00BDA9' : 'transparent',
                                        borderRadius: 10,
                                        padding: '0 10px',
                                    }}
                                    onFocus={handleFocus3}
                                    onBlur={handleBlur3}
                                />
                                {!isFocused3 && (
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
                                        Enter your question
                                    </div>
                                )}
                            </div>
                            <button style={{backgroundColor:"transparent",border:"none",position:"absolute",left:780,top:15,color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word'}}>Preview</button>
                            <div style={{ marginLeft:"10px",position:"absolute",left:850 }}>
                                <EmojiComponentSurvey onEmojiSelect={handleEmojiSelect} selectedEmoji={selectedEmoji} />
                            </div>
                        </div>
                        <div style={{width: 1152, height: 0, left: 64, top: 1060, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                        <div style={{width: 1200, height: 0, left: 64, top: 1220, position: 'absolute', border: '1px #DDDDDD solid'}}></div>

                        <div style={{ textAlign:"left",width:240,background:"white",height:40,padding:10,zIndex: 99999, left: 955, top: 760, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                            <Select
                                options={options}
                                value={options.find(option => option.value === selectedOption?.value)} // Optional chaining here
                                onChange={handleSelectChange}
                                getOptionLabel={option => (
                                    <div>
                                        <img src={process.env.PUBLIC_URL + option.icon} alt={option.label} style={{ width: 24, marginRight: 10 }} />
                                        {option.label}
                                    </div>
                                )}
                                getOptionValue={option => option.value}
                            />
                            <div style={{ left: 18, top: 16, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                                {/*{selectedOption?.label || ''}*/}
                            </div>
                        </div>                        {/*<div style={{ width: 260, height: 51, left: 956, top: 445, position: 'absolute' }}>*/}
                        {/*    <div style={{ width: 260, height: 51, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 10, border: '1px #CCCCCC solid' }}>*/}
                        {/*        <select*/}
                        {/*            style={{ width: '100%', height: '100%', background: 'none', border: 'none', outline: 'none', padding: '0 10px' }}*/}
                        {/*            value={selectedOption}*/}
                        {/*            onChange={handleChange}*/}
                        {/*        >*/}
                        {/*            <option value="">Select Type</option>*/}
                        {/*            <option value="Agree – Disagree">Agree – Disagree</option>*/}
                        {/*            <option value="Satisfied – Disatisfied">Satisfied – Disatisfied</option>*/}
                        {/*            <option value="Yes – No">Yes – No</option>*/}
                        {/*            <option value="A great deal – None at all">A great deal – None at all</option>*/}
                        {/*            <option value="Easy – Difficult">Easy – Difficult</option>*/}
                        {/*            <option value="Approve – Disapprove">Approve – Disapprove</option>*/}
                        {/*            <option value="High quality – Low quality">High quality – Low quality</option>*/}
                        {/*            <option value="Useful - Not useful">Useful - Not useful</option>*/}
                        {/*            <option value="Clear – Not clear">Clear – Not clear</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}
                        {/*    <div style={{ left: 18, top: 16, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>*/}
                        {/*        {selectedOption || ''}*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: 700, height: 32, left: 190, top: 485, position: 'absolute' }}>
                            <label style={{ cursor: 'pointer', position: 'relative', top: -5,width:250 }}>
                                <input type="radio" name="language" value="op1" onChange={() => handleLanguageChange('op1')} checked={selectedLanguage === 'op1'} style={{ display: 'none' }} />
                                <span style={{ textAlign:"left",marginLeft: 5, left: 0, top: -100, position: "absolute", color: selectedLanguage === 'op1' ? '#00BDA9' : 'black' }}>Upload video (Max 100 Mo)</span>
                                <div style={{ width: selectedLanguage === 'op1' ? 20 : 20, height: selectedLanguage === 'op1' ? 20 : 20, position: 'absolute', borderRadius: 55, border: selectedLanguage === 'op1' ? '3px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                            </label>

                            <label style={{ textAlign:"left",cursor: 'pointer', position: 'relative', top: -5,width:200,left:120 }}>
                                <input type="radio" name="language" value="Link youtube" onChange={() => handleLanguageChange('Link youtube')} checked={selectedLanguage === 'Link youtube'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5, left: 0, top: -100, position: "absolute", color: selectedLanguage === 'Link youtube' ? '#00BDA9' : 'black' }}>Link youtube</span>
                                <div style={{ width: selectedLanguage === 'Link youtube' ? 20 : 20, height: selectedLanguage === 'Link youtube' ? 20 : 20, position: 'absolute', borderRadius: 55, border: selectedLanguage === 'Link youtube' ? '3px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                            </label>
                        </div>
                        {!uploadedLink && (
                            <div style={{ width: 380, height: 60, left: 805, top: 405, position: 'absolute' }}>
                                <input
                                    style={{
                                        width: 350,
                                        height: 51,
                                        left: 0,
                                        top: 0,
                                        position: 'absolute',
                                        background: 'rgba(17, 17, 17, 0.10)',
                                        borderRadius: 10,
                                        border: 'none'
                                    }}
                                    value={youtubeLink}
                                    onChange={handleLinkChange}
                                />
                                <div
                                    style={{
                                        left: 16,
                                        top: 15,
                                        position: 'absolute',
                                        color: 'rgba(0, 0, 0, 0.40)',
                                        fontSize: 14,
                                        fontFamily: 'revert',
                                        fontWeight: '400',
                                        wordWrap: 'break-word'
                                    }}
                                >
                                    Enter the link of YouTube
                                </div>
                                <button
                                    style={{
                                        width: 81,
                                        height: 51,
                                        border: 'none',
                                        borderRadius: '10px',
                                        left: 270,
                                        top: 100,
                                        position: 'absolute',
                                        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        display: 'inline-flex'
                                    }}
                                    onClick={handleUpload}
                                >
                                    <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Upload</div>
                                </button>
                            </div>
                        )}

                        {uploadedLink && (
                            <div style={{ marginTop: 20,zIndex:99999,position:"absolute",left:800,top:380,borderRadius:10 }}>
                                <iframe
                                    title="Uploaded Video"
                                    width="420"
                                    height="261"
                                    src={`https://www.youtube.com/embed/${uploadedLink}`}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                                <button
                                    style={{
                                        position:"absolute",
                                        top:-35,
                                        left:370,
                                        marginTop: 10,
                                        backgroundColor: 'transparent',
                                        color: '#00BDA9',
                                        fontWeight:600,
                                        padding: '5px 10px',
                                        border:"none"
                                    }}
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                        {!showConfirmation && !showConfirmation1 &&<div style={{ width:  388, height: 229, left: 400, top: 357, position: 'absolute' }}>
                            <div style={{ width: 420, height: 261,left: -220, top: 45, position: 'absolute', background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20 }} >
                            {/*<div style={{width: 200, left: 0, top: -20, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert',textAlign:"left", fontWeight: '600', wordWrap: 'break-word'}}>Upload video (Max 100 Mo)</div>*/}
                            <div style={{width: 120, left: 300, top: -20, position: 'absolute', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>.mp4 .mov .avi</div>
                            <div style={{ width: 388, height: 229, borderRadius: 20, border: '2px #CCCCCC dotted', marginTop: 20, textAlign: 'center', position: 'relative',left:13,top:-5 }}>
                                <input type="file" style={{ display: 'none' }} onChange={handleFileChange} multiple />
                                <img src={process.env.PUBLIC_URL + '/upload.png'} alt="Upload Icon" style={{ width: 60, height: 60, marginTop: 50, cursor: 'pointer' }} onClick={() => document.querySelector('input[type="file"]').click()} />
                                <div style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>Select files to upload</div>
                                <div style={{ color: '#666666', fontSize: 12, fontWeight: '400', marginTop: 5 }}>or Drag and Drop, Copy and Paste Files</div>
                            </div>
                            <div style={{ display: 'flex',left: 100, top: -150, position: 'relative', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                                {selectedFiles.map((file, index) => (
                                    <div key={index} style={{ margin: 10 }}>
                                        <img src={URL.createObjectURL(file)} alt={`File ${index}`} style={{ width: 150, height: 110, objectFit: 'cover', borderRadius: 10 }} />
                                        <p style={{ textAlign: 'center', marginTop: 5 }}>{file.name}</p>
                                    </div>
                                ))}
                            </div>
                            </div>
                        </div>}
                        <div style={{ width: 868, height: 96, left: 64, top:737, position: 'absolute' }}>
                            <div
                                style={{
                                    left: 0,
                                    top: -2,
                                    position: 'absolute',
                                    color: 'black',
                                    fontSize: 14,
                                    fontFamily: 'revert',
                                    fontWeight: '600',
                                    wordWrap: 'break-word',
                                }}
                            >
                                Question
                            </div>
                            <input
                                style={{
                                    width: 840,
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
                                    Enter your question
                                </div>
                            )}
                        </div>
                        <div style={{ width: 868, height: 96, left: 64, top: 825, position: 'absolute' }}>
                            <div
                                style={{
                                    left: 0,
                                    top: -2,
                                    position: 'absolute',
                                    color: 'black',
                                    fontSize: 14,
                                    fontFamily: 'revert',
                                    fontWeight: '600',
                                    wordWrap: 'break-word',
                                }}
                            >
                                Question
                            </div>
                            <input
                                style={{
                                    width: 840,
                                    height: 51,
                                    left: 0,
                                    top: 25,
                                    position: 'absolute',
                                    background: 'rgba(17, 17, 17, 0.10)',
                                    borderColor: isFocused2 ? '#00BDA9' : 'transparent',
                                    borderRadius: 10,
                                    padding: '0 10px',
                                }}
                                onFocus={handleFocus2}
                                onBlur={handleBlur2}
                            />
                            {!isFocused2 && (
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
                                    Enter your question
                                </div>
                            )}
                        </div>

                            <div style={{padding: 8, left: 963, top: 1010, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                                <div style={{width: 32, height: 32, position: 'relative'}}>
                                    <img src={process.env.PUBLIC_URL + '/add.png'} style={{width: 28.44, height: 28.44, left: 8, top: 4, position: 'absolute'}}></img>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/poubelle.png'} style={{width: 28.44, height: 32, position: 'relative'}}>
                                </img>
                                <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                                    <div style={{color: '#111111', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Mandatory</div>

                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8,
                                            position: 'absolute',
                                            left: 167,
                                            top: 15,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 30,
                                                height: 15,
                                                position: 'relative',
                                                borderRadius: 30,
                                                background: isChecked1 ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : '#ccc',
                                                cursor: 'pointer',
                                            }}
                                            onClick={handleToggle1}
                                        >
                                            <div
                                                style={{
                                                    width: 16,
                                                    height: 16,
                                                    position: 'absolute',
                                                    left: isChecked1 ? 20 : 0,
                                                    top: 0,
                                                    borderRadius: '50%',
                                                    background: 'white',
                                                    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                                    transition: 'left 0.3s ease-in-out',
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        style={{
                                            width: 24,
                                            height: 24,
                                            position: 'relative',
                                            top: 7,
                                            left: 30,
                                            cursor: 'pointer',
                                        }}
                                        onClick={toggleDropdown}
                                    >
                                        <img
                                            src={process.env.PUBLIC_URL + '/pt.png'}
                                            style={{
                                                width: 24,
                                                height: 24,
                                                left: 5,
                                                top: -8,
                                                position: 'absolute',
                                                background: 'rgba(0, 0, 0, 0.08)',
                                                borderRadius: 9999,
                                            }}
                                            alt="Dropdown Toggle"
                                        />
                                    </div>

                                    {showDropdown && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 35,
                                                left: -60,
                                                background: '#fff',
                                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                                borderRadius: 5,
                                                padding: '5px 10px',
                                                width: 280,
                                                zIndex: 10,
                                                textAlign: 'left',
                                            }}
                                        >
                                            <button
                                                style={{
                                                    marginBottom: 5,
                                                    borderRadius:10,
                                                    padding:18,
                                                    paddingLeft:25,
                                                    textAlign:"left",
                                                    backgroundColor: selectedOption2 === 'description' ? 'lightgray' : 'transparent',
                                                    border: 'none',
                                                }}
                                                onClick={() => handleOptionClick2('description')}
                                            >
                                                Add a description
                                                {selectedOption2 === 'description' && <span style={{position:"absolute",left:15,top:10,fontSize:24,marginRight:10}}>&#10003;</span>}
                                            </button>
                                            <button
                                                style={{
                                                    marginBottom: 10,
                                                    borderRadius:10,
                                                    padding:18,
                                                    paddingLeft:25,
                                                    textAlign:"left",
                                                    backgroundColor: selectedOption2 === 'access' ? 'lightgray' : 'transparent',
                                                    border: 'none',
                                                }}
                                                onClick={() => handleOptionClick2('access')}
                                            >
                                                Access a section based on the answer
                                                {selectedOption2 === 'access' && <span style={{position:"absolute",left:15,top:65,fontSize:24,marginRight:10}}>&#10003;</span>}
                                            </button>
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div>
                                <div
                                    style={{
                                        width: 24,
                                        height: 24,
                                        position: 'relative',
                                        top: 7,
                                        cursor: 'pointer', // Add cursor pointer to indicate it's clickable
                                    }}
                                    onClick={toggleDropdown}
                                >
                                    <img
                                        src={process.env.PUBLIC_URL + '/pt.png'}
                                        style={{
                                            width: 24,
                                            height: 24,
                                            left: -8,
                                            top: -8,
                                            position: 'absolute',
                                            background: 'rgba(0, 0, 0, 0.08)',
                                            borderRadius: 9999,
                                        }}
                                        alt="Dropdown Toggle"
                                    />
                                </div>

                                {showDropdown && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 35, // Adjust the positioning as needed
                                            left: 0,
                                            background: '#fff',
                                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                            borderRadius: 5,
                                            padding: '8px 12px',
                                            zIndex: 10,
                                            textAlign:"left"
                                        }}
                                    >
                                        <div>Add a description</div>
                                        <div>Access a section based on the answer</div>
                                    </div>
                                )}
                            </div>

                        <div style={{width: 204, padding: 16, left: 40, top: 1150, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>New question</div>
                        </div>
                        <div style={{width: 16, height: 16, padding: 1.33, left: 71, top: 1105, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <FaPlus style={{width: 13.33, height: 13.33, position: 'relative',color:"white"}}>
                            </FaPlus>
                        </div>

                        <div style={{width: 1152, height: 36, left: 64, top: 286, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                                <button
                                    style={{
                                        padding: 8,
                                        background:
                                            selectedLanguage1 === 'fr'
                                                ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'
                                                : 'white',
                                        color: selectedLanguage1 === 'fr' ? 'white' : '#111111',
                                        borderRadius: 4,
                                        border: '1px #999999 solid',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 10,
                                        display: 'inline-flex',
                                    }}
                                    onClick={() => handleLanguageChange1('fr')}
                                >
                                    <div style={{ fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Français</div>
                                </button>
                                <button
                                    style={{
                                        padding: 8,
                                        background:
                                            selectedLanguage1 === 'ar'
                                                ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'
                                                : 'white',
                                        color: selectedLanguage1 === 'ar' ? 'white' : '#111111',
                                        borderRadius: 4,
                                        border: '1px #999999 solid',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 10,
                                        display: 'inline-flex',
                                    }}
                                    onClick={() => handleLanguageChange1('ar')}
                                >
                                    <div style={{ fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Arabe Tunisien</div>
                                </button>
                            </div>
                            <div style={{justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex'}}>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                    <div style={{width: 32, height: 32, position: 'relative'}}>
                                        <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                                    </div>
                                    <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Text</div>
                                </div>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                    <div style={{width: 32, height: 32, position: 'relative'}}>
                                        <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 50}} />
                                        <div style={{width: 16, height: 16, left: 8, top: 8, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                                    </div>
                                    <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Image</div>
                                </div>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                    <div style={{width: 32, height: 32, position: 'relative'}}>
                                        <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                                    </div>
                                    <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Video</div>
                                </div>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                    <div style={{width: 32, height: 32, position: 'relative'}}>
                                        <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                                    </div>
                                    <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Sound</div>
                                </div>
                            </div>
                            <div style={{width: 105, height: 36, paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'flex'}}>
                                <div style={{width: 24, height: 24, paddingLeft: 2.39, paddingRight: 2.39, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <FaEye style={{width: 19.23, height: 14, position: 'relative'}}>
                                    </FaEye>
                                </div>
                                <div style={{flex: '1 1 0', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Preview</div>
                            </div>

                        </div>

                        <div style={{width: 24, height: 24, left: 628, top: 257, position: 'absolute'}}>
                            <div style={{width: 16, height: 6, left: 4, top: 9, position: 'absolute', background: 'rgba(0, 0, 0, 0.30)'}}></div>
                        </div>
                        <button style={{border:"2px solid black",backgroundColor:"white",position:"absolute",top:1235,left:40,width: 147, height: 51, padding: 16, background: '#DDDDDD', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                        </button>
                        <button style={{border:"none",position:"absolute",top:1235,right:100,width: 147, height: 51, padding: 16, background: '#DDDDDD', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Next</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSurveySTEP7;
