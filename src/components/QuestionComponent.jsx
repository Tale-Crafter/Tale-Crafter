import React from 'react';

const QuestionComponent = ({ onChange }) => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '100px'
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    marginLeft: '300px'
  };

  const handleRadioChange = (event) => {
    onChange(event); // Notify the parent component of the change
  };

  return (
    <div style={containerStyle}>
      <form style={{ marginTop: "20px", marginLeft: "20px", display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        <div style={itemStyle}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="choice" value="1" style={{ width: '32px', height: '32px' }} onChange={handleRadioChange} />
            Choice 1
          </label>
        </div>
        <div style={itemStyle}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="choice" value="2" style={{ width: '32px', height: '32px' }} onChange={handleRadioChange} />
            Choice 2
          </label>
        </div>
        <div style={itemStyle}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="choice" value="3" style={{ width: '32px', height: '32px' }} onChange={handleRadioChange} />
            Choice 3
          </label>
        </div>
        <div style={itemStyle}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="choice" value="4" style={{ width: '32px', height: '32px' }} onChange={handleRadioChange} />
            Choice 4
          </label>
        </div>
        <div style={itemStyle}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="choice" value="5" style={{ width: '32px', height: '32px' }} onChange={handleRadioChange} />
            Choice 5
          </label>
        </div>
        <div style={itemStyle}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input type="radio" name="choice" value="6" style={{ width: '32px', height: '32px' }} onChange={handleRadioChange} />
            Choice 6
          </label>
        </div>
      </form>
    </div>
  );
};

export default QuestionComponent;




