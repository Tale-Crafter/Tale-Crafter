// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import Frame1 from '../../images/Frame1.png';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import { Link } from 'react-router-dom';

const opencage = require('opencage-api-client');

const Awards = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <Header/>
                <div style={{ width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }}>




    <div style={{ position: 'relative', width: 284, height: 456, background: 'linear-gradient(142deg, white 0%, #E0F8FF 48%, white 100%)', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)', borderRadius: '16px', top: 358, bottom: 6, right: 6, left: 990, justifyContent: 'center', alignItems: 'center'  }}>
        <div style={{ position: 'absolute', top: 100, left: 0, bottom: 0, right: 0 }}>
            <img src={Frame1} alt="Frame1" style={{ width: 107, height: 107, borderRadius: '16px',top:'20%',position: 'center' }} />
        </div>

        <div style={{ position: 'absolute', color: '#3F0082', fontSize: '22px', fontFamily: 'Revert', fontWeight: '800', lineHeight: '20px', wordWrap: 'break-word', top: '212px', left: '103px', right: '98px' }}>Talebot</div>

        <div style={{ position: 'absolute', width: 'calc(100% - 72px)', textAlign: 'center', color: 'black', fontSize: '14px', fontFamily: 'Open Sans', fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word', top: '248px', left: '36px', right: '36px', bottom: '148px' }}>I'm your virtual assistant here to help make your experience seamless and enjoyable</div>

        <Link to={`/Talebot2/${iduser}`}>
         <div style={{ position: 'absolute',top: 381,width: 170, height: 19, padding: '16px', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', display: 'flex', borderRadius: '10px', justifyContent: 'center', alignItems: 'center', display: 'inline-flex',  right: 41,left:41, bottom: 24 }}>
                     
                         <div style={{ color: 'white', fontSize: '14px', fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word' }}>Next</div>
                    

         </div>
          </Link>
    </div>



        </div>

        </div>
        </div>
    );
};

export default Awards;
