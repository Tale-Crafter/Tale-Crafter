import React, { useState } from 'react';
import LogoTale from '../../images/LogoTale.png';
import EmailSentIcon from '../../images/emailSentIcon.png';
import Buttons from '../../components/Buttons';
import TT from '../../images/Tunisie-Telecom-logo.png';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../App.css';  // Import the CSS file
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import ContactForm from './ContactForm';
const opencage = require('opencage-api-client');
const DashboardSurvey60 = () => {
  const { iduser } = useParams();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State to track checkbox selection
  const navigate = useNavigate();
  const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
  };

  const handleCheckboxChange = (event) => {
    // Update the state based on checkbox change event
    setIsCheckboxChecked(event.target.checked);
};
  

  const handleNextButtonClick = () => {
    // Navigate to Dashboard70
    navigate('/dashboard70');
  };

  const handlePreviousButtonClick = () => {
    // Navigate to Dashboard50
    navigate('/dashboard50');
  };

  return (
      <div className="App">
         <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>
         <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
          <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
              <Header/>
              <div style={{ width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }}>
</div>

<div style={{ width: 1220, height: 100, left: 360, top: 80, position: 'absolute', background: 'white', borderRadius: 16, display: 'flex', alignItems: 'center' }}>
  <div style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
      <div>
          <img src={TT} alt="tt" style={{ width: '100px', height: '100px', color: '#111111', fontSize: 20, fontFamily: 'revert', fontWeight: '500', lineHeight: 1, wordWrap: 'break-word' }}></img>
      </div>
      <div>
          <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}>
              Tunisie Telecom <br />
          </span>
      </div>
  </div>
  <div style={{ position: 'absolute', right: '0', marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
  {/* Progress Bar */}
  <div style={{ width: '300px', height: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', marginRight: '5px' }}>
      <div style={{ width: '60%', height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div> {/* Progress */}
  </div>
  {/* Text */}
  <span>60%</span>
</div>




</div>



<div style={{ width: 1220, height: 100, left: 300, top: 100, position: 'absolute', borderRadius: 16 }}>
            <div className="question-container">
              <h2 style={{ marginBottom: '70px', textAlign: 'center', marginTop: '90px' }}>What is your city?</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: '0 1 30%', paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: "100px" }}>
                  {/* Labels for first column... */}
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px'}}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleCheckboxChange} />
        Ryazan
      </label>
      {/* Add onChange event handler to each checkbox */}
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleCheckboxChange} />
        Hampton(VA)
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        San Isidro
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Tampa(FL)
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Hagen
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleCheckboxChange} />
        Moron
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Cordoba
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleCheckboxChange} />
        Aurora(IL)
      </label>
    </div>
    <div style={{ flex: '0 1 30%', paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Sterlitamak
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Bahia Blanca
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Baton Rouge (LA)
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Cincinnati (OH)
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Wupperal
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        San Jaun
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Salem (OR)
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Omsk
      </label>
      </div>
      <div style={{ flex: '0 1 30%', paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

      <div style={{ flex: '0 1 30%', paddingRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Krasnodar
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleCheckboxChange} />
        Cologne
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleCheckboxChange} />
        La Plata
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        North Las Vegas(NV)
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Kiel
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }}  onChange={handleCheckboxChange}/>
        Lubech
      </label>
      <label style={{ display: 'block', paddingBottom: '10px', fontSize: '16px' }}>
        <input type="checkbox" name="status" value="car" style={{ marginRight: '5px', transform: 'scale(1.5)' }} onChange={handleCheckboxChange} />
        Gelsenkrichen
      </label>
    </div>
</div>
</div>
<div className="buttons-container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '60px 100px 200px'}}>
        <button onClick={handlePreviousButtonClick} style={{backgroundColor: 'transparent', color: '#00CED1', border: '1px solid #00CED1', padding: '10px', borderRadius: '10px',height:'50px', width: '130px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', marginTop: '150px'}}>Previous</button>

  <button onClick={handleNextButtonClick} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', position:"relative", left:300, width: '13%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Next</button>
</div>
</div>


</div>
</div>
</div>
</div>
  );
};


export default DashboardSurvey60;
