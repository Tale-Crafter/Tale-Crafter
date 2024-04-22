// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBalanceInLocaleCurrency } from './Api';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Importez la bibliothèque country-currency-map
import QuickSurveyEmpty from "./QuickSurveyEmpty";
import Leftsidebar from "./Leftsidebar";
import BHeader from "./BHeader";
import BusinessLeftsidebar from "./BusinessLeftsidebar";
const opencage = require('opencage-api-client');


const Importqs1 = () => {
    const navigate = useNavigate();
    const [textareaContent, setTextareaContent] = useState('');
    const [charCount, setCharCount] = useState(0);


    const [questionsContent, setQuestionsContent] = useState("");
    const [previewContent, setPreviewContent] = useState("");// Contenu de la prévisualisation
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showConfirmation1, setShowConfirmation1] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(true);
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true); // État pour afficher ou masquer le placeholder
    const [isFocused, setIsFocused] = useState(false); // État pour suivre si le textarea est en focus


    const { iduser } = useParams();
    const [balanceInLocaleCurrency, setBalanceInLocaleCurrency] = useState(0);
    const [curr, setCurrency] = useState(0);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeButton, setActiveButton] = useState('Dashboard');
    const [userLocation, setUserLocation] = useState(null);
// ...

    const handleQuestionsChange = (event) => {
        const content = event.target.value;
        setQuestionsContent(content);
        setPreviewContent(generatePreview(content));
        setIsNextDisabled(content.trim() === ''); // Disable button if content is empty
        setShowPlaceholder(content.trim() === ''); // Show placeholder if content is empty
    };

    const generatePreview = (content) => {
        const lines = content.split('\n');
        const formattedQuestions = [];

        let currentQuestion = null;
        for (const line of lines) {
            const trimmedLine = line.trim();

            if (trimmedLine.endsWith('?')) {
                // New question found
                if (currentQuestion) {
                    formattedQuestions.push(currentQuestion); // Push previous question
                }
                currentQuestion = [trimmedLine]; // Start a new question
            } else if (trimmedLine === '') {
                // Empty line found, end of options for current question
                if (currentQuestion) {
                    formattedQuestions.push(currentQuestion); // Push current question
                    currentQuestion = null; // Reset current question
                }
            } else if (currentQuestion) {
                // Add option to current question
                currentQuestion.push(trimmedLine);
            }
        }

        if (currentQuestion) {
            formattedQuestions.push(currentQuestion); // Push the last question
        }

        return formattedQuestions.map((question, index) => (
            <div key={index} className="Rectangle-1133">
                {question.map((line, idx) => (
                    <div key={idx}>{line}</div>
                ))}
            </div>
        ));
    };



    const [notifications, setNotifications] = useState([]);


    // Fonction pour afficher une notification
    const showNotification = (message, icon) => {
        const newNotification = { message, icon };
        setNotifications([...notifications, newNotification]);

        // Supprimer la notification après 5 secondes
        setTimeout(() => {
            setNotifications((prevNotifications) => prevNotifications.filter((n) => n !== newNotification));
        }, 5000);
    };


    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };
    const handleCloseConfirmation1 = () => {
        setShowConfirmation1(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if ("geolocation" in navigator) {
                    const position = await new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });

                    const { latitude, longitude } = position.coords;

                    const locationResponse = await opencage.geocode({ q: `${latitude},${longitude}`, key: 'dbc5e26b183544fcba8f87ef4268b049' });

                    if (locationResponse && locationResponse.results && locationResponse.results.length > 0) {
                        const country = locationResponse.results[0].components.country;

                        // Utilisez la fonction API
                        try {
                            const balanceResponse = await fetchBalanceInLocaleCurrency(iduser, await getTargetCurrency(country));
                            const balance = balanceResponse.data;
                            setBalanceInLocaleCurrency(balance);
                        } catch (balanceError) {
                            console.error('Erreur lors de la récupération du solde :', balanceError);
                            // Ajoutez cette ligne pour loguer les détails de l'erreur
                            console.error('Détails de l\'erreur :', balanceError.response);

                        }
                    } else {
                        console.error('Aucun résultat trouvé pour les coordonnées.');
                    }
                } else {
                    console.warn("La géolocalisation n'est pas prise en charge par ce navigateur.");
                }
            } catch (error) {
                console.error('Erreur lors de la récupération de la localisation :', error);
            }
        };

        fetchData();
    }, [iduser]);

    const getTargetCurrency = async location => {
        try {
            const response = await opencage.geocode({ q: location, key: 'dbc5e26b183544fcba8f87ef4268b049' });
            const firstResult = response.results[0];

            console.log('firstResult:', firstResult); // Examinez la structure de l'objet

            if (firstResult) {
                const currencyCode = firstResult.annotations.currency.iso_code;
                setCurrency(currencyCode);
                console.log('currencyCode:', currencyCode); // Examinez la structure de l'objet

                return currencyCode || 'USD';
            } else {
                console.error('Aucun résultat trouvé pour la localisation :', location);
                return 'USD'; // Utilisez USD par défaut en cas de problème
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des informations de localisation :', error);
            return 'USD'; // Utilisez USD par défaut en cas d'erreur
        }
    };
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };


    const handleTextareaChange = (event) => {
        const content = event.target.value;
        setTextareaContent(content);
        setCharCount(content.length);
    };

    const handleCancel = () => {
        setShowConfirmation(true);
    };
    const handleAddQuestions = () => {
        setShowConfirmation1(true);
    };
    // const handleQuestionsChange = (event) => {
    //     const content = event.target.value;
    //     const lines = content.split('\n'); // Diviser le contenu en lignes
    //     const lineCount = lines.length; // Compter le nombre de lignes
    //
    //     // Limiter chaque ligne à au plus 300 caractères
    //     const limitedLines = lines.map(line => line.slice(0, 300));
    //
    //     // Recomposer le contenu avec les lignes limitées
    //     const limitedContent = limitedLines.join('\n');
    //
    //     // Vérifier si les quatre premières lignes ne sont pas vides
    //     const isFirstFourLinesNotEmpty = lines.slice(0, 4).every(line => line.trim().length > 0);
    //
    //     // Vérifier si les lignes divisées par 5 sont vides (à partir de la 5e ligne)
    //     const isFifthLineEmpty = lines.length >= 5 ? lines[4].trim().length === 0 : true; // La cinquième ligne est considérée vide par défaut si elle n'existe pas
    //     const isTenthLineEmpty = lines.length >= 10 ? lines[9].trim().length === 0 : true; // La dixième ligne est considérée vide par défaut si elle n'existe pas
    //     const isFifteenthLineEmpty = lines.length >= 15 ? lines[14].trim().length === 0 : true; // La quinzième ligne est considérée vide par défaut si elle n'existe pas
    //     const isTwentiethLineEmpty = lines.length >= 20 ? lines[19].trim().length === 0 : true; // La vingtième ligne est considérée vide par défaut si elle n'existe pas
    //     const isTwentyFifthLineEmpty = lines.length >= 25 ? lines[24].trim().length === 0 : true; // La vingt-cinquième ligne est considérée vide par défaut si elle n'existe pas
    //     const isThirtiethLineEmpty = lines.length >= 30 ? lines[29].trim().length === 0 : true; // La trentième ligne est considérée vide par défaut si elle n'existe pas
    //
    //
    //
    //     // Vérifier si le nombre de lignes est entre 3 et 4 et si les quatre premières lignes ne sont pas vides
    //     const isMinimumLines = lineCount >= 4 && isFirstFourLinesNotEmpty && isFifthLineEmpty && isTenthLineEmpty && isFifteenthLineEmpty && isTwentiethLineEmpty && isTwentyFifthLineEmpty && isThirtiethLineEmpty;
    //
    //     // Mettre à jour le contenu des questions
    //     setQuestionsContent(limitedContent);
    //
    //     // Mettre à jour le contenu de la prévisualisation
    //     setPreviewContent(content);
    //
    //     // Vérifier si le contenu est vide, dépasse 1000 caractères ou ne contient pas le nombre minimum de lignes
    //     const isNextDisabled = limitedContent.trim() === '' || !isMinimumLines;
    //
    //     // Définir l'état de isNextDisabled
    //     setIsNextDisabled(isNextDisabled);
    //
    //     // Afficher ou masquer le placeholder en fonction du contenu
    //     setIsPlaceholderVisible(content.trim() === ''); // Afficher le placeholder si le contenu est vide
    // };


    const handleAddQuestion = () => {
        setShowPlaceholder(true);
        // Autres opérations à effectuer lorsque vous ajoutez une question
    };





    // Fonction de gestionnaire de focus pour le textarea
    const handleFocus = () => {
        setIsFocused(true); // Mettre à jour l'état pour indiquer que le textarea est en focus
    };

    // Fonction de gestionnaire de blur pour le textarea
    const handleBlur = () => {
        setIsFocused(false); // Mettre à jour l'état pour indiquer que le textarea n'est plus en focus
    };



    return (
        <div className="App" >

            {/*---*/}
            <div style={{ width: '97%', height: '97%', position: 'absolute', top: '0', right: '0', bottom: '0', left: '0', margin: 'auto', background: 'white', borderRadius: 16 }}>
                {/* Contenu de rectangle blanc*/}
                <div style={{left: 30, top: 40, position: 'absolute', textAlign: 'left', color: 'Black', fontSize: 32, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>Import questions </div>

                <div style={{ width: 1750, height: 76, position: 'absolute', top: 80, left: 40,  background: 'rgba(17, 17, 17, 0.07)', borderRadius: 16,display: 'flex',justifyContent: 'left',alignItems: 'center',}}>
                    <div style={{ textAlign: 'left', color: 'Black', fontSize: 22, fontFamily: 'revert', fontWeight: '350', lineHeight: 0, wordWrap: 'break-word' ,marginLeft: 10 }}>Include questions in a survey by placing each question and its response choices on separate lines. Use two line breaks to separate each question.
                    </div>
                </div>

                {/*--box les questions-*/}

                {/* Zone de saisie des questions */}
                <textarea
                    style={{
                        background: 'white',
                        position: "absolute",
                        top: 180,
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
                        borderImage: 'linear-gradient(90deg, rgb(0, 189, 169) 0%, rgb(0, 192, 252) 100%) 1',
                        textAlign: 'left',
                        lineHeight: '1.5'
                    }}
                    placeholder={`Copy and paste your pre-written questions and response choices, and preview them in real-time. To add a multiple-choice question, paste the question statement on one line and each response choice on its own line directly below. To add a single-line text question, simply paste the question statement. Press Enter twice to start a new question. (PLEASE FOLLOW THE EXAMPLE)
_____________________________________________________________________________________

For example:
                
What is your favorite color?
Red
Blue
Green
                
Question 2: How often do you exercise?
Daily
Weekly
Monthly`}

                    value={questionsContent} // Utilisez une variable différente pour la valeur des questions
                    onChange={handleQuestionsChange} // Utilisez une fonction de gestionnaire de changement différente


                />

                {/* Zone de prévisualisation */}
                <div style={{left: 975, top:210, position: 'absolute', textAlign: 'left', color: 'Black', fontSize: 25, fontFamily: 'revert', fontWeight: '500', lineHeight: 0, wordWrap: 'break-word'}}>Preview </div>

                <div
                    style={{
                        background: 'rgba(17, 17, 17, 0.10)',
                        position: "absolute",
                        top: 180, // Position ajustée pour la zone de prévisualisation
                        right: 40,
                        width: 850,
                        height: 650, // Hauteur réduite pour la zone de prévisualisation
                        outline: 'none',
                        resize: 'none',
                        padding: '8px',
                        fontFamily: "revert",
                        fontSize: 18,
                        borderRadius: 16,
                        border: isFocused ? '1.5px solid linear-gradient(90deg, rgb(0, 189, 169) 0%, rgb(0, 192, 252) 100%)' : '1.5px #CCCCCC solid', // Appliquer la bordure conditionnellement en fonction de l'état de focus
                        textAlign: 'center'
                    }}


                >
                    {showPlaceholder ? 'No questions have been added' : previewContent}

                </div>


                <button onClick={handleCancel} style={{background:"transparent",borderRadius: 16,border: '2px #111111 solid',width: 150, height: 60, right: 205, top: 860, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Cancel</button>
                <button
                    onClick={() =>handleAddQuestions && setShowPlaceholder(false)}
                    disabled={isNextDisabled}
                    style={{
                        background: isNextDisabled ? '#CCCCCC' : 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)',
                        border: isNextDisabled ? 'none' : 'none',
                        borderRadius: 16,
                        width: 150,
                        height: 60,
                        right: 40,
                        top: 860,
                        position: 'absolute',
                        color: isNextDisabled ? '#666666' : 'white',
                        fontSize: 16,
                        fontFamily: 'revert',
                        fontWeight: '600',
                        wordWrap: 'break-word'
                    }}>Add questions</button>


            </div>

        </div>

    );
};

export default Importqs1;
