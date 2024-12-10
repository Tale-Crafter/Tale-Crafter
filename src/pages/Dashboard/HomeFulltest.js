// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SidebarButton from './SidebarButton';
import { fetchBalanceInLocaleCurrency } from './Api';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';

// Importez la bibliothèque country-currency-map
import * as countryCurrencyMap from 'country-currency-map';
import QuickSurveyEmpty from "./QuickSurveyEmpty";
const opencage = require('opencage-api-client');


const Home = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [balanceInLocaleCurrency, setBalanceInLocaleCurrency] = useState(0);
    const [curr, setCurrency] = useState(0);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeButton, setActiveButton] = useState('Dashboard');
    const [userLocation, setUserLocation] = useState(null);
// ...
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

    // Exemple : Appel de showNotification lorsque vous recevez une notification du serveur Spring Boot
    // Remplacez cela par la logique réelle de réception des notifications de votre serveur
    const receiveNotificationFromSpringBoot = () => {
        showNotification('Nouvelle notification', process.env.PUBLIC_URL + '/image6.png');
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




    const handleButtonClick = (label) => {
        setActiveButton(label);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        if (label === 'Assistance') {
            console.log('iduser:', iduser);
            // Redirection vers la route avec l'id utilisateur
            navigate(`/assistance`);
        }
        // Add specific code to execute when the button is clicked
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>
                <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>
                    <div style={{width: 166, height: 736, left: 16, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
                    <div style={{width: 1066, height: 100, left: 198, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
                    <div style={{width: 524, height: 280, left: 198, top: 312, position: 'absolute', background: 'white', borderRadius: 16}} />
                    <div style={{width: 1066, height: 557, left: 198, top: 608, position: 'absolute', background: 'white', borderRadius: 16}} />
                    <div style={{width: 526, height: 280, left: 738, top: 312, position: 'absolute'}}>
                        <div style={{width: 526, height: 280, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 16}} />
                        <div style={{left: 226, top: 67, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Tech Enthusiasts Insights</div>
                        <div style={{left: 226, top: 97, position: 'absolute', color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>25/12/2024 -12:00</div>
                        <div style={{left: 226, top: 117, position: 'absolute', color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>90 minutes</div>
                        <div style={{left: 226, top: 137, position: 'absolute', color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Live via Zoom</div>
                        <div style={{left: 226, top: 157, position: 'absolute', color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>MAX of 15 participants</div>
                        <div style={{width: 138, height: 40, padding: 16, left: 226, top: 189, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Participate</div>
                        </div>
                        <img style={{width: 194, height: 136, left: 16, top: 67, position: 'absolute', borderRadius: 10}} src="https://via.placeholder.com/194x136" />
                        <div style={{width: 61, height: 22, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 24, top: 75, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                            <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>60 points</div>
                        </div>
                    </div>
                    <div style={{width: 126, height: 37, left: 24, top: 22, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{width: 126, height: 37, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{width: 32.38, height: 22.54, background: 'linear-gradient(59deg, #F9C82E 1%, #FE346E 99%)'}}></div>
                            <div style={{width: 33.71, height: 35.91, background: 'linear-gradient(337deg, #00C0FF 0%, #00BDA9 99%)'}}></div>
                            <div style={{height: 27.65, position: 'relative'}}>
                                <div style={{width: 14.21, height: 27.49, left: 0, top: 0.01, position: 'absolute', background: '#3F0082'}}></div>
                                <div style={{width: 19.95, height: 22.11, left: 17.22, top: 5.38, position: 'absolute', background: '#3F0082'}}></div>
                                <div style={{width: 6.97, height: 26.99, left: 40.77, top: 0, position: 'absolute', background: '#3F0082'}}></div>
                                <div style={{width: 21.79, height: 22.28, left: 51.09, top: 5.37, position: 'absolute', background: '#3F0082'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{padding: 8, left: 1160, top: 20, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 3.45, height: 1.05, left: 10.27, top: 21, position: 'absolute', border: '2px #00BDA9 solid'}}></div>
                            <div style={{width: 18, height: 15.90, left: 3, top: 2.10, position: 'absolute', border: '2px #00BDA9 solid'}}></div>
                            <div style={{width: 9.75, height: 9.75, left: 12.75, top: 0.75, position: 'absolute', background: '#FF015C', borderRadius: 9999, border: '2px white solid'}} />
                        </div>
                    </div>
                    <div style={{padding: 8, left: 1112, top: 20, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 24, height: 24, paddingLeft: 2, paddingRight: 2, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 20, height: 14, position: 'relative'}}>
                                <div style={{width: 10, height: 3.50, left: 5, top: 4, position: 'absolute', border: '2px #00BDA9 solid'}}></div>
                                <div style={{width: 20, height: 14, left: 0, top: 0, position: 'absolute', border: '2px #00BDA9 solid'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{left: 24, top: 88, position: 'absolute', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'inline-flex'}}>
                        <div style={{width: 150, paddingTop: 10, paddingBottom: 10, paddingLeft: 8, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 18, height: 18, left: 3, top: 3, position: 'absolute', border: '2px white solid'}}></div>
                            </div>
                            <div style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Dashboard</div>
                        </div>
                        <div style={{width: 150, paddingTop: 10, paddingBottom: 10, paddingLeft: 8, borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 18, height: 20, left: 3, top: 2, position: 'absolute', background: '#111111'}}></div>
                            </div>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Surveys</div>
                        </div>
                        <div style={{width: 150, paddingTop: 10, paddingBottom: 10, paddingLeft: 8, borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, paddingLeft: 2.25, paddingRight: 2.25, paddingTop: 2.84, paddingBottom: 2.84, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 19.50, height: 18.33, position: 'relative'}}>
                                    <div style={{width: 8.68, height: 9.16, left: 5.41, top: 9.16, position: 'absolute', border: '2px #111111 solid'}}></div>
                                    <div style={{width: 5.50, height: 5.50, left: 7, top: 0, position: 'absolute', border: '2px #111111 solid'}}></div>
                                    <div style={{width: 3.67, height: 3.67, left: 0.59, top: 4.58, position: 'absolute', border: '2px #111111 solid'}}></div>
                                    <div style={{width: 3.67, height: 3.67, left: 15.25, top: 4.58, position: 'absolute', border: '2px #111111 solid'}}></div>
                                    <div style={{width: 19.50, height: 5.50, left: 0, top: 11, position: 'absolute', border: '2px #111111 solid'}}></div>
                                </div>
                            </div>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Focus group</div>
                        </div>
                        <div style={{width: 150, paddingTop: 10, paddingBottom: 10, paddingLeft: 8, borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, paddingTop: 2.58, paddingBottom: 2.69, paddingLeft: 3, paddingRight: 3, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{width: 18, height: 18.73, position: 'relative'}}>
                                    <div style={{width: 12.56, height: 12.56, left: 2.72, top: 0, position: 'absolute', border: '2px #111111 solid'}}></div>
                                    <div style={{width: 18, height: 9.31, left: 0, top: 9.42, position: 'absolute', border: '2px #111111 solid'}}></div>
                                </div>
                            </div>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Awards</div>
                        </div>
                    </div>
                    <img style={{width: 48, height: 48, left: 1216, top: 16, position: 'absolute', boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} src="https://via.placeholder.com/48x48" />
                    <div style={{width: 17, height: 17, left: 1247, top: 47, position: 'absolute', background: '#151515', borderRadius: 9999, border: '1px #F2F2F2 solid'}} />
                    <div style={{width: 15, height: 15, left: 1248, top: 48, position: 'absolute'}}>
                        <div style={{width: 6.25, height: 3.12, left: 4.38, top: 6.25, position: 'absolute', border: '1.33px white solid'}}></div>
                    </div>
                    <div style={{width: 48, height: 48, left: 198, top: 16, position: 'absolute', background: 'rgba(255, 255, 255, 0.70)', borderRadius: 9999}} />
                    <div style={{width: 32, height: 32, left: 206, top: 24, position: 'absolute'}}>
                        <div style={{width: 23.33, height: 15.33, left: 4.33, top: 8.33, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'}}></div>
                    </div>
                    <div style={{left: 214, top: 96, position: 'absolute'}}><span style={{color: '#111111', fontSize: 24, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 32, wordWrap: 'break-word'}}>Welcome, [Name]!</span><span style={{color: '#111111', fontSize: 24, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}> <br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span></div>
                    <div style={{width: 344, height: 100, left: 198, top: 196, position: 'absolute', background: '#FFAA1A', borderRadius: 16}} />
                    <div style={{left: 469, top: 252, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Points</div>
                    <div style={{left: 463, top: 212, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 32, wordWrap: 'break-word'}}>630</div>
                    <div style={{width: 68, height: 68, left: 215, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                    <div style={{width: 42, height: 42, paddingTop: 4.51, paddingBottom: 4.71, paddingLeft: 5.25, paddingRight: 5.25, left: 228, top: 225, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{width: 31.50, height: 32.78, position: 'relative'}}>
                            <div style={{width: 21.99, height: 21.99, left: 4.76, top: 0, position: 'absolute', border: '3px white solid'}}></div>
                            <div style={{width: 31.50, height: 16.29, left: 0, top: 16.49, position: 'absolute', border: '3px white solid'}}></div>
                        </div>
                    </div>
                    <div style={{width: 344, height: 100, left: 558, top: 196, position: 'absolute', background: '#FF720D', borderRadius: 16}} />
                    <div style={{width: 172, left: 706, top: 252, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Open surveys</div>
                    <div style={{left: 841, top: 212, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 32, wordWrap: 'break-word'}}>10</div>
                    <div style={{width: 68, height: 68, left: 575, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                    <div style={{width: 42, height: 42, left: 588, top: 225, position: 'absolute'}}>
                        <div style={{width: 31.50, height: 35, left: 5.25, top: 3.50, position: 'absolute', background: 'black', border: '3px white solid'}}></div>
                    </div>
                    <div style={{width: 346, height: 100, left: 918, top: 196, position: 'absolute', background: '#00BFED', borderRadius: 16}} />
                    <div style={{width: 225, left: 1015, top: 252, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Upcoming live sessions</div>
                    <div style={{width: 19, left: 1221, top: 212, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 32, wordWrap: 'break-word'}}>2</div>
                    <div style={{width: 68, height: 68, left: 935, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                    <div style={{width: 42, height: 42, paddingLeft: 3.94, paddingRight: 3.94, paddingTop: 4.96, paddingBottom: 4.96, left: 948, top: 225, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{width: 34.13, height: 32.07, position: 'relative'}}>
                            <div style={{width: 15.19, height: 16.04, left: 9.47, top: 16.04, position: 'absolute', border: '3px white solid'}}></div>
                            <div style={{width: 9.62, height: 9.62, left: 12.25, top: 0, position: 'absolute', border: '3px white solid'}}></div>
                            <div style={{width: 6.41, height: 6.41, left: 1.03, top: 8.02, position: 'absolute', border: '3px white solid'}}></div>
                            <div style={{width: 6.41, height: 6.41, left: 26.68, top: 8.02, position: 'absolute', border: '3px white solid'}}></div>
                            <div style={{width: 34.13, height: 9.62, left: 0, top: 19.24, position: 'absolute', border: '3px white solid'}}></div>
                        </div>
                    </div>
                    <div style={{left: 214, top: 328, position: 'absolute', color: '#00BDA9', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Surveys</div>
                    <div style={{left: 214, top: 624, position: 'absolute', color: '#F9BC33', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Quick Survey</div>
                    <div style={{left: 754, top: 328, position: 'absolute', color: '#00BDA9', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Focus group</div>
                    <div style={{width: 248, height: 141, left: 212, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 248, height: 141, left: 212, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 248, height: 141, left: 212, top: 1008, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 248, height: 141, left: 740, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 248, height: 141, left: 740, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 248, height: 141, left: 476, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 248, height: 141, left: 476, top: 851, position: 'absolute', opacity: 0.20, mixBlendMode: 'luminosity', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 248, height: 141, left: 476, top: 1008, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 248, height: 141, left: 1004, top: 694, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 248, height: 141, left: 1004, top: 851, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)', borderRadius: 16}} />
                    <div style={{width: 216, height: 54, left: 228, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Household Consumption<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{width: 216, height: 54, left: 228, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Leisure and Interests<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{width: 216, height: 54, left: 228, top: 1079, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Education<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{width: 216, height: 54, left: 756, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Automobile<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{width: 216, height: 54, left: 756, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Consumer Foods and Beverages<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{width: 216, height: 54, left: 492, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Occupation<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{width: 216, height: 54, left: 492, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Video Games and Computer Games<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{width: 216, height: 54, left: 492, top: 1079, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Consumer health<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{width: 216, height: 54, left: 1020, top: 765, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Mass Tourism<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{width: 216, height: 54, left: 1020, top: 922, position: 'absolute', textAlign: 'right'}}><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Multimedia<br/></span><span style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>(19 questions)</span></div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 220, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 220, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 220, top: 1016, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 484, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 484, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 484, top: 1016, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 748, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 748, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1012, top: 702, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1012, top: 859, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>10 points</div>
                    </div>
                    <div style={{width: 815, left: 214, top: 659, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Discover surveys tailored to your interests. Participate and earn extra points. Start now!</div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 300, top: 331, position: 'absolute', background: '#666666', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>10</div>
                    </div>
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 883, top: 331, position: 'absolute', background: '#666666', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>2</div>
                    </div>
                    <div style={{left: 636, top: 328, position: 'absolute', textAlign: 'center', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>View all</div>
                    <div style={{left: 1176, top: 328, position: 'absolute', textAlign: 'center', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>View all</div>
                    <div style={{width: 16, height: 16, left: 690, top: 330, position: 'absolute'}}>
                        <div style={{width: 3.33, height: 6.67, left: 6.67, top: 4.67, position: 'absolute', border: '1.33px black solid'}}></div>
                    </div>
                    <div style={{width: 16, height: 16, left: 1230, top: 330, position: 'absolute'}}>
                        <div style={{width: 3.33, height: 6.67, left: 6.67, top: 4.67, position: 'absolute', border: '1.33px black solid'}}></div>
                    </div>
                    <div style={{left: 345, top: 380, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Tech Gadgets Feedback</div>
                    <div style={{left: 344, top: 491, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Travel Destinations Preferences</div>
                    <div style={{left: 345, top: 410, position: 'absolute'}}><span style={{color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Number of Questions: </span><span style={{color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>15</span></div>
                    <div style={{left: 344, top: 521, position: 'absolute'}}><span style={{color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Number of Questions: </span><span style={{color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>15</span></div>
                    <div style={{left: 345, top: 430, position: 'absolute'}}><span style={{color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Points Earned: </span><span style={{color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>50</span></div>
                    <div style={{left: 344, top: 541, position: 'absolute'}}><span style={{color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Points Earned: </span><span style={{color: '#333333', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>50</span></div>
                    <div style={{width: 492, height: 0, left: 214, top: 475, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                    <img style={{width: 114, height: 80, left: 214, top: 379, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} src="https://via.placeholder.com/114x80" />
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 222, top: 387, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>30 points</div>
                    </div>
                    <img style={{width: 114, height: 80, left: 214, top: 491, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} src="https://via.placeholder.com/114x80" />
                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 222, top: 499, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>30 points</div>
                    </div>
                    <div style={{width: 22, height: 22, left: 694, top: 859, position: 'absolute'}}>
                        <div style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#FF3775', borderRadius: 9999, border: '2px #FF3775 solid'}} />
                        <div style={{width: 8.25, height: 5.50, left: 7.56, top: 8.25, position: 'absolute', border: '2px white solid'}}></div>
                    </div>
                    <div style={{width: 150, paddingTop: 8, paddingBottom: 8, paddingLeft: 8, left: 24, top: 677, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{width: 24, height: 24, padding: 2, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 20, height: 20, position: 'relative'}}>
                                <div style={{width: 20, height: 20, left: 0, top: 0, position: 'absolute', border: '2px #111111 solid'}}></div>
                                <div style={{width: 8, height: 8, left: 6, top: 6, position: 'absolute', border: '2px #111111 solid'}}></div>
                                <div style={{width: 14, height: 14, left: 3, top: 3, position: 'absolute', opacity: 0.50, border: '2px #111111 solid'}}></div>
                            </div>
                        </div>
                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Assistance</div>
                    </div>
                    <div style={{width: 150, paddingTop: 8, paddingBottom: 8, paddingLeft: 8, left: 24, top: 717, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 14, height: 18, left: 5, top: 3, position: 'absolute', border: '2px #111111 solid'}}></div>
                        </div>
                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Logout</div>
                    </div>
                    <div style={{width: 166, height: 0, left: 182, top: 765, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 150, height: 35, left: 24, top: 773, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 12, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>©2024 Tale. All rights reserved.<br/><br/></div>
                </div>
                <div style={{left: 214}}>< QuickSurveyEmpty/></div>
            </div>
        </div>
    );
};

export default Home;
