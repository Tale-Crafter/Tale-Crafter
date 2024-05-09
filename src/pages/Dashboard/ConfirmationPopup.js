// ConfirmationPopup.js

import React, { useState } from 'react';

const ConfirmationPopup = ({ onClose, onValidate }) => {
    const [agreed, setAgreed] = useState(false);

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

    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: 20, borderRadius: 8, boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: 999 }}>
            <h2>Confirmation of Commitment to Answer Honestly</h2>
            <p style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>
                By participating in this survey, I commit to answering honestly and accurately. I understand that the accuracy of my responses contributes to the quality of the results and the relevance of the conducted study.
            </p>
            <label>
                <input type="checkbox" checked={agreed} onChange={handleCheckboxChange} />
                I agree to respond honestly and accurately.
            </label>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                <div style={{ width: '48%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer' }} onClick={handleValidate}>
                    <div style={{ color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Validate</div>
                </div>
                <div style={{ width: '48%', padding: 16, borderRadius: 10, border: '2px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer' }} onClick={onClose}>
                    <div style={{ color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Cancel</div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;
