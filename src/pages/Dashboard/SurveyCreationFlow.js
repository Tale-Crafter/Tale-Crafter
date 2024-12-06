import React, { useState } from 'react';
import styled from 'styled-components';
import CreateSurveySTEP1 from './CreateSurveySTEP1';
import CreateSurveySTEP2 from './CreateSurveySTEP2';
import Importqs1 from './Importqs1';
import Surveylink from "./SurveyLink";
import ReviewPreview1 from "../Review&Preview1";
import Order from "./Order";
import ReviewPreview2 from "../Review&Preview2";
import ReviewPreview3 from "../Review&Preview3";
import SurveyColl from "./SurveyColl";
import ChooseSurvey1 from "../../components/ChooseSurvey1";
import ChooseSurvey3 from "../../components/ChooseSurvey3";
import ChooseSurvey2 from "../../components/ChooseSurvey2";

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
    const [selectedOption, setSelectedOption] = useState("");  // Track selected option

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

    // const handleNext1 = (survey) => {
    //     setSurveyData(survey);
    //     setCurrentStep(4);
    //
    // };

    // const handleNext1 = (survey, selectedOption1) => {
    //     setSurveyData(survey);
    //     setSelectedOption(selectedOption1);
    //
    //     if (currentStep === 3) {
    //         setCurrentStep(4);
    //     } else if (currentStep === 4 && selectedOption === 'Customize distribution channels') {
    //         setCurrentStep(5);
    //     } else if (currentStep === 4 && selectedOption === 'Reach your target audience') {
    //         setCurrentStep(9);
    //     } else if ( selectedOption === 'Share a survey link') {
    //         setCurrentStep(6);
    //     }
    //     else if (selectedOption === 'Embed on a website') {
    //         setCurrentStep(7);
    //     }
    //     else if ( selectedOption === 'Obtain targeted responses') {
    //         setCurrentStep(9);
    //     }else if ((currentStep === 6 && selectedOption === 'LinkBack') || (currentStep === 7 && selectedOption === 'EmbedBack')) {
    //         setCurrentStep(5);
    //     }else if ((currentStep === 6 && selectedOption === 'LinkNext') || (currentStep === 7 && selectedOption === 'EmbedNext')) {
    //         setCurrentStep(8);
    //     }else if (currentStep === 5 && selectedOption === 'backch1') {
    //         setCurrentStep(4);
    //     }
    // };
    const handleNext1 = (survey1, selectedOption1) => {
        console.log("Current Step: ", currentStep);
        console.log("Selected Option: ", selectedOption1);

        setSurveyData(survey1);
        console.log("surveyyyy: ", survey1);
        setSelectedOption(selectedOption1);

        setCurrentStep(prevStep => {
            console.log("Previous Step: ", prevStep);

            if (prevStep === 3) {
                return 4;
            } else if (prevStep === 4 && selectedOption === 'Customize distribution channels') {
                return 5;
            } else if (prevStep === 4 && selectedOption === 'Reach your target audience') {
                return 9;
            } else if (selectedOption === 'Share a survey link') {
                return 6;
            } else if (selectedOption === 'Embed on a website') {
                return 7;
            } else if (selectedOption === 'Obtain targeted responses') {
                return 9;
            } else if ((prevStep === 6 && selectedOption === 'LinkBack') || (prevStep === 7 && selectedOption === 'EmbedBack')) {
                return 5;
            } else if ((prevStep === 6 && selectedOption === 'LinkNext') || (prevStep === 7 && selectedOption === 'EmbedNext')) {
                return 8;
            } else if (prevStep === 5 && selectedOption === 'backch1') {
                return 4;
            }else if ( selectedOption === 'CollNext') {
                return 9;
            } else if ( selectedOption === 'CollBack') {
                return 5;
            } else if ( selectedOption === 'OrderBack') {
                return 8;
            }
            return prevStep;  // Default return to avoid unwanted updates
        });
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

    // const handleGenerateLink = () => {
    //     setCurrentStep(4); // Move to the final step (Step 4)
    // };

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
                    onNext={handleNext1}
                />
            )}

            {/*{currentStep === 4 && (*/}
            {/*    <Surveylink survey={surveyData} /> // Pass survey data to Surveylink*/}
            {/*)}*/}
            {currentStep === 4 && (
                <ChooseSurvey1
                    survey={surveyData}
                    onNext={handleNext1}
                />
            )}
            {currentStep === 5 && (
                <ChooseSurvey2
                    survey={surveyData}
                    onNext={handleNext1}
                />
            )}
            {currentStep === 6 && (
                <Surveylink
                    survey={surveyData}
                    onNext={handleNext1}
                />
            )}
            {currentStep === 7 && (
                <ChooseSurvey3
                    survey={surveyData}
                    onNext={handleNext1}
                />
            )}
            {currentStep === 8 && (
                <SurveyColl
                    survey={surveyData}
                    onNext={handleNext1}
                />
            )}
            {currentStep === 9 && (
                <Order
                    survey={surveyData}
                    onNext={handleNext1}
                />
            )}
        </div>
    );
}

export default SurveyCreationFlow;
