// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
const opencage = require('opencage-api-client');

const Awards = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
                <div style={{position: 'absolute', width: '73.5%', height: '177px', background: 'linear-gradient(90deg, #00EDFC 0%, #98C1FF 47%, #FFB7B7 100%)', borderRadius: '16px',top:85,left:340}}>
                    <div style={{position: 'absolute', top: '65px', right: '723px', left: '46px', bottom: '97px'}}>
                        <div style={{color: '#111111', fontSize: '38px', fontFamily: 'revert', fontWeight: 900, lineHeight: '32px', wordWrap: 'break-word',textAlign:"left"}} >Privacy Policy</div>
                    </div>

                </div>
        </div>
    );
};

export default Awards;
