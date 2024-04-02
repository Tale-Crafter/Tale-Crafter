// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Headcomponent from "./Headcomponent";
import HeadcomponentAssistance from "./HeadcomponentAssistance";
const opencage = require('opencage-api-client');

const Awards = () => {
    const { iduser } = useParams();
    const navigate = useNavigate();
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const handleBackClick = () => {
        // Redirect to /Surveys/:iduser
        navigate(`/home/${iduser}`);
    };
    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <Header/>
                <HeadcomponentAssistance/>
                <div style={{width: 1400, height: 542, left: 340, top: 275, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <div style={{ position: 'absolute', left: 10, top: 15, textAlign: 'left' }}>
                        <div style={{ width: '24%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400' }}>Last Updated: 20/10/2024</div>
                        <div style={{ width: '103%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Thank you for using TALE. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information.</div>
                        <br/>
                        <div style={{ width: '100%' }}>
                            <span style={{ color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', textAlign: 'left' }}>Information We Collect<br /></span>
                            <ol style={{ paddingLeft: '20px', textAlign: 'left' }}>
                                <li>
                                    <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', textAlign: 'left' }}>Personal Information:<br /></span>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
                                        <li>
                        <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: 'left' }}>
                            When you register on the Platform, we may collect personal information such as your name, email address, and demographic information.
                        </span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', textAlign: 'left' }}>Panelist Responses:<br /></span>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
                                        <li>
                        <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: 'left' }}>
                            We collect data related to your responses and activities on the Platform's surveys, questionnaires, and other interactive features.
                        </span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', textAlign: 'left' }}>Device Information:<br /></span>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
                                        <li>
                        <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: 'left' }}>
                            We may collect information about the device you use to access the Platform, including IP address, browser type, and operating system.
                        </span>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div style={{ position: 'absolute', left: 10, bottom: 5, textAlign: 'left' }}>
                        <div style={{ width: '100%',position: 'relative', top: 45 }}>
                            <span style={{ color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>How We Use Your Information<br/></span>
                            <ol style={{ paddingLeft: '20px', textAlign: 'left' }}>
                                <li>
                                    <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Panel Matching:<br/></span>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
                                        <li>
                                            <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>We use your personal information to match you with relevant surveys and opportunities based on your profile.<br/></span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Improving the Platform:<br/></span>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
                                        <li>
                                            <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Your feedback and usage patterns help us enhance and optimize the Platform's features and user experience.<br/></span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Communication:<br/></span>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
                                        <li>
                                            <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>We may use your email address to send important updates, announcements, and information related to the Platform.</span>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div style={{ width: '100%', marginTop: '45px' }}>
                            <span style={{ color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>Information Sharing<br/></span>
                            <ol style={{ paddingLeft: '20px', textAlign: 'left' }}>
                                <li>
                                    <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Third-Party Partners:<br/></span>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
                                        <li>
                                            <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>We may share non-personal, aggregated data with third-party partners for research, analytics, and advertising purposes.<br/></span>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Legal Compliance:<br/></span>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
                                        <li>
                                            <span style={{ color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>We may disclose your information when required by law or to protect our rights, privacy, safety, or property.</span>
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Awards;
