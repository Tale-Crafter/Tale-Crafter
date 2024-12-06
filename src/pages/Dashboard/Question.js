import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa'; // Import the icon component
import Select from 'react-select'; // Import Select from 'react-select'
import VideoSurvey from './VideoSurvey';
import SoundSurvey from "./SoundSurvey";

const Question = ({ index, isMandatory, onToggleMandatory, selectedValue, onChange }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false); // For secondary checkbox if needed
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [opptions, setOpptions] = useState(['']); // Initialize with one input option

    const handleToggle = () => setIsChecked(!isChecked);
    const handleToggle1 = () => setIsChecked1(!isChecked1); // Toggle function for isChecked1
    const handleLanguageChange = (selectedOption) => setSelectedLanguage(selectedOption);
    const handleSelectChange = (selectedOption) => setSelectedOption(selectedOption); // Adjust as needed
    const handleChange = (event) => setSelectedOption(event.target.value); // Adjust if used with input/select
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleOptionClick2 = (option) => setSelectedOption2(option);
    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const [selectedType, setSelectedType] = useState('Text');
    const [inputValue, setInputValue] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);


    const handleTypeChange = (type) => {
        setSelectedType(type);
        setInputValue(''); // Reset input when changing question type
    };


    const handleFileChange = (event) => {
        const files = event.target.files;
        const selectedFilesArray = Array.from(files);
        setSelectedFiles(selectedFilesArray);
        // Automatically submit files here or trigger an upload function
        // For demonstration, I'm logging the selected files to the console
        console.log('Selected Files:', selectedFilesArray);
    };
    const handleAddOption = () => {
        setOpptions([...opptions, '']); // Add a new empty input for an answer option
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...opptions];
        newOptions[index] = value;
        setOpptions(newOptions);
    };

    const options = [
        { value: 'Radio box', label: 'Radio box', icon: '/box.png' },
        { value: 'Check boxes', label: 'Check boxes', icon: '/check.png' },
        { value: 'Dropdown', label: 'Dropdown', icon: '/drop.png' },
        { value: 'Single textbox', label: 'Single textbox', icon: '/textbox.png' },
        { value: 'Comment', label: 'Comment Box', icon: '/Comment.png' },
        { value: 'Choice of 1 to 10', label: 'Choice of 1 to 10', icon: '/choice.png' },
        { value: 'Smile rating', label: 'Smile rating', icon: '/smile.png' },
        { value: 'Star rating', label: 'Star rating', icon: '/star.png' },
    ];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const renderInput = () => {
        switch (selectedOption?.value) {
            case 'Radio box':
                return (
                    <input
                        type="radio"
                        name="example"
                        onChange={() => console.log("Radio selected")}
                        style={{
                            width:  20,
                            height:  20,
                            position: 'absolute',
                            borderRadius: 50,
                            border:   '6px solid #00BDA9',
                            top: 0,
                            left: -40,
                        }}
                    />
                );
            case 'Check boxes':
                return (
                    <input
                        type="checkbox"
                        name="example"
                        onChange={() => console.log("Checkbox selected")}
                        style={{
                            width:  20,
                            height:  20,
                            position: 'absolute',
                            top: 0,
                            left: -40,
                        }}
                    />
                );
            case 'Dropdown':
                return (
                    <select onChange={() => console.log("Dropdown selected")}
                            style={{
                                width:  20,
                                height:  20,
                                position: 'absolute',
                                border:'none',
                                color:"1px solid #00BDA9",
                                top: 0,
                                left: -40,
                            }}>
                    //     {/*<option value="option1">Option 1</option>*/}
                    //     {/*<option value="option2">Option 2</option>*/}
                    </select>
                );
            case 'Single textbox':
                return (
                    console.log("Textbox selected")
                    // <input
                    //     type="text"
                    //     placeholder="Type here..."
                    //     onChange={() => console.log("Textbox selected")}
                    // />
                );
            case 'Comment':
                return (
                    console.log("CommentBox selected")

                    // <textarea
                    //     placeholder="Enter comment..."
                    //     onChange={() => console.log("Comment Box selected")}
                    // />
                );
            // Add other cases for 'Choice of 1 to 10', 'Smile rating', etc.
            default:
                return null;
        }
    };
    const optionsCount = opptions.length; // Get the number of options
    const optionHeight = 40; // Estimate the height of each option (adjust this value as needed)
    const dropdownHeight = optionsCount * optionHeight; // Total height for the dropdown options
    // {!isChecked && selectedOption?.value !== "Single textbox" && selectedOption?.value !== "Comment" && (

