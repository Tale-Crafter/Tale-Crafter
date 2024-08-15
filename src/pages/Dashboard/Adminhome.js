
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
import AdminLeftsidebar from "./AdminLeftsidebar";
import Chart from "./chart";
import Table from "./TableAdmin";
import TableAdmin from "./TableAdmin";
import TableUser from "./TableUser";
const opencage = require('opencage-api-client');


const Adminhome = () => {
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
            <AdminLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{width: '100%', height: '100%', position: 'relative',marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', zIndex:-1}}>

                {/*---*/}
                <BHeader/>

                <div style={{width: 331, height: 100, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 540, top: 110, position: 'absolute', textAlign: 'right', color: 'Grey', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Survey created</div>
                <div style={{left: 595, top: 150, position: 'absolute', textAlign: 'right', color: 'Black', fontSize: 32, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>630</div>

                <div style={{width: 68, height: 68, left: 355, top: 100, position: 'absolute', opacity: 0.15, background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 9999}} />
                <div style={{width: 48, height: 48, paddingTop: 4.51, paddingBottom: 4.71, paddingLeft: 5.25, paddingRight: 5.25, left: 355, top: 105, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={process.env.PUBLIC_URL + '/B1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>



                <div style={{width: 331, height: 100, left: 696, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 172, left: 837, top: 150, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 32, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>15,063</div>
                <div style={{left: 870, top: 110, position: 'absolute', textAlign: 'right', color: 'grey', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Questions created</div>
                <div style={{width: 68, height: 68, left: 720, top: 100, position: 'absolute', opacity: 0.15, background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 9999}} />
                <div style={{width: 42, height: 42, left: 733, top: 111, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B2.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>



                <div style={{width: 331, height: 100, left: 1052, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 225, left: 1140, top: 150, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 32, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>90,000</div>
                <div style={{ left: 1250, top: 110, position: 'absolute', textAlign: 'right', color: 'grey', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word', whiteSpace: 'nowrap'}}>User responses</div>
                <div style={{width: 68, height: 68, left: 1080, top: 100, position: 'absolute', opacity: 0.15, background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 9999}} />
                <div style={{width: 48, height: 48, paddingLeft: 3.94, paddingRight: 3.94, paddingTop: 4.96, paddingBottom: 4.96, left: 1088, top: 105, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={process.env.PUBLIC_URL + '/B1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>

                <div style={{width: 332, height: 100, left: 1408, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 172, left: 1540, top: 150, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 32, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>15</div>
                <div style={{left: 1560, top: 110, position: 'absolute', textAlign: 'right', color: 'grey', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Focus group created</div>
                <div style={{width: 68, height: 68, left: 1428, top: 100, position: 'absolute', opacity: 0.15, background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 9999}} />
                <div style={{width: 48, height: 48, left: 1440, top: 105, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B3.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>





                {/*----------*/}



                <div style={{left: 350, top: 220, position: 'absolute', color: 'Black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Chiffre clé global</div>
                <div style={{left: 350, top: 270, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Analyse en temps réel!</div>

                {/*-courbe F M -*/}

                <div style={{width: 925, height: 332, left: 340, top: 330, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 355, top: 350, position: 'absolute', color: 'Black', fontSize: 22, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Total participants : 5000</div>

                <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 4, paddingBottom: 4, left: 800, top: 350, position: 'absolute', background: '#00BFCB', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 812, top: 350, position: 'absolute',color: '#666666', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Male</div>

                <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 4, paddingBottom: 4, left: 880, top: 350, position: 'absolute', background: '#CF3AB7', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 892, top: 350, position: 'absolute',color: '#666666', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Female</div>


                <div style={{ left: 1122, top: 350, position: 'absolute',color: 'Black', fontSize: 12, fontFamily: 'revert', fontWeight: '650', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>01/01-14/01</div>
                <div style={{width: 20, height: 20, left: 1200, top: 350, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/Fdown.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 870, height: 250, left: 370, top: 400, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/G1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>


                {/*-courbe Distru -*/}

                <div style={{width: 450, height: 332, left: 1290 ,top: 330, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 1310, top: 340, position: 'absolute', color: 'Black', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Distribution of Participants</div>

                <div style={{ left: 1632, top: 348, position: 'absolute',color: 'Black', fontSize: 14, fontFamily: 'revert', fontWeight: '650', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>January</div>
                <div style={{width: 20, height: 20, left: 1682, top: 348, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/Fdown.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>


                <div style={{width: 400, height: 230, left: 1310, top: 400, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/G2.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>



                {/*Satisfaction*/}

                <Chart ></Chart>
                {/*Average*/}
                <div style={{width: 450, height: 329, left: 1290, top: 700, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 1305, top: 720, position: 'absolute', color: 'Black', fontSize: 28, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word',textAlign: 'left', whiteSpace: 'nowrap'}}>Average response rate per<br />survey</div>

                <div style={{left: 1484, top: 830, position: 'absolute', color: 'Black', fontSize: 32, fontFamily: 'revert', fontWeight: '780', wordWrap: 'break-word'}}>3986</div>
                <div style={{ left: 1473, top: 880, position: 'absolute',color: '#666666', fontSize: 20, fontFamily: 'revert', fontWeight: '450', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>PRODUCTS</div>


                <div style={{width: 310, height: 310, left: 1366, top: 760, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B7.png'} alt="LogoTale" style={{ width: '200px', height: '200px' }} />
                </div>

                <div style={{width: 270, height: 38, left: 1385, top: 975, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B12.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>

                <div style={{left: 350, top: 1080, position: 'absolute', color: 'Black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Chiffre clé global</div>
                <div style={{left: 350, top: 1120, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Analyse en temps réel!</div>

                <div style={{position:'relative', top:1160}}>
                    <TableAdmin ></TableAdmin>
                </div>


                <div style={{left: 350, top: 2050, position: 'absolute', color: 'Black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Chiffre clé global</div>
                <div style={{left: 350, top: 2090, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Analyse en temps réel!</div>

                <div style={{position:'relative', top:1300}}>
                    <TableUser ></TableUser>
                </div>
            </div>
        </div>
    );
};
export default Adminhome;
