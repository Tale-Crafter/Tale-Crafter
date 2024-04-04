// ConfirmationPopup.js

import React, { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";

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
        // Redirect to /Surveys/:iduser
        navigate(`/createsurvey/${iduser}`);
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
        <div style={{width:452,height:663, position: 'fixed', top: '60%', left: '86%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: 20, borderRadius: 8, boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: 999 }}>
            {/*<button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 20, top: 13, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>*/}
            {/*    <div style={{ width: 32, height: 32, position: 'relative' ,left:400}}>*/}
            {/*        <img src={process.env.PUBLIC_URL + '/xit.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />*/}
            {/*    </div>*/}
            {/*</button>*/}

            <div style={{ width: 420, height: 288, left: 16, top: 77, position: 'absolute' }}>
                <div style={{ width: 420, height: 261,left: 0, top: 27, position: 'absolute', background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20 }} />
                <div style={{width: 189, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Upload logo (Optional)</div>
                <div style={{width: 120, left: 300, top: 0, position: 'absolute', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>JPG,PNG,JPEG</div>
                <div style={{ width: 388, height: 229, borderRadius: 20, border: '2px #CCCCCC dotted', marginTop: 20, textAlign: 'center', position: 'relative',left:13,top:20 }}>
                    <input type="file" style={{ display: 'none' }} onChange={handleFileChange1} multiple />
                    <img src={process.env.PUBLIC_URL + '/upload.png'} alt="Upload Icon" style={{ width: 60, height: 60, marginTop: 5, cursor: 'pointer' }} onClick={() => document.querySelector('input[type="file"]').click()} />
                    <div style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>Select files to upload</div>
                    <div style={{ color: '#666666', fontSize: 12, fontWeight: '400', marginTop: 5 }}>or Drag and Drop, Copy and Paste Files</div>
                </div>
                <div style={{ display: 'flex',left: 0, top: -110, position: 'relative', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                    {selectedFiles1.map((file1, index) => (
                        <div key={index} style={{ margin: 10 }}>
                            <img src={URL.createObjectURL(file1)} alt={`File ${index}`} style={{ width: 100, height: 70, objectFit: 'cover', borderRadius: 10 }} />
                            <p style={{ textAlign: 'center', marginTop: 5 }}>{file1.name}</p>
                        </div>
                    ))}
                </div>
            </div>
                <div style={{left: 16, top: -200, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>Add new brand</div>


            <div style={{width: 420, height: 96, left: 17, top: 380, position: 'absolute'}}>
                <label>
                    <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Brand Name</div>
                    <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} style={{ border: 0, width: 420, height: 31, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }} />
                    <div style={{left: 15, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>{formData.nom === '' && predefinedMessages.nom}</div>
                </label>
            </div>
            <div style={{width: 420, height: 96, left: 17, top: 485, position: 'absolute'}}>
                <label>
                    <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Description (optional)</div>
                    <input type="text" name="description" value={formData.description} onChange={handleInputChange} style={{ border: 0, width: 420, height: 31, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }} />
                    <div style={{left: 15, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>{formData.description === '' && predefinedMessages.description}</div>
                </label>
            </div>

                <button style={{width: 147, height: 50, padding: 16, left: 310, top: 597, position: 'absolute', background: '#DDDDDD', borderRadius: 10, justifyContent: 'center',border:"none", alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#666666', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Submit</div>
                </button>
                <button  onClick={handleBackClick} style={{width: 147, height: 50, padding: 16, left: 16, top: 597, position: 'absolute', borderRadius: 10, border: '1px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Cancel</div>
                </button>
        </div>
    );
};

export default ConfirmationPopup;
