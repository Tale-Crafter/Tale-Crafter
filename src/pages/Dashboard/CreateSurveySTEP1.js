// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';

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


const CreateSurveySTEP1 = () => {
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
                <div style={{width: 1400, height: 950, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Intégrez le formulaire de contact ici */}
                    <div style={{position:"relative",top:-80}}>
                        <div style={{left: 40, top: 105, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Creating a new survey</div>
                        <div style={{left: 190, top: 193, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Survey Initiation</div>
                        <div style={{width: 157, left: 365, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Question<br/>Development</div>
                        <div style={{width: 160, left: 540, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
                        <div style={{width: 160, left: 715, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Review and Preview</div>
                        <div style={{width: 156, left: 890, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Survey Validation</div>
                        <div style={{width: 149, left: 1067, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
                        <div style={{width: 24, height: 24, left: 190, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                            <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 24, height: 24, left: 365, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
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
                        <div style={{width: 143, height: 0, left: 361, top: 171, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>

                        <div style={{width: 586, height: 96, left: 40, top: 359, position: 'absolute'}}>
                            <label>
                                <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Survey Title</div>
                                <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} style={{ border: 0, width: 570, height: 31, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }} />
                                <div style={{left: 15, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>{formData.nom === '' && predefinedMessages.nom}</div>
                            </label>
                        </div>

                        <div style={{width: 586, height: 96, left: 40, top: 744, position: 'absolute'}}>
                                <label>
                                    <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Brand</div>
                                    <select name="Sub-Brand" value={formData.category} onChange={handleInputChange} style={{ border: 0, width: 590, height: 51, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px'  }}>
                                        <option value="Deal">-Select-</option>
                                        <option value="interesting insights">Interesting Insights</option>
                                        <option value="Reclamation">Reclamation</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                      </div>
                        <div style={{width: 586, height: 150, left: 40, top: 455, position: 'absolute'}}>
                            <label>
                                <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Survey category</div>
                                <select name="sujet" value={formData.category} onChange={handleInputChange} style={{ border: 0, width: 590, height: 51, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px'  }}>
                                    <option value="Select">-Select-</option>
                                    <option value="interesting insights">Interesting Insights</option>
                                    <option value="Reclamation">Reclamation</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                        </div>
                        <textarea style={{background: 'rgba(17, 17, 17, 0.10)',position:"relative",top:744,left:255,width: 560, height: 170, outline: 'none', resize: 'none', padding: '8px', fontFamily:"revert", fontSize:14,borderRadius: 16, border: '1.5px #CCCCCC solid'}} placeholder="Desciption" value={textareaContent} onChange={handleTextareaChange} />
                        <div
                            style={{
                                position:"absolute",
                                top:935,
                                left:1200,
                                color: 'rgba(0, 0, 0, 0.30)',
                                fontSize: 12,
                                fontFamily: 'revert',
                                fontWeight: '600',
                                lineHeight: 1,
                                wordWrap: 'break-word',
                            }}
                        >
                            {charCount}/1000
                        </div>
                        <div style={{width: 586, height: 96, left: 40, top: 840, position: 'absolute'}}>
                            <label>
                                <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Product / Offers</div>
                                <select name="Product" value={formData.category} onChange={handleInputChange} style={{ border: 0, width: 590, height: 51, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px'  }}>
                                    <option value="Select">-Select-</option>
                                    <option value="P1">P1</option>
                                    <option value="P2">P2</option>
                                    <option value="P3">P3</option>
                                </select>
                            </label>
                        </div>
                        {!showConfirmation && !showConfirmation1 && <div style={{ width:  588, height: 366, left: 652, top: 357, position: 'absolute' }}>
                            <div style={{ width: 588, height: 339,left: 0, top: 27, position: 'absolute', background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20 }} />
                            <div style={{width: 172, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Cover photo of the survey</div>
                            <div style={{width: 120, left: 458, top: 0, position: 'absolute', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>JPG,PNG,JPEG</div>
                            <div style={{ width: 556, height: 307, borderRadius: 20, border: '2px #CCCCCC dotted', marginTop: 20, textAlign: 'center', position: 'relative',left:13,top:20 }}>
                                <input type="file" style={{ display: 'none' }} onChange={handleFileChange} multiple />
                                <img src={process.env.PUBLIC_URL + '/upload.png'} alt="Upload Icon" style={{ width: 60, height: 60, marginTop: 50, cursor: 'pointer' }} onClick={() => document.querySelector('input[type="file"]').click()} />
                                <div style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>Select files to upload</div>
                                <div style={{ color: '#666666', fontSize: 12, fontWeight: '400', marginTop: 5 }}>or Drag and Drop, Copy and Paste Files</div>
                            </div>
                            <div style={{ display: 'flex',left: 0, top: -150, position: 'relative', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                                {selectedFiles.map((file, index) => (
                                    <div key={index} style={{ margin: 10 }}>
                                        <img src={URL.createObjectURL(file)} alt={`File ${index}`} style={{ width: 150, height: 110, objectFit: 'cover', borderRadius: 10 }} />
                                        <p style={{ textAlign: 'center', marginTop: 5 }}>{file.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>}


                        <button onClick={handleNext} style={{background:"transparent",border:"none",width: 100, height: 17.45, left: 545, top: 744, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>+ Add new</button>
                        <button onClick={handleNext1} style={{background:"transparent",border:"none",width: 100, height: 17.45, left: 545, top: 839, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>+ Add new</button>

                        <div style={{ position: 'absolute', left: 30, top: 292 }}>
                            {Array.from(Array(3).keys()).map(index => (
                                <label key={index} style={{ margin: '0 10px', marginBottom: '20px', position: 'relative', cursor: 'pointer', display: 'inline-block' }}>
                                    <input type="checkbox" onChange={() => handleCheckboxChange1(index)} checked={checkboxValues1[index]} style={{ display: 'none' }} />
                                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                        <div style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 8, border: '3px #CCCCCC solid' }}>
                                            {checkboxValues1[index] && (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#00BDA9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:34,height:34, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <span style={{ position:"relative",top:8,marginLeft: 40, color: checkboxValues1[index] ? '#00BDA9' : 'black' }}>Option {index + 1}</span>
                                </label>
                            ))}
                        </div>

                        {/*<div style={{left: 80, top: 298, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>English</div>*/}
                        {/*<div style={{left: 193, top: 298, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>French</div>*/}
                        {/*<div style={{left: 296, top: 298, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Arabic Tounsi</div>*/}
                        <div style={{left: 41, top: 257, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Language(s) in which the survey will be conducted?</div>
                        <div style={{left: 40, top: 551, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Advanced settings</div>
                        {/* Checkboxes */}
                        <div style={{ position: 'absolute', left: 30, top: 585 }}>
                            {Array.from(Array(2).keys()).map(index => (
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
                                    <span style={{ position:"relative",top:8,marginLeft: 40, color: checkboxValues[index] ? '#00BDA9' : 'black' }}>Option {index + 1}</span>
                                </label>
                            ))}
                        </div>

                        <div style={{left: 40, top: 706, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Brands info</div>
                        <div style={{width: 140, height: 30, padding: 16, left: 1075, top: 960, position: 'absolute', background: '#DDDDDD', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Next</div>
                        </div>
                        <div style={{width: 583, height: 0, left: 624, top: 690, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                    </div>
                </div>
            </div>
            {showConfirmation && <SubBrandPopup onClose={handleCloseConfirmation} onValidate={handleValidateConfirmation} />}
            {showConfirmation1 && <ProductOffers onClose={handleCloseConfirmation1} onValidate={handleValidateConfirmation1} />}

        </div>
    );
};

export default CreateSurveySTEP1;
