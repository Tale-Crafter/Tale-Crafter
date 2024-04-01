import React from 'react'
function Navbar() {
    const navbarStyle = {
        width: '411px',
        height: '816px',
        top: '1px',
        left: '1440px',
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
            <img src={process.env.PUBLIC_URL + '/bimg.png'} alt="nd" style={{width:411, height:816}}/>
            
        </div>
    );
}

export default Navbar