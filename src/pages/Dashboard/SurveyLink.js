import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import crypto from 'crypto-js'; // You need to install 'crypto-js' for encryption
import './App.css';  // Import the CSS file
import BusinessLeftsidebar from "./BusinessLeftsidebar";
import BHeader from "./BHeader";
import Timeline from "./Timeline";
import {CreateSurveyColl} from "./Api";

const Surveylink = ({ survey, onNext }) => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [isCopied, setIsCopied] = useState(false);
    const [link, setLink] = useState('');
    const [linkName, setLinkName] = useState('');  // State to track the link name input
    const [showSocialButtons, setShowSocialButtons] = useState(false);
    const navigate = useNavigate();
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

    // Generate a unique encrypted survey link
    const generateLink = () => {
        if (!linkName) return;  // Don't generate link if the link name is empty
        const baseUrl = 'http://localhost/r/';
        const surveyId = survey.id;  // Assuming you have the survey ID
        const uniqueKey = `${surveyId}-${Date.now()}-${linkName}`;  // Unique key with link name
        const encryptedLink = crypto.AES.encrypt(uniqueKey, 'secret-key').toString();  // Encrypt with a secret key

        const generatedLink = `${baseUrl}${encryptedLink}`;

        setLink(generatedLink);
        setShowSocialButtons(true);
    };

    // Handle Copy Code with validation and API integration
    const handleCopyCode = async () => {
        if (!survey) {
            alert("Survey ID is missing.");
            return;  // Prevent posting if survey ID is not available
        }

        console.log("Survey ID:", survey.id);
        console.log("linkName:", linkName);

        // Create survey collection data
        const surveyCollection = {
            codeName: linkName+'-link',  // Correct key name
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
            } else {
                console.error("Error creating survey collection:", response?.message);
            }
        } catch (error) {
            console.error("Error posting survey collection", error);
        }
    };

    // Handle copy to clipboard functionality
    const handleCopy = () => {
        const tempInput = document.createElement('input');
        tempInput.value = link;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="App">
            <div>
                <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
            </div>
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <BHeader />
                <div style={{ width: 1400, height: 800, left: 340, top: 84, position: 'absolute', background: 'white', borderRadius: 16 }}>
                    <div style={{width:'100%', position:"absolute", top:-70, left:0}}>
                        <Timeline level={3} />
                    </div>

                    <button
                        onClick={() => handleOptionSelect('LinkBack')}
                        style={{background:"none",border:"none", position:"relative", left:-600,top:190}}
                    >
                        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between",gap:10}}>
                            <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 28.44, height: 32 }} />
                            <div style={{ fontSize: 18 }}>Back</div>
                        </div>
                    </button>

                    <div style={{left: 50, top: 260, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Share a survey link</div>

                    <div style={{ left: 50, top: 300, position: 'absolute', fontSize: 18 }}>
                        Copy this URL to share your survey. For example, paste it in an email, on a website, or share it on social media.
                    </div>

                    <div style={{ left: 50, top: 350, position: 'absolute', fontSize: 24, fontWeight: '700' }}>Link name</div>

                    <div style={{ width: "auto", height: 96, left: 45, top: 400, position: 'absolute' }}>
                        <input
                            value={linkName}  // Bind the input field to the state
                            onChange={(e) => setLinkName(e.target.value)}  // Update the state when user types
                            placeholder={'Enter you link name'}
                            style={{
                                width: 840,
                                height: 51,
                                position: 'absolute',
                                background: 'rgba(17, 17, 17, 0.10)',
                                borderRadius: 10,
                                padding: '0 10px',
                                border:"none"
                            }}
                        />
                    </div>

                    <div style={{ left: 50, top: 500, position: 'absolute', fontSize: 24, fontWeight: '700' }}>Your link</div>

                    <div style={{ width: '100%', left: 44, top: 530, position: 'absolute' }}>
                        <div style={{ width: 840, height: 71, position: 'absolute', background: 'rgba(17, 17, 17, 0.10)', borderRadius: 10, padding: '0 10px', display: 'flex', alignItems: 'center', justifyContent:"space-between" }}>
                            <img src={process.env.PUBLIC_URL + '/lien.png'} alt="Link Icon" style={{ width: 20, height: 20, marginRight: 20 }} />
                            <input style={{ width: '100%', height: '100%', border: 'none', background: 'transparent', fontSize: 16,
                                borderRadius: 10,
                            }} value={link} readOnly />
                            <button
                                style={{
                                    border: "none",
                                    width: 147,
                                    height: 51,
                                    padding: 16,
                                    background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                                    borderRadius: 10,
                                }}
                                onClick={() => { generateLink(); handleCopy(); handleCopyCode();}}
                                disabled={!linkName}  // Disable button if linkName is empty
                            >
                                <div style={{ color: 'white', fontSize: 14 }}>{isCopied ? "Copied!" : "Copy"}</div>
                            </button>
                        </div>
                    </div>

                    {showSocialButtons && (
                        <div style={{ display: 'flex', flexDirection: 'row', top: '600px', position: 'relative', left: '45px', gap: '30px' }} >
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <button style={{ backgroundColor: '#064DD7', width: 220, height: 71, padding: 16, borderRadius: 10, display:"flex", alignItems:"center",justifyContent:"center",color:"white",border:"none"  }}>
                                    <img src={process.env.PUBLIC_URL + '/facebook-icon.png'} alt="Facebook" style={{ width: 30, height: 30, marginRight: 10 }} />
                                    Facebook
                                </button>
                            </a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}`} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <button style={{
                                    backgroundColor: '#0673D7', width: 220, height: 71, padding: 16, borderRadius: 10, display:"flex", alignItems:"center",justifyContent:"center",color:"white",border:"none"  }}>
                                    <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt="LinkedIn" style={{ width: 30, height: 30, marginRight: 10 }} />
                                    LinkedIn
                                </button>
                            </a>
                            <a href={`https://twitter.com/share?url=${link}`} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                                <button style={{ backgroundColor: '#00A3FF', width: 220, height: 71, padding: 16, borderRadius: 10, display:"flex", alignItems:"center",justifyContent:"center",color:"white",border:"none"   }}>
                                    <img src={process.env.PUBLIC_URL + '/twitter.png'} alt="Twitter" style={{ width: 30, height: 30, marginRight: 10 }} />
                                    Twitter
                                </button>
                            </a>
                        </div>
                    )}

                    <button
                        onClick={() => handleOptionSelect('LinkNext')}
                        style={{ border: "none", position: "absolute", top: 730, right: 30, width: 147, height: 51, padding: 16, background: '#DDDDDD', borderRadius: 10, display:"flex", alignItems:"center",justifyContent:"center",color:"white"  }}>
                        <div style={{ color: '#666666', fontSize: 14 }}>Next</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Surveylink;
