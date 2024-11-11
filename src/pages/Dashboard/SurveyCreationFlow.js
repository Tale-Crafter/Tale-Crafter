import React, { useState } from 'react';
import styled from 'styled-components';
import CreateSurveySTEP1 from './CreateSurveySTEP1';
import CreateSurveySTEP2 from './CreateSurveySTEP2';
import Importqs1 from './Importqs1';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function SurveyCreationFlow() {
    const [currentStep, setCurrentStep] = useState(1);
    const [surveyData, setSurveyData] = useState(null);
    const [languages, setLanguages] = useState([]);
    const [useAudiencePanel, setUseAudiencePanel] = useState(false);
    const [questions, setQuestions] = useState([]);  // Separate state for questions
    const [isImportModalOpen, setImportModalOpen] = useState(false);

    const handleNext = (survey, languages, copyQuestions, useAudiencePanel) => {
        setSurveyData(survey);
        setLanguages(languages);
        setUseAudiencePanel(useAudiencePanel);

        if (copyQuestions) {
            setImportModalOpen(true);
        } else {
            setCurrentStep(3);
        }
    };

    const handleImportFinish = (importedQuestions) => {
        console.log("Imported Questions:", importedQuestions);
        setQuestions(importedQuestions);
        setImportModalOpen(false);
        setCurrentStep(3);
    };

    const handleCancelImport = () => {
        setImportModalOpen(false); // Close the modal without changing steps
    };

    return (
        <div>
            {currentStep === 1 && (
                <CreateSurveySTEP1 onNext={handleNext} />
            )}

            {/* Modal for Importqs1 */}
            {isImportModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <Importqs1 onFinish={handleImportFinish} onCancel={handleCancelImport} />
                        <Button onClick={handleCancelImport}>Cancel</Button>
                    </ModalContent>
                </ModalOverlay>
            )}

            {currentStep === 3 && (
                <CreateSurveySTEP2
                    survey={surveyData}
                    questions={questions}  // Pass questions separately
                    languages={languages}
                    useAudiencePanel={useAudiencePanel}
                />
            )}
        </div>
    );
}

export default SurveyCreationFlow;
