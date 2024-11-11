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

    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF',marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease'}}>

                {/*{sidebarVisible ? (*/}
                {/*    // Regular SidebarButton when sidebar is visible*/}
                {/*    <div style={{width: 220, height: 77, left: 16, top: 830, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 16}} >*/}
                {/*        <div style={{background: 'white',fontFamily: "math",fontWeight: 900,fontSize: "large"}}><p style={{color: 'gold'}}>Balance in Local Currency {balanceInLocaleCurrency} {curr}</p> </div>*/}
                {/*    </div>*/}
                {/*) : (*/}
                {/*    // SidebarButtonHide when sidebar is hidden*/}
                {/*    <div style={{width: 55, height: 77, left: 115, top: 830, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 16}} >*/}
                {/*        <div style={{background: 'white',fontFamily: "math",fontWeight: 900,fontSize: "small"}}><p style={{color: 'gold'}}>BLC <br/>{balanceInLocaleCurrency}  <br/> {curr}</p> </div>*/}
                {/*    </div>*/}
                {/*)}*/}
                <div style={{textAlign: "left",width: 1400, height: 100, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <div><span style={{ left: 20,top:15, position: 'relative',color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>Welcome, [Name]!</span><span style={{left: 20, position: 'relative',color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1.5, wordWrap: 'break-word'}}> <br/></span><span style={{left: 20,top:10, position: 'relative',color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 3, wordWrap: 'break-word'}}>Explore influential opportunities by participating in exciting surveys. Your opinion matters!</span></div>
                </div>
                <div style={{width: 670, height: 280, left: 340, top: 312, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 1400, height: 660, left: 340, top: 608, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 670, height: 280, left: 1070, top: 312, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <div style={{left: 306, top: 67, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Tech Enthusiasts Insights</div>
                    <div style={{left: 306, top: 97, position: 'absolute', color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>25/12/2024 -12:00</div>
                    <div style={{left: 306, top: 117, position: 'absolute', color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>90 minutes</div>
                    <div style={{left: 306, top: 137, position: 'absolute', color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Live via Zoom</div>
                    <div style={{left: 306, top: 157, position: 'absolute', color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>MAX of 15 participants</div>
                    <div style={{width: 138, height: 10, padding: 16, left: 306, top: 189, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Participate</div>
                    </div>
                    <img style={{width: 244, height: 186, left: 36, top: 50, position: 'absolute', borderRadius: 10}} src={process.env.PUBLIC_URL + '/focusgroup.png'} />
                    <div style={{width: 61, height: 22, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 40, top: 60, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>60 points</div>
                    </div>

                </div>
                {/*---*/}



                {/*---*/}
                <BHeader/>

                <div style={{width: 440, height: 100, left: 340, top: 196, position: 'absolute', background: '#FFAA1A', borderRadius: 16}} />
                <div style={{left: 645, top: 228, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word'}}>630</div>
                <div style={{left: 655, top: 265, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>Points</div>
                <div style={{width: 68, height: 68, left: 357, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 42, height: 42, paddingTop: 4.51, paddingBottom: 4.71, paddingLeft: 5.25, paddingRight: 5.25, left: 365, top: 223, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={process.env.PUBLIC_URL + '/image8.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 450, height: 100, left: 805, top: 196, position: 'absolute', background: '#FF720D', borderRadius: 16}} />
                <div style={{width: 172, left: 1000, top: 265, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>Open surveys</div>
                <div style={{left: 1125, top: 228, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word'}}>10</div>
                <div style={{width: 68, height: 68, left: 820, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 42, height: 42, left: 833, top: 225, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/image10.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 460, height: 100, left: 1280, top: 196, position: 'absolute', background: '#00BFED', borderRadius: 16}} />
                <div style={{width: 225, left: 1450, top: 265, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 16, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>Upcoming live sessions</div>
                <div style={{width: 19, left: 1630, top: 228, position: 'absolute', textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word'}}>2</div>
                <div style={{width: 68, height: 68, left: 1300, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 42, height: 42, paddingLeft: 3.94, paddingRight: 3.94, paddingTop: 4.96, paddingBottom: 4.96, left: 1310, top: 223, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={process.env.PUBLIC_URL + '/image7.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{left: 356, top: 328, position: 'absolute', color: '#00BDA9', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Surveys</div>
                <div style={{left: 370, top: 624, position: 'absolute', color: '#F9BC33', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Quick Survey</div>
                <div style={{left: 1100, top: 328, position: 'absolute', color: '#00BDA9', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Focus group</div>
                {/*----------*/}
                <div style={{left: 486, top: 380, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Tech Gadgets Feedback</div>
                <div style={{left: 485, top: 491, position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Travel Destinations Preferences</div>
                <div style={{left: 486, top: 410, position: 'absolute'}}><span style={{color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Number of Questions: </span><span style={{color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>15</span></div>
                <div style={{left: 485, top: 521, position: 'absolute'}}><span style={{color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Number of Questions: </span><span style={{color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>15</span></div>
                <div style={{left: 486, top: 430, position: 'absolute'}}><span style={{color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Points Earned: </span><span style={{color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>50</span></div>
                <div style={{left: 485, top: 541, position: 'absolute'}}><span style={{color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Points Earned: </span><span style={{color: '#333333', fontSize: 12, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>50</span></div>
                <div style={{width: 492, height: 0, left: 275, top: 475, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                <img style={{width: 114, height: 80, left: 355, top: 379, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} src="https://via.placeholder.com/114x80" />
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 363, top: 387, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                    <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>30 points</div>
                </div>
                <img style={{width: 114, height: 80, left: 355, top: 491, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} src="https://via.placeholder.com/114x80" />
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 363, top: 499, position: 'absolute', background: '#00BDA9', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                    <div style={{textAlign: 'right', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>30 points</div>
                </div>
                {/*///houni eli f note*/}
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 440, top: 333, position: 'absolute', background: '#666666', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>10</div>
                </div>
                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1225, top: 333, position: 'absolute', background: '#666666', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>2</div>
                </div>
                <Link to={`/surveys`}>
                    <div style={{ left: 910, top: 328, position: 'absolute', textAlign: 'center', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>View all</div>
                    <div style={{ width: 16, height: 16, left: 970, top: 328, position: 'absolute' }}>
                        <img src={process.env.PUBLIC_URL + '/image11.png'} alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                </Link>
                <Link to={`/focusgroup`}>
                <div style={{left: 1640, top: 328, position: 'absolute', textAlign: 'center', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>View all</div>
                <div style={{width: 16, height: 16, left: 1700, top: 328, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/image11.png'} alt="" style={{ width: '100%', height: '100%' }} />
                </div>
                </Link>
                <div style={{width: 815, left: 230, top: 659, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Discover surveys tailored to your interests. Participate and earn extra points. Start now!</div>
                <div style={{left: 294}}>< QuickSurveyEmpty/></div>
            </div>
        </div>
    );
};

export default Home;
