import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EmojiComponentSurvey from "../../components/EmojisComponentSurvey";
import Stars from './StarRankingBus';
import Oneto10Component from './1to10Component';

const ReviewAndPreview = ({ survey, questions, deleteQuestion, onConfirm }) => {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/chsurvey1');
    };

    const renderAnswerOptions = (question) => {
        const { answerType, options = [], labelLow = 'Very dissatisfied', labelHigh = 'Very satisfied' } = question;

        switch (answerType) {
            case 'Star rating':
                return (
                    <div style={{ position: 'relative', textAlign: 'center' }}>
                        <Stars onStarClick={() => {}} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                            <span style={{ color: '#999', fontSize: 20 }}>{labelLow}</span>
                            <span style={{ color: '#999', fontSize: 20 }}>{labelHigh}</span>
                        </div>
                    </div>
                );
            case 'Smile rating':
                return <EmojiComponentSurvey onEmojiSelect={() => {}} selectedEmoji={null} />;
            case 'Choice of 1 to 10':
                return (
                    <div>
                        <Oneto10Component />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                            <span style={{ color: '#999', fontSize: 20 }}>{labelLow}</span>
                            <span style={{ color: '#999', fontSize: 20 }}>{labelHigh}</span>
                        </div>
                    </div>
                );
            case 'Check boxes':
                return options.length > 0 ? (
                    options.map((option, index) => (
                        <div key={index} style={{ marginBottom: '5px' }}>
                            <input type="checkbox" id={`checkbox-${index}`} name={`question-${question.id}`} />
                            <label htmlFor={`checkbox-${index}`}>{option}</label>
                        </div>
                    ))
                ) : (
                    <span>No answer options available</span>
                );
            case 'Dropdown':
                return options.length > 0 ? (
                    <select style={{ marginTop: '5px', padding: '5px' }}>
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                ) : (
                    <span>No answer options available</span>
                );
            default:
                return options.length > 0 ? (
                    options.map((option, index) => (
                        <div key={index} style={{ marginBottom: '5px' }}>
                            <input type="radio" id={`radio-${index}`} name={`question-${question.id}`} />
                            <label htmlFor={`radio-${index}`}>{option}</label>
                        </div>
                    ))
                ) : (
                    <span>No answer options available</span>
                );
        }
    };

    const renderMediaContent = (question) => {
        const { questionType, files } = question;
        if (!files || files.length === 0) return null;

        return files.map((file) => {
            if (file.type === 'YouTube') {
                return (
                    <iframe
                        key={file.id}
                        width="700"
                        height="400"
                        src={`https://www.youtube.com/embed/${file.id}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: '8px', margin: '20px 0' }}
                    ></iframe>
                );
            } else {
                const mediaSource = URL.createObjectURL(file);
                switch (questionType) {
                    case 'Sound':
                        return (
                            <audio key={file.id} controls style={{ width: '700px', borderRadius: '8px', margin: '20px 0' }}>
                                <source src={mediaSource} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        );
                    case 'Video':
                        return (
                            <video key={file.id} controls style={{ width: '700px', borderRadius: '8px', margin: '20px 0' }}>
                                <source src={mediaSource} type="video/mp4" />
                                Your browser does not support the video element.
                            </video>
                        );
                    case 'Image':
                        return (
                            <img key={file.id} src={mediaSource} alt="Preview" style={{ width: '700px', borderRadius: '8px', margin: '20px 0' }} />
                        );
                    default:
                        return null;
                }
            }
        });
    };

    useEffect(() => {
        return () => {
            questions.forEach(question => {
                if (question.files) {
                    question.files.forEach(file => {
                        URL.revokeObjectURL(file);
                    });
                }
            });
        };
    }, [questions]);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Review and Preview Questions</h2>
            {questions.length > 0 ? (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {questions.map((question, index) => (
                        <li
                            key={question.id}
                            style={{
                                marginBottom: '15px',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                position: 'relative'
                            }}
                        >
                            <strong>Question {index + 1}:</strong> {question.text || 'Media content only'}
                            <br />
                            <strong>Answer Type:</strong> {question.answerType}
                            <br />
                            <strong>Question Type:</strong> {question.questionType}
                            <br />
                            <strong>Description:</strong> {question.description}
                            <br />
                            {question.questionType !== 'Text' && renderMediaContent(question)}
                            <br />
                            <div>{renderAnswerOptions(question)}</div>
                            <span style={{ color: question.mandatory ? 'red' : 'gray' }}>
                                {question.mandatory ? 'Mandatory' : 'Optional'}
                            </span>
                            <div style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }}>
                                <span onClick={() => deleteQuestion(index)} style={{ color: '#999', fontSize: 24 }}>⋮</span>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No questions to display.</p>
            )}
            <button onClick={handleNextStep} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Next</button>
        </div>
    );
};

export default ReviewAndPreview;