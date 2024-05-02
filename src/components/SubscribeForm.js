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
        window.location.href =`/createpwd`;
        // Alternatively, you could display a message or take other actions.
    };
    const [selectedYN, setSelectedYN] = useState('');

    // State to track whether to show "Work email" or "Email" label
    const [showWorkEmail, setShowWorkEmail] = useState(false);

    // Update label based on user selection
    const handleYNChange = (YN) => {
        setSelectedYN(YN);
        setShowWorkEmail(YN === 'yes'); // Show "Work email" if Yes, otherwise show "Email"
    };

    return (
        <form onSubmit={handleSubmit} style={{  padding: 20,width:'auto',height:"auto" }}>
            <div style={{marginTop:100,left: 40, top: 10, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>Let’s provision your instance</div>
            <div style={{ marginTop:100,left: 40, top: 60, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Are you a company? Please answer with yes or no.</div>
            {/* Gender */}
            <div style={{ width: 497, height: 96, left: 40, top: 160, position: 'absolute', display: 'flex' }}>
                {/* Radio buttons for Genders */}
                <div style={{ display: 'flex', position: 'absolute',top:40 }}>
                    <label style={{ margin: '0 20px', position: 'relative', cursor: 'pointer' }}>
                        <input type="radio" name="gender" value="yes" onChange={() => handleYNChange('yes')} checked={selectedYN === 'yes'} style={{ display: 'none' }} />
                        <span style={{ top:4,marginLeft: 20, position: "absolute", color: selectedYN === 'yes' ? '#00BDA9' : 'black' }}>Yes</span>
                        <div style={{ width: selectedYN === 'yes' ? 20 : 20, height: selectedYN === 'yes' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedYN === 'yes' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: 0, left: -20 }} />
                    </label>
                    <label style={{ margin: '0 80px', position: 'relative', cursor: 'pointer' }}>
                        <input type="radio" name="gender" value="no" onChange={() => handleYNChange('no')} checked={selectedYN === 'no'} style={{ display: 'none' }} />
                        <span style={{ top:4,marginLeft: 20, position: "absolute", color: selectedYN === 'no' ? '#00BDA9' : 'black' }}>No</span>
                        <div style={{ width: selectedYN === 'no' ? 20 : 20, height: selectedYN === 'no' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedYN === 'no' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: 0, left: -20 }} />
                    </label>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 200 }}>
                {/* First Name */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label>
                        <div style={{left: 20, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>First Name</div>
                        <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} style={{ border: 0, width: 596, height: 35, left: 20, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }} />
                        <div style={{left: 30, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>{formData.nom === '' && predefinedMessages.nom}</div>
                    </label>
                </div>

                {/* Last Name */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative'}}>
                    <label>
                        <div style={{left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Last Name</div>
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleInputChange} style={{ border: 0, width: 596, height: 35, left: 0, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10,padding: '10px' }} />
                        <div style={{left: 16, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>{formData.prenom === '' && predefinedMessages.prenom}</div>
                    </label>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 140 }}>
                {/* Email Address */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative' }}>
                    <label>
                        <div style={{ left: 20, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>{showWorkEmail ? 'Work email' : 'Email'}</div>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ border: 0, width: 596, height: 35, left: 20, top: 25, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }} />
                        <div style={{left: 30, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>{formData.email === '' && predefinedMessages.email}</div>
                    </label>
                </div>

                {/* Number */}
                <div style={{ flex: 1, marginRight: 10, width: '100%', height: '100%', position: 'relative' }}>
                    <label>
                        <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Mobile Number (optional)</div>
                        <PhoneInput style={{position: 'relataive', top:25, height:58,width:98,background: 'rgba(17, 17, 17, 0.05)',borderRadius:10}}
                            country={'tn'}
                            value={formData.numero}
                            onChange={(value, data) => handleCountryChange(value, data)}
                            inputStyle={{ position:"relative",top:0, left:115,height:58, border: 0, width: 490, marginLeft: 10, background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '10px' }}
                                    dropdownStyle={{
                                        position: 'absolute',
                                        top: 'calc(100% + 5px)', // Adjust this value as needed
                                        background: 'rgba(17, 17, 17, 0.10)',
                                        borderRadius: 10,
                                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Optional shadow styling
                                        border: '1px solid rgba(0, 0, 0, 0.1)', // Optional border styling
                                        zIndex: 999, // Ensure the dropdown appears above other elements
                                    }}

                        />
                        {/*<div style={{ left: 16, top: 41, position: 'absolute', color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>{predefinedMessages.numero}</div>*/}
                    </label>
                </div>
            </div>

            {/* Display error message */}
            {errorMessage && <div style={{ position:"relative",color: 'red', marginTop: 10, top:150 }}>{errorMessage}</div>}

            <div style={{ position:"relative",top:-50,marginTop: 350 }}>
                <button type="submit" style={{position:"relative",left:1700, marginRight:20,width: '160px', height: '60px', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', border: 'none', padding: '10px 20px', borderRadius: 10, outline: 'none', transition: 'background-color 0.3s' }}>
                    Submit
                </button>
                <button onClick={handleDecline} style={{border:'2px #F9BC33 solid', position:"relative",left:-160,width: '160px', height: '60px', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer',  color: '#F9BC33',background:"white", fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', padding: '10px 20px', borderRadius: 10, outline: 'none', transition: 'background-color 0.3s' }}>
                    Previous
                </button>

            </div>
        </form>
    );
};

export default ContactForm;
