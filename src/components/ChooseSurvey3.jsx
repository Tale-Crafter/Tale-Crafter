import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Timeline from "../pages/Dashboard/Timeline";
import {CreateSurveyColl} from './../pages/Dashboard/Api';
import BHeader from "../pages/Dashboard/BHeader";
import BusinessLeftsidebar from "../pages/Dashboard/BusinessLeftsidebar"; // Import the fetchSurveys function

const SquareButton = ({ title, description, imageUrl, to, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link
            to={to}
            style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid lightgrey',
                borderRadius: '16px',
                padding: '10px',
                width: '351px',
                height: '100px',
                transition: 'background-color 0.3s',
                marginLeft: 20,
                backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <img
                src={imageUrl}
                alt={title}
                style={{
                    width: '40px',
                    height: '40px',
                    marginRight: '20px',
                    marginBottom: 0,
                }}
            />
            <div style={{ textAlign: 'left' }}>
                <h3
                    style={{
                        color: '#111111',
                        fontSize: '16px',
                        fontFamily: 'revert',
                        fontWeight: '700',
                        marginBottom: '5px',
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        color: '#666',
                        fontFamily: 'revert',
                        fontSize: '14px',
                        marginBottom: 0,
                    }}
                >
                    {description}
                </p>
            </div>
        </Link>
    );
};

