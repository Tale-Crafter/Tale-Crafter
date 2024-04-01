import React from 'react'
import iconoir_language from '../images/iconoir_language.png';
import Logo_Tale from '../images/Logo_Tale.png';
function Header() {
    const imglogo = {
        width: '160px',
        height: 'autopx',
        padding: '10px',

    }
    const imglanguage = {
        position: 'absolute',
        top: '16px',
        right: '440px',
        width: '160px',
        height: '40px',
    }
    return (
        <div className="row-4" >
            <div>
                <img src={process.env.PUBLIC_URL + '/blogotale.png'} alt="Logo" style={imglogo} />
            </div>
            <div className="d-flex" style={imglanguage}>
                <img src={process.env.PUBLIC_URL + '/btraduction.png'} alt="Language" />
                <select className="language-dropdown" style={{ position:"relative",top:-10,border: 'none' }}>
                    <option value="en" style={{width: '12px', height: '12px',fontSize: 14, font:"revert"}} >EN</option>
                    <option value="fr">FR</option>
                </select>
            </div>
        </div>

    )
}

export default Header