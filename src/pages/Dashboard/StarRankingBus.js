import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected, onClick }) => {
  return (
    <span
      style={{
        fontSize: '80px', // Adjust the font size to make the stars bigger
        marginRight: '30px',
        cursor: 'pointer',
        color: selected ? 'gold' : '#ddd',
      }}
      onClick={onClick}
    >
      <FaStar />
    </span>
  );
};

const StarRanking = ({ onStarClick }) => {
  const [rating, setRating] = React.useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
    onStarClick(newRating);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {[1, 2, 3, 4, 5].map((number) => (
        <Star
          key={number}
          selected={number <= rating}
          onClick={() => handleStarClick(number)}
        />
      ))}
    </div>
  );
};

export default StarRanking;

