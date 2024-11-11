import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'; // Import the CSS file
import BusinessLeftsidebar from "./BusinessLeftsidebar";
import BHeader from "./BHeader";
import SubBrandPopup from "./SubBrandPopup";
import ProductOffers from "./ProductOffers";
import {fetchCompanies, fetchProducts} from './Api'; // Import the fetchSurveys function
import Timeline from './Timeline';

function CreateSurveySTEP1({ onNext }) {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showConfirmation1, setShowConfirmation1] = useState(false);
    const [charCount, setCharCount] = useState(0);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [companiesData, setCompaniesData] = useState([]); // State for companies
    const [productsData, setProductsData] = useState([]); // State for products
    const [languages, setLanguages] = useState({ english: false, french: false, arabicTounsi: false });
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [copyQuestions, setCopyQuestions] = useState(false);
    const [useAudiencePanel, setUseAudiencePanel] = useState(false); // Audience panel state

    const [survey, setSurvey] = useState({
        surveyId: Math.floor(Math.random() * 10000),
        title: '',
        description: '',
        startDate: new Date().toISOString(),
        endDate: '',
        createdByUserId: parseInt(iduser, 10),
        createdDate: new Date().toISOString(),
        status: 1,
        surveyRequirements: null,
        surveyInsights: null,
        participants: [],
        campaign: null,
        company: null,
        ourDatabases: null,
        questions: [],
        analytics: null,
        product: null,
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setSurvey((prev) => ({ ...prev, [name]: value }));
    // };
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'company') {
            const selectedCompany = companiesData.find(company => company.companyName === value);
            setSurvey((prev) => ({ ...prev, company: selectedCompany }));
        } else if (name === 'product') {
            const selectedProduct = productsData.find(product => product.name === value);
            setSurvey((prev) => ({ ...prev, product: selectedProduct }));
        } else {
            setSurvey((prev) => ({ ...prev, [name]: value }));
        }
    };


    const handleTextareaChange = (e) => {
        const content = e.target.value;
        setSurvey((prev) => ({ ...prev, description: content }));
        setCharCount(content.length);
    };

    // Fetch companies data when the component mounts
    useEffect(() => {
        const getCompanies = async () => {
            try {
                const data = await fetchCompanies();
                setCompaniesData(data);

                const products = await fetchProducts();
                setProductsData(products);
            } catch (error) {
                console.error('Error fetching companies or products:', error.message);
            }
        };

        getCompanies();
    }, []);

    const handleLanguageChange = (e) => {
        const { name } = e.target;
        setLanguages({
            english: name === 'english',
            french: name === 'french',
            arabicTounsi: name === 'arabicTounsi',
        });
    };

    const handleCoverPhotoChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            // Convert FileList to array and update state
            setSelectedFiles(Array.from(files));
        }
    };
    const handleCopyQuestionsChange = (e) => {
        setCopyQuestions(e.target.checked);
    };
    const handleAudiencePanelChange = (e) => {
        setUseAudiencePanel(e.target.checked);
    };

    // const handleNext = () => {
    //     // Optionally save to backend here if needed
    //     onNext(survey);
    // };
    const handleNext = () => {
        // Optionally save to backend here if needed
        onNext(survey, languages, copyQuestions, useAudiencePanel); // Pass the copyQuestions value along with survey data
    };

    const handleAddCompany = () => {
        setShowConfirmation(true);
    };

    const handleAddProduct = () => {
        setShowConfirmation1(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    const handleCloseConfirmation1 = () => {
        setShowConfirmation1(false);
    };
    const handleValidateConfirmation = () => {// Your logic for validation goes here
        console.log("Validated");setShowConfirmation(false);
    };

    const handleValidateConfirmation1 = () => {// Your logic for validation goes here
        console.log("Validated");setShowConfirmation1(false);
    };

    const isNextButtonDisabled = () => {
        return !survey.title || !survey.company || !survey.description || !survey.product || !(languages.english || languages.french || languages.arabicTounsi) || selectedFiles.length === 0;
    };


    return (
        <div className="App">
            {showConfirmation && <SubBrandPopup onClose={handleCloseConfirmation} onValidate={handleValidateConfirmation} />}
            {showConfirmation1 && <ProductOffers onClose={handleCloseConfirmation1} onValidate={handleValidateConfirmation1} />}

            <div style={{ filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
            </div>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BHeader />
                <div style={{ width: 1400, height: 950, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16 }} >
                    <div style={{ position: "relative", top: -80 }}>
                        <Timeline level={0} />

                        {/* Language Selection */}
                        <div style={{ display: "flex", flexDirection:"column",gap:6, position: 'absolute', left: 30, top: 292, width: 586, height: 96 }}>
                            <div style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Language(s) in which the survey will be conducted?</div>
                            <div style={{display: "flex", justifyContent:"space-evenly"}}>
                                <label style={{ display: "flex",alignItems:"center"}}>
                                    <input style={{width:30,height:30 }} type="checkbox" name="english" checked={languages.english} onChange={handleLanguageChange} /> English
                                </label>
                                <label style={{ display: "flex",alignItems:"center"}}>
                                    <input style={{width:30,height:30 }} type="checkbox" name="french" checked={languages.french} onChange={handleLanguageChange} /> French
                                </label>
                                <label style={{ display: "flex",alignItems:"center"}}>
                                    <input style={{width:30,height:30 }} type="checkbox" name="arabicTounsi" checked={languages.arabicTounsi} onChange={handleLanguageChange} /> Arabic Tounsi
                                </label>
                            </div>
                        </div>

                        {/* Survey Title */}
                        <div style={{ width: 586, left: 40, top: 410, position: 'absolute' }}>
                            <label>
                                <div style={{left: 0, top: -25, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Survey Title</div>
                                <input
                                    type="text"
                                    name="title"
                                    value={survey.title}
                                    onChange={handleChange}
                                    placeholder="Enter survey title"
                                    style={{ width: '100%', height: 51, border: '1px solid rgb(204, 204, 204)', borderRadius: '10px', background: 'rgba(17, 17, 17, 0.10)' }}
                                />
                            </label>
                        </div>

                        {/* Brand Selection */}
                        <div style={{ position: 'absolute', left: 40, top: 740, width: 586, height: 96 }}>
                            <label>
                                <div style={{ position: 'absolute', color: 'black', fontSize: 14, fontWeight: '600'}}>Brand</div>
                                <select
                                    name="company"
                                    value={survey.company}
                                    onChange={handleChange}
                                    style={{ border: '1px solid #CCCCCC', borderRadius: 10, background: 'rgba(17, 17, 17, 0.10)', width: '100%', height: 51, padding: '5px', marginTop: '25px' }}
                                >
                                    <option value="">-Select-</option>
                                    {companiesData.map((company) => (
                                        <option key={company.id} value={company.companyName}>
                                            {company.companyName}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <button onClick={handleAddCompany} style={{ left: 500, top: -10, position: 'absolute', fontFamily: 'revert', wordWrap: 'break-word', background: "transparent", border: "none", color: '#00BDA9', fontSize: 14, fontWeight: '600', marginTop: '10px' }}>+ Add new</button>
                        </div>
                        {/* Product Selection */}
                        <div style={{ position: 'absolute', left: 40, top: 840, width: 586 }}>
                            <label>
                                <div style={{ left: 0, top: -2, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>Product</div>
                                <select
                                    name="product"
                                    value={survey.product}
                                    onChange={handleChange}
                                    style={{ border: '1px solid #CCCCCC', borderRadius: 10, background: 'rgba(17, 17, 17, 0.10)', width: '100%', height: 51, padding: '5px', marginTop: '25px' }}
                                >
                                    <option value="">-Select-</option>
                                    {productsData.map((product) => (
                                        <option key={product.id} value={product.name}>
                                            {product.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <button onClick={handleAddProduct} style={{ left: 500, top: -10, position: 'absolute', fontFamily: 'revert', wordWrap: 'break-word', background: "transparent", border: "none", color: '#00BDA9', fontSize: 14, fontWeight: '600', marginTop: '10px' }}>+ Add new</button>
                        </div>

                        <div style={{ width: 588, height: 366, left: 652, top: 357, position: 'absolute' }}>
                            <div style={{ width: 588, height: 339, left: 0, top: 27, position: 'absolute', background: 'rgba(17, 17, 17, 0.04)', borderRadius: 20 }} />
                            <div style={{ width: 172, left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>
                                Cover photo of the survey
                            </div>
                            <div style={{ width: 120, left: 458, top: 0, position: 'absolute', textAlign: 'right', color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                                JPG, PNG, JPEG
                            </div>

                            {/* Image Upload Section */}
                            <div style={{ width: 556, height: 307, borderRadius: 20, border: '2px #CCCCCC dotted', marginTop: 20, textAlign: 'center', position: 'relative', left: 13, top: 20 }}>
                                {/* Hidden input for file selection */}
                                <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={handleCoverPhotoChange}
                                    accept="image/png, image/jpeg, image/jpg"
                                    multiple
                                />
                                {/* Upload Icon */}
                                <img
                                    src={process.env.PUBLIC_URL + '/upload.png'}
                                    alt="Upload Icon"
                                    style={{ width: 60, height: 60, marginTop: 50, cursor: 'pointer' }}
                                    onClick={() => document.querySelector('input[type="file"]').click()}
                                />
                                <div style={{ color: 'black', fontSize: 14, fontWeight: '600', marginTop: 10 }}>
                                    Select files to upload
                                </div>
                                <div style={{ color: '#666666', fontSize: 12, fontWeight: '400', marginTop: 5 }}>
                                    or Drag and Drop, Copy and Paste Files
                                </div>
                            </div>

                            {/* Display selected files */}
                            <div style={{ display: 'flex', left: 0, top: -150, position: 'relative', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
                                {selectedFiles.map((file, index) => (
                                    <div key={index} style={{ margin: 10 }}>
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={`File ${index}`}
                                            style={{ width: 150, height: 110, objectFit: 'cover', borderRadius: 10 }}
                                        />
                                        <p style={{ textAlign: 'center', marginTop: 5 }}>{file.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description Textarea */}
                        <div style={{ display:"flex", alignItems:"flex-start", flexDirection:"column", left: 650, top: 739, gap:10, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>
                            <label>Survey Description (optional)</label>
                            <textarea
                                value={survey.description}
                                onChange={handleTextareaChange}
                                maxLength={1000}
                                placeholder="Enter description"
                                style={{ width: 588, height: '130px', padding: '8px', borderRadius: '10px', background: 'rgba(17, 17, 17, 0.10)', resize: 'none' }}
                            />
                            <div style={{
                                position:"absolute",
                                top:180,
                                left:560,
                                color: 'rgba(0, 0, 0, 0.30)',
                                fontSize: 12,
                                fontFamily: 'revert',
                                fontWeight: '600',
                                lineHeight: 1,
                                wordWrap: 'break-word' }}>{charCount}/1000
                            </div>
                        </div>

                        <div style={{left: 40, top: 550, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Advanced settings</div>
                        {/* Copy Questions from Document Option */}
                        <div style={{ position: 'absolute', left: 40, top: 580}}>
                            <label style={{display:"flex", gap:20, alignItems:"center"}}>
                                <input style={{width:30,height:30 }} type="checkbox"
                                       checked={copyQuestions}
                                       onChange={handleCopyQuestionsChange} />
                                <div style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Copy questions and answers from a document.</div>
                            </label>
                        </div>

                        {/* Audience Panel */}
                        <div style={{ position: 'absolute', left: 40, top: 620 }}>
                            <label style={{display:"flex", gap:20, alignItems:"center"}}>
                                <input
                                    type="checkbox"
                                    checked={useAudiencePanel}
                                    onChange={handleAudiencePanelChange}
                                    style={{width:30,height:30 }}
                                />
                                <div style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>Use Audience Panel for Targeted Responses</div>
                            </label>
                        </div>
                        <div style={{width: 583, height: 0, left: 624, top: 700, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                        <button
                            style={{ color: isNextButtonDisabled() ? '#BDBDBD' : 'white',
                                fontSize: 14, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word', width: 180, height: 40, padding: 16, left: 1070, top: 970, position: 'absolute',
                                background: isNextButtonDisabled()
                                    ? '#D1D1D1'
                                    : 'linear-gradient(90deg, rgb(0, 189, 169) 0%, rgb(0, 192, 252) 100%)',
                                borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex', border:"none"}}
                            disabled={isNextButtonDisabled()}
                            onClick={handleNext} >Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateSurveySTEP1;