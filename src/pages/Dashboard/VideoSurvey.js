import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file

const opencage = require('opencage-api-client');


const VideoSurvey = () => {
        const [videoType, setVideoType] = useState('');
        const [uploadedFiles, setUploadedFiles] = useState([]);
        const [youtubeUrl, setYoutubeUrl] = useState('');
        const [videoSourceUrl, setVideoSourceUrl] = useState('');

        const handleFileSelection = (event) => {
            const files = event.target.files;
            setUploadedFiles([...uploadedFiles, ...files]);
        };

        const handleUrlChange = (e) => {
            setYoutubeUrl(e.target.value);
        };

        const handleUrlUpload = () => {
            // Extract video ID from YouTube link
            const videoId = youtubeUrl.split('v=')[1];
            setVideoSourceUrl(videoId);
        };

        const handleLocalUpload = () => {
            if (uploadedFiles.length > 0) {
                const file = uploadedFiles[0]; // Upload the first selected file
                const fileUrl = URL.createObjectURL(file);
                setVideoSourceUrl(fileUrl);
            }
        };

        const handleClearInputs = () => {
            setVideoSourceUrl('');
            setYoutubeUrl('');
            setUploadedFiles([]);
        };

        const handleVideoTypeChange = (type) => {
            setVideoType(type);
            setVideoSourceUrl(''); // Reset video source when changing type
        };

        return (
            <div className="App">

                <div style={{ display: 'flex', justifyContent: 'space-between', width: 700, height: 32, left: 190, top: 485, position: 'absolute' }}>
                    <label style={{ cursor: 'pointer', position: 'relative', top: -5, width: 250 }}>
                        <input type="radio" name="videoOption" value="uploadVideo" onChange={() => handleVideoTypeChange('uploadVideo')} checked={videoType === 'uploadVideo'} style={{ display: 'none' }} />
                        <span style={{ textAlign: "left", marginLeft: 5, left: 0, top: -100, position: "absolute", color: videoType === 'uploadVideo' ? '#00BDA9' : 'black' }}>Upload video (Max 100 MB)</span>
                        <div style={{ width: videoType === 'uploadVideo' ? 20 : 20, height: videoType === 'uploadVideo' ? 20 : 20, position: 'absolute', borderRadius: 55, border: videoType === 'uploadVideo' ? '3px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                    </label>

                    <label style={{ textAlign: "left", cursor: 'pointer', position: 'relative', top: -5, width: 200, left: 120 }}>
                        <input type="radio" name="videoOption" value="youtubeLink" onChange={() => handleVideoTypeChange('youtubeLink')} checked={videoType === 'youtubeLink'} style={{ display: 'none' }} />
                        <span style={{ marginLeft: 5, left: 0, top: -100, position: "absolute", color: videoType === 'youtubeLink' ? '#00BDA9' : 'black' }}>YouTube Link</span>
                        <div style={{ width: videoType === 'youtubeLink' ? 20 : 20, height: videoType === 'youtubeLink' ? 20 : 20, position: 'absolute', borderRadius: 55, border: videoType === 'youtubeLink' ? '3px solid #00BDA9' : '3px solid #CCCCCC', top: -100, left: -40 }} />
                    </label>
                </div>

                {videoType === 'youtubeLink' && !videoSourceUrl && (
                    <div style={{ width: 380, height: 60, left: 805, top: 405, position: 'absolute' }}>
                        <input
                            style={{
                                width: '100%',
                                height: "auto",
                                left: 0,
                                top: 0,
                                padding: 20,
                                position: 'absolute',
                                background: 'rgba(17, 17, 17, 0.10)',
                                borderRadius: 10,
                                border: 'none'
                            }}
                            placeholder={'Enter the YouTube link'}
                            value={youtubeUrl}
                            onChange={handleUrlChange}
                        />

                        <button
                            style={{
                                width: 81,
                                height: 51,
                                border: 'none',
                                borderRadius: '10px',
                                left: 270,
                                top: 100,
                                position: 'absolute',
                                background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'inline-flex'
                            }}
                            onClick={handleUrlUpload}
                        >
                            <div style={{ color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Upload</div>
                        </button>
                    </div>
                )}

                {videoSourceUrl && videoType === 'youtubeLink' && (
                    <div style={{ marginTop: 20, zIndex: 99999, position: "absolute", left: 800, top: 380, borderRadius: 10 }}>
                        <iframe
                            title="Uploaded YouTube Video"
                            width="420"
                            height="261"
                            src={`https://www.youtube.com/embed/${videoSourceUrl}`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        <button
                            style={{
                                position: "absolute",
                                top: -35,
                                left: 370,
                                marginTop: 10,
                                backgroundColor: 'transparent',
                                color: '#00BDA9',
                                fontWeight: 600,
                                padding: '5px 10px',
                                border: "none"
                            }}
                            onClick={handleClearInputs}
                        >
                            Delete
                        </button>
                    </div>
                )}

                {videoType === 'uploadVideo' && !videoSourceUrl &&
                    <div style={{ width: 388, height: 229, left: 200, top: 450, position: 'absolute' }}>
                        <div style={{ width: 120, left: 0, top: -20, position: 'absolute', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>.mp4 .mov .avi</div>
                        <div style={{ width: 388, height: 229, borderRadius: 20, border: '2px #CCCCCC dotted', marginTop: 20, textAlign: 'center', position: 'relative', left: 13, top: -5 }}>
                            <input type="file" style={{ display: 'none' }} onChange={handleFileSelection} accept="video/*" />
                            <img src={process.env.PUBLIC_URL + '/upload.png'} alt="Upload Icon" style={{ width: 60, height: 60, marginTop: 50, cursor: 'pointer' }} onClick={() => document.querySelector('input[type="file"]').click()} />
                            <div style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>Select files to upload</div>
                            <div style={{ color: '#666666', fontSize: 12, fontWeight: '400', marginTop: 5 }}>or Drag and Drop, Copy and Paste Files</div>
                        </div>
                        <div style={{ display: 'flex', left: 100, top: -150, position: 'relative', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                            {uploadedFiles.map((file, index) => (
                                <div key={index} style={{ position: "relative", top: 70, left: -80 }}>
                                    <p>{file.name}</p>
                                </div>
                            ))}
                        </div>
                        <button style={{ left: 200, position: 'relative',
                            backgroundColor: 'transparent',
                            color: '#00BDA9',
                            fontWeight: 600,
                            padding: '5px 10px',
                            border: "none",
                            top: -350 }} onClick={handleLocalUpload}>Upload Video</button>
                    </div>
                }

                {videoSourceUrl && videoType === 'uploadVideo' && (
                    <div style={{ marginTop: 20, zIndex: 99999, position: "absolute", left: 200, top: 450, borderRadius: 10 }}>
                        <video width="420" height="261" controls>
                            <source src={videoSourceUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            style={{
                                position: "absolute",
                                top: -35,
                                left: 370,
                                marginTop: 10,
                                backgroundColor: 'transparent',
                                color: '#00BDA9',
                                fontWeight: 600,
                                padding: '5px 10px',
                                border: "none"
                            }} onClick={handleClearInputs}>Delete</button>
                    </div>
                )}

            </div>
        );
};
export default VideoSurvey;

