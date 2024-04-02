import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { fetchSurveys } from './Api'; // Import fetchSurveys function from api.js

import Leftsidebar from "./Leftsidebar";
import Header from "./Header";
import Surveys from "./Surveys";

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
export default Survey;
