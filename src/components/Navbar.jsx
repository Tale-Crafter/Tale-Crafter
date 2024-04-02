import React from 'react'
import Left_background from '../images/Left_background.png'
function Navbar() {
    const navbarStyle = {
        width: '411px',
        height: '816px',
        top: '1px',
        left: '1450px',
        padding: '8px',
        borderRadius: '30px',
        position: 'absolute'
    };
    const textStyle = {
        position: 'absolute',
        top: '32%',
        left: '57%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        fontSize: '18px',
        textAlign: 'center',
        zIndex: 1,
    };
    return (
        <div style={navbarStyle}>
            <img src={Left_background} alt="nd" style={{width:411, height:816}} />
            <div style={textStyle}>
                <h1>Hello,Friend!</h1>
                <p>Enter your personal details
                    and start journey with us</p>
            </div>
        </div>
    );
}

export default Navbar
