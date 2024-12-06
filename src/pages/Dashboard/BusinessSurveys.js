import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';
import { useNavigate } from 'react-router-dom';
// import { fetchSurveys } from './Api'; // Import the fetchSurveys function
import {fetchSurveys} from './Api';

import BusinessLeftsidebar from "./BusinessLeftsidebar";
import BHeader from "./BHeader";

const Survey = ({ id, top, image, logo, etat, title, description, numQuestions, onSelectionChange }) => {
    const [participated, setParticipated] = useState(false);

    const handleParticipate = () => {
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
                <Link to={`/surveydetails`}>
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

    // Fetch surveys when the component mounts
    useEffect(() => {
        const getSurveys = async () => {
            try {
                const data = await fetchSurveys(accessToken);
                setSurveyData(data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching surveys:', error.message);
            }
        };

        getSurveys();
    }, [accessToken]);
    // // Pagination Logic
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentSurveys = surveyData.slice(indexOfFirstItem, indexOfLastItem);
    //
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // Pagination Logic
    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSurveys = surveyData.slice(indexOfFirstItem, indexOfLastItem); // Current page surveys

    const totalPages = Math.ceil(surveyData.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Pagination button logic
    const getPaginationPages = () => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages = [1, currentPage - 1, currentPage, currentPage + 1, totalPages];
        const uniquePages = Array.from(new Set(pages.filter(page => page >= 1 && page <= totalPages)));

        if (!uniquePages.includes(1)) uniquePages.unshift('...');
        if (!uniquePages.includes(totalPages)) uniquePages.push('...');

        return uniquePages;
    };

    return (
        <div className="App">
            <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <BHeader />
            <div style={{ left: 220, bottom:0, width: '80%', height: '100%', position: 'relative', marginLeft: !sidebarVisible ? -100 : 0 }}>
                <div style={{ width: 1400, height: 715, left: 128, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }} />
                <div style={{ left: 155, top: 97, position: 'absolute',textAlign:"left",lineHeight:1.5 }}>
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Surveys</span>
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}> <br /></span>
                    <span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span>
                </div>
                <Link to={`/chsurvey`}>
                    <button style={{ width:140,border: 'none', padding: 16, right: 20, top: 90, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>+ Create survey</div>
                    </button>
                </Link>
                {currentSurveys.map((survey, index) => (
                    <Survey
                        key={survey.id}
                        id={survey.id}
                        top={160 + index * 157} // Adjust `top` dynamically based on index
                        image={survey.image}
                        logo={survey.logo}
                        etat={survey.etat}
                        title={survey.title}
                        description={survey.description}
                        numQuestions={survey.numQuestions}
                        onSelectionChange={handleSelectionChange}
                    />
                ))}
                {/*// Rendering pagination controls*/}
                <div style={{ display: 'flex', justifyContent: 'end', marginTop: 20, background: 'transparent', position: 'relative', top: '47rem' }}>
                    {getPaginationPages().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (page !== '...') paginate(page);
                            }}
                            style={{
                                margin: 5,
                                padding: 10,
                                backgroundColor: currentPage === page ? '#00BDA9' : '#F9BC33',
                                color: 'white',
                                border: 'none',
                                borderRadius: 5,
                                cursor: page === '...' ? 'default' : 'pointer'
                            }}
                            disabled={page === '...'}
                        >
                            {page}
                        </button>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default BSurveys;