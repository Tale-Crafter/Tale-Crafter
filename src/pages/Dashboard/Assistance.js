import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import HeadcomponentAssistance from "./HeadcomponentAssistance";
import AccountAreaHeader from "./AccountAreaHeader";
import ContactF from "./ContactF";
import { ProfileComponent } from './ProfileComponent'; // Import the ProfileComponent

const opencage = require('opencage-api-client');

const Assistance = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <Header />
                <AccountAreaHeader />

                {/* Profile Section */}
                <div style={{ width: 1400, height: 'auto', left: 340, top: 230, position: 'absolute', background: 'white', borderRadius: 16, padding: '20px' }}>
                    <ProfileComponent /> {/* ProfileComponent inserted here */}
                </div>

                <div style={{width: 1400, height: 586, left: 340, top: 500, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Contact Form */}
                    <ContactF />
                </div>
            </div>
        </div>
    );
};

export default Assistance;
