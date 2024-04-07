import React, { useState } from 'react';
import { FaEyeSlash, FaEye, FaCheck } from 'react-icons/fa';

const PasswordChangeForm = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        containsSymbolOrNumber: false,
        containsNameOrEmail: false
    });

    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        // Check password strength if the field is not empty
        if (e.target.value !== '') {
            const strength = {
                length: e.target.value.length >= 8,
                containsSymbolOrNumber: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/.test(e.target.value),
                containsNameOrEmail: !e.target.value.toLowerCase().includes("hamda") && !e.target.value.toLowerCase().includes("hamda.yedes@gmail.com")
            };
            setPasswordStrength(strength);
        } else {
            setPasswordStrength({
                length: false,
                containsSymbolOrNumber: false,
                containsNameOrEmail: false
            });
        }
    };

    const toggleShowCurrentPassword = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const isAllConditionsMet = passwordStrength.length && passwordStrength.containsSymbolOrNumber && passwordStrength.containsNameOrEmail;

    return (
        <div>
            <div style={{ position: 'relative', width: 497, height: 96,textAlign:"left"  }}>
                <label htmlFor="currentPassword" style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Current password</label>
                <div style={{ width: 497, height: 51, position: 'relative' }}>
                    <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        id="currentPassword"
                        value={currentPassword}
                        onChange={handleCurrentPasswordChange}
                        style={{ width: '100%', height: '100%', border: 'none', padding: '0 16px', background: 'rgba(17, 17, 17, 0.10)',borderRadius: 10 }}
                    />
                    <div style={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={toggleShowCurrentPassword}>
                        {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>
                {currentPassword === '' && (
                    <div style={{ color: 'rgba(0, 0, 0, 0.40)', fontSize: 14, position:"absolute",top:25,left:18, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', marginTop: 10 }}>Current password</div>      )}
            </div>
            <div style={{ position: 'relative', width: 497, height: 96, marginTop: 20,textAlign:"left"  }}>
                <label htmlFor="newPassword" style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>New password</label>
                <div style={{ width: 497, height: 51, position: 'relative' }}>
                    <input
                        type={showNewPassword ? 'text' : 'password'}
                        id="newPassword"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        style={{ width: '100%', height: '100%', border: 'none', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10,padding: '0 16px' }}
                    />
                    <div style={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={toggleShowNewPassword}>
                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                    {newPassword !== '' && (
                        <div style={{ position: 'absolute', top: '50%', left: -30, transform: 'translateY(-50%)' }}>
                            {passwordStrength.length && passwordStrength.containsSymbolOrNumber && passwordStrength.containsNameOrEmail ? (
                                <FaCheck style={{ color: '#00BDA9', fontSize: 20 }} />
                            ) : (
                                <FaCheck style={{ color: '#999999', fontSize: 20 }} />
                            )}
                        </div>
                    )}
                </div>
                {newPassword === '' && (
                    <div style={{ color: 'rgba(0, 0, 0, 0.40)', position:"absolute",top:25,left:18,fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', marginTop: 10 }}>New password</div>)}
            </div>

            <div style={{ color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', marginTop: 20,textAlign:"left" }}>Password Strength :</div>
            <FaCheck style={{ position:"absolute",left:20,top:290,color: passwordStrength.containsNameOrEmail ? '#00BDA9' : '#999999', fontSize: 20 }} />
            <FaCheck style={{ position:"absolute",left:20,top:320,color: passwordStrength.length ? '#00BDA9' : '#999999', fontSize: 20 }} />
            <FaCheck style={{ position:"absolute",left:20,top:350,color: passwordStrength.containsSymbolOrNumber ? '#00BDA9' : '#999999', fontSize: 20 }} />

            <div style={{ marginTop: 20,position:"relative",left:25 }}>
            <div style={{ color: passwordStrength.containsNameOrEmail ? '#00BDA9' : '#999999', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', marginTop: 10,textAlign:"left" }}>Must not contain your name or email</div>
            <div style={{ color: passwordStrength.length ? '#00BDA9' : '#999999', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', marginTop: 10,textAlign:"left" }}>At least 8 characters</div>
            <div style={{ color: passwordStrength.containsSymbolOrNumber ? '#00BDA9' : '#999999', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', marginTop: 10,textAlign:"left" }}>Contains a symbol or a number</div>
            </div>
            <div style={{ marginTop: 20,position:"absolute",left:0 }}>
                <button style={{ width: 246, padding: 16, borderRadius: 10, border: '2px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', marginLeft: 20 }}>Cancel</button>
                <button style={{ width: 246, padding: 16, background: isAllConditionsMet ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : '#DDDDDD',marginLeft: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', color: isAllConditionsMet ? 'white' : '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Save change</button>
            </div>
        </div>
    );
};

export default PasswordChangeForm;
