import React, { useState } from 'react';
import './App.css';

const Importqs1 = ({ onFinish, onCancel }) => {
    const [questionsContent, setQuestionsContent] = useState("");
    const [previewContent, setPreviewContent] = useState([]);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(true);
    const [questions, setQuestions] = useState([]);

    const handleQuestionsChange = (event) => {
        const content = event.target.value;
        setQuestionsContent(content);
        setPreviewContent(generatePreview(content));
        setIsNextDisabled(content.trim() === '');
        setShowPlaceholder(content.trim() === '');
    };

    const generatePreview = (content) => {
        const lines = content.split('\n');
        const formattedQuestions = [];
        let currentQuestion = null;
        let questionCount = 0;

        lines.forEach((line) => {
            const trimmedLine = line.trim();
            if (trimmedLine.endsWith('?')) {
                questionCount++;
                if (currentQuestion) formattedQuestions.push(currentQuestion);
                currentQuestion = [`Q${questionCount}: ${trimmedLine}`];
            } else if (trimmedLine === '') {
                if (currentQuestion) {
                    formattedQuestions.push(currentQuestion);
                    currentQuestion = null;
                }
            } else if (currentQuestion) {
                currentQuestion.push(`R${currentQuestion.length}: ${trimmedLine}`);
            }
        });

        if (currentQuestion) formattedQuestions.push(currentQuestion);

        return formattedQuestions;
    };

    const handleAddQuestions = () => {
        const questionsArray = previewContent.map((question, index) => ({
            // id: null,
            id: `question-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
            // text: question[0],
            // options: question.slice(1),
            text: question[0].replace(/^Q\d+:\s*/, ''),  // Store the question text without Q prefix
            description: '',
            showDescription: false,
            mandatory: false,
            options: question.slice(1).map(option => option.replace(/^R\d+:\s*/, '')),  // Remove R prefix from each option
            questionType: 'Text',
            answerType: 'Radio box',
            files: [],
            generateResponses: false,
            responseType: ''
        }));
        setQuestions(questionsArray); // Store questions in state
        onFinish(questionsArray); // Send questions to the parent component
    };

    return (
        <div className="App">
            <div style={{ width: '97%', height: '97%', position: 'absolute', top: '0', right: '0', bottom: '0', left: '0', margin: 'auto', background: 'white', borderRadius: 16 }}>
                <div style={{ left: 30, top: 10, position: 'absolute', color: 'Black', fontSize: 32, fontFamily: 'revert', fontWeight: '600' }}>Import questions</div>
                <div style={{ width: 1750, height: 60, position: 'absolute', top: 60, left: 40, background: 'rgba(17, 17, 17, 0.07)', borderRadius: 16, display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginLeft: 10, color: 'Black', fontSize: 22, fontFamily: 'revert', fontWeight: '350' }}>
                        Include questions in a survey by placing each question and its response choices on separate lines. Use two line breaks to separate each question.
                    </div>
                </div>

                <textarea
                    style={{
                        background: 'white',
                        position: "absolute",
                        top: 165,
                        left: 40,
                        width: 850,
                        height: 650,
                        outline: 'none',
                        resize: 'none',
                        padding: '8px',
                        fontFamily: "revert",
                        fontSize: 18,
                        borderRadius: '24px',
                        border: '3px solid',
                        borderImage: 'linear-gradient(90deg, rgb(0, 189, 169) 0%, rgb(0, 192, 252) 100%) 1'
                    }}
                    placeholder="Copy and paste your pre-written questions and response choices..."
                    value={questionsContent}
                    onChange={handleQuestionsChange}
                />

                <div style={{ left: 975, top: 130, position: 'absolute', color: 'Black', fontSize: 25, fontFamily: 'revert', fontWeight: '500' }}>Preview</div>
                <div style={{
                    background: 'rgba(17, 17, 17, 0.10)',
                    position: "absolute",
                    top: 165,
                    right: 40,
                    width: 850,
                    maxHeight: 650,
                    overflowY: 'auto',
                    padding: '8px',
                    fontFamily: "revert",
                    fontSize: 18,
                    borderRadius: 16,
                    textAlign: 'center',
                }}>
                    {showPlaceholder ? (
                        'No questions have been added'
                    ) : (
                        previewContent.map((question, index) => (
                            <div key={index} style={{
                                background: 'white',
                                padding: '10px',
                                margin: '10px 0',
                                borderRadius: 12,
                                textAlign: 'left',
                                lineHeight: '1.6'
                            }}>
                                {question.map((line, idx) => (
                                    <div key={idx} style={{ fontWeight: idx === 0 ? 'bold' : 'normal' }}>
                                        {line}
                                    </div>
                                ))}
                            </div>
                        ))
                    )}
                </div>

                <button
                    onClick={onCancel}
                    style={{
                        background: "transparent",
                        borderRadius: 16,
                        border: '2px #111111 solid',
                        width: 150,
                        height: 40,
                        right: 205,
                        top: 840,
                        position: 'absolute',
                        color: '#111111',
                        fontSize: 16,
                        fontFamily: 'revert',
                        fontWeight: '600'
                    }}>
                    Cancel
                </button>
                <button
                    onClick={handleAddQuestions}
                    disabled={isNextDisabled}
                    style={{
                        background: isNextDisabled ? '#CCCCCC' : 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)',
                        border: 'none',
                        borderRadius: 16,
                        width: 150,
                        height: 40,
                        right: 40,
                        top: 840,
                        position: 'absolute',
                        color: isNextDisabled ? '#666666' : 'white',
                        fontSize: 16,
                        fontFamily: 'revert',
                        fontWeight: '600'
                    }}>
                    Add questions
                </button>
            </div>
        </div>
    );
};

export default Importqs1;
