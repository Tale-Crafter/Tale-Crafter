import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';
import { useNavigate } from 'react-router-dom';

import Leftsidebar from "./Leftsidebar";
import Header from "./Header";

const Survey = ({ id, top, image, logo, points, title, description, numQuestions }) => {
    const [participated, setParticipated] = useState(false);

    const handleParticipate = () => {
        // Effectuer les actions nécessaires pour la participation, si nécessaire
        setParticipated(true);
    };

    return (
        <div className="Survey">
            <img style={{ width: 248, height: 141, left: 155, top, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16 }} src={process.env.PUBLIC_URL + `/${image}`} />
            <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 163, top: top + 8, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                <div style={{ textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>{points} points</div>
            </div>
            <div style={{ width: 172, height: 46, left: 225, top: top + 101, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word',textAlign:"left" }}>{title}</div>
            <div style={{ width: 732, left: 420, top: top , position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word',textAlign:"left" }}>{description}</div>
            <div style={{ left: 419, top: top + 30, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Number of Questions: </span><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>{numQuestions}</span></div>
            <div style={{ left: 419, top: top + 57, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Points Earned: </span><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>{points}</span></div>

            {participated ? (
                <div style={{ background: 'white', border: '2px #00BDA9 solid', padding: 16, left: 419, top: top + 90, position: 'absolute', borderRadius: 10, borderColor:'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: 'royalblue', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Participated</div>
                </div>
            ) : (
                <Link to={`/surveydetails/${id}`}>
                    <button onClick={handleParticipate} style={{ border: '2px #00BDA9 solid', padding: 16, left: 419, top: top + 90, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Participate</div>
                    </button>
                </Link>
            )}

            <img style={{ width: 48, height: 48, left: 163, top: top + 85, position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + `/${logo}`} />
        </div>
    );
};

const Surveys = () => {
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
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Surveys</span>
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}> <br /></span>
                    <span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span>
                </div>
                <div className="Surveys">
                    {surveyData.map((data, index) => (
                        <Survey key={index} {...data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Surveys;
