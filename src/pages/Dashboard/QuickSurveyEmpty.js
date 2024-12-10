import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSurveys } from './Api'; // Import the fetchSurveys function

const QuickSurveyEmpty = () => {
    const [surveyData, setSurveyData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSurveys = async () => {
            try {
                const data = await fetchSurveys();
                setSurveyData(data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching surveys:', error.message);
            }
        };

        getSurveys();
    }, []);

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
        </div>
    );
}

export default QuickSurveyEmpty;
