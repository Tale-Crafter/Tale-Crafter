// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {fetchBalanceInLocaleCurrency} from './Api';
import BHeader from "./BHeader";
import BusinessLeftsidebar from "./BusinessLeftsidebar";
const opencage = require('opencage-api-client');


const Businesshome = () => {
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
            <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
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
                    <div><span style={{ left: 20,top:15, position: 'relative',color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', lineHeight: 1, wordWrap: 'break-word'}}>Dashbord, SBFT </span><span style={{left: 20, position: 'relative',color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '600', lineHeight: 1.5, wordWrap: 'break-word'}}> <br/></span><span style={{left: 20,top:10, position: 'relative',color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 3, wordWrap: 'break-word'}}>Explore influential opportunities by participating!</span></div>
                </div>

                {/*---*/}



                {/*---*/}
                <BHeader/>

                <div style={{width: 331, height: 100, left: 340, top: 196, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 540, top: 228, position: 'absolute', textAlign: 'right', color: 'Grey', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Survey created</div>
                <div style={{left: 595, top: 265, position: 'absolute', textAlign: 'right', color: 'Black', fontSize: 32, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>630</div>

                <div style={{width: 68, height: 68, left: 355, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 48, height: 48, paddingTop: 4.51, paddingBottom: 4.71, paddingLeft: 5.25, paddingRight: 5.25, left: 355, top: 223, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={process.env.PUBLIC_URL + '/B1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>



                <div style={{width: 331, height: 100, left: 696, top: 196, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 172, left: 837, top: 265, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 32, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>15,063</div>
                <div style={{left: 870, top: 228, position: 'absolute', textAlign: 'right', color: 'grey', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Questions created</div>
                <div style={{width: 68, height: 68, left: 720, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 42, height: 42, left: 720, top: 225, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B2.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>



                <div style={{width: 331, height: 100, left: 1052, top: 196, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 225, left: 1140, top: 265, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 32, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>90,000</div>
                <div style={{ left: 1250, top: 228, position: 'absolute', textAlign: 'right', color: 'grey', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word', whiteSpace: 'nowrap'}}>User responses</div>
                <div style={{width: 68, height: 68, left: 1080, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 48, height: 48, paddingLeft: 3.94, paddingRight: 3.94, paddingTop: 4.96, paddingBottom: 4.96, left: 1070, top: 223, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <img src={process.env.PUBLIC_URL + '/B1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>

                <div style={{width: 332, height: 100, left: 1408, top: 196, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 172, left: 1540, top: 265, position: 'absolute', textAlign: 'right', color: 'black', fontSize: 32, fontFamily: 'revert', fontWeight: '600', lineHeight: 0, wordWrap: 'break-word'}}>15</div>
                <div style={{left: 1560, top: 228, position: 'absolute', textAlign: 'right', color: 'grey', fontSize: 16, fontFamily: 'revert', fontWeight: '700', lineHeight: 0, wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Focus group created</div>
                <div style={{width: 68, height: 68, left: 1428, top: 212, position: 'absolute', opacity: 0.15, background: 'white', borderRadius: 9999}} />
                <div style={{width: 48, height: 48, left: 1428, top: 225, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B3.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>





                {/*surveys*/}

                <div style={{width: 450, height: 245, left: 340, top: 312, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 356, top: 328, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Surveys</div>

                <div style={{left:650, top: 328, position: 'absolute', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>+ Create survey</div>
                <div style={{width: 55, height: 59, left: 538, top: 400, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B4.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{left: 450, top: 463,width:216, height:19, position: 'absolute', color: 'grey', fontSize: 18, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>There are no surveys at this time</div>

                <Link to={`/surveys`}>
                    <div style={{ left: 710, top: 524, position: 'absolute', textAlign: 'center', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', whiteSpace: 'nowrap' }}>View all</div>
                    <div style={{width: 16, height: 16, left: 760, top: 524, position: 'absolute'}}>
                        <img src={process.env.PUBLIC_URL + '/image11.png'} alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                </Link>

                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 440, top: 333, position: 'absolute', background: '#666666', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>0</div>
                </div>

                {/*focus group*/}

                <div style={{width: 450, height: 245, left: 815, top: 312, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 831, top: 328, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Focus group</div>

                <div style={{left:1090, top: 328, position: 'absolute', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>+ Create focus group</div>
                <div style={{width: 55, height: 59, left: 1013, top: 400, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B4.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{left: 855, top: 463,width:306, height:19, position: 'absolute', color: 'grey', fontSize: 18, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>There are no live shows for you at the moment</div>

                <Link to={`/focusgroup`}>
                    <div style={{ left: 1185, top: 524, position: 'absolute', textAlign: 'center', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', whiteSpace: 'nowrap' }}>View all</div>
                    <div style={{width: 16, height: 16, left: 1235, top: 524, position: 'absolute'}}>
                        <img src={process.env.PUBLIC_URL + '/image11.png'} alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                </Link>

                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 960, top: 333, position: 'absolute', background: '#666666', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>0</div>
                </div>

                {/*Reports*/}

                <div style={{width: 450, height: 245, left: 1290, top: 312, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 1306, top: 328, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Reports</div>

                <div style={{width: 55, height: 59, left: 1488, top: 400, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B4.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{left: 1330, top: 463,width:306, height:19, position: 'absolute', color: 'grey', fontSize: 18, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>There are no live shows for you at the moment</div>

                <Link to={`/focusgroup`}>
                    <div style={{ left: 1660, top: 524, position: 'absolute', textAlign: 'center', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', whiteSpace: 'nowrap' }}>View all</div>
                    <div style={{width: 16, height: 16, left: 1710, top: 524, position: 'absolute'}}>
                        <img src={process.env.PUBLIC_URL + '/image11.png'} alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                </Link>

                <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, left: 1435, top: 333, position: 'absolute', background: '#666666', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>0</div>
                </div>

                {/*----------*/}



                <div style={{left: 370, top: 573, position: 'absolute', color: 'Black', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Global key figure</div>
                <div style={{left: 355, top: 615, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Discover surveys tailored to your interests. Participate and earn extra points. Start now!</div>

                {/*-courbe F M -*/}

                <div style={{width: 925, height: 332, left: 340, top: 657, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 355, top: 677, position: 'absolute', color: 'Black', fontSize: 22, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Total participants : 5000</div>

                <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 4, paddingBottom: 4, left: 800, top: 690, position: 'absolute', background: '#00BFCB', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 812, top: 685, position: 'absolute',color: '#666666', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Male</div>

                <div style={{paddingLeft: 4, paddingRight: 4, paddingTop: 4, paddingBottom: 4, left: 880, top: 690, position: 'absolute', background: '#CF3AB7', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 892, top: 685, position: 'absolute',color: '#666666', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Female</div>


                <div style={{ left: 1122, top: 685, position: 'absolute',color: 'Black', fontSize: 12, fontFamily: 'revert', fontWeight: '650', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>01/01-14/01</div>
                <div style={{width: 20, height: 20, left: 1200, top: 683, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/Fdown.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
                <div style={{width: 870, height: 250, left: 370, top: 730, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/G1.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>


                {/*-courbe Distru -*/}

                <div style={{width: 450, height: 332, left: 1290 ,top: 657, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 1310, top: 677, position: 'absolute', color: 'Black', fontSize: 20, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Distribution of Participants</div>

                <div style={{ left: 1632, top: 684, position: 'absolute',color: 'Black', fontSize: 14, fontFamily: 'revert', fontWeight: '650', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>January</div>
                <div style={{width: 20, height: 20, left: 1682, top: 684, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/Fdown.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>


                <div style={{width: 400, height: 230, left: 1310, top: 730, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/G2.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>



                {/*Satisfaction*/}

                <div style={{width: 450, height: 600, left: 340, top: 1014, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 360, top: 1040, position: 'absolute', color: 'Black', fontSize: 28, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Satisfaction</div>
                <div style={{ left: 360, top: 1075, position: 'absolute',color: '#666666', fontSize: 16, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Secondary text</div>

                <hr style={{ left: 340, width: 450, top: 1120, position: 'absolute', border: '1px solid #ccc', background: '#ccc' }} />

                <div style={{width: 55, height: 55, left: 700, top: 1040, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B33.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>


                <div style={{width: 370, height: 370, left: 385, top: 1150, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B6.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>

                <div style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5, left: 365, top: 1530, position: 'absolute', background: '#F94144', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 377, top: 1525, position: 'absolute',color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '450', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Disagree</div>

                <div style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5, left: 365, top: 1580, position: 'absolute', background: '#F9C74F', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 377, top: 1575, position: 'absolute',color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '450', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Agree</div>

                <div style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5, left: 500, top: 1530, position: 'absolute', background: '#F3722C', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 512, top: 1525, position: 'absolute',color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '450', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Strongly agree</div>

                <div style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5, left: 500, top: 1580, position: 'absolute', background: '#90BE6D', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 512, top: 1575, position: 'absolute',color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '450', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Strongly disagree</div>

                <div style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5, left: 640, top: 1530, position: 'absolute', background: '#F8961E', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 652, top: 1525, position: 'absolute',color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '450', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>Neutral</div>

                <div style={{paddingLeft: 5, paddingRight: 5, paddingTop: 5, paddingBottom: 5, left: 640, top: 1580, position: 'absolute', background: '#2D9CDB', borderRadius: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}></div>
                <div style={{ left: 652, top: 1575, position: 'absolute',color: '#666666', fontSize: 14, fontFamily: 'revert', fontWeight: '450', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>No Comment</div>




                {/*Demographi*/}

                <div style={{width: 450, height: 600, left: 815, top: 1014, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 840, top: 1040, position: 'absolute', color: 'Black', fontSize: 28, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word',textAlign: 'left'}}>Demographic distribution of <br />respondents</div>

                <div style={{width: 370, height: 370, left:  840, top: 1150, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B5.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>

                <div style={{left: 840, top: 1500, position: 'absolute', color: 'Black', fontSize: 28, fontFamily: 'revert', fontWeight: '780', wordWrap: 'break-word'}}>7.25K</div>
                <div style={{ left: 840, top: 1550, position: 'absolute',color: '#666666', fontSize: 16, fontFamily: 'revert', fontWeight: '550', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>North America</div>


                {/*Average*/}
                <div style={{width: 450, height: 600, left: 1290, top: 1014, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{left: 1305, top: 1040, position: 'absolute', color: 'Black', fontSize: 28, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word',textAlign: 'left', whiteSpace: 'nowrap'}}>Average response rate per<br />survey</div>

                <div style={{left: 1484, top: 1250, position: 'absolute', color: 'Black', fontSize: 32, fontFamily: 'revert', fontWeight: '780', wordWrap: 'break-word'}}>3986</div>
                <div style={{ left: 1473, top: 1300, position: 'absolute',color: '#666666', fontSize: 20, fontFamily: 'revert', fontWeight: '450', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>PRODUCTS</div>


                <div style={{width: 310, height: 310, left: 1366, top: 1140, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B7.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>

                <div style={{width: 270, height: 38, left: 1385, top: 1500, position: 'absolute'}}>
                    <img src={process.env.PUBLIC_URL + '/B12.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>


            </div>
        </div>
    );
};

export default Businesshome;
