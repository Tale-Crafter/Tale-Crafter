import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBalanceInLocaleCurrency } from './Api';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import QuickSurveyEmpty from "./QuickSurveyEmpty";
import Leftsidebar from "./Leftsidebar";
import BHeader from "./BHeader";
import BusinessLeftsidebar from "./BusinessLeftsidebar";
import AdminLeftsidebar from "./AdminLeftsidebar";
import Chart from "./chart";
import TableAdminGU from "./TableAdminGU";
import TableUserGU from "./TableUserGU";
import TableSanction from "./TableSanction";
const opencage = require('opencage-api-client');

const GestionSanction = () => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const [balanceInLocaleCurrency, setBalanceInLocaleCurrency] = useState(0);
    const [curr, setCurrency] = useState(0);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeButton, setActiveButton] = useState('Panélistes');
    const [notifications, setNotifications] = useState([]);

    const showNotification = (message, icon) => {
        const newNotification = { message, icon };
        setNotifications([...notifications, newNotification]);

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

                        try {
                            const balanceResponse = await fetchBalanceInLocaleCurrency(iduser, await getTargetCurrency(country));
                            const balance = balanceResponse.data;
                            setBalanceInLocaleCurrency(balance);
                        } catch (balanceError) {
                            console.error('Erreur lors de la récupération du solde :', balanceError);
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

            if (firstResult) {
                const currencyCode = firstResult.annotations.currency.iso_code;
                setCurrency(currencyCode);
                return currencyCode || 'USD';
            } else {
                console.error('Aucun résultat trouvé pour la localisation :', location);
                return 'USD';
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des informations de localisation :', error);
            return 'USD';
        }
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    return (
        <div className="App">
            <AdminLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', zIndex: -1}}>
                <BHeader/>
                <div style={{
                    position: 'relative',
                    height: 1000,
                    top: '80px',
                    background: 'white',
                    borderRadius: '8px',
                    display: 'flex',
                    padding: '16px',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    width: '1365px',
                    left: '340px'
                }}>
                    <div style={{left: 30, top: 20, position: 'absolute', color: 'Black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Gestion des Sanctions</div>
                    <div style={{left: 30, top: 60, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Détails et Informations!</div>

                    <div style={{
                        position: 'relative',
                        top: '90px',
                        background: 'white',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        width: '1365px',
                    }}>
                        {/*/!* Buttons for switching tables *!/*/}
                        {/*<div style={{ display: 'flex', marginBottom: '16px' }}>*/}
                        {/*    <button*/}
                        {/*        onClick={() => handleButtonClick('Panélistes')}*/}
                        {/*        style={{*/}
                        {/*            fontWeight: activeButton === 'Panélistes' ? 'bold' : 'normal',*/}
                        {/*            borderBottom: activeButton === 'Panélistes' ? '2px solid black' : 'none',*/}
                        {/*            marginRight: '10px'*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        Panélistes*/}
                        {/*    </button>*/}
                        {/*    <button*/}
                        {/*        onClick={() => handleButtonClick('Clients')}*/}
                        {/*        style={{*/}
                        {/*            fontWeight: activeButton === 'Clients' ? 'bold' : 'normal',*/}
                        {/*            borderBottom: activeButton === 'Clients' ? '2px solid black' : 'none'*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        Clients*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        {/* Conditional rendering of tables */}
                        {/*{activeButton === 'Clients' && <TableUserGU />}*/}
                         <TableSanction  />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GestionSanction;
