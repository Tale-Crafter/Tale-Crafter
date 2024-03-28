import * as React from 'react';


import group from '../images/Group.png';

import logoTale from '../images/LogoTale.png';
import backgroundImage from '../images/BlueBackground.png';
import '../Styles/leftBackgroundStyle.css'

function LeftBackground({ mainText, detailsText }) {
    return (
        <div>
            <div
                className="leftBg"
                style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='mainText'>{mainText}</div>
                <div className='detailsText'>{detailsText}</div>
                <div className="logoTale" style={{ backgroundImage: `url(${logoTale})` }} />


                <div className="languageStyle">
                    <img src={group} alt="Language" />
                    <select className="language-dropdown" style={{ border: 'none' }}>
                        <option value="en" style={{ width: '12px', height: '12px' }} >EN</option>
                        <option value="fr">FR</option>
                    </select>
                </div>

            </div>
        </div>
    );
}

export default LeftBackground