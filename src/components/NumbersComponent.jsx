import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const NumbersComponent = ({ onNumberSelect, handleRateSelect, selectedRate }) => {
    const [selectedBox, setSelectedBox] = useState(null); // State to manage selected box

    const rates = [
        '#FF1713',
        '#FA423F',
        '#FF633A',
        '#FF8529',
        '#FFC200',
        '#F5DE07',
        '#E4C500',
        '#C0CB00',
        '#9CCD00',
        '#76CC00',
        '#2AB100',
    ];

    return (
        <div className="App">
            {rates.map((rate, index) => (
                <div
                    key={index}
                    style={{
                        width: 78,
                        height: 96,
                        left: 252 + index * 88,
                        top: 200,
                        position: 'absolute',
                        cursor: 'pointer',
                        border: selectedBox === index ? '3px #00BDA9 solid' : 'none', // Add border for selected box
                        transition: 'border-color 0.3s', // Add transition for smooth effect
                    }}
                    onClick={() => {
                        handleRateSelect(index);
                        setSelectedBox(index); // Update selected box
                    }} 
                    onMouseEnter={() => onNumberSelect(index)} // Highlight box on hover
                    onMouseLeave={() => onNumberSelect(null)} // Remove highlight on mouse leave
                >
                    <div
                        style={{
                            width: 78,
                            height: 96,
                            position: 'absolute',
                            background: rate,
                            color: 'white',
                            borderRadius: 16,
                            boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.15)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                            position: 'relative', // Add position relative
                        }}
                    >
                        {/* Show the number on each blank */}
                        {index}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NumbersComponent;
