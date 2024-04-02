import React from 'react'
function Navbar() {
    const navbarStyle = {
        width: '411px',
        height: '81px',
        top: '80px',
        left: '20px',
        padding: '8px',
        borderRadius: '30px',
        position: 'absolute'
    };
   
    return (
        <div style={navbarStyle}>
            <img src={process.env.PUBLIC_URL + '/bimgg.png'} alt="nd" style={{width:411, height:816}}/>
            
        </div>
    );
}

export default Navbar