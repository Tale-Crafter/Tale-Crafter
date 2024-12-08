import React from 'react'

function Button() {
    const buttonStyle = {
        background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)',
        width: '500px',
        height: '51px',
        top: '510px',
        left: '230px',
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
    };
    return (
        <button style={buttonStyle} type="submit"> Next</button>
    )
}

export default Button
