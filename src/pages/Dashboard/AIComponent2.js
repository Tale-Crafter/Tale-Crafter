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




            <div className="question-container">
              <h4 style={{ marginBottom: '70px', textAlign: 'center', marginTop: '90px' }}>What is your city?</h4>
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

</div>




</div>
  );
};


export default DashboardSurvey60;
