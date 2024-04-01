import React, { useState } from 'react'
import LeftBackground from '../../components/LeftBackground';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function ForgotPasswordThree() {

  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [isChecked1, setIsChecked1] = useState(false);
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
      navigate('/login');
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleCheckboxChangep1 = () => {
    setIsChecked1(true);
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



  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log('Password:', password);
  };


  
  const passwordStyle = {
    height: '100%',
    flex: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center items horizontally
    position: 'relative',
    top: '120px',
    left: '231px',
  };

  return (
    <>
      <LeftBackground mainText={"Forget PWD?"} detailsText={"Don't worry :))"} />
      {/***create password interface***/}
      <div className="container" style={passwordStyle}>
        <div>
          <h1>Create New Password</h1>
        </div>
        <div style={{ textAlign: 'Left', paddingTop: '30px', }}>
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
                  placeholder="Enter a new password"
                  style={{
                    width: '400px', // Set the desired width
                    height: '51px',
                    border: '2px solid #00C0FC',
                    padding: '12px',
                    transition: 'border-color 0.3s ease',
                    borderColor: '#00C0FC',
                  }}
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
              {/**Button reset password */}


              <button style={{
                background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                width: '400px',
                height: '51px',
                padding: '16px',
                borderRadius: '10px',
                color: 'white',
                textAlign: 'center',
                lineHeight: '19px',
                fontFamily: 'TaleBlue, sans-serif',
                fontSize: '14px',
                cursor: 'pointer',
                border: 'none',
                outline: 'none',
              }} onClick={handleClick}  >Reset Password</button>
            </div>
          </form>
        </div>
      </div >
    </>
  );
}
export default ForgotPasswordThree