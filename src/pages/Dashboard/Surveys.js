import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { fetchSurveys } from './Api'; // Import the fetchSurveys function

import Leftsidebar from "./Leftsidebar";
import Header from "./Header";

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
            <div style={{ width: 172, height: 46, left: 225, top: top + 101, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word', textAlign: "left" }}>{title}</div>
            <div style={{ width: 732, left: 420, top: top, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', textAlign: "left" }}>{description}</div>
            <div style={{ left: 419, top: top + 30, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Number of Questions: </span><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>{numQuestions}</span></div>
            <div style={{ left: 419, top: top + 57, position: 'absolute' }}><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Points Earned: </span><span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word' }}>{points}</span></div>

            {participated ? (
                <div style={{ background: 'white', border: '2px #00BDA9 solid', padding: 16, left: 419, top: top + 90, position: 'absolute', borderRadius: 10, borderColor: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
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

const Surveys = ({ accessToken }) => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [surveyData, setSurveyData] = useState([]); // State to hold survey data
    const [selectedSurvey, setSelectedSurvey] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const itemsPerPage = 4; // Number of surveys per page

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const handleSelectionChange = (surveyId) => {
        setSelectedSurvey(surveyId);
    };
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
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <Header />
            <div style={{ left: 220, width: '80%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <div style={{ width: 1400, height: 736, left: 128, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }} >
                <div style={{ left: 20, top: 20, position: 'absolute', textAlign: "left", lineHeight: 1.5 }}>
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word' }}>Surveys</span>
                    <span style={{ color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word' }}> <br /></span>
                    <span style={{ color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span>
                </div>
                <div className="Surveys" style={{left: -130, position: 'relative'}}>
                    {currentSurveys.map((survey, index) => (
                        <Survey
                            key={survey.id}
                            id={survey.id}
                            top={80 + index * 157} // Adjust `top` dynamically based on index
                            image={survey.image}
                            logo={survey.logo}
                            etat={survey.etat}
                            title={survey.description}
                            description={survey.title}
                            numQuestions={survey.questions.length}
                            points={survey.questions.length}
                            onSelectionChange={handleSelectionChange}
                        />
                    ))}
                    {/* Pagination Controls */}
                    <div style={{ display: 'flex', justifyContent: 'end', marginTop: 20, background: 'transparent', position: 'relative', top: '42rem',left:120 }}>
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
            </div>
        </div>
    );
};

export default Surveys;
