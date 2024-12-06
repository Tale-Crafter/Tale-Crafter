// ConfirmationPopup.js

import React, { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {FaAngleRight, FaMinus, FaPlus} from "react-icons/fa";

const ConfirmationPopup = ({ onClose, onValidate }) => {
    const [agreed, setAgreed] = useState(false);
    const { iduser } = useParams();
    const navigate = useNavigate();
    const [selectedFiles1, setSelectedFiles1] = useState([]);

    const handleSubmit = () => {
        // Handle submitting files (e.g., send them to a server)
        if (selectedFiles1) {
            console.log('Selected Files:', selectedFiles1);
            // Here you can perform actions like uploading files to a server
        } else {
            console.log('No files selected.');
        }
    };

    const handleFileChange1 = (event1) => {
        const files1 = event1.target.files;
        const selectedFilesArray1 = Array.from(files1);
        setSelectedFiles1(selectedFilesArray1);
        // Automatically submit files here or trigger an upload function
        // For demonstration, I'm logging the selected files to the console
        console.log('Selected Files:', selectedFilesArray1);
    };
    const handleCheckboxChange = () => {
        setAgreed(!agreed);
    };

    const handleValidate = () => {
        if (agreed) {
            onValidate();
        } else {
            alert("Please agree to respond honestly and accurately.");
        }
    };
    const handleBackClick = () => {
        // Call onClose to hide the popup
        onClose();
        // Redirect to /Surveys
        navigate(`/order`);
    };
    const [formData, setFormData] = useState({
        nom: '',
        category: '-Select-',
        SubBrand: '-Select-',
        Product: '-Select-',
        description: ''
    });
    const predefinedMessages = {
        nom: 'Enter your First Name',
        prenom: 'Enter your Last Name',
        email: 'Enter your email address',
        numero: 'Enter your Number',
        sujet: '', // No predefined message for the subject
        description: 'Enter your description', // No predefined message for the description
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

    return (
        <div style={{width:5,height:663, position: 'fixed', top: '55%', left: '74%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: 20, borderRadius: 8, boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: 999 }}>
            {/*<button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 20, top: 13, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>*/}
            {/*    <div style={{ width: 32, height: 32, position: 'relative' ,left:400}}>*/}
            {/*        <img src={process.env.PUBLIC_URL + '/xit.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />*/}
            {/*    </div>*/}
            {/*</button>*/}
            <div style={{width: 500, height: 763, left: 0, top: -25, position: 'absolute', background: 'white', borderRadius: 10}} >
                <div style={{left: 30, top: 25, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Add targeting criteria</div>
                <div style={{left:30, top: 58, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Choose a Category</div>

                <div style={{width: 421, height : 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 100, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, padding: 2, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 20, height: 20, position: 'relative'}}>
                                <img src={process.env.PUBLIC_URL + '/country.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Country</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <FaPlus  />
                    </div>
                </div>
                <div style={{width: 421, height : 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 240, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <img src={process.env.PUBLIC_URL + '/gender.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Age range</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <FaPlus  />
                    </div>
                </div>
                <div style={{width: 421, height : 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 310, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <img src={process.env.PUBLIC_URL + '/household.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Household Income</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <FaMinus  />
                    </div>
                </div>
                <div style={{width: 421, height : 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 380, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <img src={process.env.PUBLIC_URL + '/marital.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Marital Status</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <FaMinus  />
                    </div>
                </div>
                <div style={{width: 421, height : 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 170, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <img src={process.env.PUBLIC_URL + '/age.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Gender</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <FaPlus  />
                    </div>
                </div>
                <div style={{width: 421, height : 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 450, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <img src={process.env.PUBLIC_URL + '/Edu.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Education</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <FaPlus  />
                    </div>
                </div>
                <div style={{width: 421, height : 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 525, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <img src={process.env.PUBLIC_URL + '/cc.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Credit Cards Owned</div>
                            </div>
                        </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                            <FaPlus  />
                        </div>
                </div>
                <div style={{width: 421, height : 45, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 600, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <img src={process.env.PUBLIC_URL + '/ca.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Current Auto Insurance</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <FaPlus  />
                    </div>
                </div>
            </div>
                <button style={{width: 147, height: 50, padding: 16, left: 340, top: 655, position: 'absolute', background: '#DDDDDD', borderRadius: 10, justifyContent: 'center',border:"none", alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Submit</div>
                </button>
                <button  onClick={handleBackClick} style={{width: 147, height: 50, padding: 16, left: 33, top: 655, position: 'absolute', borderRadius: 10, border: '1px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Cancel</div>
                </button>
        </div>
    );
};

export default ConfirmationPopup;
