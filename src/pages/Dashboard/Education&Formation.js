import React, {useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import Leftsidebar from "./Leftsidebar";
import {useNavigate, useParams} from "react-router-dom";
import Header from "./Header";
import LanguagePage from "./LanguagePage";
import Datasecurity from "./Datasecurity";

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
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const [showLanguageComponent, setShowLanguageComponent] = useState(false);

    const handleBackClick = () => {
        // Redirect to /Surveys
        navigate(`/home`);
    };

    const handleStartClick = () => {
        // Hide all styles and show the language component
        setShowLanguageComponent(true);
    };
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
                <div style={{ left: 100, width: '80%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                    {/* Background elements */}
                    <div style={{ width: 1400, height: 736, left: 250, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }} />
                    <img
                        src={process.env.PUBLIC_URL + '/ef.png'}
                        style={{ width: 1350, height: 222, left: 276, top: 152, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16 }}
                    />

                    {/* Points box */}
                    <InfoBox points={50} color={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 295, top: 163, position: 'absolute', background: mainColor, borderRadius }} />

                    {/*/!* Number of Questions *!/*/}
                    {/*<InfoBox1 titre={"Number of Questions"} points={15} color={{ ...TextStyle, paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, left: 280, top: 390, position: 'absolute', background: secondaryColor }} />*/}

                    {/*/!* Points Earned *!/*/}
                    {/*<InfoBox1 titre={"Points Earned"} points={50} color={{ ...TextStyle, paddingLeft: 16, paddingRight: 16, paddingTop: 10, paddingBottom: 10, left: 455, top: 390, position: 'absolute', background: tertiaryColor }} />*/}

                    {/* Logo and Company name */}
                    <img style={{ width: 48, height: 48, left: 302, top: 318, position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + '/ltale.png'} />
                    <div style={{ width: 172, height: 46, left: 370, top: 340, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Tale</div>

                    {/* Title */}
                    <div style={{ width: 993, left: 314, top: 102, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Education and formation</div>

                    {/* Back button */}
                    <button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 276, top: 102, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
                        <div style={{ width: 32, height: 32, position: 'relative' }}>
                            <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
                        </div>
                    </button>
                    <div style={{left: 280, top: 385, position: 'absolute', color: '#111111', fontSize: 20, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Details</div>

                    <img src={process.env.PUBLIC_URL + '/noq.png'} style={{width: 28, height: 28, left: 280, top: 415, position: 'absolute'}}></img>
                    <div style={{left: 312, top: 420, position: 'absolute', color: 'grey', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Number of Questions:</div>
                    <div style={{left: 457, top: 420, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '750',  wordWrap: 'break-word'}}>15</div>


                    <img src={process.env.PUBLIC_URL + '/pe.png'} style={{width: 28, height: 28, left: 280, top: 450 , position: 'absolute'}}></img>
                    <div style={{left: 312, top: 455, position: 'absolute', color: 'grey', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Points Earned:</div>
                    <div style={{left: 407, top: 455, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '750',  wordWrap: 'break-word'}}>50</div>

                    {/* Introduction */}
                    <div style={{ width: 1350, left: 280, top: 475, position: 'absolute' }}>
                        <span style={{ color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Introduction<br /></span>
                        <span style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </span>
                    </div>

                    {/* Start button */}
                    <div onClick={handleStartClick} style={{ width: 170, padding: 16, left: 1420, top: 749, position: 'absolute', background: gradientColor, borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', cursor: 'pointer' }}>
                        <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Start</div>
                    </div>
                </div>
            )}
            {showLanguageComponent && <Datasecurity />}
        </Container>
    );
};

export default SurveyDetail;
