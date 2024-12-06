// ConfirmationPopup.js

import React, { useState, useRef } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { CreateCompany } from './Api'; // Import CreateCompany from your api.js

const ConfirmationPopup = ({ onClose, onValidate }) => {
    const [agreed, setAgreed] = useState(false);
    const { iduser } = useParams();
    const navigate = useNavigate();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        companyName: '',
        industry: '',
        revenue: '',
        numberOfEmployees: '',
        address: '',
        website: '',
        logo: ''
    });

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCheckboxChange = () => {
        setAgreed(!agreed);
    };


    const handleValidate = async () => {
        const logoFile = selectedFiles[0];
        if (logoFile) {
            formData.logo = logoFile.name;
        }

        if (formData.companyName && formData.industry) {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            try {
                await CreateCompany(formDataToSend);
                onValidate();
                onClose();
            } catch (error) {
                console.error('Error creating company:', error.message);
            }
        } else {
            alert("Please fill out all required fields.");
        }
    };


    const handleBackClick = () => {
        // Call onClose to hide the popup
        onClose();
        // Redirect to /Surveys
        navigate(`/createsurvey`);
    };

    const predefinedMessages = {
        companyName: 'Enter your brand name', // Updated to match the field
    };

    return (
        <div style={{
            width: 452, height: 760, position: 'fixed', top: '60%', left: '86%',
            transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: 20,
            borderRadius: 8, boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: 999
        }}>
            <div style={{ width: 420, height: 288, left: 16, top: 40, position: 'absolute' }}>
                {/* Upload logo section */}
                <div style={{ width: 420, height: 261, left: 0, top: 27, position: 'absolute', background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20 }} />
                <div style={{ width: 189, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Upload logo (Optional)</div>
                <div style={{ width: 120, left: 300, top: 0, position: 'absolute', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>JPG,PNG,JPEG</div>
                <div style={{
                    width: 388, height: 229, borderRadius: 20, border: '2px #CCCCCC dotted',
                    marginTop: 20, textAlign: 'center', position: 'relative', left: 13, top: 20
                }}>
                    <input type="file"
                           ref={fileInputRef}
                           style={{ display: 'none' }}
                           onChange={handleFileChange}
                    />
                    <img src={process.env.PUBLIC_URL + '/upload.png'} alt="Upload Icon" style={{ width: 60, height: 60, marginTop: 5, cursor: 'pointer' }} onClick={() => document.querySelector('input[type="file"]').click()} />
                    <div style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>Select files to upload</div>
                    <div style={{ color: '#666666', fontSize: 12, fontWeight: '400', marginTop: 5 }}>or Drag and Drop, Copy and Paste Files</div>
                </div>
                <div style={{ display: 'flex', left: 0, top: -110, position: 'relative', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                    {selectedFiles.map((file1, index) => (
                        <div key={index} style={{ margin: 10 }}>
                            <img src={URL.createObjectURL(file1)} alt={`File ${index}`} style={{ width: 100, height: 70, objectFit: 'cover', borderRadius: 10 }} />
                            <p style={{ textAlign: 'center', marginTop: 5 }}>{file1.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ left: 16, top: -215, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word' }}>Add new brand</div>

            <div style={{ width: 420, height: 96, left: 17, top: 335, position: 'absolute' }}>
                <label>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Brand Name</div>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} style={{ border: 0, width: 420, height: 31, left: 0, top: 20, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '5px' }} />
                    <div style={{ left: 15, top: 31, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>{formData.companyName === '' && predefinedMessages.companyName}</div>
                </label>
            </div>
            {/* Industry */}
            <label style={{ width: 420, height: 96, left: 17, top: 420, position: 'absolute' }}>
                <div style={{ left: 0, top: -20, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'  }}>Industry</div>
                <select name="industry" value={formData.industry} onChange={handleInputChange}
                        style={{ border: 0, width: 430, height: 41, background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px', marginBottom: 20 }}>
                    <option value="">Select an industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    {/* Add other options as needed */}
                </select>
            </label>

            {/* Revenue */}
            <label style={{ width: 420, height: 96, left: 17, top: 480, position: 'absolute' }}>
                <div style={{ left: 0, top: -20, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'  }}>Revenue</div>
                <input type="number" name="revenue" value={formData.revenue} onChange={handleInputChange}
                       style={{ border: 0, width: '100%', height: 31, background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '5px', marginBottom: 20 }} />
            </label>

            {/* Number of Employees */}
            <label style={{ width: 420, height: 96, left: 17, top: 540, position: 'absolute' }}>
                <div style={{ left: 0, top: -20, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'  }}>Number of Employees</div>
                <input type="number" name="numberOfEmployees" value={formData.numberOfEmployees} onChange={handleInputChange}
                       style={{ border: 0, width: '100%', height: 31, background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '5px', marginBottom: 20 }} />
            </label>

            {/* Address */}
            <label style={{ width: 420, height: 96, left: 17, top: 600, position: 'absolute' }}>
                <div style={{ left: 0, top: -20, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'  }}>Address</div>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange}
                       style={{ border: 0, width: '100%', height: 31, background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '5px', marginBottom: 20 }} />
            </label>

            {/* Website */}
            <label style={{ width: 420, height: 96, left: 17, top: 660, position: 'absolute' }}>
                <div style={{ left: 0, top: -20, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'  }}>Website</div>
                <input type="url" name="website" value={formData.website} onChange={handleInputChange}
                       style={{ border: 0, width: '100%', height: 31, background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '5px', marginBottom: 20 }} />
            </label>
            <button onClick={handleValidate} style={{
                width: 147, height: 50, padding: 16, left: 300, top: 710, position: 'absolute',
                background: '#DDDDDD', borderRadius: 10, justifyContent: 'center', border: "none",
                alignItems: 'center', display: 'inline-flex'
            }}>
                <div style={{ color: '#666666', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Submit</div>
            </button>
            <button onClick={handleBackClick} style={{
                width: 147, height: 50, padding: 16, left: 16, top: 710, position: 'absolute',
                borderRadius: 10, border: '1px #111111 solid', justifyContent: 'center',
                alignItems: 'center', display: 'inline-flex'
            }}>
                <div style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Cancel</div>
            </button>
        </div>
    );
};

export default ConfirmationPopup;