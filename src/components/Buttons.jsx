import React from 'react'
import { useNavigate } from 'react-router-dom';


function Buttons({ title, nextPage }) {

    const navigate = useNavigate();

    const buttonStyle = {
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
    }


    return (
        <button style={buttonStyle} onClick={() => navigate(nextPage)}>{title}</button>
    )
}

export default Buttons