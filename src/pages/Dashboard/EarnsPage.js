import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css';  // Import the CSS file

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";

const LanguagePage = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleNext = () => {
        setShowConfirmation(true);
    };

    return (
        <div className="App">
            {/*<Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />*/}
            {/*<div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>*/}
            {/*    <Header/>*/}
                <div style={{width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/*<div style={{ width: 75, top: 20, left: 0, position: 'absolute' }}>*/}
                    {/*    <img style={{ width: 48, height: 48,position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + '/surv2logo.png'} />*/}
                    {/*    <div style={{ width: 172, height: 46, left: 68, top: 20, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Tunisie Telecom</div>*/}
                    {/*</div>*/}
                    <img style={{top:220,left:650, width: 125, height: 125,position: 'absolute', border: '2px white solid' }} src={process.env.PUBLIC_URL + '/earns.png'} />

                    <div style={{position:"relative",top:400,width: '100%', textAlign: 'center'}}><span style={{color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>Donec ut neque a lorem ultrices scelerisque at vitae lectus<br/><br/></span><span style={{color: '#F9BC33', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>100 points</span></div>

                    {/* Use Link component with 'to' attribute to specify the link */}
                    <Link to={`/home`} style={{borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word',position:"relative",left:560,top:600,width: '13%', height: '4%', padding: 16,textDecoration:"auto", background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Home Page</Link>
                </div>
        {/*    </div>*/}
        </div>
    );
};

export default LanguagePage;
