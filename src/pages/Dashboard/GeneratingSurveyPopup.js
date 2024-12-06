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
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: 20, borderRadius: 20, boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: 999 }}>
            <div style={{ width: 100, height: 70, position: 'relative' ,marginTop:40,padding:4,left:200}}>
                <img src={process.env.PUBLIC_URL + '/load.png'} style={{ width: 50, height: 50, left: 0, top: 0, position: 'absolute',padding:4 }} />
            </div>
            <h4>Generating survey questions. Please hold tight for a moment...</h4>
        </div>
    );
};

export default ConfirmationPopup;
