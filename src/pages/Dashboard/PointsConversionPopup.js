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
        // Redirect to /Surveys/:iduser
        navigate(`/CouponRecharge/${iduser}`);
    };

    return (
        <div style={{width:690,height:420, position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 255, 255, 0.9)', padding: 30, borderRadius: 15, boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', zIndex: 999 }}>
            <button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 20, top: 13, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
                <div style={{ width: 32, height: 32, position: 'relative' ,left:690}}>
                    <img src={process.env.PUBLIC_URL + '/xit.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
                </div>
            </button>
            <div style={{ width: 60, height: 50, position: 'relative' ,marginTop:0,padding:40,left:270}}>
                <img src={process.env.PUBLIC_URL + '/coupon.png'} style={{ width: 60, height: 50, left: 0, top: 0, position: 'absolute',padding:50 }} />
            </div>
            <div style={{width: '100%', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Points Conversion Successful!</div>
            <br/>
            <div style={{width: '100%', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', position:"revert"}}>Congratulations! You've successfully converted your accumulated points into coupons. Your coupon details are as follows:</div>
            <br/>
            <div style={{width: '100%', paddingTop: 8, paddingBottom: 8, background: 'rgba(17, 17, 17, 0.04)', borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                <div style={{textAlign: 'justify'}}><span style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Partner: </span><span style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Yassir Express<br/></span><span style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Coupon Code:</span><span style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}> ABC123<br/></span><span style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Discount:</span><span style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}> 20 DT<br/></span><span style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Expiry Date:</span><span style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}> 2024-03-01</span></div>
            </div>
            <br/><br/>
            <div style={{width: '100%', textAlign: 'center', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Thank you for being a valued member! Enjoy your savings with this exclusive coupon.</div>
        </div>
    );
};

export default ConfirmationPopup;
