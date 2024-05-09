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
                <div style={{position: 'absolute', width: '73.5%', height: '177px', background: 'linear-gradient(90deg, #00C0FC 0%, #98ECFF 47%, #FFE2B7 100%)', borderRadius: '16px',top:85,left:340}}>
                    <div style={{position: 'absolute', top: '43px', right: '723px', left: '46px', bottom: '97px'}}>
                        <div style={{color: '#111111', fontSize: '32px', fontFamily: 'revert', fontWeight: 800, lineHeight: '32px', wordWrap: 'break-word',textAlign:"left"}} >Assistance Center</div>
                    </div>

                    <div style={{position: 'absolute', top: '80px', right: '336px', left: '46px', bottom: '51px',textAlign:'left'}}>
                        <div style={{color: '#111111', fontSize: '14px', fontFamily: 'revert',fontweight: 400, lineHeight: '24px',wordwrap: 'break-word', marginTop: '20px'}}>Welcome to our Assistance Center, dedicated to helping you make the most of your experience as a valued panelist. Whether you have questions about registration, survey participation, or rewards, we're here to assist you</div>
                    </div>
                    <div style={{position: 'absolute', top: '20px', right: '31px'}}>
                        <img src={process.env.PUBLIC_URL + '/q.png'} alt="Question" style={{width: '218px', height: '145px'}} />
                    </div>
                </div>
        </div>
    );
};

export default Awards;
