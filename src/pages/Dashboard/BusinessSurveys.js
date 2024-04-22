import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';
import { useNavigate } from 'react-router-dom';

import Leftsidebar from "./Leftsidebar";
import Header from "./Header";
import BusinessLeftsidebar from "./BusinessLeftsidebar";
import BHeader from "./BHeader";

const Survey = ({ id, top, image, logo, etat, title, description, numQuestions, onSelectionChange }) => {
    const [participated, setParticipated] = useState(false);

    const handleParticipate = () => {
        // Effectuer les actions nécessaires pour la participation, si nécessaire
        setParticipated(true);
    };
    const [popupVisible, setPopupVisible] = useState(false);
    const [selected, setSelected] = useState(false);

    const handleAction = (action) => {
        switch (action) {
            case 'Close':
                // Implement close action
                break;
            case 'Duplicate':
                // Implement duplicate action
                break;
            case 'Share':
                // Implement share action
                break;
            case 'Delete':
                // Implement delete action
                break;
            default:
                break;
        }
        setPopupVisible(false);
    };

    return (
        <div className="Survey" onClick={() => onSelectionChange(id)} style={{ background: selected ? 'rgba(0, 0, 0, 0.06)' : 'none' }}>
            <img style={{ border: '3px #F9BC33 solid',width: 248, height: 141, left: 155, top, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16 }} src={process.env.PUBLIC_URL + `/${image}`} />
            <div style={{ textAlign:"right",paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 330, top: top + 8, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'right', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                <div style={{ textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>{etat}</div>
            </div>
            <div style={{ width: 172, height: 46, left: 225, top: top + 101, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word',textAlign:"left" }}>{title}</div>
            <div style={{ width: 732, left: 420, top: top , position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word',textAlign:"left" }}>{description}</div>
            <div style={{ left: 419, top: top + 30, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Number of Questions: </span><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>{numQuestions}</span></div>
            <div style={{ left: 419, top: top + 57, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Points Earned: </span><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>{etat}</span></div>
            {/* Three points button */}
            <div className="ActionsButton" onClick={(e) => { e.stopPropagation(); setPopupVisible(true); }}>
                <span className="Dot" />
                <span className="Dot" />
                <span className="Dot" />
            </div>
            {/* Popup */}
            {popupVisible && (
                <div className="Popup" style={{ position: 'absolute', right: 0 }}>
                    <button onClick={() => handleAction('Close')}>Close</button>
                    <button onClick={() => handleAction('Duplicate')}>Duplicate</button>
                    <button onClick={() => handleAction('Share')}>Share</button>
                    <button onClick={() => handleAction('Delete')}>Delete</button>
                </div>
            )}

            {participated ? (
                <div style={{width:110, background: 'white', border: '2px #F9BC33 solid', padding: 16, left: 419, top: top + 90, position: 'absolute', borderRadius: 10, borderColor:'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: '#F9BC33', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Details</div>
                </div>
            ) : (
                <Link to={`/surveydetails/${id}`}>
                    <button onClick={handleParticipate} style={{ width:110,border: 'none', padding: 16, left: 419, top: top + 90, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Details</div>
                    </button>
                </Link>
            )}


            <img style={{ width: 48, height: 48, left: 163, top: top + 85, position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + `/${logo}`} />


        </div>
    );
};

const BSurveys = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedSurvey, setSelectedSurvey] = useState(null);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const handleSelectionChange = (surveyId) => {
        setSelectedSurvey(surveyId);
    };

    const surveyData = [
        { id: 1, top: 180, image: 'surv1.png', logo: 'surv1logo.png', etat: 'In progress', title: 'Lion KING', description: 'Proin placerat felis quis sem eleifend, quis ornare ipsum lobortis.', numQuestions: 15 },
        { id: 2, top: 337, image: 'surv2.png', logo: 'surv1logo.png', etat: 'In progress', title: 'Lion KING', description: 'Aliquam iaculis quam dapibus nulla gravida, eget semper velit sagittis.', numQuestions: 15 },
        { id: 3, top: 494, image: 'surv3.png', logo: 'surv1logo.png', etat: 'Soon', title: 'Lion KING', description: 'Nunc vitae arcu pellentesque, bibendum nibh nec, viverra eli', numQuestions: 15 },
        { id: 4, top: 651, image: 'surv4.png', logo: 'surv1logo.png', etat: 'Completed', title: 'Lion KING', description: 'Nunc vitae arcu pellentesque, bibendum nibh nec, viverra eli', numQuestions: 15 },
    ];

    return (
        <div className="App">
            <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <BHeader/>
            <div style={{ left: 220, width: '80%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <div style={{ width: 1400, height: 736, left: 128, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }} />
                <div style={{ left: 155, top: 97, position: 'absolute',textAlign:"left",lineHeight:1.5 }}>
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Surveys</span>
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}> <br /></span>
                    <span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>Survey Stats and Details Overview!</span>
                    <Link to={`/chsurvey`}>
                    <button  style={{   padding: '10px 40px',border: 'none',  borderRadius: '10px', left: 1200,top:-5, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Create Survey</div>
                    </button></Link>
                </div>
                <div className="Surveys">
                    {surveyData.map((data, index) => (
                        <Survey key={index} {...data} onSelectionChange={handleSelectionChange} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BSurveys;
