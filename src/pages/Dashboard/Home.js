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
        if( label==='Awards'){
                 navigate(`/Points`);

        }
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div className="App">
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>

                <div style={{width: 220, height: 736, left: 16, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 220, height: 77, left: 16, top: 830, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 16}} >
                    <div style={{background: 'white',fontFamily: "math",fontWeight: 900,fontSize: "large"}}><p style={{color: 'gold'}}>Balance in Local Currency {balanceInLocaleCurrency} {curr}</p> </div>
                </div>
                <div style={{width: 1220, height: 100, left: 260, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <div><span style={{color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 2, wordWrap: 'break-word'}}>Welcome, [Name]!</span><span style={{color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 2, wordWrap: 'break-word'}}> <br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 3, wordWrap: 'break-word'}}>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span></div>
                </div>
                <div style={{width: 580, height: 280, left: 260, top: 312, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 1220, height: 557, left: 260, top: 608, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 580, height: 280, left: 900, top: 312, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 126, height: 37, left: 24, top: 22, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    {/* Logo */}
                    <img src={process.env.PUBLIC_URL + '/logotale.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{padding: 8, left: 1376, top: 20, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <img src={process.env.PUBLIC_URL + '/image6.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div style={{padding: 8, left: 1328, top: 16, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                    <div style={{width: 24, height: 24, paddingLeft: 2, paddingRight: 2, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img src={process.env.PUBLIC_URL + '/mail.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
                <div style={{ left: 24, top: 88, position: 'absolute', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'inline-flex' }}>
                    <SidebarButton label="Dashboard" icon="image3.png" active={activeButton === 'Dashboard'} onClick={() => handleButtonClick('Dashboard')} />
                    <SidebarButton label="Surveys" icon="image12.png" active={activeButton === 'Surveys'} onClick={() => handleButtonClick('Surveys')} />
           
                    <SidebarButton label="Focus group" icon="image13.png" active={activeButton === 'Focus group'} onClick={() => handleButtonClick('Focus group')} />
                
                    <SidebarButton label="Awards" icon="image14.png" active={activeButton === 'Awards'} onClick={() => handleButtonClick('Awards')} />
                </div>
                <div style={{ width: 200, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 677, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <SidebarButton label="Assistance" icon="assistance.png" active={activeButton === 'Assistance'} onClick={() => handleButtonClick('Assistance')} />
                </div>
                <div style={{ width: 200, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 717, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <SidebarButton label="Logout" icon="logout.png" active={activeButton === 'Logout'} onClick={() => handleButtonClick('Logout')} />
                </div>

                <div style={{width: 48, height: 48, left: 1430, top: 16, position: 'absolute', boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', borderRadius: 9999}}>
                    <img src={process.env.PUBLIC_URL + '/image9.png'} alt="" style={{ position: 'absolute',width: '157%',height: '157%',left: '-14px',top: '-10px'}} />
                </div>
                <div style={{width: 17, height: 17, left: 1461, top: 47, position: 'absolute', background: '#151515', borderRadius: 9999, border: '1px #F2F2F2 solid'}} />
                <div style={{width: 15, height: 15, left: 1462, top: 48, position: 'absolute'}}>
                    <div style={{width: 6.25, height: 3.12, left: 4.38, top: 6.25, position: 'absolute', border: '1.33px white solid'}}></div>
                </div>
                <div style={{width: 48, height: 48, left: 260, top: 16, position: 'absolute', background: 'rgba(255, 255, 255, 0.70)', borderRadius: 9999}} />
                <div style={{ width: 32, height: 32, left: 268, top: 24, position: 'absolute', cursor: 'pointer' }} onClick={toggleSidebar}>
                    <img src={process.env.PUBLIC_URL + '/nav.png'} alt="" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 390, height: 100, left: 260, top: 196, position: 'absolute', background: '#FFAA1A', borderRadius: 16}} />
                <div style={{left: 590, top: 220, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word'}}>0</div>
                <div style={{left: 560, top: 250, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>Points</div>
                <div style={{width: 68, height: 68, left: 277, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 42, height: 42, paddingTop: 4.51, paddingBottom: 4.71, paddingLeft: 5.25, paddingRight: 5.25, left: 285, top: 223, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={process.env.PUBLIC_URL + '/image8.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 390, height: 100, left: 675, top: 196, position: 'absolute', background: '#FF720D', borderRadius: 16}} />
                <div style={{width: 172, left: 850, top: 250, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>Open surveys</div>
                <div style={{left: 1008, top: 220, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word'}}>0</div>
                <div style={{width: 68, height: 68, left: 690, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 42, height: 42, left: 703, top: 225, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/image10.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 390, height: 100, left: 1090, top: 196, position: 'absolute', background: '#00BFED', borderRadius: 16}} />
                <div style={{width: 225, left: 1200, top: 250, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>Upcoming live sessions</div>
                <div style={{width: 19, left: 1400, top: 220, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word'}}>0</div>
                <div style={{width: 68, height: 68, left: 1105, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 42, height: 42, paddingLeft: 3.94, paddingRight: 3.94, paddingTop: 4.96, paddingBottom: 4.96, left: 1116, top: 223, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={process.env.PUBLIC_URL + '/image7.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{left: 276, top: 328, position: 'absolute', color: '#00BDA9', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Surveys</div>
                <div style={{left: 290, top: 624, position: 'absolute', color: '#F9BC33', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Quick Survey</div>
                <div style={{left: 915, top: 328, position: 'absolute', color: '#00BDA9', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Focus group</div>
                <div style={{left: 450, top: 492, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>There are no surveys at this time</div>
                <div style={{left: 1060, top: 492, position: 'absolute', textAlign: 'center', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>There are no live shows for you at the moment</div>
                <div style={{width: 55.06, height: 59, left: 520, top: 407, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/ss.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 55.06, height: 59, left: 1160, top: 407, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/ss.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                {/*///houni eli f note*/}
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 350, top: 331, position: 'absolute', background: '#666666', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>0</div>
                </div>
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1025, top: 331, position: 'absolute', background: '#666666', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>0</div>
                </div>
                <div style={{left: 740, top: 328, position: 'absolute', textAlign: 'center', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>View all</div>
                <div style={{left: 1380, top: 328, position: 'absolute', textAlign: 'center', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>View all</div>
                <div style={{width: 16, height: 16, left: 795, top: 326, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/image11.png'} alt="" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 16, height: 16, left: 1435, top: 326, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/image11.png'} alt="" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 815, left: 127, top: 659, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Discover surveys tailored to your interests. Participate and earn extra points. Start now!</div>
                <div style={{width: 218, height: 0, left: 236, top: 770, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                <div style={{width: 175, height: 35, left: 40, top: 790, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>©2024 Tale. All rights reserved.<br/><br/></div>
                <div style={{left: 214}}>< QuickSurveyEmpty/></div>
            </div>
        </div>
    );
};

export default Home;
