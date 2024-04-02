import React from 'react';
import PropTypes from 'prop-types';

const nameStyle = {
  fontFamily: 'Revert',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '19px',
  letterSpacing: '0em',
  textAlign: 'left',
};
const handleBoxClick = (event) => {
  // Get the clicked box element
  const clickedBox = event.currentTarget;

  // Check if the border color is light blue
  if (clickedBox.style.borderColor === 'blue') {
      // If it is light blue, change it back to the default color (black)
      clickedBox.style.borderColor = 'black';
  } else {
      // If it is not light blue, change it to light blue
      clickedBox.style.borderColor = 'blue';
  }
};

const RechargeComponent = ({ id, name, points, sum, num, type, date }) => {
  let backgroundColor;
  
  // Set background color based on the type
  switch (type) {
    case 'Lycamobile':
      backgroundColor = 'rgba(0, 220, 197, 1)';
      break;
    case 'Ooredoo':
      backgroundColor = 'rgba(255, 20, 29, 1)';
      break;
    case 'Orange':
      backgroundColor = 'rgba(255, 153, 0, 1)';
      break;
    case 'Tunisie Telecom':
      backgroundColor = 'rgba(32, 103, 209, 1)';
      break;
    default:
      backgroundColor = 'rgba(17, 17, 17, 0.04)';
  }

  return (
    <div
      style={{
        width: '1218px',
        height: '56px',
        position: 'relative',
        borderRadius: '8px',
        background: 'rgba(17, 17, 17, 0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        marginBottom: '10px',
      }}
    >
      <div>
        <span>{id}</span>
        <span style={{ ...nameStyle, marginLeft: '10px',fontFamily: 'Revert' }}>{name}</span>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '10px', color: '#000' }}>
          <span>{points} Points</span>
          <span style={{ marginLeft: '300px',fontFamily: 'Revert' }}>{sum}  DT</span>
          <span style={{ marginLeft: '150px',fontFamily: 'Revert' }}>{num}</span>
        </div>
        <div
          style={{
            width: '120px',
            height: '22px',
            padding: '4px 8px',
            borderRadius: '8px',
            background: backgroundColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            marginRight:"20px",
            marginLeft: '50px',
            fontFamily: 'Revert',
          }}
        >
          {type}
        </div>
        <div style={{marginRight:"20px", marginLeft: '50px', color: '#000' }}>
          <span style={{ marginLeft: '20px', color: '#666' }}>{date}</span>
        </div>
      </div>
    </div>
  );
};

RechargeComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default RechargeComponent;


