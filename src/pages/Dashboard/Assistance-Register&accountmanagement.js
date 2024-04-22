// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import Headcomponent from "./Headcomponent";
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
                <Headcomponent/>
                <div style={{width: 1400, height: 900, left: 340, top: 275, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Back button */}
                    <button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 23, top: 25, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
                        <div style={{ width: 32, height: 32, position: 'relative' }}>
                            <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
                        </div>
                    </button>
                    {/* Title */}
                    <div style={{left: 60, top: 25, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Registration and Account Management</div>

                    <div
                        style={{
                            width: 1350,
                            height: 360,
                            left: 23,
                            top: 75,
                            position: 'absolute',
                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 0%)',
                            borderRadius: 16,
                            overflow: 'hidden', // Ensure video does not exceed div boundaries
                        }}
                    >
                        <video
                            src={process.env.PUBLIC_URL + '/jj.mp4'}
                            width="50%" // Make the video fill the div horizontally
                            height="100%" // Make the video fill the div vertically
                            controls // Show video controls like play, pause, etc.
                            autoPlay // Automatically play the video when it's ready
                            loop // Loop the video indefinitely
                            muted // Mute the video (optional)
                            style={{ objectFit: 'cover' }} // Cover the entire area of the div with the video
                        />
                    </div>
                    <div style={{position: 'absolute',left:10,top:450}}>
                        <div style={{width: '26%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700'}}>Creating Your Account</div>
                        <div style={{ width: '95%', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', textAlign: 'left' , position: 'relative', top: 5,left:11}}>
                            To start your journey as a panelist, follow these simple steps to create your account
                        </div>
                        <div style={{ width: '100%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', textAlign: 'left',position: 'relative',left:35,top:10 }}>
                            1. Visit our homepage and click on the 'Sign Up' button.<br/>
                            2. Fill in the required information, including your email address and a secure password.<br/>
                            3. Complete your profile by providing accurate demographic details.<br/>
                            4. Verify your email address by clicking on the verification link sent to your inbox.<br/>
                            5. Congratulations! You're now a registered panelist and ready to start earning points.
                        </div> <br/>

                        <div style={{width: '30%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Account Management Tips</div>
                        <div style={{ width: '68%', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', position: 'relative', top: 5,left:11, textAlign: 'left' }}>
                            Provide additional tips for effective account management
                        </div>
                        <div style={{ width: '100%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: 'left' ,position: 'relative', top: 5,left:11}}>
                            <ul style={{ listStyleType: 'disc' }}>
                                <li>Tip 1: Regularly update your profile to receive surveys matching your demographic.</li>
                                <li>Tip 2: Keep your contact information up-to-date to ensure you receive important notifications.</li>
                                <li>Tip 3: Adjust notification preferences in your account settings for a personalized experience.</li>
                            </ul>
                        </div><br/>

                        <div style={{width: '19%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Common issues</div>
                        <div style={{ width: '70%', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', position: 'relative', top: 5,left:11, textAlign: 'left' }}>
                            Address common issues related to registration and account management
                        </div>
                        <div style={{ width: '100%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', textAlign: 'left' ,position: 'relative', top: 5,left:11}}>
                            <ul style={{ listStyleType: 'disc' }}>
                                <li>Issue 1: Didn't receive a verification email? Check your spam folder or request a new verification link.</li>
                                <li>Issue 2: Forgot your password? Use the 'Forgot Password' link on the login page to reset it.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;
