import React, { useEffect, useState } from 'react';
import './App.css';  // Import the CSS file

const opencage = require('opencage-api-client');


const SoundSurvey = () => {

    const [uploadedSoundFiles, setUploadedSoundFiles] = useState([]);
    const [isSoundBoxVisible, setIsSoundBoxVisible] = useState(false);

    const handleSoundFileChange = (event) => {
        const soundFiles = Array.from(event.target.files);
        setUploadedSoundFiles(soundFiles);
        setIsSoundBoxVisible(true);
    };

    const handleSoundDelete = () => {
        setUploadedSoundFiles([]);
        setIsSoundBoxVisible(false);
    };

    return (
        <div className="App">
            {!isSoundBoxVisible && (
                <div style={{ width: 388, height: 229, left: 400, top: 357, position: 'absolute' }}>
                    <div style={{ width: 588, height: 339, left: 0, top: 27, position: 'absolute', background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20 }} />
                    <div style={{ textAlign: "left", width: 172, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Upload sound</div>
                    <div style={{ width: 120, left: 458, top: 0, position: 'absolute', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>.mp3 .wav .ogg</div>
                    <div style={{ width: 556, height: 307, borderRadius: 20, border: '2px #CCCCCC dotted', marginTop: 20, textAlign: 'center', position: 'relative', left: 13, top: 20 }}>
                        <input type="file" style={{ display: 'none' }} onChange={handleSoundFileChange} multiple />
                        <img src={process.env.PUBLIC_URL + '/upload.png'} alt="Upload Icon" style={{ width: 60, height: 60, marginTop: 50, cursor: 'pointer' }} onClick={() => document.querySelector('input[type="file"]').click()} />
                        <div style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>Select files to upload</div>
                        <div style={{ color: '#666666', fontSize: 12, fontWeight: '400', marginTop: 5 }}>or Drag and Drop, Copy and Paste Files</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                            {uploadedSoundFiles.map((soundFile, index) => (
                                <div key={index} style={{ margin: 10 }}>
                                    <img src={URL.createObjectURL(soundFile)} alt={`Sound File ${index}`} style={{ width: 150, height: 110, objectFit: 'cover', borderRadius: 10 }} />
                                    <p style={{ textAlign: 'center', marginTop: 5 }}>{soundFile.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {isSoundBoxVisible && (
                <div className="question-container" style={{ position: "absolute", top: 460, left: 250, textAlign: 'center', marginLeft: "10px" }}>
                    <audio controls style={{ width: '702px', height: '64px', borderRadius: '0px', margin: 'auto' }}>
                        <source src={URL.createObjectURL(uploadedSoundFiles[0])} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <button
                        style={{
                            marginTop: 10,
                            backgroundColor: 'transparent',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            padding: '5px 10px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        onClick={handleSoundDelete}
                    >
                        <img
                            src={process.env.PUBLIC_URL + '/poubelle.png'}
                            alt="Delete Icon"
                            style={{ marginRight: 5, position: "absolute", right: -50, top: 20, width: 24, height: 30 }}
                        />
                    </button>
                </div>
            )}
        </div>
    );

};

export default SoundSurvey;