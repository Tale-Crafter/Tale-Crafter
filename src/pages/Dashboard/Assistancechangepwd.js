// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Changepwd from "./Changepwd";
import AccountAreaHeader from "./AccountAreaHeader";
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
                <AccountAreaHeader/>
                <div style={{width: 1400, height: 546, left: 340, top: 230, position: 'absolute', background: 'white', borderRadius: 16,padding:20}} >
                    <Changepwd/>
                </div>
            </div>
        </div>
    );
};

export default Awards;
