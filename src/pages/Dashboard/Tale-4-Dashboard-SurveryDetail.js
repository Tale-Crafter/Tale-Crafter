
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import mp4 from '../../images/3 Second Video.mp4';
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import manImg from "../../images/man.png";
import man1 from "../../images/man1.png";
import man2 from "../../images/man2.png";
import man4 from "../../images/man4.png";
const opencage = require('opencage-api-client');


    const Survey = ({ id, top, image, logo, points, title, description, numQuestions }) => {
        const [participated, setParticipated] = useState(false);
    
    }
    
    const DashboardSurveryDetail = () => {
        const navigate = useNavigate();
        const { iduser } = useParams();
        const [sidebarVisible, setSidebarVisible] = useState(true);
    
        const toggleSidebar = () => {
            setSidebarVisible(!sidebarVisible);
        };
    
        const surveyData = [
            { id: 1, top: 180, image: 'surv1.png', logo: 'surv1logo.png', points: 50, title: 'Lion KING', description: 'Customer Satisfaction', numQuestions: 15 },
            { id: 2, top: 337, image: 'surv2.png', logo: 'surv2logo.png', points: 50, title: 'Tunisie Telecom', description: 'Aliquam iaculis quam dapibus nulla gravida, eget semper velit sagittis.', numQuestions: 15 },
            { id: 3, top: 494, image: 'surv3.png', logo: 'surv3logo.png', points: 50, title: 'Ooredoo Tunisie', description: 'Nunc vitae arcu pellentesque, bibendum nibh nec, viverra eli', numQuestions: 15 },
            { id: 4, top: 651, image: 'surv4.png', logo: 'surv4logo.png', points: 50, title: 'Private', description: 'Nunc vitae arcu pellentesque, bibendum nibh nec, viverra eli', numQuestions: 15 },
        ];
    
        return (
            <div className="App">
    <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
    <Header/>
    <div style={{ left: 220, width: '80%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
        <div style={{ width: 1400, height: 736, left: 128, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }} />
        <div style={{ left: 155, top: 97, position: 'absolute',textAlign:"left",lineHeight:1.5 }}>
            <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Mauris egestas leo vel nulla tincidunt,</span>
            <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}> <br /></span>
            <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}>
            ac molestie sem consectetur</span>
            <br/><span style={{  color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}>2/04/2024 - 12:00</span>
        </div>
        <div className="Surveys">
            <div style={{
                width: '717px',
                height: '522px',
                top: '200px',
                left: '214px',
                borderRadius: '16px',
                position: 'absolute',
                backgroundColor: '#000'  /* Change this color as needed */
            }}>
                {/* Add the video component or video tag here */}
                {/* For example, if you're using an HTML5 video tag */}
                <video width="100%" height="100%" controls>
                    <source src={{mp4}} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Add the round picture here */}
            <div style={{
                width: '48px',
                height: '48px',
                top: '658px',
                left: '230px',
                borderRadius: '50%',  // This makes the picture round
                border: '1px solid black',  // Border
                position: 'absolute',
                overflow: 'hidden'  // This ensures the image stays within the bounds of the circle
            }}>
                <img src={{manImg}} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Add the text elements */}
            <div style={{
                fontFamily: 'Open Sans',
                fontWeight: '700',
                fontSize: '14px',
                lineHeight: '24px',
                top: '658px',  // Adjust the top position as needed
                left: '230px',  // Adjust the left position as needed
                position: 'absolute',
                color: '#000'  // Adjust the color as needed
            }}>
                George M. Trot
            </div>
            <div style={{
                fontFamily: 'Open Sans',
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '24px',
                top: '710px',  // Adjust the top position as needed
                left: '230px',  // Adjust the left position as needed
                position: 'absolute',
                color: '#000'  // Adjust the color as needed
            }}>
                Political geographer
            </div>
            {/* Add the four pictures */}
            <div style={{
                width: '173px',
                height: '108px',
                top: '730px',
                left: '214px',
                borderRadius: '8px',
                position: 'absolute',
                border: '1px solid black'  // Border
            }}>
                <img src={{man1}} alt="pic1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
                width: '174px',
                height: '108px',
                top: '730px',
                left: '395px',
                borderRadius: '8px',
                position: 'absolute',
                border: '1px solid black'  // Border
            }}>
                <img src={{man2}} alt="pic2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
                width: '173px',
                height: '108px',
                top: '730px',
                left: '577px',
                borderRadius: '8px',
                position: 'absolute',
                border: '1px solid black'  // Border
            }}>
                <img src={{man4}} alt="pic3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
                width: '173px',
                height: '108px',
                top: '730px',
                left: '758px',
                borderRadius: '8px',
                position: 'absolute',
                border: '1px solid black'  // Border
            }}>
                <img src={{man4}} alt="pic4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        </div>
    </div>
    </div>
    

        );
    };
export default DashboardSurveryDetail 
