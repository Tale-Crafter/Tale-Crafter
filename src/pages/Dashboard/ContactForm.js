import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import countryCallingCode from 'country-calling-code';
import {useParams} from "react-router-dom";

const ContactForm = () => {
    const { iduser } = useParams();
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        numero: '',
        sujet: 'Deal',
        description: '',
    });
    const [selectedCountry, setSelectedCountry] = useState(null);

    const [errorMessage, setErrorMessage] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any required field is empty
        const requiredFields = ['nom', 'prenom', 'email', 'numero'];
        const emptyFields = requiredFields.filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            setErrorMessage('Veuillez remplir tous les champs.');
        } else if (!isValidEmail(formData.email)) {
            setErrorMessage('Veuillez saisir une adresse e-mail valide.');
        } else {
            setErrorMessage('');

            // Proceed with form submission
            console.log('Formulaire soumis avec les données :', formData);
            // Ajoutez ici le code pour soumettre le formulaire
        }
    };

    const isValidEmail = (email) => {
        // Simple email validation, you can use a more robust validation method
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const handleCountryChange = (value, { dialCode }) => {
        setFormData((prevData) => ({ ...prevData, numero: `+${dialCode}` }));
    };


    const getLabelForCountry = (data) => {
        if (data.alpha2 && data.callingCode) {
            return `${data.name} (+${data.callingCode})`;
        }
        return '';
    };

    const countryOptions = countryCallingCode.map((data) => ({
        value: data.alpha2,
        label: getLabelForCountry(data),
    }));
    const handleDecline = () => {
        // Logic when the user declines
        // For example, you might redirect the user to a different page
        window.location.href =`/home/${iduser}`;
        // Alternatively, you could display a message or take other actions.
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            <div style={{ left: 40, top: 10, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>Assistance Form</div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                {/* First Name */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label>
                        <div style={{left: 20, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>First Name</div>
                        <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} style={{ border: 0, width: 400, height: 31, left: 70, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }} />
                        <div style={{left: 86, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>{formData.nom === '' && predefinedMessages.nom}</div>
                    </label>
                </div>

                {/* Last Name */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label>
                        <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Last Name</div>
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleInputChange} style={{ border: 0, width: 400, height: 31, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10,padding: '10px' }} />
                        <div style={{left: 16, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>{formData.prenom === '' && predefinedMessages.prenom}</div>
                    </label>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 140 }}>
                {/* Email Address */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative' }}>
                    <label>
                        <div style={{ left: 70, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Email Address</div>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ border: 0, width: 400, height: 31, left: 70, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }} />
                        <div style={{left: 86, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>{formData.email === '' && predefinedMessages.email}</div>
                    </label>
                </div>

                {/* Number */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative' }}>
                    <label>
                        <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Number</div>
                        <PhoneInput style={{position: 'relative', top:25, height:50}}
                            country={'fr'}
                            value={formData.numero}
                            onChange={(value, data) => handleCountryChange(value, data)}
                            inputStyle={{ position:"relative",top:0, right:115,height:50, border: 0, width: 385, marginLeft: 10, background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }}
                        />
                        {/*<div style={{ left: 16, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>{predefinedMessages.numero}</div>*/}
                    </label>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 140 }}>
                {/* Sujet */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label>
                        <div style={{left: 70, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Sujet</div>
                        <select name="sujet" value={formData.sujet} onChange={handleInputChange} style={{ border: 0, width: 420, height: 51, left: 70, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px'  }}>
                            <option value="Deal">Deal</option>
                            <option value="interesting insights">Interesting Insights</option>
                            <option value="Reclamation">Reclamation</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>

                {/* Description */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label style={{ marginTop: 10 }}>
                        <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Description</div>
                        <ReactQuill value={formData.description} onChange={(value) => setFormData((prevData) => ({ ...prevData, description: value }))} style={{border: 0, width: 400, height: 60, left: 0, top: 25, position: 'absolute', background: 'transparent', borderRadius: 0}}/>
                    </label>
                </div>
            </div>

            {/* Display error message */}
            {errorMessage && <div style={{ position:"relative",color: 'red', marginTop: 10, top:150 }}>{errorMessage}</div>}

            <div style={{ marginTop: 170 }}>
                <button type="submit" style={{ marginRight:20,width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', border: 'none', padding: '10px 20px', borderRadius: 10, outline: 'none', transition: 'background-color 0.3s' }}>
                    Send
                </button>
                <button onClick={handleDecline} style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer', background: 'linear-gradient(90deg, red 0%, #850606 100%)', color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', border: 'none', padding: '10px 20px', borderRadius: 10, outline: 'none', transition: 'background-color 0.3s' }}>
                    Cancel
                </button>

            </div>
        </form>
    );
};

export default ContactForm;
