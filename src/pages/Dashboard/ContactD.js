import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const ContactD = () => {
    const [editModes, setEditModes] = useState({
        firstName: false,
        lastName: false,
        dob: false,
        phoneNumber: false,
        email: false,
        country: false,
        address: false,
        governorate: false,
        zipCode: false,
        gender: false,
    });

    const [formData, setFormData] = useState({
        firstName: 'Albert',
        lastName: 'Chikarova',
        dob: '17/12/1987',
        phoneNumber: '+1-907-972-0104',
        email: 'albert.chikarova@gmail.com',
        country: '',
        address: '',
        governorate: '',
        zipCode: '',
        gender: 'male',
    });
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (Gender) => {
        setSelectedGender(Gender);
    };

    const handleEdit = (field) => {
        setEditModes({ ...editModes, [field]: true });
    };

    const handleCancel = (field) => {
        setEditModes({ ...editModes, [field]: false });
        // Reset form data or fetch original data for the specific field
    };

    const handleConfirm = (field) => {
        setEditModes({ ...editModes, [field]: false });
        // Save form data or update the user's information for the specific field
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            <div style={{ position: 'relative' }}>
                <div style={{ left: 60, top: 5, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>Personal informations</div>

                {/* First Name */}
                <div style={{ width: 497, height: 96, left: 60, top: 50, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>First name</div>
                    {editModes.firstName ? (
                        <>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                style={{ paddingLeft: 10, width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                            />
                            <div onClick={() => handleCancel('firstName')} style={{ left: 400, top: -2, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Cancel</div>
                            <div style={{ position: 'absolute', left: 452, color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>|</div>
                            <div onClick={() => handleConfirm('firstName')} style={{ left: 465, top: -2, position: 'absolute', color: '#2FB300', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Confirm</div>
                        </>
                    ) : (
                        <>
                            <div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.firstName}</div>
                        </>
                    )}
                </div>

                {/* Last Name */}
                <div style={{ width: 497, height: 96, left: 650, top: 50, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Last name</div>
                    {editModes.lastName ? (
                        <>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                style={{ paddingLeft: 10, width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                            />
                            <div onClick={() => handleCancel('lastName')} style={{ left: 400, top: -2, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Cancel</div>
                            <div style={{ position: 'absolute', left: 452, color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>|</div>
                            <div onClick={() => handleConfirm('lastName')} style={{ left: 465, top: -2, position: 'absolute', color: '#2FB300', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Confirm</div>
                        </>
                    ) : (
                        <>
                            <div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.lastName}</div>
                        </>
                    )}
                </div>
                {/* Date of Birth */}
                <div style={{ width: 497, height: 96, left: 60, top: 150, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Date of birth</div>
                    {editModes.dob ? (
                        <>
                            <input
                                type="text"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                style={{ paddingLeft: 10, width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                            />
                            <div onClick={() => handleCancel('dob')} style={{ left: 400, top: -2, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Cancel</div>
                            <div style={{ position: 'absolute', left: 452, color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>|</div>
                            <div onClick={() => handleConfirm('dob')} style={{ left: 465, top: -2, position: 'absolute', color: '#2FB300', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Confirm</div>
                        </>
                    ) : (
                        <>
                            <div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.dob}</div>
                        </>
                    )}
                </div>
                {/* Phone Number */}
                <div style={{ width: 497, height: 96, left: 650, top: 250, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Phone Number</div>
                    {editModes.phoneNumber ? (
                        <>
                            <input
                                type="text"
                                disabled
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                style={{ paddingLeft: 10, width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                            />
                            <div onClick={() => handleCancel('phoneNumber')} style={{ left: 400, top: -2, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Cancel</div>
                            <div style={{ position: 'absolute', left: 452, color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>|</div>
                            <div onClick={() => handleConfirm('phoneNumber')} style={{ left: 465, top: -2, position: 'absolute', color: '#2FB300', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Confirm</div>
                        </>
                    ) : (
                        <>
                            <div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.phoneNumber}</div>
                        </>
                    )}
                </div>
                {/* Email Address */}
                <div style={{ width: 497, height: 96, left: 60, top: 250, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Email</div>
                    <>
                        <div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.15)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.email}</div>
                    </>
                </div>
                <div style={{position:"absolute",top:340,width: '100%', height: '100%', border: '1px #DDDDDD solid'}}></div>
                {/* Country */}
                <div style={{ width: 497, height: 96, left: 60, top: 365, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Country</div>
                    {editModes.country ? (
                        <>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                style={{ paddingLeft: 10, width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                            />
                            <div onClick={() => handleCancel('country')} style={{ left: 400, top: -2, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Cancel</div>
                            <div style={{ position: 'absolute', left: 452, color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>|</div>
                            <div onClick={() => handleConfirm('country')} style={{ left: 465, top: -2, position: 'absolute', color: '#2FB300', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Confirm</div>
                        </>
                    ) : (
                        <>
                            {/*<div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.country}</div>*/}
                            {formData.country ? (
                                <div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.country}</div>
                            ) : (
                                <div style={{ paddingLeft: 10, background: 'rgba(0, 0, 0, 0.03)', paddingTop: 15, width: 497, height: 40, left: 0, top: 25, borderRadius: 10, position: 'absolute' }}>
                                    <div style={{ color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: "left"  }}>Enter your country</div>
                                </div>
                            )}
                        </>
                    )}
                </div>
                {/* Address */}
                <div style={{ width: 497, height: 96, left: 60, top: 460, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Address</div>
                    {editModes.address ? (
                        <>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                style={{ paddingLeft: 10, width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                            />
                            <div onClick={() => handleCancel('address')} style={{ left: 400, top: -2, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Cancel</div>
                            <div style={{ position: 'absolute', left: 452, color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>|</div>
                            <div onClick={() => handleConfirm('address')} style={{ left: 465, top: -2, position: 'absolute', color: '#2FB300', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Confirm</div>
                        </>
                    ) : (
                        <>
                            {formData.address ? (
                                <div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.address}</div>
                            ) : (
                                <div style={{ paddingLeft: 10, background: 'rgba(0, 0, 0, 0.03)', paddingTop: 15, width: 497, height: 40, left: 0, top: 25, borderRadius: 10, position: 'absolute' }}>
                                    <div style={{ color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: "left"  }}>Enter your Adress</div>
                                </div>
                            )}
                        </>
                    )}
                </div>
                {/* Governorate */}
                <div style={{ width: 497, height: 96, left: 650, top: 365, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Governorate</div>
                    {editModes.governorate ? (
                        <>
                            <input
                                type="text"
                                name="governorate"
                                value={formData.governorate}
                                onChange={handleChange}
                                style={{ paddingLeft: 10, width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                            />
                            <div onClick={() => handleCancel('governorate')} style={{ left: 400, top: -2, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Cancel</div>
                            <div style={{ position: 'absolute', left: 452, color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>|</div>
                            <div onClick={() => handleConfirm('governorate')} style={{ left: 465, top: -2, position: 'absolute', color: '#2FB300', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Confirm</div>
                        </>
                    ) : (
                        <>
                            {formData.governorate ? (
                                <div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.governorate}</div>
                            ) : (
                                <div style={{ paddingLeft: 10, background: 'rgba(0, 0, 0, 0.03)', paddingTop: 15, width: 497, height: 40, left: 0, top: 25, borderRadius: 10, position: 'absolute' }}>
                                    <div style={{ color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: "left"  }}>Enter your Gouvernorate</div>
                                </div>
                            )}
                        </>
                    )}
                </div>
                {/* ZIP Code */}
                <div style={{ width: 497, height: 96, left: 650, top: 460, position: 'absolute' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Zip Code</div>
                    {editModes.zipCode ? (
                        <>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                style={{ paddingLeft: 10, width: 497, height: 51, left: 0, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid' }}
                            />
                            <div onClick={() => handleCancel('zipCode')} style={{ left: 400, top: -2, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Cancel</div>
                            <div style={{ position: 'absolute', left: 452, color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>|</div>
                            <div onClick={() => handleConfirm('zipCode')} style={{ left: 465, top: -2, position: 'absolute', color: '#2FB300', fontSize: 14, fontFamily: 'revert', fontWeight: '600', cursor: 'pointer' }}>Confirm</div>
                        </>
                    ) : (
                        <>
                            {formData.zipCode ? (
                                <div style={{ paddingLeft: 10, paddingTop: 15, width: 497, height: 40, left: 0, top: 25, position: 'absolute', background: 'rgba(0, 0, 0, 0.03)', fontSize: 14, borderRadius: 10, wordWrap: 'break-word', textAlign: "left" }}>{formData.zipCode}</div>
                            ) : (
                                <div style={{ paddingLeft: 10, background: 'rgba(0, 0, 0, 0.03)', paddingTop: 15, width: 497, height: 40, left: 0, top: 25, borderRadius: 10, position: 'absolute' }}>
                                    <div style={{ color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: "left"  }}>Enter your Zip Code</div>
                                </div>
                            )}
                        </>
                    )}
                </div>
                {/* Gender */}
                <div style={{ width: 497, height: 96, left: 650, top: 150, position: 'absolute', display: 'flex' }}>
                    <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Gender</div>
                    {/* Radio buttons for Genders */}
                    <div style={{ display: 'flex', position: 'absolute',top:35 }}>
                        <label style={{ margin: '0 20px', position: 'relative', cursor: 'pointer' }}>
                            <input type="radio" name="gender" value="Male" onChange={() => handleGenderChange('Male')} checked={selectedGender === 'Male'} style={{ display: 'none' }} />
                            <span style={{ top:4,marginLeft: 20, position: "absolute", color: selectedGender === 'Male' ? '#00BDA9' : 'black' }}>Male</span>
                            <div style={{ width: selectedGender === 'Male' ? 20 : 20, height: selectedGender === 'Male' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedGender === 'Male' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: 0, left: -20 }} />
                        </label>
                        <label style={{ margin: '0 80px', position: 'relative', cursor: 'pointer' }}>
                            <input type="radio" name="gender" value="Female" onChange={() => handleGenderChange('Female')} checked={selectedGender === 'Female'} style={{ display: 'none' }} />
                            <span style={{ top:4,marginLeft: 20, position: "absolute", color: selectedGender === 'Female' ? '#00BDA9' : 'black' }}>Female</span>
                            <div style={{ width: selectedGender === 'Female' ? 20 : 20, height: selectedGender === 'Female' ? 20 : 20, position: 'absolute', borderRadius: 50, border: selectedGender === 'Female' ? '6px solid #00BDA9' : '3px solid #CCCCCC', top: 0, left: -20 }} />
                        </label>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default ContactD;
