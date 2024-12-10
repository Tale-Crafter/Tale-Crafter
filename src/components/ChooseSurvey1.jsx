import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BusinessLeftsidebar from "../pages/Dashboard/BusinessLeftsidebar";
import BHeader from "../pages/Dashboard/BHeader";
import Timeline from "../pages/Dashboard/Timeline";

const SquareButton = ({ title, description, imageUrl, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();  // Using navigate to handle the routing

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        onClick(); // Call the onClick prop passed from the parent
        // navigate(to); // Navigate to the destination URL
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                textDecoration: 'none',
                display: "inline-block",
                marginTop: "-50px",
                border: "1px solid lightgrey",
                borderRadius: "16px",
                textAlign: "center",
                padding: "20px",
                width: "272px",
                height: "276px",
                transition: "background-color 0.3s",
                marginLeft: 20,
                backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                cursor: 'pointer',  // Added pointer cursor
            }}
            onClick={handleClick}
        >
            <div>
                <img src={imageUrl} alt={title} style={{ width: "80px", height: "80px", marginBottom: "10px" }} />
                <h3 style={{ color: "#111111", fontSize: "16px", fontFamily: "revert", fontWeight: "700" }}>{title}</h3>
                <p style={{ color: "#666", fontFamily: "revert", fontSize: "14px" }}>{description}</p>
            </div>
        </div>
    );
};

const MainPage = ({survey, onNext}) => {
    const [selectedOption, setSelectedOption] = useState(null);  // Track the selected option

    const handleNext = () => {
        // Optionally save to backend here if needed
        onNext(selectedOption); // Pass the copyQuestions value along with survey data
    };
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        // onNext(survey, selectedOption);
    };
// Use a side effect to trigger the next step when selectedOption is updated
    useEffect(() => {
        if (selectedOption !== null) {
            // Call the onNext handler when selectedOption changes
            onNext(survey, selectedOption);
        }
    }, [selectedOption, survey, onNext]);  // Dependencies on selectedOption and survey

    const [sidebarVisible, setSidebarVisible] = useState(true);

    return (
        <div className="App">
            <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
            <BHeader />

            <div className="container" style={{ borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", position: 'absolute', left: 340, top: 84, background: "white", width: '76%', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
            <main className="main">
                {/*<div style={{ left: 40, top: 25, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>Customer Experience Survey - Consulting Company</div>*/}
                {/*<div style={{ left: 220, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Survey Initiation</div>*/}
                {/*<div style={{ width: 157, left: 370, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Question<br />Development</div>*/}
                {/*<div style={{ width: 160, left: 560, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Review and Preview</div>*/}
                {/*<div style={{ width: 160, left: 730, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Targeting and<br />Parameters</div>*/}
                {/*<div style={{ width: 149, left: 900, top: 123, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Payment and <br />Finalization</div>*/}
                <div style={{width:'100%', position:"absolute", top:-70, left:0}}>
                    <Timeline level={3} />
                </div>
                <h1 style={{ background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 26, fontFamily: "revert", fontWeight: "700", textAlign: "center", position: 'absolute', top: '26%', left: '50%', transform: 'translate(-50%, -50%)' }}>How do you prefer to gather responses for your survey?</h1>

                <section className="content" style={{ textAlign: "center", position: "absolute", top: 320, left: 370 }}>
                    <SquareButton
                        onClick={() => handleOptionSelect('Customize distribution channels')}
                        title="Customize distribution channels"
                        description="Tailor your survey distribution: send via email, embed on your website, share links on social media or web pages, and more."
                        imageUrl={process.env.PUBLIC_URL + '/i1.png'}
                    />
                    <SquareButton
                        onClick={() => handleOptionSelect('Reach your target audience')}
                        title="Reach your target audience"
                        description="Access our survey panel, tale Audience, to acquire responses from specific demographics."
                        imageUrl={process.env.PUBLIC_URL + '/i2.png'}
                    />
                </section>

                {/*<button style={{*/}
                {/*    border: "2px solid black", backgroundColor: "transparent", position: "absolute", top: 660, left: 40, width: 147, height: 51, padding: 16, borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'*/}
                {/*}}>*/}
                {/*    <div style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Previous</div>*/}
                {/*</button>*/}
            </main>
        </div>
        </div>
    );
};

export default MainPage;
