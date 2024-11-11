// ConfirmationPopup.js

import React, { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {CreateCompany, CreateProduct} from "./Api";

const ConfirmationPopup = ({ onClose, onValidate }) => {
    const { iduser } = useParams();
    const navigate = useNavigate();
    const [selectedFiles1, setSelectedFiles1] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        logo: '' // Assuming logo is a file (e.g., image)
    });

    // Handle file change
    const handleFileChange1 = (event1) => {
        const files = event1.target.files;
        const selectedFilesArray = Array.from(files);
        setSelectedFiles1(selectedFilesArray);
        setFormData((prevData) => ({
            ...prevData,
            logo: selectedFilesArray[0] // Assuming only one logo file is selected
        }));
    };

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle submit form
    const handleSubmit = async () => {
        // Basic validation
        if (!formData.name || !formData.description) {
            alert('Please fill in all required fields.');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('description', formData.description);

        // Append the logo file if it's selected
        if (selectedFiles1.length > 0) {
            formDataToSend.append('logo', selectedFiles1[0].name);
        }

        try {
            await CreateProduct(formDataToSend);
            onValidate();
            onClose();
        } catch (error) {
            console.error('Error creating company:', error.message);
        }
    };

    // Handle back click (cancel)
    const handleBackClick = () => {
        onClose();
        navigate(`/createsurvey`);
    };

    return (
        <div style={{ width: 452, height: 855, position: 'fixed', top: '60%', left: '86%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: 20, borderRadius: 8, boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: 999 }}>
            <div style={{ width: 420, height: 288, left: 16, top: 77, position: 'absolute' }}>
                <div style={{ width: 420, height: 261, left: 0, top: 27, position: 'absolute', background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20 }} />
                <div style={{ width: 189, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Upload logo (Optional)</div>
                <div style={{ width: 120, left: 300, top: 0, position: 'absolute', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>JPG,PNG,JPEG</div>
                <div style={{ width: 388, height: 229, borderRadius: 20, border: '2px #CCCCCC dotted', marginTop: 20, textAlign: 'center', position: 'relative', left: 13, top: 20 }}>
                    <input type="file" style={{ display: 'none' }} onChange={handleFileChange1} />
                    <img src={process.env.PUBLIC_URL + '/upload.png'} alt="Upload Icon" style={{ width: 60, height: 60, marginTop: 5, cursor: 'pointer' }} onClick={() => document.querySelector('input[type="file"]').click()} />
                    <div style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>Select a logo to upload</div>
                    <div style={{ color: '#666666', fontSize: 12, fontWeight: '400', marginTop: 5 }}>or Drag and Drop</div>
                </div>
                <div style={{ display: 'flex', left: 0, top: -110, position: 'relative', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                    {selectedFiles1.map((file, index) => (
                        <div key={index} style={{ margin: 10 }}>
                            <img src={URL.createObjectURL(file)} alt={`File ${index}`} style={{ width: 100, height: 70, objectFit: 'cover', borderRadius: 10 }} />
                            <p style={{ textAlign: 'center', marginTop: 5 }}>{file.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ left: 16, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>Add a new product</div>

            <div style={{ width: 420, height: 96, left: 17, top: 380, position: 'absolute' }}>
                <label>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Product name</div>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ border: 0, width: 420, height: 31, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }} />
                </label>
            </div>

            <div style={{ width: 420, height: 96, left: 17, top: 475, position: 'absolute' }}>
                <label>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Description (optional)</div>
                    <input type="text" name="description" value={formData.description} onChange={handleInputChange} style={{ border: 0, width: 420, height: 31, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }} />
                </label>
            </div>

            <button onClick={handleSubmit} style={{width: 147, height: 50, padding: 16, left: 310, top: 750, position: 'absolute', background: '#DDDDDD', borderRadius: 10, justifyContent: 'center',border:"none", alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#666666', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Submit</div>
            </button>
            <button  onClick={handleBackClick} style={{width: 147, height: 50, padding: 16, left: 16, top: 750, position: 'absolute', borderRadius: 10, border: '1px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Cancel</div>
            </button>
        </div>
    );
};
export default ConfirmationPopup;
