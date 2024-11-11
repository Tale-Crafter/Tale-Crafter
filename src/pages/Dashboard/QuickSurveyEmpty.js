import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSurveys } from './Api'; // Import the fetchSurveys function

const QuickSurveyEmpty = ({ accessToken }) => {
    const { iduser } = useParams();
    const [surveyData, setSurveyData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    const surveyItems = surveyData.length > 0 ? (
        surveyData.map((survey, index) => (
            <div
                key={survey.id}
                style={{
                    width: 310,
                    height: 160,
                    left: index % 4 * 340 + 368, // Adjust horizontal position based on index
                    top: Math.floor(index / 4) * 177 + 720, // Adjust vertical position based on index
                    position: 'absolute',
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)',
                    borderRadius: 16
                }}
            >
                <Link to={survey.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                    <img src={survey.image} alt={survey.title} style={{ width: '100%', height: '100%' }} />
                    <div style={{ textAlign: 'right', color: 'white', padding: '8px' }}>
                        <span style={{ fontSize: 14, fontWeight: '700' }}>{survey.title}</span><br />
                        {/*<span style={{ fontSize: 14, fontWeight: '400' }}>{survey.questions} Questions</span>*/}
                    </div>
                </Link>
            </div>
        ))
    ) : (
        <p>No surveys available.</p>
    );

    return (
        <div className="App1" style={{ position: 'relative' }}>
            {surveyItems}
            {/* Static links */}
            {/*<Link to={`/tobacco`}>*/}
            {/*    <div style={{ width: 216, height: 54, left: 440, top: 790, position: 'absolute', textAlign: 'right' }}>*/}
            {/*        <span style={{ color: 'white', fontSize: 14, fontWeight: '700', wordWrap: 'break-word' }}>Tobacco consumption<br /></span>*/}
            {/*        <span style={{ color: 'white', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}>(19 questions)</span>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            {/*<Link to={`/surveydetails`}>*/}
            {/*    <div style={{ width: 216, height: 54, left: 440, top: 970, position: 'absolute', textAlign: 'right' }}>*/}
            {/*        <span style={{ color: 'white', fontSize: 14, fontWeight: '700', wordWrap: 'break-word' }}>Job/job seeker<br /></span>*/}
            {/*        <span style={{ color: 'white', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}>(19 questions)</span>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            {/*<Link to={`/education`}>*/}
            {/*    <div style={{ width: 216, height: 54, left: 440, top: 1150, position: 'absolute', textAlign: 'right' }}>*/}
            {/*        <span style={{ color: 'white', fontSize: 14, fontWeight: '700', wordWrap: 'break-word' }}>Education and formation<br /></span>*/}
            {/*        <span style={{ color: 'white', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}>(19 questions)</span>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            {/*<Link to={`/habits`}>*/}
            {/*    <div style={{ width: 216, height: 54, left: 440, top: 1330, position: 'absolute', textAlign: 'right' }}>*/}
            {/*        <span style={{ color: 'white', fontSize: 14, fontWeight: '700', wordWrap: 'break-word' }}>Consumption habits<br /></span>*/}
            {/*        <span style={{ color: 'white', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}>(19 questions)</span>*/}
            {/*    </div>*/}
            {/*</Link>*/}
        </div>
    );
}

export default QuickSurveyEmpty;