const MainPage = ({ survey, onNext }) => {
    const [showEmbedBlock, setShowEmbedBlock] = useState(false);
    const [showpopupinv, setShowpopupinv] = useState(false);
    const [showpopupsurvey, setShowpopupsurvey] = useState(false);
    const [codeName, setCodeName] = useState('');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const handleButtonClick = () => {
        setShowEmbedBlock(true);
        setShowpopupsurvey(false);
        setShowpopupinv(false);
    };
    const handleButtonClick1 = () => {
        setShowpopupinv(true);
        setShowEmbedBlock(false);
        setShowpopupsurvey(false);
    };
    const handleButtonClick2 = () => {
        setShowpopupsurvey(true);
        setShowpopupinv(false);
        setShowEmbedBlock(false);
    };

    // Handle Copy Code with validation and API integration
    const handleCopyCode = async () => {
        if (!codeName) {
            alert("Please enter a code name.");
            return;  // Prevent copying if code name is empty
        }

        if (!survey) {
            alert("Survey ID is missing.");
            return;  // Prevent posting if survey ID is not available
        }
        console.log("Survey ID:", survey.id);
        console.log("codeName:", codeName);

        // Create survey collection data
        const surveyCollection = {
            codeName: codeName,  // Correct key name
            status: 1,
            responses: 0,
            dateCreated: new Date().toISOString(),
            dateModified: new Date().toISOString(),
            survey: survey
        };

        // Use CreateSurveyColl API instead of fetch
        try {
            const response = await CreateSurveyColl(surveyCollection);
            if (response.status) {
                console.log("Survey collection posted successfully");

                // Now copy the embed code
                copyEmbedCode();
            } else {
                console.error("Error creating survey collection:", response?.message);
            }
        } catch (error) {
            console.error("Error posting survey collection", error);
        }
    };

    // Copy the embed code to the clipboard using the new method
    const copyEmbedCode = () => {
        const embedCode = embedCodeEmbeddedSurvey; // Change this as per the type of code you want to copy

        // Use the Clipboard API for copying the embed code
        navigator.clipboard.writeText(embedCode)
            .then(() => {
                alert("Embed code copied to clipboard!");
            })
            .catch(err => {
                alert("Failed to copy embed code: " + err);
            });
    };
    const [selectedOption, setSelectedOption] = useState(null);  // Track the selected option
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    useEffect(() => {
        if (selectedOption !== null) {
            // Call the onNext handler when selectedOption changes
            onNext(survey, selectedOption);
        }
    }, [selectedOption, survey, onNext]);  // Dependencies on selectedOption and survey

    // Define embed codes for each type
    const embedCodeEmbeddedSurvey = `<script>(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd6YclTSEknK0PIY9G3ZNPDOcDemMVkqRVD9JxqmpLyYm.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");</script><a style="font: 12px Helvetica, sans-serif; color: #999; text-decoration: none;" href="https://fr.surveymonkey.com">Create your own user feedback survey</a>`;

    const embedCodePopupInvitation = `<script>(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd6YclTSEknK0PIY9G3ZNPDOcDemMVkqRVD9JxqmpLyYm.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");</script><a style="font: 12px Helvetica, sans-serif; color: #999; text-decoration: none;" href="https://fr.surveymonkey.com">Create your own user feedback survey</a>`;

    const embedCodePopupSurvey = `<script>(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd6YclTSEknK0PIY9G3ZNPDOcDemMVkqRVD9JxqmpLyYm.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");</script><a style="font: 12px Helvetica, sans-serif; color: #999; text-decoration: none;" href="https://fr.surveymonkey.com">Create your own user feedback survey</a>`;

    return (
        <div className="App">
        <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
            <BHeader />
            <div className="container" style={{ borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", height: "1080px", position: 'absolute', left: 340, top: 84, background: "white", width: '76%', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
            <main className="main">
                {/* Your existing content */}
                <div style={{ width: '100%', position: "absolute", top: -70, left: 0 }}>
                    <Timeline level={3} />
                </div>
                {/* Back button */}
                <button
                    onClick={() => handleOptionSelect('EmbedBack')}
                    style={{
                        width: 30,
                        height: 30,
                        padding: 0,
                        left: 25,
                        top: 200,
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'inline-flex',
                        background: 'transparent',
                        border: 0
                    }}>
                    <div style={{ width: 32, height: 32, position: 'relative', zIndex: 99999 }}>
                        <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} alt="Back" />
                    </div>
                    <div style={{ marginLeft: 80, width: 300, position: 'absolute', color: '#111111', fontSize: 18, fontFamily: 'revert', fontWeight: '500', lineHeight: 1, wordWrap: 'break-word' }}>Back</div>
                </button>

                <div style={{ left: 40, top: 260, position: 'absolute', color: '#111111', fontSize: 18, fontFamily: 'REVERT', fontWeight: '700', wordWrap: 'break-word' }}>Embed on a website</div>
                <div style={{ left: 40, top: 290, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'REVERT', fontWeight: '500', wordWrap: 'break-word' }}>How would you prefer to gather responses for your survey?</div>

                <section className="content" style={{ textAlign: "center", position: "absolute", top: 350, left: 20, display: "flex" }}>
                    <SquareButton
                        title="Embedded Survey"
                        description="Integrate this survey directly onto your website or blog."
                        imageUrl={process.env.PUBLIC_URL + '/link.png'}
                        onClick={handleButtonClick}
                    />
                    <SquareButton
                        title="Popup Invitation"
                        description="Display a survey invitation in a popup window on selected pages of your website."
                        imageUrl={process.env.PUBLIC_URL + '/embed.png'}
                        onClick={handleButtonClick1}
                    />
                    <SquareButton
                        title="Popup Survey"
                        description="Present your survey in a popup window on designated pages of your website."
                        imageUrl={process.env.PUBLIC_URL + '/sm.png'}
                        onClick={handleButtonClick2}
                    />
                </section>

                {/* Embedded Survey Block */}
                {showEmbedBlock && (
                    <div style={{ position: "relative", top: 150 }}>
                        <div style={{ width: '117%', height: '100%', border: '1px #CCCCCC solid', position: "relative", top: 45, left: -100 }}></div>
                        <div style={{ position: "relative", left: -100, top: 60 }}>
                            <div style={{ position: "relative", left: 30, textAlign: "left", color: '#111111', fontSize: 18, fontFamily: 'revert', fontWeight: '700', lineHeight: 3, wordWrap: 'break-word' }}>Embedded Survey</div>
                            <div style={{ position: "relative", left: 30, textAlign: "left", width: '100%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>
                                Copy and paste the embed code wherever you want the form or survey to appear on your website. After you paste the code, changes you make here will sync to your website automatically
                            </div>
                        </div>

                        <div style={{ left: -70, top: 160, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'REVERT', fontWeight: '700', wordWrap: 'break-word' }}>Code name</div>
                        <input
                            type="text"
                            value={codeName}
                            // onChange={(e) => setCodeNames({ ...codeNames, embeddedSurvey: e.target.value })}
                            // value={codeName}
                            onChange={(e) => setCodeName(e.target.value)}
                            placeholder="Enter code name"
                            style={{
                                position: "relative",
                                left: -70,
                                top: 120,
                                width: 700,
                                height: 30,
                                padding: 10,
                                marginRight: 10,
                                background: 'rgba(0, 0, 0, 0.07)',
                                borderRadius: 16,
                                border: "none"
                            }}
                        />
                        <div style={{ left: -70, top: 270, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'REVERT', fontWeight: '700', wordWrap: 'break-word' }}>Embed code</div>
                        <div style={{
                            position: "relative",
                            top: 180,
                            left: -70,
                            display: "flex",
                            width: '1200px',
                            gap: 10,
                            padding: 10,
                            borderRadius: 16,
                            height: '120px',
                            border: '1px solid lightgray',
                            marginTop: 10,
                            background: 'rgba(0, 0, 0, 0.07)',
                            textAlign: "left"
                        }}>
                            {/* Display your embed code here */}
                            <p style={{ position: "relative", top: -10, left: 10, whiteSpace: 'pre-wrap',    wordWrap: 'break-word'
                                ,    overflow: 'hidden',  // Or 'overflow-x: auto' to add a scroll
                                textOverflow: 'ellipsis' // Optionally add an ellipsis if truncating
                            }}>{embedCodeEmbeddedSurvey}</p>
                            <button
                                onClick={() => handleCopyCode()}
                                disabled={!codeName}
                                style={{
                                    border: "none",
                                    position: "relative",
                                    // top: 0,
                                    // left: 20,
                                    // width: 147,
                                    // height: 51,
                                    fontWeight: 600,
                                    color: "white",
                                    padding: 16,
                                    background: codeName ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : 'grey',
                                    borderRadius: 10,
                                    textAlign: "center",
                                    justifyContent: 'right',
                                    cursor: codeName ? 'pointer' : 'not-allowed'
                                }}>
                                Copy
                            </button>
                        </div>
                    </div>
                )}

                {/* Popup Invitation Block */}
                {showpopupinv && (
                    <div style={{ position: "relative", top: 150 }}>
                        <div style={{ width: '117%', height: '100%', border: '1px #CCCCCC solid', position: "relative", top: 45, left: -100 }}></div>
                        <div style={{ position: "relative", left: -100, top: 60 }}>
                            <div style={{ position: "relative", left: 30, textAlign: "left", color: '#111111', fontSize: 18, fontFamily: 'revert', fontWeight: '700', lineHeight: 3, wordWrap: 'break-word' }}>Popup Invitation</div>
                            <div style={{ position: "relative", left: 30, textAlign: "left", width: '100%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>
                                Copy and paste this code immediately before your closing &lt;/body&gt; tag
                            </div>
                        </div>

                        <div style={{ left: -70, top: 160, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'REVERT', fontWeight: '700', wordWrap: 'break-word' }}>Code name</div>
                        <input
                            type="text"
                            value={codeName}
                            onChange={(e) => setCodeName(e.target.value)}
                            // onChange={(e) => setCodeNames({ ...codeNames, popupInvitation: e.target.value })}
                            placeholder="Enter code name"
                            style={{
                                position: "relative",
                                left: -70,
                                top: 120,
                                width: 700,
                                height: 30,
                                padding: 10,
                                marginRight: 10,
                                background: 'rgba(0, 0, 0, 0.07)',
                                borderRadius: 16,
                                border: "none"
                            }}
                        />
                        <div style={{ left: -70, top: 270, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'REVERT', fontWeight: '700', wordWrap: 'break-word' }}>Embed code</div>
                        <div style={{
                            position: "relative",
                            top: 180,
                            left: -70,
                            display: "flex",
                            width: '1200px',
                            gap: 10,
                            padding: 10,
                            borderRadius: 16,
                            height: '120px',
                            border: '1px solid lightgray',
                            marginTop: 10,
                            background: 'rgba(0, 0, 0, 0.07)',
                            textAlign: "left"
                        }}>
                            {/* Display your embed code here */}
                            <p style={{ position: "relative", top: -10, left: 10, whiteSpace: 'pre-wrap',wordWrap: 'break-word'
                                ,    overflow: 'hidden',  // Or 'overflow-x: auto' to add a scroll
                                textOverflow: 'ellipsis' // Optionally add an ellipsis if truncating
                            }}>{embedCodePopupInvitation}</p>
                            <button
                                onClick={() => handleCopyCode()}
                                disabled={!codeName}
                                style={{
                                    border: "none",
                                    position: "relative",
                                    // top: 0,
                                    // left: 20,
                                    // width: 147,
                                    // height: 51,
                                    fontWeight: 600,
                                    color: "white",
                                    padding: 16,
                                    background: codeName ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : 'grey',
                                    borderRadius: 10,
                                    textAlign: "center",
                                    justifyContent: 'right',
                                    cursor: codeName ? 'pointer' : 'not-allowed'
                                }}>
                                Copy
                            </button>
                        </div>
                    </div>
                )}

                {/* Popup Survey Block */}
                {showpopupsurvey && (
                    <div style={{ position: "relative", top: 150 }}>
                        <div style={{ width: '117%', height: '100%', border: '1px #CCCCCC solid', position: "relative", top: 45, left: -100 }}></div>
                        <div style={{ position: "relative", left: -100, top: 60 }}>
                            <div style={{ position: "relative", left: 30, textAlign: "left", color: '#111111', fontSize: 18, fontFamily: 'revert', fontWeight: '700', lineHeight: 3, wordWrap: 'break-word' }}>Popup Survey</div>
                            <div style={{ position: "relative", left: 30, textAlign: "left", width: '100%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>
                                Copy and paste this code immediately before your closing &lt;/body&gt; tag
                            </div>
                        </div>

                        <div style={{ left: -70, top: 160, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'REVERT', fontWeight: '700', wordWrap: 'break-word' }}>Code name</div>
                        <input
                            type="text"
                            // value={codeNames.popupSurvey}
                            // onChange={(e) => setCodeNames({ ...codeNames, popupSurvey: e.target.value })}
                            value={codeName}
                            onChange={(e) => setCodeName(e.target.value)}
                            placeholder="Enter code name"
                            style={{
                                position: "relative",
                                left: -70,
                                top: 120,
                                width: 700,
                                height: 30,
                                padding: 10,
                                marginRight: 10,
                                background: 'rgba(0, 0, 0, 0.07)',
                                borderRadius: 16,
                                border: "none"
                            }}
                        />
                        <div style={{ left: -70, top: 270, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'REVERT', fontWeight: '700', wordWrap: 'break-word' }}>Embed code</div>
                        <div style={{
                            position: "relative",
                            top: 180,
                            left: -70,
                            display: "flex",
                            width: '1200px',
                            gap: 10,
                            padding: 10,
                            borderRadius: 16,
                            height: '120px',
                            border: '1px solid lightgray',
                            marginTop: 10,
                            background: 'rgba(0, 0, 0, 0.07)',
                            textAlign: "left"
                        }}>
                            {/* Display your embed code here */}
                            <p style={{ position: "relative", top: -10, left: 10, whiteSpace: 'pre-wrap',wordWrap: 'break-word'
                            ,    overflow: 'hidden',  // Or 'overflow-x: auto' to add a scroll
                                textOverflow: 'ellipsis' // Optionally add an ellipsis if truncating
                            }}>{embedCodePopupSurvey}</p>
                            <button
                                onClick={() => handleCopyCode()}
                                disabled={!codeName}
                                style={{
                                    border: "none",
                                    position: "relative",
                                    // top: 0,
                                    // left: 20,
                                    // width: 147,
                                    // height: 51,
                                    fontWeight: 600,
                                    color: "white",
                                    padding: 16,
                                    background: codeName? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : 'grey',
                                    borderRadius: 10,
                                    textAlign: "center",
                                    justifyContent: 'right',
                                    cursor: codeName? 'pointer' : 'not-allowed'
                                }}>
                                Copy
                            </button>
                        </div>
                    </div>
                )}

                <button
                    onClick={() => handleOptionSelect('EmbedNext')}
                    style={{
                        border: "none",
                        position: "absolute",
                        top: showEmbedBlock || showpopupinv || showpopupsurvey ? 1020: 730,
                        right: 30,
                        width: 147,
                        height: 51,
                        padding: 16,
                        background: '#DDDDDD',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'inline-flex',
                        cursor: 'pointer'
                    }}>
                    <div style={{ color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Next</div>
                </button>
            </main>
        </div>
        </div>
    );
};

export default MainPage;
