import * as React from 'react';




import blogotale from '../images/blogotale.png';
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
                <div className="logoTale" style={{ backgroundImage: `url(${blogotale})` }} />


                
            </div>
        </div>
    );
}

export default LeftBackground