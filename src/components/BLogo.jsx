import * as React from 'react';




import blogotale from '../images/blogotale.png';

import '../styles/leftBackgroundStyle.css'

function BLogo({ mainText, detailsText }) {
    return (
        <div>
            <div
               
              className="logoTale" style={{
                backgroundImage: `url(${blogotale})`,
                width: '126px',
                left:'50px',
                height: '44.6px',
                backgroundSize: 'contain', // Adjust for desired size
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat' // Added to prevent repetition
              }}>
              </div>
              


                
            </div>
      
    );
}

export default BLogo
