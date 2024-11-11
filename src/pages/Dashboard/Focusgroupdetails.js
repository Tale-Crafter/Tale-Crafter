//
import React, {useEffect, useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import Leftsidebar from "./Leftsidebar";
import {Link, useNavigate, useParams} from "react-router-dom";
import Header from "./Header";
import {fetchFocusGroupById, fetchSurveyById} from "./Api";

const Container = ({ children }) => (
    <div className="Appsd">
        {children}
    </div>
);



const InfoBox1 = ({ date, points, duration,type, max,top }) => {
return (
    <div className="Focgroup">
    <div style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', gap: 10, display: '' }}>
        <img src={process.env.PUBLIC_URL + '/log1.png'} style={{ width: 22, height: 22, left: 0, top:top+10, position: 'absolute' }} />
        <div style={{ left: 25, top:top+10, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>{date}</span></div>

        <img src={process.env.PUBLIC_URL + '/log2.png'} style={{ width: 22, height: 22, left: 0, top:top+35, position: 'absolute' }} />
        <div style={{ left: 25, top: top + 35, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>{points} points</span></div>

        <img src={process.env.PUBLIC_URL + '/log3.png'} style={{ width: 22, height: 22, left: 0, top:top+60, position: 'absolute' }} />
        <div style={{ left: 25, top: top + 60, position: 'absolute' }}><span style={{ color: '#F9BC33', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>{duration}</span><span style={{ color: '#F9BC33', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}> minutes</span></div>

        <img src={process.env.PUBLIC_URL + '/log4.png'} style={{ width: 22, height: 22, left: 0, top:top+85, position: 'absolute' }} />
        <div style={{ left: 25, top: top + 85, position: 'absolute' }}><span style={{ color: '#F9BC33', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>{type}</span></div>

        <img src={process.env.PUBLIC_URL + '/log5.png'} style={{ width: 22, height: 22, left: 0, top:top+110, position: 'absolute' }} />
        <div style={{ left: 25, top: top + 110, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}></span><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>MAX of 15 participants</span></div>
    </div>
    </div>
);
};


// const surveyData = [
//     { id: 1, top: 180, image: 'surv1.png', logo: 'surv1logo.png', points: 50, title: 'Lion KING', description: 'Customer Satisfaction', numQuestions: 15 },
//     { id: 2, top: 337, image: 'surv2.png', logo: 'surv2logo.png', points: 50, title: 'Tunisie Telecom', description: 'Aliquam iaculis quam dapibus nulla gravida, eget semper velit sagittis.', numQuestions: 15 },
//     { id: 3, top: 494, image: 'surv3.png', logo: 'surv3logo.png', points: 50, title: 'Ooredoo Tunisie', description: 'Nunc vitae arcu pellentesque, bibendum nibh nec, viverra eli', numQuestions: 15 },
//     { id: 4, top: 651, image: 'surv4.png', logo: 'surv4logo.png', points: 50, title: 'Private', description: 'Nunc vitae arcu pellentesque, bibendum nibh nec, viverra eli', numQuestions: 15 },
// ];
const TextStyle = {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'revert',
    wordWrap: 'break-word',
};

const Focusgroupdetails = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [DetailsData, setDetailsData] = useState([]); // State to hold fetched surveys
    const [participated, setParticipated] = useState(false);
    const [accessToken, setAccessToken] = useState('eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPRE9CaWNKYnJNVEdldF9hYlM0aHM5eTNtdUNuUGhmWmVaVkYxeDVhUlpJIn0.eyJleHAiOjE3MjUxNDAyNTAsImlhdCI6MTcyNTEwNDI1MCwianRpIjoiZGZhNjQyYWMtNmZkOC00YjdiLWFiZDQtMjgyMjUwZjAwOGExIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDgwL3JlYWxtcy9qaGlwc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjYWU5ZDFjNS1mZmU1LTRkMmUtYjIyMi03MzJhMmUwNDBjYTMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ0YWxlIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODAvKiIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvKiIsIioiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1qaGlwc3RlciIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsidGFsZSI6eyJyb2xlcyI6WyJ1bWFfcHJvdGVjdGlvbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxNzIuMTguMC4xIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtdGFsZSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTguMC4xIiwiY2xpZW50X2lkIjoidGFsZSJ9.jg2R7X2_UNHcCTBAz35OEpaJgRa6JOT8i8UI2s_l9zE8sUIEkMXQggXgetoXhkTsjQ5KSQ3QNCcyjYI2O0nTML1auGgVuxPHGDe-1g1xBUzp9eEDhNUTSNuMQc2vbd1I4fQh-Rkcqc8ayrA5OeD0VECKPu_bn433GFntLVCX0p75_058uTjDaymdA5o0N_3hLA2NwmYMds0WowX-fmsWL3qnzs-FLopv3NGVPiyyFRuO2zigujDpnetzZzbS7pzxdTUq9-h1FgK0SzRvPZF-hHHRX_Dw5CMMlRFmKdlJvBjT9Dqo9Ww_ifFExFZuodd_GvRnVMeQzFhfq5turjwkNg'); // Placeholder for the access token

    useEffect(() => {
        if (!iduser) {
            console.log("eeee"+iduser)
            console.error('Survey ID is undefined');
            navigate('/error-page'); // Or any other fallback logic
            return;
        }

        const getFocusGroupData = async () => {
            try {
                const data = await fetchFocusGroupById(accessToken, iduser);
                setDetailsData(data);
            } catch (error) {
                console.error('Error fetching survey:', error);
            }
        };

        getFocusGroupData();
    }, [accessToken, iduser, navigate]);

    // if (!detailsData.length) {
    //     console.log("eeee"+iduser)
    //     return <div>Loading...</div>;
    // }

    const handleParticipate = () => {
        setParticipated(true);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleBackClick = () => {
        navigate(`/Focusgroup`);
    };

    return (
        <Container>
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <Header />
            <div style={{ left: 100, width: '80%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                {/* Background elements */}
                <div style={{ width: 1400, height: 736, left: 250, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }} />
                <img
                    src={process.env.PUBLIC_URL + '/backfoc.png'}
                    style={{ width: 1350, height: 222, left: 276, top: 152, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16 }}
                />
                {/* Details */}
                <div style={{ width: 1350, left: 280, top: 385, position: 'absolute' }}>
                    <span style={{ color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Details<br /></span>
                    <div className="Surveys">
                        <InfoBox1
                            key={DetailsData.id} // Since you're receiving a single object, you only need one key
                            id={DetailsData.id}
                            top={20} // Adjust this value as needed
                            image={DetailsData.image}
                            logo={DetailsData.logo}
                            date={DetailsData.startDate}
                            points={DetailsData.points}
                            duration={DetailsData.duration}
                            type={DetailsData.userCategory}
                        />

                    </div>
                </div>

                {/* Organizer Info */}
                <div style={{ width: 1350, top: 610, left: 280, position: 'absolute' }}>
                    <span style={{ color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Organizer<br /></span>
                    <img style={{ width: 48, height: 48, position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + '/surv2logo.png'} />
                </div>

                {/* Title */}
                <div style={{ width: 993, left: 314, top: 102, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Mauris egestas leo vel nulla tincidunt, ac molestie sem consectetur</div>

                {/* Back button */}
                <button onClick={handleBackClick} style={{ width: 30, height: 30, padding: 0, left: 276, top: 102, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
                    <div style={{ width: 32, height: 32, position: 'relative' }}>
                        <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
                    </div>
                </button>

                {/* Introduction */}
                <div style={{ width: 1350, left: 280, top: 540, position: 'absolute' }}>
                    <span style={{ color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Introduction<br /></span>
                    <span style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                    </span>
                </div>

                {/* Speakers */}
                <div style={{ width: 1350, top: 685, left: 280, position: 'absolute' }}>
                    <span style={{ color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Speakers<br /></span>
                    <img style={{ width: 48, height: 48, position: 'absolute', borderRadius: 9999, border: '2px white solid' }} src={process.env.PUBLIC_URL + '/uss.png'} />
                    <div style={{ width: 172, height: 46, left: 68, top: 30, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Regina J. Marks</div>
                    <div style={{ width: 172, height: 46, left: 68, top: 50, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>Political geographer</div>
                </div>

                {/* Start button */}
                {participated ? (
                    <div>
                        <div style={{ width:145, background: 'white', border: '1px black solid', padding: 15, left: 1255, top: 760, position: 'absolute', borderRadius: 10, borderColor:'black',justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Cancel</div>
                        </div>

                        <Link to={`/jitci`}>
                            <button onClick={handleParticipate} style={{ width:175 ,height:50,border: 'white', padding: 16, left: 1450, top: 760, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Join the meeting</div>
                            </button>
                        </Link>
                    </div>
                ) : (
                    <Link to={``}>
                        <button onClick={handleParticipate} style={{width:175,height:50,border: '2px #00BDA9 solid', padding: 16, left: 1450, top: 760, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Subscribe</div>
                        </button>
                    </Link>
                )}
            </div>
        </Container>
    );
};

export default Focusgroupdetails;
