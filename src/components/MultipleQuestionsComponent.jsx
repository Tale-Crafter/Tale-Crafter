
import React, { useState } from 'react';

const MultipleQuestionsComponent = ({ onChange }) => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '100px'
  };
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target || {}; 
    setCheckedItems({ ...checkedItems, [name]: checked });
    if (event.target) {
      onChange(checked);
    }
  };
  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    marginLeft: '300px' // Adding margin for both vertical and horizontal space
  };

  return (
    <div style={{ fontFamily: 'Revert', fontSize: '18px', fontWeight: '700', letterSpacing: '0em' }}>
      Here's the advert in full, do you remember seeing/hearing it now?
      <div style={containerStyle}>
        <form style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          <div style={itemStyle}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" name="choice" value="1" style={{ width: '32px', height: '32px' }}  onChange={handleCheckboxChange} />
              Choice 1
            </label>
          </div>
          <div style={itemStyle}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" name="choice" value="2" style={{ width: '32px', height: '32px' }} onChange={handleCheckboxChange} />
              Choice 2
            </label>
          </div>
          <div style={itemStyle}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" name="choice" value="3" style={{ width: '32px', height: '32px' }} onChange={handleCheckboxChange} />
              Choice 3
            </label>
          </div>
          <div style={itemStyle}>
            <label style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" name="choice" value="4" style={{ width: '32px', height: '32px' }} onChange={handleCheckboxChange}/>
              Choice 4
            </label>
          </div>
          <div style={itemStyle}>
            <label style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" name="choice" value="5" style={{ width: '32px', height: '32px' }} onChange={handleCheckboxChange}/>
              Choice 5
            </label>
          </div>
          <div style={itemStyle}>
            <label style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" name="choice" value="6" style={{ width: '32px', height: '32px' }} onChange={handleCheckboxChange}/>
              Choice 6
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultipleQuestionsComponent;
