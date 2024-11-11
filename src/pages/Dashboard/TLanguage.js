import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ConfirmationPopup from './ConfirmationPopup';
import { Button } from '@mui/material';
import { fetchSurveyById, SaveAnswers } from './Api'; // Ensure SaveAnswers is imported
import Oneto10Component from './1to10Component';
import EmojiComponentSurvey from "../../components/EmojisComponentSurvey";
import StarRankingSurvey from './StarRankingSurvey';
import Leftsidebar from "./Leftsidebar";
import Header from "./Header";
import EarnsPage from './EarnsPage'; // Import EarnsPage

const SurveyPage = () => {
    const { idSurvey } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [surveyData, setSurveyData] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [answers, setAnswers] = useState({});
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [showLanguageSelection, setShowLanguageSelection] = useState(true);
    const [isSurveyComplete, setIsSurveyComplete] = useState(false); // New state for completion
    const navigate = useNavigate();

    useEffect(() => {
        if (!idSurvey) {
            console.error('Survey ID is undefined');
            return;
        }

        const getSurveyData = async () => {
            try {
                const data = await fetchSurveyById(idSurvey);
                setSurveyData(data);
            } catch (error) {
                console.error('Error fetching survey:', error);
            }
        };

        getSurveyData();
    }, [idSurvey]);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
    };

    const handleNextQuestion = async () => {
        const currentQuestion = surveyData.questions[currentQuestionIndex];

        if (currentQuestion.mandatory && !answers[currentQuestion.questionId]) {
            alert("Please answer the mandatory question before proceeding.");
            return;
        }

        if (currentQuestionIndex < surveyData.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Prepare data for saving
            const formattedAnswers = Object.keys(answers).map((key) => {
                return {
                    responseId: null, // Adjust this based on your logic
                    normalUser: null, // Adjust this based on your logic
                    answer: Array.isArray(answers[key]) ? answers[key].join(', ') : answers[key], // Join arrays into a string
                    survey: surveyData, // Use the current survey ID
                    question: currentQuestion
                };
            });

            // Log the formatted answers
            console.log("Formatted Answers to Post:", JSON.stringify(formattedAnswers, null, 2));

            try {
                // Post each formatted answer separately
                for (const answer of formattedAnswers) {
                    await SaveAnswers(answer);
                }
                setIsSurveyComplete(true); // Set survey as complete
            } catch (error) {
                console.error('Error saving answers:', error);
            }
        }
    };




    const renderProgressBar = () => {
        if (!surveyData.questions || surveyData.questions.length === 0) {
            return null; // Do not render progress bar if questions are not available
        }

        const totalQuestions = surveyData.questions.length;
        const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

        return (
            <div style={{ position: 'absolute', right: 20, top: 30, display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '300px', height: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px', marginRight: '5px' }}>
                    <div style={{ width: `${progressPercentage}%`, height: '100%', backgroundColor: '#00CED1', borderRadius: '5px' }}></div>
                </div>
                <span>{Math.round(progressPercentage)}%</span>
            </div>
        );
    };

    const renderQuestion = (question) => {
        const questionElement = (
            <div key={question.questionId}>
                <h3>{question.text}</h3>
                <div>{question.description}</div>
            </div>
        );

        // Handling question types (as before)
        return questionElement;
    };

    const renderOptions = (question) => {
        const qt = renderQuestion(question);

        switch (question.answerType) {
            case "Single textbox":
                return (
                    <>
                        {qt}
                        <input
                            type="text"
                            onChange={(e) => handleAnswerChange(question.questionId, e.target.value)}
                            value={answers[question.questionId] || ""}
                        />
                    </>
                );

            case "Comment":
                return (
                    <>
                        {qt}
                        <textarea
                            onChange={(e) => handleAnswerChange(question.questionId, e.target.value)}
                            value={answers[question.questionId] || ""}
                        />
                    </>
                );

            case "Radio box":
                return (
                    <>
                        {qt}
                        {question.options.map((option, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name={`question-${question.questionId}`}
                                    value={option}
                                    onChange={() => handleAnswerChange(question.questionId, option)}
                                    checked={answers[question.questionId] === option}
                                />
                                {option}
                            </label>
                        ))}
                    </>
                );

            case "Check boxes":
                return (
                    <>
                        {qt}
                        {question.options.map((option, index) => (
                            <label key={index}>
                                <input
                                    type="checkbox"
                                    value={option}
                                    onChange={(e) => {
                                        const currentAnswers = answers[question.questionId] || [];
                                        if (e.target.checked) {
                                            currentAnswers.push(option);
                                        } else {
                                            const index = currentAnswers.indexOf(option);
                                            if (index > -1) {
                                                currentAnswers.splice(index, 1);
                                            }
                                        }
                                        handleAnswerChange(question.questionId, currentAnswers);
                                    }}
                                    checked={(answers[question.questionId] || []).includes(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </>
                );

            case "Dropdown":
                return (
                    <>
                        {qt}
                        <select
                            onChange={(e) => handleAnswerChange(question.questionId, e.target.value)}
                            value={answers[question.questionId] || ""}
                        >
                            <option value="" disabled>Select an option</option>
                            {question.options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </>
                );

            case "Choice of 1 to 10":
                return (
                    <>
                        {qt}
                        <Oneto10Component
                            onChange={(value) => handleAnswerChange(question.questionId, value)}
                            value={answers[question.questionId] || 0}
                        />
                    </>
                );

            case "Smile rating":
                return (
                    <>
                        {qt}
                        <EmojiComponentSurvey
                            onChange={(value) => handleAnswerChange(question.questionId, value)}
                            value={answers[question.questionId] || 0}
                        />
                    </>
                );

            case "Star rating":
                return (
                    <>
                        {qt}
                        <StarRankingSurvey
                            onChange={(value) => handleAnswerChange(question.questionId, value)}
                            value={answers[question.questionId] || 0}
                        />
                    </>
                );

            default:
                return null; // Fallback for unknown answer types
        }
    };

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
            <Header />
            <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: '#EFEFEF',
                marginLeft: !sidebarVisible ? -100 : 0,
                transition: 'margin-left 0.3s ease'
            }}>
                <div style={{ width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }}>
                    <div style={{ textAlign: 'center' }}>
                        {showLanguageSelection ? (
                            <div style={{ marginTop: 20 }}>
                                <h2>Select Language</h2>
                                <div>
                                    {['العربية', 'Française', 'English'].map((lang) => (
                                        <label key={lang} style={{ margin: '0 150px', cursor: 'pointer', display: 'block' }}>
                                            <input type="radio" name="language" value={lang} onChange={() => setSelectedLanguage(lang)} />
                                            <span style={{ marginLeft: 5 }}>{lang}</span>
                                        </label>
                                    ))}
                                </div>
                                <Button onClick={() => { setShowLanguageSelection(false); }} disabled={!selectedLanguage}>Start Survey</Button>
                            </div>
                        ) : (
                            <>
                                {renderProgressBar()}
                                {surveyData.questions && renderOptions(surveyData.questions[currentQuestionIndex])}
                                <Button onClick={handleNextQuestion}>Next</Button>
                            </>
                        )}
                    </div>
                    {showConfirmation && (
                        <ConfirmationPopup
                            onClose={() => setShowConfirmation(false)}
                            onValidate={() => setShowLanguageSelection(false)}
                            message={`You selected ${selectedLanguage}. Proceed?`}
                        />
                    )}
                    {isSurveyComplete && <EarnsPage />} {/* Display EarnsPage */}
                </div>
            </div>
        </div>
    );
};

export default SurveyPage;
