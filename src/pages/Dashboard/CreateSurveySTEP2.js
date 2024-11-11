import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';
import { FaPlus, FaTrash } from 'react-icons/fa';
import BusinessLeftsidebar from "./BusinessLeftsidebar";
import BHeader from "./BHeader";
import EmojiComponentSurvey from "../../components/EmojisComponentSurvey";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import StarRankingSurvey from './StarRankingSurvey'; // Import your star ranking component
import Select from 'react-select';
import Modal from './Modal'; // Import the modal component
import ReviewAndPreview from './R&P';
import {CreateQuestions, CreateSurvey} from "./Api";
import Timeline from "./Timeline"; // Import the review and preview component

function CreateSurveySTEP2({ survey, questions: initialQuestions, languages, useAudiencePanel }) {
    const navigate = useNavigate();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [prevSurvey , setprevSurvey] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedEmoji, setSelectedEmoji] = useState(null); // State to track selected emoji
    const [onStarClick, setonStarClick] = useState(null); // State to track selected emoji
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (initialQuestions) {
            setQuestions(initialQuestions.map(question => ({ ...question }))); // Deep copy each question object
        }
    }, [initialQuestions]);

    const addNewQuestion = () => {
        const newQuestion = {
            // id: null,
            id: `question-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
            text: '',
            description: '',
            showDescription: false,
            mandatory: false,
            options: [''],
            questionType: 'Text',
            answerType: 'Radio box',
            files: [],
            generateResponses: false,
            responseType: ''
        };
        setQuestions([...questions, newQuestion]);
    };

    const handleInputChange = (id, field, value) => {
        setQuestions(prevQuestions =>
            prevQuestions.map(q => (q.id === id ? { ...q, [field]: value } : q))
        );
    };

    const handleTextChange = (id, text) => {
        handleInputChange(id, 'text', text);
    };

    const handleDescriptionChange = (id, description) => {
        handleInputChange(id, 'description', description);
    };

    const handleOptionChange = (questionId, index, value) => {
        const updatedQuestions = questions.map(question => {
            if (question.id === questionId) {
                const newOptions = [...question.options];
                newOptions[index] = value;
                return { ...question, options: newOptions };
            }
            return question;
        });
        setQuestions(updatedQuestions);
    };

    const handleAddOption = (questionId) => {
        const updatedQuestions = questions.map(question => {
            if (question.id === questionId) {
                return { ...question, options: [...question.options, ''] };
            }
            return question;
        });
        setQuestions(updatedQuestions);
    };

    const handleRemoveOption = (questionId, index) => {
        const updatedQuestions = questions.map(question => {
            if (question.id === questionId) {
                const newOptions = question.options.filter((_, i) => i !== index);
                return { ...question, options: newOptions };
            }
            return question;
        });
        setQuestions(updatedQuestions);
    };

    const handleToggleDescription = (questionId) => {
        const updatedQuestions = questions.map(question => {
            if (question.id === questionId) {
                return { ...question, showDescription: !question.showDescription };
            }
            return question;
        });
        setQuestions(updatedQuestions);
    };

    const handleDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;
        const reorderedQuestions = Array.from(questions);
        const [movedQuestion] = reorderedQuestions.splice(source.index, 1);
        reorderedQuestions.splice(destination.index, 0, movedQuestion);
        setQuestions(reorderedQuestions);
    };

    // const handleNext = () => navigate('/customexperiencelv3', { state: { questions } });
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    // Handle Next button click to open the modal
    const handleNext = () => {
        setIsModalOpen(true);
    };

    // Close the modal without making any changes
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // Function to delete a question, called from ReviewAndPreview
    const deleteQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions); // Update the questions state
    };
    const deleteQuestion1 = (id) => {
        const updatedQuestions = questions.filter(question => question.id !== id);
        setQuestions(updatedQuestions); // Update the questions state
    };
    const answerOptions  = [
        { value: 'Radio box', label: 'Radio box', icon: '/box.png' },
        { value: 'Check boxes', label: 'Check boxes', icon: '/check.png' },
        { value: 'Dropdown', label: 'Dropdown', icon: '/drop.png' },
        { value: 'Single textbox', label: 'Single textbox', icon: '/textbox.png' },
        { value: 'Comment', label: 'Comment Box', icon: '/Comment.png' },
        { value: 'Choice of 1 to 10', label: 'Choice of 1 to 10', icon: '/choice.png' },
        { value: 'Smile rating', label: 'Smile rating', icon: '/smile.png' },
        { value: 'Star rating', label: 'Star rating', icon: '/star.png' },
    ];
    const questionTypeOptions = ['Text', 'Image', 'Video', 'Sound'];
    // Separate handler for question type selection

    // const handleQuestionTypeChange = (newType, questionId) => {
    //     setQuestions((prevQuestions) =>
    //         prevQuestions.map((question) =>
    //             question.id === questionId
    //                 ? { ...question, questionType: newType } // update the question type for this question
    //                 : question
    //         )
    //     );
    // };
    const handleQuestionTypeChange = (newType, questionId) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) =>
                question.id === questionId
                    ? {
                        ...question,
                        questionType: newType,  // Update the question type
                        files: [],              // Reset files when question type changes
                        uploadedSoundFiles: [], // Reset sound files when type changes
                        uploadedVideoFiles: []  // Reset video files when type changes (if applicable)
                    }
                    : question
            )
        );
    };


    const handleAnswerTypeChange = (newAnswerType, questionId) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) =>
                question.id === questionId
                    ? { ...question, answerType: newAnswerType } // update answerType for the question
                    : question
            )
        );
    };

    // Handle file change for image, video, and sound types
    const handleFileChange = (event, questionId, fileType) => {
        const files = Array.from(event.target.files);
        setQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.id === questionId) {
                    return {
                        ...question,
                        files: [...question.files, ...files], // Append the new files
                    };
                }
                return question;
            });
        });
    };

    // Function to handle radio button choice
    const handleEmojiSelect = (emojiSrc) => {
        setSelectedEmoji(emojiSrc);
    };
    const handleOnStarClick = (onStarClick1) => {
        setonStarClick(onStarClick1);
    };

    const [videoType, setVideoType] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [videoSourceUrl, setVideoSourceUrl] = useState('');

    //
    // const handleUrlChange = (e) => {
    //     setYoutubeUrl(e.target.value);
    // };
    //
    // // Handle video URL upload
    // const handleUrlUpload = (questionId) => {
    //     if (youtubeUrl) {
    //         const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];
    //         if (videoId) {
    //             setQuestions(prevQuestions => {
    //                 return prevQuestions.map(question => {
    //                     if (question.id === questionId) {
    //                         return {
    //                             ...question,
    //                             files: [...question.files, { id: videoId, type: 'YouTube' }],
    //                         };
    //                     }
    //                     return question;
    //                 });
    //             });
    //             setVideoSourceUrl(videoId);
    //             setYoutubeUrl('');
    //         }
    //     }
    // };
    //
    // const handleClearInputs = () => {
    //     setVideoSourceUrl('');
    //     setYoutubeUrl('');
    //     setUploadedFiles([]);
    //     setUploadedSoundFiles([]);
    // };

    // const handleVideoTypeChange = (type) => {
    //     setVideoType(type);
    //     setVideoSourceUrl(''); // Reset video source when changing type
    // };
    const handleVideoTypeChange = (type, questionId) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) =>
                question.id === questionId
                    ? { ...question, videoType: type, youtubeUrl: '' } // Reset YouTube URL if switching video type
                    : question
            )
        );
    };
    const handleUrlChange = (e, questionId) => {
        const url = e.target.value;
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) =>
                question.id === questionId
                    ? { ...question, youtubeUrl: url }
                    : question
            )
        );
    };

    // const handleUrlUpload = (questionId) => {
    //     const youtubeUrl = questions.find(q => q.id === questionId)?.youtubeUrl;
    //     if (youtubeUrl) {
    //         const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];
    //         if (videoId) {
    //             setQuestions((prevQuestions) => {
    //                 return prevQuestions.map((question) =>
    //                     question.id === questionId
    //                         ? { ...question, files: [...question.files, { id: videoId, type: 'YouTube' }] }
    //                         : question
    //                 );
    //             });
    //         }
    //     }
    // };
    // const handleUrlUpload = (questionId) => {
    //     if (youtubeUrl) {
    //         const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];
    //         if (videoId) {
    //             setQuestions(prevQuestions => {
    //                 return prevQuestions.map(question => {
    //                     if (question.id === questionId) {
    //                         return {
    //                             ...question,
    //                             files: [...question.files, { id: videoId, type: 'YouTube' }],
    //                         };
    //                     }
    //                     return question;
    //                 });
    //             });
    //             setVideoSourceUrl(videoId);
    //             setYoutubeUrl('');
    //         }
    //     }
    // };
    const handleUrlUpload = (questionId) => {
        if (youtubeUrl) {
            const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];
            if (videoId) {
                setQuestions(prevQuestions => {
                    return prevQuestions.map(question => {
                        if (question.id === questionId) {
                            // Add YouTube video to files array
                            return {
                                ...question,
                                files: [...question.files, { id: videoId, type: 'YouTube' }],
                                youtubeUrl: '' // Clear the input after adding
                            };
                        }
                        return question;
                    });
                });
                setYoutubeUrl(''); // Reset youtubeUrl for the input field
            }
        }
    };


    const handleVideoFileChange = (event, questionId) => {
        const files = Array.from(event.target.files);
        setQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.id === questionId) {
                    return {
                        ...question,
                        files: [...question.files, ...files],
                    };
                }
                return question;
            });
        });
    };

    const handleClearInputs = (questionId) => {
        setQuestions((prevQuestions) => {
            return prevQuestions.map((question) =>
                question.id === questionId
                    ? { ...question, videoType: '', youtubeUrl: '', files: [] }
                    : question
            );
        });
        // Clear youtubeUrl after deleting the video
        setYoutubeUrl('');

    };

    const [uploadedSoundFiles, setUploadedSoundFiles] = useState([]);
    const [isSoundBoxVisible, setIsSoundBoxVisible] = useState(false);

    // Handle sound file upload
    const handleSoundFileChange = (event, questionId) => {
        const files = Array.from(event.target.files);
        setUploadedSoundFiles(prev => [...prev, ...files]);

        setQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.id === questionId) {
                    return {
                        ...question,
                        files: [...question.files, ...files],
                    };
                }
                return question;
            });
        });

        setIsSoundBoxVisible(true);
    };
    // Handle video file upload
    // const handleVideoFileChange = (event, questionId) => {
    //     const files = Array.from(event.target.files);
    //     setUploadedFiles(prev => [...prev, ...files]);
    //
    //     setQuestions(prevQuestions => {
    //         return prevQuestions.map(question => {
    //             if (question.id === questionId) {
    //                 return {
    //                     ...question,
    //                     files: [...question.files, ...files],
    //                 };
    //             }
    //             return question;
    //         });
    //     });
    // };
    // Handle delete for sound files
    const handleSoundDelete = (index, questionId) => {
        const updatedSoundFiles = uploadedSoundFiles.filter((_, i) => i !== index);
        setUploadedSoundFiles(updatedSoundFiles);

        setQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.id === questionId) {
                    return {
                        ...question,
                        files: question.files.filter((file, i) => i !== index), // Remove deleted file
                    };
                }
                return question;
            });
        });
    };
    const handleSoundFileInputClick = (questionId) => {
        const fileInput = document.querySelector(`input[type="file"][data-question-id="${questionId}"]`);
        if (fileInput) {
            fileInput.click();  // Trigger file input click only if input is found
        }
    };
    const handleToggleGenerateResponses = (questionId) => {
        setIsChecked(isChecked);
        setQuestions(prevQuestions =>
            prevQuestions.map((question) =>
                question.id === questionId
                    ? { ...question, isChecked: !question.isChecked } // Toggle only the specific question
                    : question
            )
        );
    };

    const handleResponseTypeChange = (e, questionId) => {
        const value = e.target.value;
        setQuestions(prevQuestions =>
            prevQuestions.map((question) =>
                question.id === questionId
                    ? {
                        ...question,
                        responseType: value,
                        options: value.split(" – "), // Set the options based on selected responseType
                        answerType: 'Radio box', // Set the answerType as "Radio box"
                    }
                    : question
            )
        );
    };
    // const formatQuestionsForSave = (questions) => {
    //     return questions.map(question => ({
    //         questionId: parseInt(question.id) || null,  // If 'id' is null, it might be auto-generated
    //         text: question.text,
    //         description: question.description || "",
    //         mandatory: question.mandatory || false,
    //         options: question.options || [],  // Ensure options is an array
    //         questionType: question.questionType || "Text",  // Default to "Text" if not provided
    //         answerType: question.answerType || "Single textbox",  // Default to "Single textbox"
    //         generateResponses: question.generateResponses || false,
    //         files: question.files || [],
    //         survey: { id: survey.id },  // Associate with the correct surveyId
    //     }));
    // };
    const formatQuestionsForSave = (questions) => {
        return questions.map(question => {
            const formattedFiles = question.files.map(file => {
                // Check if the file is a YouTube link
                if (file.type === 'YouTube') {
                    // Return formatted string for YouTube video ID
                    return `youtube@${file.id}`;  // Format as youtube@$<videoId>
                }
                // Check if the file is a regular file (like an image, PDF, etc.)
                else if (file instanceof File) {
                    // Return just the file name (since backend expects a string)
                    return file.name;  // Just return the file name as string
                }
                // Default case: return the file as is (if it's already a string)
                return file;
            });

            return {
                questionId: parseInt(question.id) || null,  // If 'id' is null, it might be auto-generated
                text: question.text,
                description: question.description || "",  // Default to empty string if description is null
                mandatory: question.mandatory || false,  // Default to false if not provided
                options: question.options || [],  // Ensure options is an array
                questionType: question.questionType || "Text",  // Default to "Text" if not provided
                answerType: question.answerType || "Single textbox",  // Default to "Single textbox"
                generateResponses: question.generateResponses || false,  // Default to false if not provided
                files: formattedFiles.join(','),  // Join files array into a single string
                survey: { id: survey.id },  // Associate with the correct surveyId
            };
        });
    };



    const handleConfirm = async () => {
        // Format the questions before saving
        const formattedQuestions = formatQuestionsForSave(questions);

        try {
            // Call the API to save the survey with questions
            const savedSurvey = await CreateSurvey(survey);
            console.log("Survey saved successfully:", savedSurvey);

            // Now get the survey ID from the response
            const surveyId = savedSurvey.id;

            // Step 4: Format the questions with the associated surveyId
            const formattedQuestionsWithSurvey = formattedQuestions.map(question => ({
                ...question,
                survey: { id: surveyId }  // Associate the surveyId with each question
            }));
            // console.log("questions :", formattedQuestionsWithSurvey);

            // Step 5: Save each question individually
            for (let question of formattedQuestionsWithSurvey) {
                console.log("Saving question:", JSON.stringify(question, null, 2));
                await CreateQuestions(question);  // Assuming saveQuestion is an API function for saving individual questions
            }

            console.log("Questions saved successfully.");

            closeModal();
            navigate('/chsurvey1');
        } catch (error) {
            console.error("Error saving survey or questions:", error);
        }

    };

    return (
        <div className="App">
            <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
            <BHeader />
            <div style={{ padding: '20px' }}>
                {/*<button onClick={addNewQuestion}>Add New Question</button>*/}
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="questions">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}
                                 style={{ marginTop: '20px',
                                     width: 1330, position: "relative",left: 340, top:40, borderRadius:16, backgroundColor:"white",
                                     padding:25 }}>
                                <h2 style={{textAlign:"justify"}}>Creating a new survey</h2>
                                {questions.map((question, index) => (
                                    <Draggable key={question.id} draggableId={String(question.id)} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                    ...provided.draggableProps.style,
                                                    marginBottom: '15px',
                                                    padding: '10px',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '5px',
                                                    backgroundColor: 'rgb(245, 245, 245)',
                                                }}
                                            >
                                                {/* Question Type Selection */}
                                                <div style={{ justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex', marginTop: '20px' }}>
                                                    {questionTypeOptions.map((type) => (
                                                        <div
                                                            key={type}
                                                            onClick={() => handleQuestionTypeChange(type, question.id)} // Pass the question ID to update the specific question
                                                            style={{ cursor: 'pointer', padding: '5px', margin: '0 10px' }}
                                                        >
                                                            <div style={{ width: 32, height: 32, position: 'relative' }}>
                                                                <div
                                                                    style={{
                                                                        width: 32, height: 32, position: 'absolute', borderRadius: 50,
                                                                        border: question.questionType === type ? 'transparent' : '3px #CCCCCC solid',
                                                                        background: question.questionType === type ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : 'transparent'
                                                                    }}
                                                                />
                                                                {question.questionType === type && (
                                                                    <div
                                                                        style={{
                                                                            width: 16, height: 16, position: 'absolute', top: '8px', left: '8px',
                                                                            backgroundColor: 'white', borderRadius: '50%', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                                                        }}
                                                                    />
                                                                )}
                                                            </div>
                                                            <span>{type}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div
                                                    style={{
                                                        padding: 8,
                                                        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                                                        color: 'white',
                                                        borderRadius: 4,
                                                        border: '1px #999999 solid',
                                                        gap: 10,
                                                        position:"relative",
                                                        width:100,
                                                        height:20,
                                                        left: 30,
                                                        top: -60
                                                    }}
                                                >
                                                    <div style={{ fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                                                        {/* Only show languages that are true */}
                                                        {Object.keys(languages)
                                                            .filter((lang) => languages[lang] === true)
                                                            .map((lang, index) => (
                                                                <div key={index}>{lang}</div>
                                                            ))}
                                                    </div>
                                                </div>
                                                {/* Resource Input Based on Selected Type */}
                                                {question.questionType === 'Image' && (
                                                    <div style={{ position: 'relative', marginTop: '20px', display: "flex", justifyContent: "center" }}>
                                                        <div style={{ width: 588, background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20 }}>
                                                            <div style={{ color: 'black', fontSize: 14, fontWeight: '600', margin: '10px 0', textAlign: "justify", position: "relative", top: -40 }}>
                                                                Cover photo of the survey
                                                            </div>
                                                            <div style={{ color: '#666', fontSize: 14, textAlign: 'right', marginBottom: 10, position: "relative", top: -65 }}>
                                                                JPG, PNG, JPEG
                                                            </div>
                                                            <div style={{
                                                                width: '96%', height: 300, borderRadius: 20,
                                                                border: '2px #CCCCCC dotted', display: 'flex', alignItems: 'center', justifyContent: 'center', position: "relative", left: 10, top: -25
                                                            }}>
                                                                <input
                                                                    type="file"
                                                                    name={`file-${question.id}`} // Unique name for each question
                                                                    style={{ display: 'none' }}
                                                                    onChange={(e) => handleFileChange(e, question.id, 'image')} // Handle file change for specific question
                                                                    accept="image/jpeg, image/png, image/jpg"
                                                                    multiple
                                                                />
                                                                <img
                                                                    src={`${process.env.PUBLIC_URL}/upload.png`}
                                                                    alt="Upload Icon"
                                                                    onClick={() => document.querySelector(`input[name="file-${question.id}"]`).click()} // Select the specific file input for this question
                                                                    style={{ cursor: 'pointer', width: 60, height: 60 }}
                                                                />
                                                                <div style={{ textAlign: 'center', color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>
                                                                    Select files to upload
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 20, position: "relative", top: 205, left: -375 }}>
                                                            {question.files && question.files.map((file, index) => (
                                                                <div key={index} style={{ margin: 10 }}>
                                                                    <img
                                                                        src={URL.createObjectURL(file)}
                                                                        alt={`File ${index}`}
                                                                        style={{ width: 150, objectFit: 'cover', borderRadius: 10 }}
                                                                    />
                                                                    <p style={{ textAlign: 'center', marginTop: 5 }}>{file.name}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {question.questionType === 'Video' && (
                                                    <div style={{ position: 'relative', marginTop: '20px' }}>
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                width: 700,
                                                                height: 32,
                                                                position: 'relative',
                                                            }}
                                                        >
                                                            <label style={{ cursor: 'pointer', position: 'relative', top: -5, width: 250 }}>
                                                                <input
                                                                    type="radio"
                                                                    name={`videoOption-${question.id}`} // Unique name for each question
                                                                    value="uploadVideo"
                                                                    checked={question.videoType === 'uploadVideo'}
                                                                    onChange={() => handleVideoTypeChange('uploadVideo', question.id)}
                                                                    style={{ display: 'none' }}
                                                                />
                                                                <span
                                                                    style={{
                                                                        textAlign: 'left',
                                                                        marginLeft: 5,
                                                                        position: 'relative',
                                                                        color: question.videoType === 'uploadVideo' ? '#00BDA9' : 'black',
                                                                    }}
                                                                >
          Upload video (Max 100 MB)
        </span>
                                                                <div
                                                                    style={{
                                                                        width: question.videoType === 'uploadVideo' ? 20 : 20,
                                                                        height: question.videoType === 'uploadVideo' ? 20 : 20,
                                                                        position: 'relative',
                                                                        borderRadius: 55,
                                                                        border:
                                                                            question.videoType === 'uploadVideo' ? '3px solid #00BDA9' : '3px solid #CCCCCC',
                                                                        top: -100,
                                                                        left: -40,
                                                                    }}
                                                                />
                                                            </label>

                                                            <label style={{ textAlign: 'left', cursor: 'pointer', position: 'relative', top: -5, width: 200 }}>
                                                                <input
                                                                    type="radio"
                                                                    name={`videoOption-${question.id}`} // Unique name for each question
                                                                    value="youtubeLink"
                                                                    checked={question.videoType === 'youtubeLink'}
                                                                    onChange={() => handleVideoTypeChange('youtubeLink', question.id)}
                                                                    style={{ display: 'none' }}
                                                                />
                                                                <span
                                                                    style={{
                                                                        marginLeft: 5,
                                                                        position: 'relative',
                                                                        color: question.videoType === 'youtubeLink' ? '#00BDA9' : 'black',
                                                                    }}
                                                                >
          YouTube Link
        </span>
                                                                <div
                                                                    style={{
                                                                        width: question.videoType === 'youtubeLink' ? 20 : 20,
                                                                        height: question.videoType === 'youtubeLink' ? 20 : 20,
                                                                        position: 'relative',
                                                                        borderRadius: 55,
                                                                        border:
                                                                            question.videoType === 'youtubeLink' ? '3px solid #00BDA9' : '3px solid #CCCCCC',
                                                                        top: -100,
                                                                        left: -40,
                                                                    }}
                                                                />
                                                            </label>
                                                        </div>

                                                        {/* YouTube URL Input */}
                                                        {question.videoType === 'youtubeLink' && !question.files.some(file => file.type === 'YouTube') && (
                                                            <div style={{ width: 380, height: 60, position: 'relative' }}>
                                                                <input
                                                                    style={{
                                                                        width: '100%',
                                                                        height: 'auto',
                                                                        padding: 20,
                                                                        background: 'rgba(17, 17, 17, 0.10)',
                                                                        borderRadius: 10,
                                                                        border: 'none',
                                                                    }}
                                                                    placeholder="Enter the YouTube link"
                                                                    value={youtubeUrl}
                                                                    onChange={(e) => setYoutubeUrl(e.target.value)}
                                                                />
                                                                <button
                                                                    style={{
                                                                        width: 81,
                                                                        height: 51,
                                                                        border: 'none',
                                                                        borderRadius: '10px',
                                                                        position: 'relative',
                                                                        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                                                                    }}
                                                                    onClick={() => handleUrlUpload(question.id)}
                                                                >
                                                                    <div style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>Upload</div>
                                                                </button>
                                                            </div>
                                                        )}

                                                        {/* YouTube Video Preview */}
                                                        {question.videoType === 'youtubeLink' && question.files.some(file => file.type === 'YouTube') && (
                                                            <div style={{ marginTop: 20, position: 'relative' }}>
                                                                {/* Find the YouTube file from the files array */}
                                                                {question.files
                                                                    .filter(file => file.type === 'YouTube')
                                                                    .map(file => (
                                                                        <iframe
                                                                            key={file.id} // Ensure the video is unique if there are multiple files
                                                                            title="Uploaded YouTube Video"
                                                                            width="420"
                                                                            height="261"
                                                                            src={`https://www.youtube.com/embed/${file.id}`}
                                                                            frameBorder="0"
                                                                            allowFullScreen
                                                                        ></iframe>
                                                                    ))
                                                                }
                                                                <button
                                                                    style={{
                                                                        position: 'relative',
                                                                        top: 20,
                                                                        left: -50,
                                                                        backgroundColor: 'transparent',
                                                                        color: '#00BDA9',
                                                                        fontWeight: 600,
                                                                        padding: '5px 10px',
                                                                        border: 'none',
                                                                    }}
                                                                    onClick={() => handleClearInputs(question.id)} // Clears the video URL
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        )}



                                                        {/* Video File Upload */}
                                                        {question.videoType === 'uploadVideo' && (
                                                            <div style={{ width: 388, position: 'relative' }}>
                                                                <div style={{ width: 120, textAlign: 'right', color: '#666666', fontSize: 14 }}>.mp4 .mov .avi</div>
                                                                <div
                                                                    style={{
                                                                        width: 388,
                                                                        height: 229,
                                                                        borderRadius: 20,
                                                                        border: '2px #CCCCCC dotted',
                                                                        marginTop: 20,
                                                                        textAlign: 'center',
                                                                        position: 'relative',
                                                                    }}
                                                                >
                                                                    <input
                                                                        type="file"
                                                                        name={`file-${question.id}`} // Unique name for each question
                                                                        style={{ display: 'none' }}
                                                                        onChange={(e) => handleVideoFileChange(e, question.id)} // Pass question.id to handle the specific file
                                                                        accept="video/*"
                                                                    />
                                                                    <img
                                                                        src={process.env.PUBLIC_URL + '/upload.png'}
                                                                        alt="Upload Icon"
                                                                        style={{ width: 60, height: 60, marginTop: 50, cursor: 'pointer' }}
                                                                        onClick={() => document.querySelector(`input[type="file"][name="file-${question.id}"]`).click()} // Unique selector for each question
                                                                    />
                                                                    <div style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>
                                                                        Select files to upload
                                                                    </div>
                                                                    <div style={{ color: '#666666', fontSize: 12, fontWeight: '400', marginTop: 5 }}>
                                                                        or Drag and Drop, Copy and Paste Files
                                                                    </div>
                                                                </div>
                                                                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                                                                    {question.files && question.files.map((file, index) => (
                                                                        <div key={index} style={{ marginTop: 70 }}>
                                                                            <p>{file.name}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {/* Uploaded video preview */}
                                                        {question.videoType === 'uploadVideo' && question.files.length > 0 && (
                                                            <div style={{ marginTop: 20, position: 'relative' }}>
                                                                <video width="420" height="261" controls>
                                                                    <source src={URL.createObjectURL(question.files[0])} type="video/mp4" />
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                                <button
                                                                    style={{
                                                                        position: 'absolute',
                                                                        top: 20,
                                                                        left: -50,
                                                                        backgroundColor: 'transparent',
                                                                        color: '#00BDA9',
                                                                        fontWeight: 600,
                                                                        padding: '5px 10px',
                                                                        border: 'none',
                                                                    }}
                                                                    onClick={() => handleClearInputs(question.id)} // Pass question.id for the correct question
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {question.questionType === 'Sound' && (
                                                    <div style={{ position: 'relative', marginTop: '20px', display: "flex", justifyContent: "center" }}>
                                                        <div style={{ width: 588, background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20 }}>
                                                            <div
                                                                style={{
                                                                    color: 'black',
                                                                    fontSize: 14,
                                                                    fontWeight: '600',
                                                                    margin: '10px 0',
                                                                    textAlign: 'justify',
                                                                    position: 'relative',
                                                                    top: -40,
                                                                }}
                                                            >
                                                                Upload sound file
                                                            </div>
                                                            <div
                                                                style={{
                                                                    color: '#666',
                                                                    fontSize: 14,
                                                                    textAlign: 'right',
                                                                    marginBottom: 10,
                                                                    position: 'relative',
                                                                    top: -65,
                                                                }}
                                                            >
                                                                .mp3, .wav, .ogg
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width: '96%',
                                                                    height: 150,
                                                                    borderRadius: 20,
                                                                    border: '2px #CCCCCC dotted',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    position: 'relative',
                                                                    left: 10,
                                                                    top: -25,
                                                                }}
                                                            >
                                                                <input
                                                                    type="file"
                                                                    name={`file-${question.id}`} // Unique name for each question
                                                                    style={{ display: 'none' }}
                                                                    onChange={(e) => handleSoundFileChange(e, question.id)} // Handle file change for sound
                                                                    accept="audio/mp3, audio/wav, audio/ogg"
                                                                    multiple
                                                                />
                                                                <img
                                                                    src={`${process.env.PUBLIC_URL}/upload.png`}
                                                                    alt="Upload Icon"
                                                                    onClick={() =>
                                                                        document.querySelector(`input[name="file-${question.id}"]`).click()
                                                                    } // Trigger the specific file input click for each question
                                                                    style={{ cursor: 'pointer', width: 60, height: 60 }}
                                                                />
                                                                <div style={{ textAlign: 'center', color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>
                                                                    Select files to upload
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Displaying uploaded sound files */}
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 20, position: 'relative', top: 205 }}>
                                                            {question.files &&
                                                                question.files.map((file, index) => (
                                                                    <div key={index} style={{ margin: 10 }}>
                                                                        <audio controls style={{ width: 150, height: 30, objectFit: 'cover', borderRadius: 10 }}>
                                                                            <source src={URL.createObjectURL(file)} type="audio/mpeg" />
                                                                            Your browser does not support the audio element.
                                                                        </audio>
                                                                        <p style={{ textAlign: 'center', marginTop: 5 }}>{file.name}</p>
                                                                        <button
                                                                            onClick={() => handleSoundDelete(index, question.id)} // Handle file delete for sound
                                                                            style={{
                                                                                marginTop: 10,
                                                                                backgroundColor: 'transparent',
                                                                                color: 'white',
                                                                                border: 'none',
                                                                                borderRadius: '10px',
                                                                                padding: '5px 10px',
                                                                            }}
                                                                        >
                                                                            <img
                                                                                src={process.env.PUBLIC_URL + '/poubelle.png'}
                                                                                alt="Delete Icon"
                                                                                style={{ width: 24, height: 30 }}
                                                                            />
                                                                        </button>
                                                                    </div>
                                                                ))}
                                                        </div>
                                                    </div>
                                                )}



                                                <div
                                                    style={{
                                                        left: 30,
                                                        top: 35,
                                                        textAlign:"justify",
                                                        position: 'relative',
                                                        color: 'black',
                                                        fontSize: 14,
                                                        fontFamily: 'revert',
                                                        fontWeight: '600',
                                                        wordWrap: 'break-word',
                                                    }}
                                                >
                                                    Question
                                                </div>
                                                <input
                                                    type="text"
                                                    value={question.text}
                                                    onChange={(e) => handleTextChange(question.id, e.target.value)}
                                                    placeholder="Enter your question"
                                                    style={{
                                                        width: '75%',
                                                        height: 51,
                                                        left: -80,
                                                        top: 50,
                                                        position: "relative",
                                                        background: 'rgba(17, 17, 17, 0.1)',
                                                        borderColor: 'transparent',
                                                        borderRadius: 10,
                                                        padding: '0 10',
                                                    }}
                                                />

                                                <button onClick={() => handleToggleDescription(question.id)}
                                                        style={{ marginTop: 10,
                                                            position: "relative",
                                                            left: -200,
                                                            border: "none",
                                                            color: 'rgb(0, 189, 169)',
                                                            fontSize: 14,
                                                            fontFamily: "revert",
                                                            fontWeight: 600,
                                                            overflowWrap: "break-word"
                                                        }}>
                                                    {question.showDescription ? 'Hide Description' : 'Add Description'}
                                                </button>

                                                {/* Answer Options Dropdown */}
                                                <div style={{ textAlign: "left", width: 240, top: -25, left: 1025, padding: 10, position: 'relative', marginTop: 20 }}>
                                                    <Select
                                                        options={answerOptions}
                                                        value={answerOptions.find(option => option.value === question.answerType)} // ensure the value is synced with the state
                                                        onChange={(selectedOption) => handleAnswerTypeChange(selectedOption.value, question.id)} // Pass question ID to handle the change
                                                        getOptionLabel={(option) => (
                                                            <div>
                                                                <img src={process.env.PUBLIC_URL + option.icon} alt={option.label} style={{ width: 24, marginRight: 10 }} />
                                                                {option.label}
                                                            </div>
                                                        )}
                                                        getOptionValue={(option) => option.value}
                                                    />
                                                </div>
                                                {question.showDescription && (
                                                    <textarea
                                                        value={question.description}
                                                        onChange={(e) => handleDescriptionChange(question.id, e.target.value)}
                                                        placeholder="Enter a description for the question"
                                                        style={{
                                                            padding: 10,
                                                            width: 965,
                                                            height: 50,
                                                            left: -141,
                                                            position: "relative",
                                                            background: 'rgba(17, 17, 17, 0.1)',
                                                            borderRadius: 10,
                                                            border: '1px solid rgb(204, 204, 204)'
                                                        }}
                                                    />
                                                )}
                                                {/* Generate Responses Toggle */}
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: 20 }}>
                                                    <span>Generate responses</span>
                                                    <div
                                                        style={{
                                                            width: 30,
                                                            height: 15,
                                                            borderRadius: 30,
                                                            background: question.isChecked
                                                                ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'
                                                                : '#ccc',
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() => handleToggleGenerateResponses(question.id)} // Pass question.id to toggle only this question
                                                    >
                                                        <div
                                                            style={{
                                                                width: 16,
                                                                height: 16,
                                                                position: 'relative',
                                                                left: question.isChecked ? 20 : 0,
                                                                borderRadius: '50%',
                                                                background: 'white',
                                                                transition: 'left 0.3s ease-in-out',
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Predefined Response Type Dropdown */}
                                                {question.isChecked && (
                                                    <div style={{ width: 260, height: 51, position: 'relative', left:1030, top:-55, marginTop: 10 }}>
                                                        <select
                                                            style={{ width: '100%', height: '100%', borderRadius: 10, padding: '0 10px' }}
                                                            value={question.responseType}
                                                            onChange={(e) => handleResponseTypeChange(e, question.id)} // Pass question.id to update this question only
                                                        >
                                                            <option value="">Select Response Type</option>
                                                            <option value="Agree – Disagree">Agree – Disagree</option>
                                                            <option value="Satisfied – Disatisfied">Satisfied – Disatisfied</option>
                                                            <option value="Yes – No">Yes – No</option>
                                                            <option value="A great deal – None at all">A great deal – None at all</option>
                                                            <option value="Easy – Difficult">Easy – Difficult</option>
                                                            <option value="Approve – Disapprove">Approve – Disapprove</option>
                                                            <option value="High quality – Low quality">High quality – Low quality</option>
                                                            <option value="Useful - Not useful">Useful - Not useful</option>
                                                            <option value="Clear – Not clear">Clear – Not clear</option>
                                                        </select>
                                                    </div>
                                                )}
                                                {/* Options Management */}
                                                {!question.isChecked && (
                                                    question.answerType === 'Radio box' || question.answerType === 'Check boxes' || question.answerType === 'Dropdown' ? (
                                                        <div style={{textAlign: "justify", position: "relative", left: 15,top:5}}>
                                                            {question.options.map((option, index) => (
                                                                <div key={index} style={{ marginBottom: '10px' }}>
                                                                    <input
                                                                        type={question.answerType === 'Radio box' ? 'radio' : 'checkbox'}
                                                                        value={option}
                                                                        checked={selectedOption === option}
                                                                        onChange={() => setSelectedOption(option)}
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        value={option}
                                                                        onChange={(e) => handleOptionChange(question.id, index, e.target.value)}
                                                                        placeholder={`Option ${index + 1}`}
                                                                        style={{ marginRight: '10px',
                                                                            background: "none",
                                                                            borderWidth: '0px 0px 1px 0px',
                                                                            borderStyle: 'solid',
                                                                            borderColor: "darkgrey"
                                                                        }}
                                                                    />
                                                                    <button onClick={() => handleRemoveOption(question.id, index)}
                                                                            style={{border:"none"}}><FaTrash /></button>
                                                                </div>
                                                            ))}
                                                            <button onClick={() => handleAddOption(question.id)} style={{ color: '#00BDA9', cursor: 'pointer', border:"none" }}>
                                                                Add an option
                                                            </button>
                                                        </div>
                                                    ) : question.answerType === 'Smile rating' ? (
                                                        <div style={{ marginLeft: "10px", position: "relative", left: 20, display:"flex", textAlign:"justify", justifyContent:"space-evenly" }}>
                                                            <div style={{ position: 'relative', marginBottom: '10px' }}>
                                                                <label style={{ position: 'relative' }}>Left Label</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Love"
                                                                    style={{ marginLeft: 30, width: 200,
                                                                        background: 'rgba(17, 17, 17, 0.1)',
                                                                        borderColor: 'transparent',
                                                                        borderRadius: 10,
                                                                        padding:10
                                                                    }}
                                                                    disabled
                                                                />
                                                            </div>
                                                            <div style={{ position: 'relative' }}>
                                                                <label style={{ position: 'relative' }}>Right Label</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Angry"
                                                                    style={{ marginLeft: 19, width: 200,
                                                                        background: 'rgba(17, 17, 17, 0.1)',
                                                                        borderColor: 'transparent',
                                                                        borderRadius: 10,
                                                                        padding:10
                                                                    }}
                                                                    disabled
                                                                />
                                                            </div>
                                                            <div style={{display:"flex",position:"relative"}}>
                                                                <EmojiComponentSurvey onEmojiSelect={handleEmojiSelect} selectedEmoji={selectedEmoji}/>
                                                            </div>
                                                        </div>
                                                    ) : question.answerType === 'Star rating' ? (
                                                        <div style={{ marginLeft: "10px", position: "relative", left: 20, display:"flex", textAlign:"justify", justifyContent:"space-evenly" }}>
                                                            <div style={{ position: 'relative', marginBottom: '10px'}}>
                                                                <label style={{ position: 'relative' }}>Left Label</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Very Dissatisfied"
                                                                    style={{  marginLeft: 30, width: 200,
                                                                        background: 'rgba(17, 17, 17, 0.1)',
                                                                        borderColor: 'transparent',
                                                                        borderRadius: 10,
                                                                        padding:10 }}
                                                                    disabled
                                                                />
                                                            </div>
                                                            <div style={{ position: 'relative' }}>
                                                                <label style={{ position: 'relative' }}>Right Label</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Very Satisfied"
                                                                    style={{ marginLeft: 19, width: 200,
                                                                        background: 'rgba(17, 17, 17, 0.1)',
                                                                        borderColor: 'transparent',
                                                                        borderRadius: 10,
                                                                        padding:10 }}
                                                                    disabled
                                                                />
                                                            </div>
                                                            <StarRankingSurvey onStarClick={handleOnStarClick} />
                                                        </div>
                                                    ) : null
                                                )}


                                                <div style={{position: "relative", marginTop: 30, right: 50, display: "flex", gap: 20, justifyContent: "flex-end"}}>
                                                    <label>
                                                        Mandatory
                                                        <input
                                                            type="checkbox"
                                                            checked={question.mandatory}
                                                            onChange={() => handleInputChange(question.id, 'mandatory', !question.mandatory)}
                                                            style={{display:"flex"}}
                                                        />
                                                    </label>
                                                    <button onClick={() => deleteQuestion1(question.id)} style={{border:"none"}}>
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                {/*<button onClick={handleNext}>Next</button>*/}
                {/* Main form content here */}
                <button style={{position:"relative"}} onClick={addNewQuestion}>Add New Question</button>

                <button onClick={handleNext} style={{ backgroundColor: '#00BDA9',
                    position:"relative",
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    border: 'none'}}>Next</button>

                {/* Modal will be shown here when isModalOpen is true */}
                <Modal isOpen={isModalOpen} closeModal={closeModal} onConfirm={handleConfirm}>
                    <ReviewAndPreview
                        questions={questions}
                        survey={survey}
                        deleteQuestion={deleteQuestion}  // Pass delete function to the modal
                    />
                </Modal>
            </div>
        </div>
    );
};

export default CreateSurveySTEP2;
