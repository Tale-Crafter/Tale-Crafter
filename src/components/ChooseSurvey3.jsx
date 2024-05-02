import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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

const MainPage = () => {
    const [showEmbedBlock, setShowEmbedBlock] = useState(false);
    const [codeName, setCodeName] = useState('');

    const handleButtonClick = () => {
        setShowEmbedBlock(true);
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText('Your embed code here');
    };

    return (
        <div className="container" style={{ borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", height: "1080px", position: 'absolute', left: 340, top: 84, background: "white", width: '76%' }}>
            <main className="main">
                {/* Your existing content */}
                <div style={{left: 40, top: 25, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Customer Experience Survey - Consulting Company</div>
                <div style={{left: 220, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Survey Initiation</div>
                <div style={{width: 157, left: 370, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Question<br/>Development</div>
                <div style={{width: 160, left: 560, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Review and Preview</div>
                <div style={{width: 160, left: 730, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
                <div style={{width: 149, left: 900, top: 123, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
                <div style={{width: 24, height: 24, left: 220, top: 91, position: 'absolute'}}>
                    <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                    {/*<div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />*/}
                </div>
                <div style={{width: 24, height: 24, left: 395, top: 91, position: 'absolute'}}>
                    <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                </div>
                <div style={{width: 24, height: 24, left: 570, top: 91, position: 'absolute'}}>
                    <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                </div>
                <div style={{width: 24, height: 24, left: 745, top: 91, position: 'absolute'}}>
                    <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                    <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />

                </div>

                <div style={{width: 24, height: 24, left: 920, top: 91, position: 'absolute'}}>
                    <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                </div>
                <div style={{width: 143, height: 0, left: 566, top: 101, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                <div style={{width: 143, height: 0, left: 741, top: 101, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                <div style={{width: 143, height: 0, left: 916, top: 101, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                <div style={{width: 143, height: 0, left: 391, top: 101, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                {/* Back button */}
                <button style={{ width: 30, height: 30, padding: 0, left: 25, top: 200, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
                    <div style={{ width: 32, height: 32, position: 'relative',zIndex:99999 }}>
                        <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
                    </div>
                    <div style={{ marginLeft:80,width: 300, position: 'absolute', color: '#111111', fontSize: 18, fontFamily: 'revert', fontWeight: '500', lineHeight: 1, wordWrap: 'break-word' }}>Back</div>
                </button>

                <div style={{left: 40, top: 260, position: 'absolute', color: '#111111', fontSize: 18, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Embed on a website</div>
                <div style={{left: 40, top: 290, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'REVERT', fontWeight: '500',  wordWrap: 'break-word'}}>How would you prefer to gather responses for your survey?</div>

                <section className="content" style={{ textAlign: "center", position: "absolute", top: 350, left: 20, display: "flex" }}>
                    <SquareButton title="Embedded Survey" description="Integrate this survey directly onto your website or blog." imageUrl={process.env.PUBLIC_URL + '/link.png'} onClick={handleButtonClick} />
                    <SquareButton title="Popup Invitation" description="Display a survey invitation in a popup window on selected pages of your website." imageUrl={process.env.PUBLIC_URL + '/embed.png'} to="/simplesurvey" onClick={handleButtonClick} />
                    <SquareButton title="Popup Survey" description="Present your survey in a popup window on designated pages of your website." imageUrl={process.env.PUBLIC_URL + '/sm.png'} to="/survey3" onClick={handleButtonClick} />
                </section>

                {/* Embed block */}
                {showEmbedBlock && (
                    <div style={{ position: "relative",top:150 }}>
                        <div style={{width: '117%', height: '100%', border: '1px #CCCCCC solid',position:"relative",top:45,left:-100}}></div>
                        <div style={{position:"relative",left:-100,top:60}}>
                        <div style={{position:"relative",left:30,textAlign:"left",color: '#111111', fontSize: 18, fontFamily: 'revert', fontWeight: '700', lineHeight: 3, wordWrap: 'break-word'}}>Embedded Survey</div>
                        <div style={{position:"relative",left:30,textAlign:"left",width: '100%', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>Copy and paste the embed code wherever you want the form or survey to  appear on your website. After you paste the code, changes you make here  will sync to your website automatically</div>
                        </div>

                        <div style={{left: -70, top: 160, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Code name</div>
                        <input
                            type="text"
                            value={codeName}
                            onChange={(e) => setCodeName(e.target.value)}
                            placeholder="Enter code name"
                            style={{position:"relative",left:-70,top:120, width: 700,height:30, padding: 10, marginRight: 10,background:'rgba(0, 0, 0, 0.07)',borderRadius:16,border:"none" }}
                        />
                        <div style={{left: -70, top: 270, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Embed code</div>
                        <div style={{ position:"relative",top:180,left:-70,display:"flex",width: '1200px',gap: 10, padding:10,borderRadius:16,height:'120px', border: '1px solid lightgray', marginTop: 10,background:'rgba(0, 0, 0, 0.07)',textAlign:"left" }}>
                            {/* Display your embed code here */}
                            <p style={{width:1000,position:"relative",top:-10,left:10}}>{ "<"}{"script"}{">"}{"(function(t,e,s,n)"}{"var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="}{"text/javascript"}{",c.async=!0,c.id=n,c.src="}{"https://widget.surveymonkey.com/collect/website/js\n/tRaiETqnLgj758hTBazgd6YclTSEknK0PIY9G3\nZNPDOcDemMVkqRVD9JxqmpLyYm.js"}{",a.parentNode.insertBefore(c,a))})(window,document,"}{"script,smcx-sdk"}{");&lt;/script&gt;&lt;a style="}{"font: 12px Helvetica, sans-serif; color: #999; text-decoration: none;"}{" href=fr.surveymonkey.com> Create your own user feedback survey &lt;/a&gt;"}</p>
                            <button onClick={handleCopyCode} style={{    border: "none",
                                position: "relative",
                                top: 0,
                                left: 20,
                                width: 147,
                                height: 51,
                                fontWeight:600,
                                color:"white",
                                padding: 16,
                                background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                                borderRadius: 10,
                                textAlign:"center",
                                justifyContent: 'right'
                            }}>Copy</button>

                        </div>
                    </div>
                )}
                <button style={{position:"relative",left:1160,top:360,border:"none",width: '147px', height: '50px', padding: 16, background: '#DDDDDD', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#666666', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Next</div>
                </button>
            </main>
        </div>
    );
};

export default MainPage;
