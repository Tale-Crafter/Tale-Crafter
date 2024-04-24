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
import Select from "react-select";
const opencage = require('opencage-api-client');


const CreateSurveySTEP3 = () => {
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
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    const handleToggle = () => {
        setIsChecked((prevState) => !prevState);
    };
    const handleToggle1 = () => {
        setIsChecked1((prevState) => !prevState);
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
    const handleOptionClick2 = (option2) => {
        setSelectedOption2(option2);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
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

    const handleSelectChange = (selectedOption1) => {
        setSelectedOption1(selectedOption1);
    };

    return (
        <div className="App">
            <div style={{filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
            <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} style={{filter: showConfirmation || showConfirmation1 ?  'blur(5px)' : 'none'}} />
            </div>
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BHeader/>
                <div style={{width: 1400, height: 1560, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
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
                        <div style={{width: 1200, height: 423, left: 40, top: 249, position: 'absolute', background: '#F5F5F5', borderRadius: 10}} />
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                position: 'absolute',
                                left: 67,
                                top: 461,
                            }}
                        >
                            <div style={{ color: '#111111', fontSize: 14, fontFamily: 'Inter', fontWeight: '400' }}>
                                Generate responses
                            </div>
                            <div
                                style={{
                                    width: 30,
                                    height: 15,
                                    position: 'relative',
                                    borderRadius: 30,
                                    background: isChecked ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : '#ccc',
                                    cursor: 'pointer',
                                }}
                                onClick={handleToggle}
                            >
                                <div
                                    style={{
                                        width: 16,
                                        height: 16,
                                        position: 'absolute',
                                        left: isChecked ? 20 : 0,
                                        top: 0,
                                        borderRadius: '50%',
                                        background: 'white',
                                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                        transition: 'left 0.3s ease-in-out',
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{width: 1152, height: 0, left: 64, top: 504, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                        <div style={{width: 1152, height: 0, left: 64, top: 437, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                        <div style={{width: 1152, height: 0, left: 64, top: 1555, position: 'absolute', border: '1px #DDDDDD solid'}}></div>


                        <div style={{width: 400, height: 32, left: -40, top: 615, position: 'absolute'}}>
                                <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block',top:-5 }}>
                                    <input type="checkbox" name="language" value="op1" onChange={() => handleLanguageChange('op1')} checked={selectedLanguage === 'op1'} style={{ display: 'none' }} />
                                    <span style={{ marginLeft: 5,left:0,top:-100,position:"absolute", color: selectedLanguage === 'op1' ? '#00BDA9' : 'black' }}>Option 1</span>
                                    <div style={{ width: selectedLanguage === 'op1' ? 20 : 20, height: selectedLanguage === 'op1' ? 20 : 20, position: 'absolute', borderRadius: 5, border: selectedLanguage === 'op1' ? '3px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                                </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block',top:30 }}>
                                <input type="checkbox" name="language" value="op2" onChange={() => handleLanguageChange('op2')} checked={selectedLanguage === 'op2'} style={{ display: 'none' }} />
                                <span style={{ marginLeft: 5,left:0,top:-100,position:"absolute", color: selectedLanguage === 'op2' ? '#00BDA9' : 'black' }}>Option 2</span>
                                <div style={{ width: selectedLanguage === 'op2' ? 20 : 20, height: selectedLanguage === 'op2' ? 20 : 20, position: 'absolute', borderRadius: 5, border: selectedLanguage === 'op2' ? '3px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                            </label>
                            <label style={{ margin: '0 150px', position: 'relative', cursor: 'pointer', display: 'block',top:25 }}>
                                <input type="checkbox" name="language" value="Similar, equal" onChange={() => handleLanguageChange('Similar, equal')} checked={selectedLanguage === 'Similar, equal'} style={{ display: 'none' }} />
                                <div style={{ width: selectedLanguage === 'Similar, equal' ? 20 : 20, height: selectedLanguage === 'Similar, equal' ? 20 : 20, position: 'absolute', borderRadius: 5, border: selectedLanguage === 'Similar, equal' ? '3px solid #00BDA9' : '3px solid #CCCCCC', top: -50, left: -40 }} />
                            </label>
                        </div>
                        <div style={{left: 104, top: 597, position: 'absolute'}}><span style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Add an option or </span><span style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>add "other"</span></div>
                        <div style={{ textAlign:"left",width:240,background:"white",height:40,padding:10,zIndex: 99999, left: 955, top: 367, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
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
                        </div>
                        {/*<div style={{ width: 260, height: 51, left: 956, top: 445, position: 'absolute' }}>*/}
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

                        <div style={{ width: 868, height: 96, left: 64, top: 341, position: 'absolute' }}>
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

                        <div style={{width: 127, height: 19.19, left: 805, top: 341, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>+Add a description</div>
                        <div style={{width: 1152, height: 0, left: 64, top: 622, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                        <div style={{padding: 8, left: 963, top: 616, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
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
                        <div style={{width: 16, height: 16, padding: 1.33, left: 71, top: 705, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <FaPlus style={{width: 13.33, height: 13.33, position: 'relative',color:"white"}}>
                            </FaPlus>
                        </div>

                        <div style={{width: 1152, height: 36, left: 64, top: 286, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                                <button
                                    style={{
                                        padding: 8,
                                        background:
                                            selectedLanguage === 'fr'
                                                ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'
                                                : 'white',
                                        color: selectedLanguage === 'fr' ? 'white' : '#111111',
                                        borderRadius: 4,
                                        border: '1px #999999 solid',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 10,
                                        display: 'inline-flex',
                                    }}
                                    onClick={() => handleLanguageChange('fr')}
                                >
                                    <div style={{ fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Français</div>
                                </button>
                                <button
                                    style={{
                                        padding: 8,
                                        background:
                                            selectedLanguage === 'ar'
                                                ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'
                                                : 'white',
                                        color: selectedLanguage === 'ar' ? 'white' : '#111111',
                                        borderRadius: 4,
                                        border: '1px #999999 solid',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: 10,
                                        display: 'inline-flex',
                                    }}
                                    onClick={() => handleLanguageChange('ar')}
                                >
                                    <div style={{ fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Arabe Tunisien</div>
                                </button>
                            </div>
                            <div style={{justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex'}}>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                    <div style={{width: 32, height: 32, position: 'relative'}}>
                                        <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 50}} />
                                        <div style={{width: 16, height: 16, left: 8, top: 8, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                                    </div>
                                    <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Text</div>
                                </div>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
                                    <div style={{width: 32, height: 32, position: 'relative'}}>
                                        <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
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
                    </div>
                    <div style={{position:"relative",top:450}}>
                        <CreateSurveyImage></CreateSurveyImage>
                    </div>
                    <button style={{border:"2px solid black",backgroundColor:"transparent",position:"absolute",top:1490,left:40,width: 147, height: 51, padding: 16, borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </button>
                    <button style={{border:"none",position:"absolute",top:1490,right:150,width: 147, height: 51, padding: 16, background: '#DDDDDD', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Next</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateSurveySTEP3;
