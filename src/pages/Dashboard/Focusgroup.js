// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import { fetchFocusGroup } from './Api'; // Import the fetchSurveys function

import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import BusinessLeftsidebar from "./BusinessLeftsidebar";
const opencage = require('opencage-api-client');

const Focgroup = ({ id, top, image, duration, nbparticipant, points, description, date,type }) => {
    const [participated, setParticipated] = useState(false);

    const handleParticipate = () => {
        // Effectuer les actions nécessaires pour la participation, si nécessaire
        setParticipated(true);
    };

    return (
        <div className="Focgroup">
            <img style={{ width: 248, height: 141, left: 155, top, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16 }} src={process.env.PUBLIC_URL + `/${image}`} />
            <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 163, top: top + 8, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex' }}>
                <div style={{ textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>{points} points</div>
            </div>
            <div style={{ width: 732, left: 420, top: top , position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word',textAlign:"left" }}>{description}</div>
            <div style={{ left: 419, top: top + 30, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>{date}</span></div>
            <div style={{ left: 419, top: top + 50, position: 'absolute' }}><span style={{ color: '#F9BC33', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>{duration}</span><span style={{ color: '#F9BC33', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}> minutes</span></div>
            <div style={{ left: 419, top: top + 70, position: 'absolute' }}><span style={{ color: '#F9BC33', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>{type}</span></div>
            <div style={{ left: 419, top: top + 90, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}></span><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>MAX of 15 participants</span></div>

            {participated ? (
                <div style={{ height:8, background: 'white', border: '2px #00BDA9 solid', padding: 16, left: 419, top: top + 110, position: 'absolute', borderRadius: 10, borderColor:'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: 'royalblue', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Subscribed</div>
                </div>
            ) : (
                <Link to={`/Focusgroupdetails`}>
                    <button onClick={handleParticipate} style={{ height:8 ,border: '2px #00BDA9 solid', padding: 16, left: 419, top: top + 110, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Subscribe</div>
                    </button>
                </Link>
            )}
        </div>
    );
};

const Focusgroup = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedSurvey, setSelectedSurvey] = useState(null);
    const [surveyData, setSurveyData] = useState([]); // State to hold fetched surveys
    const [accessToken, setAccessToken] = useState('eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPRE9CaWNKYnJNVEdldF9hYlM0aHM5eTNtdUNuUGhmWmVaVkYxeDVhUlpJIn0.eyJleHAiOjE3Mjg5NjE1MjQsImlhdCI6MTcyODkyNTUyNSwianRpIjoiZGJmMWE2MzktMzQ4Yy00YjQ3LWIyMjktNDQ1Zjc3OGY5MGZlIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDgwL3JlYWxtcy9qaGlwc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjYWU5ZDFjNS1mZmU1LTRkMmUtYjIyMi03MzJhMmUwNDBjYTMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ0YWxlIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODAvKiIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvKiIsIioiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1qaGlwc3RlciIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsidGFsZSI6eyJyb2xlcyI6WyJ1bWFfcHJvdGVjdGlvbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxNzIuMTguMC4xIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtdGFsZSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTguMC4xIiwiY2xpZW50X2lkIjoidGFsZSJ9.K3wBzHLlaf2jGU56HIYqUQFXZAy4JybM0rlzDVrp0okqwgml_OoBRx0ZXB-0Vi9RoIN4wV1uT7bt7rbWws1qplp3Q77vDm0RBY-hW6lB-CgFC6xOEKey8XHsP3SFx0_ZY8aR_oIt8ywatLvID7xZivMs2g74aNQiaBiST4HBOfnPDN0Rsi5a7kg2mtOYLjqci9bZUbs5WseXTNzEBDlB4qyH3ar8KDHl4eux9Qzjgs7bBi-vWahuniUXNOuRjTOxotFwnmS-McU5jM9cHzsbBhSdlaQc2U-MEgjvsZxYvx1IIGS4HEyWS03cWdKnaSZrBmJGxDsifq7vYtDdyzgf9Q'); // Placeholder for the access token
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const itemsPerPage = 4; // Number of surveys per page

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const handleSelectionChange = (surveyId) => {
        setSelectedSurvey(surveyId);
    };

    //
    // const surveyData = [
    //     { id: 1, top: 180, image: 'surv1.png', duration: '50', points: 1000, description: 'Aenean efficitur purus vel metus scelerisque pharetra', date: '25/12/2024 -12:00',type: 'Live via Zoom' },
    //     { id: 2, top: 337, image: 'surv2.png', duration: '90', points: 1000, description: 'Aliquam iaculis quam dapibus nulla gravida, eget semper velit sagittis.',date: '25/12/2024 -12:00' ,type:'Live via Zoom' },
    // ];
    // Fetch surveys when the component mounts
    useEffect(() => {
        const getFocusgroup = async () => {
            try {
                const data = await fetchFocusGroup(accessToken);
                setSurveyData(data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching surveys:', error.message);
            }
        };

        getFocusgroup();
    }, [accessToken]);

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSurveys = surveyData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <Header/>
            <div style={{ left: 220, width: '80%', height: '100%', position: 'relative', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <div style={{ width: 1400, height: 736, left: 128, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }} />
                <div style={{ left: 155, top: 97, position: 'absolute',textAlign:"left",lineHeight:1.5 }}>
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Focus Group</span>
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}> <br /></span>
                    <span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span>
                </div>
                {currentSurveys.map((survey, index) => (
                    <Focgroup
                        key={survey.id}
                        id={survey.id}
                        top={160 + index * 157} // Adjust `top` dynamically based on index
                        image={survey.image}
                        logo={survey.logo}
                        date={survey.startDate}
                        etat={survey.status}
                        title={survey.title}
                        description={survey.name}
                        numParticipant={survey.normalUser}
                        onSelectionChange={handleSelectionChange}
                    />
                ))}
                {/* Pagination Controls */}
                <div style={{ display: 'flex', justifyContent: 'end', marginTop: 20,background: 'transparent',position:"relative", top: '47rem' }}>
                    {Array.from({ length: Math.ceil(surveyData.length / itemsPerPage) }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => paginate(i + 1)}
                            style={{
                                margin: 5,
                                padding: 10,
                                backgroundColor: currentPage === i + 1 ? '#00BDA9' : '#F9BC33',
                                color: 'white',
                                border: 'none',
                                borderRadius: 5
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <Header/>
                <div style={{ textAlign:"left", width: 1400, height: 705, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16, padding:16}} >
                    <div><span style={{color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word'}}>Focus group</span><span style={{color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1.5, wordWrap: 'break-word'}}> <br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word'}}>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span></div>
                    <div style={{width: 55.06, height: 59, left: 700, top: 325, position: 'absolute'}}>
                        <img src={process.env.PUBLIC_URL + '/ss.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div style={{position:"relative", top:330,textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>There are no live shows for you at the moment</div>
                </div>
            </div>
        </div>
    );
};

export default Focusgroup;
