import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import Leftsidebar from "./Leftsidebar";
import {useNavigate, useParams} from "react-router-dom";
import Header from "./Header";
import LanguagePage from "./LanguagePage";
import Datasecurity from "./Datasecurity";
import {fetchcompanyById, fetchSurveyById, fetchSurveys} from "./Api";

const Container = ({ children }) => (
    <div className="Appsd">
            {children}
    </div>
);

const InfoBox = ({ points, color }) => (
    <div style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', ...color }}>
        <div style={{ textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>{points} points</div>
    </div>
);

const InfoBox1 = ({ titre, points, color }) => (
    <div style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', ...color }}>
        <div style={{ textAlign: 'right', color: 'black', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>{titre}:</div>
        <div style={{ textAlign: 'right', color: 'black', fontSize: 10, fontFamily: 'revert', fontWeight: '900', wordWrap: 'break-word' }}>{points}</div>
    </div>
);

const TextStyle = {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'revert',
    wordWrap: 'break-word',
};

const SurveyDetail = () => {
    const navigate = useNavigate();
    const { idSurvey } = useParams();
    console.log('Survey ID:', idSurvey); // Check the output here
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [surveyData, setSurveyData] = useState({ questions: [] }); // Start with an empty array for questions
    const [companyData, setcompanyData] = useState([]); // Start with an empty array for questions

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const [showLanguageComponent, setShowLanguageComponent] = useState(false);

    const handleBackClick = () => {
        // Redirect to /Surveys
        navigate(`/Surveys`);
    };

    const handleStartClick = () => {
        // Hide all styles and show the language component
        setShowLanguageComponent(true);
    };

    useEffect(() => {
        if (!idSurvey) {
            console.error('Survey ID is undefined');
            return;
        }
        const getSurveyData = async () => {
            try {
                const data = await fetchSurveyById(idSurvey);
                setSurveyData(data);

                const Cdata = await fetchcompanyById(surveyData.company.id);
                setcompanyData(Cdata);
            } catch (error) {
                console.error('Error fetching survey:', error);
            }
        };

        getSurveyData();
        console.log(surveyData)
    }, [idSurvey]);

    if (!surveyData) {
        return <div>Loading...</div>;
    }


    // Constants
    const borderRadius = 16;
    const mainColor = '#00BDA9';
    const secondaryColor = '#F9DC5C';
    const tertiaryColor = '#FFA3BF';
    const gradientColor = 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)';

    return (
        <Container>
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <Header />
            {!showLanguageComponent && (
                <div
                    style={{
                        left: 100,
                        width: '80%',
                        height: '100%',
                        position: 'relative',
                        background: '#EFEFEF',
                        marginLeft: !sidebarVisible ? -100 : 0,
                        transition: 'margin-left 0.3s ease',
                    }}
                >
                    {/* Background elements */}
                    <div
                        style={{
                            width: 1400,
                            height: 736,
                            left: 250,
                            top: 80,
                            position: 'absolute',
                            background: 'white',
                            borderRadius: 16,
                        }}
                    />
                    <img
                        src={process.env.PUBLIC_URL + '/back.png'}
                        style={{
                            width: 1350,
                            height: 222,
                            left: 276,
                            top: 152,
                            position: 'absolute',
                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)',
                            borderRadius: 16,
                        }}
                    />

                    {/* Here to display survey.Points, title, introduction, and other information */}
                    <InfoBox
                        points={surveyData.questions.length}
                        color={{
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 4,
                            paddingBottom: 4,
                            left: 295,
                            top: 163,
                            position: 'absolute',
                            background: mainColor,
                            borderRadius,
                        }}
                    />

                    {/* Number of Questions */}
                    <InfoBox1
                        titre={"Number of Questions"}
                        points={surveyData.questions.length}
                        color={{
                            ...TextStyle,
                            paddingLeft: 16,
                            paddingRight: 16,
                            paddingTop: 10,
                            paddingBottom: 10,
                            left: 280,
                            top: 390,
                            position: 'absolute',
                            background: secondaryColor,
                        }}
                    />

                    {/* Points Earned */}
                    <InfoBox1
                        titre={"Points Earned"}
                        points={surveyData.questions.length}
                        color={{
                            ...TextStyle,
                            paddingLeft: 16,
                            paddingRight: 16,
                            paddingTop: 10,
                            paddingBottom: 10,
                            left: 455,
                            top: 390,
                            position: 'absolute',
                            background: tertiaryColor,
                        }}
                    />

                    {/* Logo and Company name */}
                    <img
                        style={{
                            width: 48,
                            height: 48,
                            left: 302,
                            top: 318,
                            position: 'absolute',
                            borderRadius: 9999,
                            border: '2px white solid',
                        }}
                        src={process.env.PUBLIC_URL + '/surv2logo.png'}
                    />
                    <div
                        style={{
                            width: 172,
                            height: 46,
                            left: 370,
                            top: 340,
                            position: 'absolute',
                            color: 'white',
                            fontSize: 14,
                            fontFamily: 'revert',
                            fontWeight: '700',
                            lineHeight: 1,
                            wordWrap: 'break-word',
                        }}
                    >
                        {/*{surveyData.company}!*/}
                        {companyData.companyName}!!
                    </div>

                    {/* Title */}
                    <div
                        style={{
                            width: 993,
                            left: 314,
                            top: 102,
                            position: 'absolute',
                            color: '#111111',
                            fontSize: 24,
                            fontFamily: 'revert',
                            fontWeight: '700',
                            lineHeight: 1,
                            wordWrap: 'break-word',
                        }}
                    >
                        {surveyData.title}
                    </div>

                    {/* Back button */}
                    <button
                        onClick={handleBackClick}
                        style={{
                            width: 30,
                            height: 30,
                            padding: 0,
                            left: 276,
                            top: 102,
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'inline-flex',
                            background: 'transparent',
                            border: 0,
                        }}
                    >
                        <div style={{ width: 32, height: 32, position: 'relative' }}>
                            <img
                                src={process.env.PUBLIC_URL + '/retour.png'}
                                style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }}
                            />
                        </div>
                    </button>

                    {/* Introduction */}
                    <div style={{ width: 1350, left: 280, top: 445, position: 'absolute' }}>
                        <span
                            style={{
                                color: 'black',
                                fontSize: 16,
                                fontFamily: 'revert',
                                fontWeight: '700',
                                lineHeight: 1,
                                wordWrap: 'break-word',
                            }}
                        >
                            Introduction<br />
                        </span>
                        <span
                            style={{
                                color: 'black',
                                fontSize: 14,
                                fontFamily: 'revert',
                                fontWeight: '400',
                                lineHeight: 1,
                                wordWrap: 'break-word',
                            }}
                        >
                            {surveyData.description}
                        </span>
                    </div>

                    {/* Start button */}
                    <div
                        onClick={handleStartClick}
                        style={{
                            width: 170,
                            padding: 16,
                            left: 1420,
                            top: 749,
                            position: 'absolute',
                            background: gradientColor,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'inline-flex',
                            cursor: 'pointer',
                        }}
                    >
                        <div
                            style={{
                                color: 'white',
                                fontSize: 14,
                                fontFamily: 'revert',
                                fontWeight: '600',
                                wordWrap: 'break-word',
                            }}
                        >
                            Start
                        </div>
                    </div>
                </div>
            )}
            {showLanguageComponent && <Datasecurity />}
        </Container>
    );
};

export default SurveyDetail;
