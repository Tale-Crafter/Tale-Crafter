import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected, onClick, value }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span
          style={{
              fontSize: '40px', // Adjust the font size to make the stars bigger
              cursor: 'pointer',
              color: selected ? 'gold' : '#ddd',
          }}
          onClick={onClick}
      >
        <FaStar />
      </span>
            <span>{value}</span>
        </div>
    );
};

const StarRankingSurvey = ({ onStarClick, value }) => {
    const [rating, setRating] = React.useState(value || 0); // Default rating from parent

    const handleStarClick = (newRating) => {
        setRating(newRating);
        if (onStarClick) {
            onStarClick(newRating); // Call the parent's callback
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            {[1, 2, 3, 4, 5].map((number) => (
                <Star
                    key={number}
                    selected={number <= rating}
                    onClick={() => handleStarClick(number)}
                    value={number}
                />
            ))}
            <div>
                {rating === 1 && <span>Very Dissatisfied</span>}
                {rating === 5 && <span>Very Satisfied</span>}
            </div>
        </div>
    );
};

export default StarRankingSurvey;

