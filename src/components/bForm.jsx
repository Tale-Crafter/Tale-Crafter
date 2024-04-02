import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './bbutton';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Form() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked1password, setChecked1] = useState(false);
    const [isChecked2password, setChecked2] = useState(false);
    const [isChecked3password, setChecked3] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleClick = () => {
        setChecked(!checked);
        const isWeak = !password.toLowerCase().includes('name') && !password.toLowerCase().includes('@' || '.com' || '.tn');
        const isGood = password.length >= 8;
        const isStrong = /[!@#$%^&*()_+\-={};':"\\|,.<>?0-9]/.test(password);

        setChecked1(isWeak);
        setChecked2(isGood);
        setChecked3(isStrong);


        console.log('Checkbox states:', isChecked1password, isChecked2password, isChecked3password);

        if (isChecked1password && isChecked2password && isChecked3password) {
            navigate('/dashboard');
        }
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleCheckboxChangep1 = () => {
        setIsChecked1(true);
    };

    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
    };

    const validatePassword = () => {
        const containsNameEmail = !password.toLowerCase().includes('name') && !password.toLowerCase().includes('@' || '.com' || '.tn');
        const containsSymbolNumber = /[!@#$%^&*()_+\-={};':"\\|,.<>?0-9]/.test(password);
        const hasValidLength = password.length >= 8;

        if (containsNameEmail && containsSymbolNumber && hasValidLength) {
            setStrength('strong');
        } else if ((containsNameEmail && hasValidLength)) {
            setStrength('Good');
        } else if (containsNameEmail || containsSymbolNumber || hasValidLength) {
            setStrength('weak');
        } else {
            setStrength('');
        }
    };
    // Function to determine color dynamically
    const getColor = () => {
        switch (strength) {
            case 'strong':
                return '#198754';
            case 'Good':
                return '#0d6efd';
            case 'weak':
                return '#dc3545';
            default:
                return '#000';
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        setStep(2);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        console.log('Password:', password);
    };

    const handlePreviousClick = () => {
        setEmail('');
        setPassword('');
        setChecked1(false);
        setChecked2(false);
        setChecked3(false);
        setStrength('');
        setStep(1);
    };

    const FormStyle = {
        backgroundColor: '#FFFFF',
        padding: '100px',
        top: '50 %',
        paddingLeft: '100 %',
        textAlign: 'center',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '0em',
        position: 'relative',
        height: '700px',
    };
    const passwordStyle = {
        padding: '100px',
        paddingTop: '100px',
        paddingLeft: '300px',
        textAlign: 'center',
        height: '700px',
        position: 'relative',
    }

    const renderContent = () => {
        if (step === 1) {
            return (
                <>
                    {/** Create Account Area **/}
                    <div className="container" style={FormStyle} >
                        <div><h1>Create Account</h1></div>
                        <div>
                        <span>
                                <Link to="https://www.facebook.com">
                                <img src={process.env.PUBLIC_URL + '/fbf.png'} className="rounded" alt="X" style={{width:56,height:56}}/>
                                </Link>
                            </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>
                                <Link to="https://www.linkedin.com">
                                    <img src={process.env.PUBLIC_URL + '/bmail.png'} className="rounded" alt="Facebook" style={{width:56,height:56}} />
                                </Link>
                            </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>
                                <Link to="https://www.linkedin.com">
                                    <img src={process.env.PUBLIC_URL + '/bx.png'} className="rounded" alt="Gmail" style={{width:56,height:56}}/>
                                </Link>
                            </span>&nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <span>
                                <Link to="https://www.linkedin.com">
                                    <img src={process.env.PUBLIC_URL + '/blink.png'} className="rounded" alt="Linkedin" style={{width:56,height:56}}/>
                                </Link>
                            </span>
                        </div>
                        <div style={{ color: '#666666', paddingTop: '15px' }}> Or use your email account</div>

                        <div style={{
                            padding: '170px', paddingTop: '40px', textAlign: 'Left',
                        }}>
                            <form onSubmit={handleEmailSubmit}>
                            
                            <div className="mb-3">
                            <label htmlFor="Email" className="form-label" ><strong>Email Address</strong><br/></label>
                            
                            <input type="email" className="form-control" id="Email" placeholder="Enter your email" style={{ width: '470px', Height: '51px', Top: '295px', Left: '2px', border: '2px solid #00C0FC', padding: '16px', transition: 'border-color 0.4s ease', borderColor: 'black',background: 'rgba(17, 17, 17, 0.10)',borderRadius: 10 }} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <br></br>
                                <div>
                                    <div className="form-check">
                                        <input className="form-check-input" style={{
                                            width: '24px', height: '24px', backgroundColor: isChecked1 ? '#00BDA9' : '#ffffff',
                                        }}
                                            onChange={handleCheckboxChange1} type="checkbox" id="gridCheck" required />
                                        <label className="form-check-label" htmlFor="gridCheck" style={{ paddingLeft: '12px' }} required>
                                            You agree to the <u><strong>Terms of Use</strong></u> and <strong><u>Privacy Notice</u></strong>
                                        </label>
                                    </div>
                                </div>
                                <div style={{ paddingBottom: '17px', paddingTop: '17px' }}>
                                    <div className="form-check" style={{ Top: '17px' }}>
                                        <input className="form-check-input" type="checkbox" id="gridCheck" style={{
                                            width: '24px', height: '24px', backgroundColor: isChecked2 ? '#00BDA9' : '#ffffff',
                                        }}
                                            onChange={handleCheckboxChange2} required />
                                        <label className="form-check-label" htmlFor="gridCheck" style={{ paddingLeft: '12px' }}>
                                            By agreeing, you'll receive information and special offers about <br /> our products via email. You can unsubscribe from these emails at <br /> any time through the My Account page
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <Button type="submit" />
                                </div>
                            </form>
                            <div style={{ color: '#666666', textAlign: 'center', paddingTop: '20px' }}>Have an account? <Link to="/login" style={{ color: '#000000' }}>
                                <strong> Sign-In</strong>
                            </Link></div>
                        </div>

                    </div>

                </>
            );
        } else if (step === 2) {
            return (
                <>
                    {/***create password interface***/}
                    <div className="container" style={passwordStyle}>
                        <div>
                            <h1>Create Password</h1>
                        </div>
                        <div style={{ textAlign: 'Left', paddingTop: '30px' }}>
                            <form onSubmit={handlePasswordSubmit}>
                                <div>
                                    <label htmlFor="formGroupPassword" className="form-label" >
                                        <strong>
                                            Password</strong>
                                    </label>
                                    <div style={{ display: "flex", paddingTop: "15px", position: "relative" }}>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            id="formGroupPassword"
                                            placeholder="Enter a password"
                                            style={{ width: '400px !important', height: '51px', border: '2px solid #00C0FC', padding: '12px', transition: 'border-color 0.3s ease', borderColor: '#00C0FC' }}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                                validatePassword();
                                            }}
                                        />
                                        <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', paddingTop: '11px' }}>
                                            {/* Utilisez l'icône de l'oeil pour montrer/masquer le mot de passe */}
                                            {showPassword ? (
                                                <FaEyeSlash
                                                    onClick={togglePasswordVisibility}
                                                    style={{
                                                        //position: 'relative',
                                                        width: '19px',
                                                        height: '19px',
                                                        left: '660px',
                                                        top: '120px',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        color: "#606060",

                                                    }}
                                                />

                                            ) : (
                                                <FaEye
                                                    onClick={togglePasswordVisibility}
                                                    style={{
                                                        //position: 'absolute',
                                                        width: '19px',
                                                        height: '19px',
                                                        left: '660px',
                                                        top: '180px',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        color: "#606060",

                                                    }}
                                                />

                                            )}
                                        </div>
                                    </div>


                                    <div style={{ paddingTop: '20px', display: 'flex', color: '#666666', fontSize: '16' }}>Password Strength: <div style={{ color: getColor(), paddingLeft: '15px' }}>{strength}</div></div>
                                    {/**CHeck valid of Password */}
                                    <div>
                                        <div style={{ display: "flex" }}>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{
                                                    marginTop: '5px',
                                                    border: '2px solid',
                                                    borderRadius: '14px',
                                                    marginBottom: '15px',
                                                    marginRight: '5px',
                                                    width: '24px', height: '24px', backgroundColor: isChecked1password ? '#00BDA9' : '#ffffff',
                                                    color: isChecked1password ? '#ffffff' : '#00BDA9',

                                                }}

                                                    onChange={() => handleCheckboxChangep1(isChecked1password)} checked={isChecked1password} type="checkbox" id="gridCheckp1" />
                                                <label className="form-check-label" htmlFor="gridCheckp1" style={{ paddingLeft: '12px', color: '#666666' }} >
                                                    Must not contain your name or email
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{

                                                    border: '2px solid', // Border color
                                                    borderRadius: '14px', // Border radius
                                                    marginBottom: '15px',
                                                    marginRight: '5px',
                                                    width: '24px', height: '24px', backgroundColor: isChecked2password ? '#00BDA9' : '#ffffff',
                                                    color: isChecked2password ? '#ffffff' : '#00BDA9',
                                                }}
                                                    onChange={handleChange} checked={isChecked2password} type="checkbox" id="gridCheckp2" />
                                                <label className="form-check-label" htmlFor="gridCheckp2" style={{ paddingLeft: '12px', color: '#666666' }} required>
                                                    At least 8 characters
                                                </label>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", paddingBottom: '24px' }}>
                                            <div className="form-check" >
                                                <input className="form-check-input" style={{
                                                    border: '2px solid',
                                                    borderRadius: '14px',
                                                    marginRight: '5px',
                                                    width: '24px', height: '24px', backgroundColor: isChecked3password ? '#00BDA9' : '#ffffff',
                                                    color: isChecked3password ? '#ffffff' : '#00BDA9',
                                                }}
                                                    checked={isChecked3password} onChange={handleChange} type="checkbox" id="gridCheckp3" />
                                                <label className="form-check-label" htmlFor="gridCheckp3" style={{ paddingLeft: '12px', color: '#666666' }} required>

                                                    Contains a symbol or a number
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    {/**Buttons Previous Next */}
                                    <div className="container" style={{ display: 'flex', padding: '24px!important' }}>
                                        <button style={{
                                            width: '192px',
                                            height: '51px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(--Primary-RG, 90deg, #F9BC33 0%, #FE346E 100%)', // White background
                                            cursor: 'pointer',
                                            transition: 'background 300ms ease-out',
                                            border: '2px solid #00BDA9',
                                            color: '#00BDA9',
                                            alignItems: 'center',
                                            justifyContent: 'center !important',
                                            marginRight: '14px',

                                        }} onClick={handlePreviousClick}>Previous</button>

                                        <button style={{
                                            width: '192px',
                                            height: '51px',
                                            top: ' 463px',
                                            left: ' 438px',
                                            borderRadius: '10px', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                                            cursor: 'pointer',
                                            transition: 'background 300ms ease-out',
                                            border: 'none',
                                            color: '#FFFFFF',
                                            justifyContent: 'center !important',
                                        }} onClick={handleClick}  >Next</button>
                                    </div>
                                </div>
                            </form>
                        </div >
                    </div >
                </>
            );
        }
    };

    return (
        <div className="container">
            {renderContent()}
        </div>
    );
}


export default Form






