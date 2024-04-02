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

const HistoryComponent = ({ id, name, type, points, date }) => {
  let backgroundColor;
  
  // Set background color based on the type
  switch (type) {
case 'Survey type':
      backgroundColor = 'rgba(0, 220, 197, 1)';
      break;
    case 'Focus Group':
      backgroundColor = 'rgba(255, 93, 143, 1)';
      break;
    case 'Survey Express':
      backgroundColor = 'rgba(61, 212, 48, 1)';
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
        <span style={{ ...nameStyle, marginLeft: '10px' }}>{name}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
          }}
        >
          {type}
        </div>
        <div style={{ marginLeft: '10px', color: '#000' }}>
          <span>{points} Points</span>
          <span style={{ marginLeft: '30px', color: '#666' }}>{date}</span>
        </div>
      </div>
    </div>
  );
};

HistoryComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default HistoryComponent;

