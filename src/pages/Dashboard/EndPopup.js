// ConfirmationPopup.js

import React, { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";

const ConfirmationPopup = ({ onClose, onValidate }) => {
    const [agreed, setAgreed] = useState(false);
    const { iduser } = useParams();
    const navigate = useNavigate();

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
        navigate(`/livesurvey1`);
    };

    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: 20, borderRadius: 8, boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: 999 }}>
            <button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 20, top: 13, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
                <div style={{ width: 32, height: 32, position: 'relative' ,left:400}}>
                    <img src={process.env.PUBLIC_URL + '/xit.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
                </div>
            </button>
            <div style={{ width: 150, height: 150, position: 'relative' ,marginTop:50,padding:50,left:100}}>
                <img src={process.env.PUBLIC_URL + '/pp.png'} style={{ width: 150, height: 150, left: 0, top: 0, position: 'absolute',padding:50 }} />
            </div>
            <div style={{padding:10,width: '100%', textAlign: 'center'}}><span style={{color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>Donec ut neque a lorem ultrices scelerisque at vitae lectus<br/><br/></span><span style={{color: '#00BDA9', fontSize: 20, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>1000 points</span></div>            <br />
        </div>
    );
};

export default ConfirmationPopup;