// Calculate new top position
    const newTopPosition = !isChecked && selectedOption?.value !== "Single textbox" && selectedOption?.value !== "Comment" ? 325 + dropdownHeight : 280;
    const newTopPosition1 = !isChecked ? 325 + dropdownHeight + 350 : 630;
    const newHeight = !isChecked && selectedOption?.value !== "Single textbox" && selectedOption?.value !== "Comment" ? 380 + dropdownHeight : 340;
    const newHeight1 = !isChecked ? 380 + dropdownHeight +350 : 690;
    const newLineHeight = !isChecked ? 290 + dropdownHeight : 0;
    const newLineHeight1 = !isChecked ? 290 + dropdownHeight +360 : 0;
    const newAddoptHeight = !isChecked ? 0 + dropdownHeight : 0;

    return (
        <div style={{position:"relative",top:-80}}>
            <div style={{width: 1290, height: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? newHeight1: newHeight, left: 40, top: 249, position: 'absolute', background: '#F5F5F5', borderRadius: 10}} >
                {/* Conditional rendering for Image input */}
                {selectedType === 'Image' && (
                    <div style={{ width: 388, height: 229, left: 360, top: 90, position: 'absolute' }}>
                        {/* Image input container */}
                        <div style={{ width: 588, height: 339, background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20, position: 'relative' }}>
                            <div>
                            <div style={{ color: 'black', fontSize: 14, fontWeight: '600', margin: '10px 0', position:"relative", top:-20, left:-200 }}>Cover photo of the survey</div>
                            <div style={{ color: '#666', fontSize: 14, textAlign: 'right', marginBottom: 10, position:"relative",top:-50 }}>JPG, PNG, JPEG</div>
                            </div>
                            <div style={{ width: '96%', height: 300, borderRadius: 20, border: '2px #CCCCCC dotted', display: 'flex', alignItems: 'center', justifyContent: 'center', top:-40,left:10, position:"relative" }}>
                                <input type="file" style={{ display: 'none' }} onChange={handleFileChange} multiple />
                                <img src={`${process.env.PUBLIC_URL}/upload.png`} alt="Upload Icon" onClick={() => document.querySelector('input[type="file"]').click()} style={{ cursor: 'pointer', width: 60, height: 60 }} />
                                <div style={{ textAlign: 'center', color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>Select files to upload</div>
                            </div>
                            {/* Display uploaded images */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 20 }}>
                                {selectedFiles.map((file, index) => (
                                    <div key={index} style={{ margin: 10 }}>
                                        <img src={URL.createObjectURL(file)} alt={`File ${index}`} style={{ width: 150, height: 110, objectFit: 'cover', borderRadius: 10 }} />
                                        <p style={{ textAlign: 'center', marginTop: 5 }}>{file.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {selectedType === 'Video' && (
                    <div style={{position:"relative",top:-250}}>
                        <VideoSurvey></VideoSurvey>
                    </div>
                )}
                {selectedType === 'Sound' && (
                    <div style={{position:"relative",top:-280}}>
                        <SoundSurvey></SoundSurvey>
                    </div>
                )}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        position: 'absolute',
                        left: 67,
                        top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? 565: 204,
                    }}
                >
                    <div style={{ color: '#111111', fontSize: 14, fontFamily: 'Inter', fontWeight: '400' }}>
                        Generate responses
                    </div>
                    <div
                        style={{
                            width: 30,
                            height: 15,
                            position: 'relative',
                            borderRadius: 30,
                            background: isChecked ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : '#ccc',
                            cursor: 'pointer',
                        }}
                        onClick={handleToggle}
                    >
                        <div
                            style={{
                                width: 16,
                                height: 16,
                                position: 'absolute',
                                left: isChecked ? 20 : 0,
                                top: 0,
                                borderRadius: '50%',
                                background: 'white',
                                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                transition: 'left 0.3s ease-in-out',
                            }}
                        />
                    </div>
                </div>

                <div style={{width: 1152, height: 0, left: 64, top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? 600: 247, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                <div style={{width: 1152, height: 0, left: 64, top:selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? 545: 180, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                {/*<div style={{width: 1152, height: 0, left: 64, top: 493, position: 'absolute', border: '1px #DDDDDD solid'}}></div>*/}
                {!isChecked && selectedOption?.value !== "Single textbox" && selectedOption?.value !== "Comment" && (
                <div style={{width: 24, height: 24, left: 40, top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? 622: 267, position: 'absolute'}}>
                    <div style={{width: 16, height: 6, left: 15, top: 4, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', background: 'rgba(0, 0, 0, 0.30)'}}></div>
                </div>
                )}
                {!isChecked && selectedOption?.value !== "Single textbox" && selectedOption?.value !== "Comment" && (
                <div style={{ width: 400, position: 'relative', top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? 620: 264, left:110 }}>
                    {opptions.map((option, index) => (
                        <div key={index} style={{ marginBottom: 10, position: 'relative', cursor: 'pointer' }}>


                                {renderInput()
                                }


                                <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => handleOptionChange(index, e.target.value)}
                                    placeholder={`Option ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        padding: '4px',
                                        border: '0px',
                                        borderBottom: '2px solid #CCCCCC',
                                        borderRadius: '4px',
                                        background: "transparent"
                                    }}
                                />
                        </div>
                    ))}
                    <div style={{ position: 'absolute', left: 0, top: newAddoptHeight }}>
                    <span style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                    Add an option or
                    </span>
                        <span
                            onClick={handleAddOption}
                            style={{ position: 'relative', left: 4, color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', cursor: 'pointer' }}
                        >
                     add "other"
                        </span>
                    </div>
                </div>
                    )}
                {!isChecked && selectedOption?.value !== "Single textbox" && selectedOption?.value !== "Comment" && (
                    <div style={{width: 1152, height: 0, left: 64, top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? newLineHeight1: newLineHeight, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                )}
                <div style={{ textAlign:"left",width:240,background:"white",height:40,padding:10,zIndex: 99999, left: 955, top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? 470: 110, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                    <Select
                        options={options}
                        value={selectedOption}
                        onChange={handleSelectChange}
                        getOptionLabel={(option) => (
                            <div>
                                <img src={process.env.PUBLIC_URL + option.icon} alt={option.label} style={{ width: 24, marginRight: 10 }} />
                                {option.label}
                            </div>
                        )}
                        getOptionValue={(option) => option.value}
                    />
                    <div style={{ left: 18, top: 16, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                        {/*{selectedOption?.label || ''}*/}
                    </div>
                </div>
                {!isChecked && selectedOption?.value !== "Single textbox" && selectedOption?.value !== "Comment" && (
                    <div style={{ width: 260, height: 51, position: 'absolute', top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? 547: 188, right: 75 }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: 'white',
                            borderRadius: 10,
                            border: '1px #CCCCCC solid',
                            position: 'relative',
                        }}>
                            <select
                                style={{ width: '100%', height: '100%', background: 'none', border: 'none', outline: 'none', padding: '0 10px' }}
                                value={selectedOption}
                                onChange={handleChange}
                            >
                                <option value="">Select Type</option>
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
                            <div style={{ left: 18, top: 16, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                                {/*{selectedOption || ''}*/}
                            </div>
                        </div>
                    </div>
                )}

                <div style={{ width: 868, height: 96, left: 64, top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? 450: 84, position: 'absolute' }}>
                    <div
                        style={{
                            left: 0,
                            top: -2,
                            position: 'absolute',
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
                        style={{
                            width: 840,
                            height: 51,
                            left: 0,
                            top: 25,
                            position: 'absolute',
                            background: 'rgba(17, 17, 17, 0.10)',
                            borderColor: isFocused ? '#00BDA9' : 'transparent',
                            borderRadius: 10,
                            padding: '0 10px',
                        }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    {!isFocused && (
                        <div
                            style={{
                                left: 16,
                                top: 41,
                                position: 'absolute',
                                color: 'rgba(0, 0, 0, 0.40)',
                                fontSize: 14,
                                fontFamily: 'revert',
                                fontWeight: '400',
                                wordWrap: 'break-word'
                            }}
                        >
                            Enter your question
                        </div>
                    )}
                </div>
                <div style={{width: 127, height: 19.19, left: 805, top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? 450: 84, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>+Add a description</div>
                <div style={{ padding: 8, left: 963, top: selectedType === 'Image' || selectedType === 'Video'|| selectedType === 'Sound' ? newTopPosition1: newTopPosition, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                    <div style={{ width: 32, height: 32, position: 'relative' }}>
                        <img src={process.env.PUBLIC_URL + '/add.png'} style={{ width: 28.44, height: 28.44, left: 8, top: 4, position: 'absolute' }} alt="Add" />
                    </div>
                    <img src={process.env.PUBLIC_URL + '/poubelle.png'} style={{ width: 28.44, height: 32, position: 'relative' }} alt="Trash" />
                    <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                        <div style={{ color: '#111111', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Mandatory</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'absolute', left: 167, top: 15 }}>
                            <div
                                style={{
                                    width: 30,
                                    height: 15,
                                    position: 'relative',
                                    borderRadius: 30,
                                    background: isChecked1 ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : '#ccc',
                                    cursor: 'pointer',
                                }}
                                onClick={handleToggle1}
                            >
                                <div
                                    style={{
                                        width: 16,
                                        height: 16,
                                        position: 'absolute',
                                        left: isChecked1 ? 20 : 0,
                                        top: 0,
                                        borderRadius: '50%',
                                        background: 'white',
                                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                                        transition: 'left 0.3s ease-in-out',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                width: 24,
                                height: 24,
                                position: 'relative',
                                top: 7,
                                left: 30,
                                cursor: 'pointer',
                            }}
                            onClick={toggleDropdown}
                        >
                            <img
                                src={process.env.PUBLIC_URL + '/pt.png'}
                                style={{
                                    width: 24,
                                    height: 24,
                                    left: 5,
                                    top: -8,
                                    position: 'absolute',
                                    background: 'rgba(0, 0, 0, 0.08)',
                                    borderRadius: 9999,
                                }}
                                alt="Dropdown Toggle"
                            />
                        </div>

                        {showDropdown && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 35,
                                    left: -60,
                                    background: '#fff',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                    borderRadius: 5,
                                    padding: '5px 10px',
                                    width: 280,
                                    zIndex: 10,
                                    textAlign: 'left',
                                }}
                            >
                                <button
                                    style={{
                                        marginBottom: 5,
                                        borderRadius: 10,
                                        padding: 18,
                                        paddingLeft: 25,
                                        textAlign: "left",
                                        backgroundColor: selectedOption2 === 'description' ? 'lightgray' : 'transparent',
                                        border: 'none',
                                    }}
                                    onClick={() => handleOptionClick2('description')}
                                >
                                    Add a description
                                    {selectedOption2 === 'description' && <span style={{ position: "absolute", left: 15, top: 10, fontSize: 24, marginRight: 10 }}>&#10003;</span>}
                                </button>
                                <button
                                    style={{
                                        marginBottom: 10,
                                        borderRadius: 10,
                                        padding: 18,
                                        paddingLeft: 25,
                                        textAlign: "left",
                                        backgroundColor: selectedOption2 === 'access' ? 'lightgray' : 'transparent',
                                        border: 'none',
                                    }}
                                    onClick={() => handleOptionClick2('access')}
                                >
                                    Access a section based on the answer
                                    {selectedOption2 === 'access' && <span style={{ position: "absolute", left: 15, top: 65, fontSize: 24, marginRight: 10 }}>&#10003;</span>}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div style={{width: 1152, height: 36, left: 64, top: 29, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                        <button
                            style={{
                                padding: 8,
                                background:
                                    selectedLanguage === 'fr'
                                        ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'
                                        : 'white',
                                color: selectedLanguage === 'fr' ? 'white' : '#111111',
                                borderRadius: 4,
                                border: '1px #999999 solid',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                                display: 'inline-flex',
                            }}
                            onClick={() => handleLanguageChange('fr')}
                        >
                            <div style={{ fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Français</div>
                        </button>
                        <button
                            style={{
                                padding: 8,
                                background:
                                    selectedLanguage === 'ar'
                                        ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'
                                        : 'white',
                                color: selectedLanguage === 'ar' ? 'white' : '#111111',
                                borderRadius: 4,
                                border: '1px #999999 solid',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                                display: 'inline-flex',
                            }}
                            onClick={() => handleLanguageChange('ar')}
                        >
                            <div style={{ fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Arabe Tunisien</div>
                        </button>
                    </div>
                    <div style={{ justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex' }}>
                        {/* Text Option */}
                        <div onClick={() => handleTypeChange('Text')} style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex', cursor: 'pointer' }}>
                            <div style={{ width: 32, height: 32, position: 'relative' }}>
                                <div style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute',border: selectedType === 'Text' ? 'transparent' : '3px #CCCCCC solid', background: selectedType === 'Text' ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : 'transparent', borderRadius: 50 }} />
                                {selectedType === 'Text' && ( // Condition to display the dot
                                    <div style={{ width: 16, height: 16, left: 8, top: 8, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999 }} />
                                )}
                            </div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Text</div>
                        </div>

                        {/* Image Option */}
                        <div onClick={() => handleTypeChange('Image')} style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex', cursor: 'pointer' }}>
                            <div style={{ width: 32, height: 32, position: 'relative' }}>
                                <div style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: selectedType === 'Image' ? 'transparent' : '3px #CCCCCC solid', background: selectedType === 'Image' ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : 'transparent' }} />
                                {selectedType === 'Image' && ( // Condition to display the dot
                                    <div style={{ width: 16, height: 16, left: 8, top: 8, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999 }} />
                                )}
                            </div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Image</div>
                        </div>

                        {/* Video Option */}
                        <div onClick={() => handleTypeChange('Video')} style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex', cursor: 'pointer' }}>
                            <div style={{ width: 32, height: 32, position: 'relative' }}>
                                <div style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: selectedType === 'Video' ?  'transparent' : '3px #CCCCCC solid', background: selectedType === 'Video' ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : 'transparent' }} />
                                {selectedType === 'Video' && ( // Condition to display the dot
                                    <div style={{ width: 16, height: 16, left: 8, top: 8, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999 }} />
                                )}
                            </div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Video</div>
                        </div>

                        {/* Sound Option */}
                        <div onClick={() => handleTypeChange('Sound')} style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex', cursor: 'pointer' }}>
                            <div style={{ width: 32, height: 32, position: 'relative' }}>
                                <div style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: selectedType === 'Sound' ? 'transparent' : '3px #CCCCCC solid', background: selectedType === 'Sound' ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : 'transparent' }}  />
                                {selectedType === 'Sound' && ( // Condition to display the dot
                                    <div style={{ width: 16, height: 16, left: 8, top: 8, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999 }} />
                                )}
                            </div>
                            <div style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>Sound</div>
                        </div>
                    </div>
                    <div style={{width: 105, height: 36, paddingLeft: 8, paddingRight: 8, paddingTop: 6, paddingBottom: 6, justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'flex'}}>
                        <div style={{width: 24, height: 24, paddingLeft: 2.39, paddingRight: 2.39, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <FaEye style={{width: 19.23, height: 14, position: 'relative'}}>
                            </FaEye>
                        </div>
                        <div style={{flex: '1 1 0', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Preview</div>
                    </div>
                </div>
                <div style={{width: 24, height: 24, left: 628, top: 0, position: 'absolute'}}>
                    <div style={{width: 16, height: 6, left: 4, top: 9, position: 'absolute', background: 'rgba(0, 0, 0, 0.30)'}}></div>
                </div>
            </div>
        </div>
    );
};
export default Question;