import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBalanceInLocaleCurrency } from './Api';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Importez la bibliothèque country-currency-map
import QuickSurveyEmpty from "./QuickSurveyEmpty";
import BHeader from "./BHeader";
const opencage = require('opencage-api-client');



const Surveyia = () => {
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



                <div style={{textAlign: "left", height: 900, left: 22,right:22, top: 90, position: 'absolute', background: 'white', borderRadius: 16}} >
                    <div style={{left: 35, top: 25, position: 'absolute', color: 'Black', fontSize: 34, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word',textAlign: 'left'}}>Enter a query . </div>
                    <div style={{left: 270, top: 25, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 34, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>The AI does the rest!</div>
                    <div style={{left: 35, top: 66, position: 'absolute', color: 'Black', fontSize: 20, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word',textAlign: 'left'}}>Compose your own query or use one of our examples </div>

                    <div style={{width: 150, height: 60, right: 200, top: 35, position: 'absolute'}}>
                        <img src={process.env.PUBLIC_URL + '/usetemp.png'} alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div style={{width: 150, height: 60, right: 35, top: 35, position: 'absolute'}}>
                        <img src={process.env.PUBLIC_URL + '/crea0.png'} alt="" style={{ width: '100%', height: '100%' }} />
                    </div>

                    <div style={{left:700 ,top: 170, position: 'absolute', fontSize: 32, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word', whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Test one of our sample queries</div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '250px' }}>
                        <div style={{ width: '350px',height: '400px',borderRadius: '20px',border: '0.5px solid #ccc',background: '#fff',display: 'flex',justifyContent: 'center',alignItems: 'center', marginLeft: '25px', marginRight: '25px', background: '#f2f2f2'  }}>

                            <div style={{left:210, top:250,marginTop:25, position: 'absolute', color: '#333333', fontSize: 20, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word'}}>Customer satisfaction</div>

                            <div style={{top:330,position: 'absolute', color: '#666666', fontSize: 20, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word',textAlign:'center'}}>I work for a consulting company and<br /> I want to write a survey to collect <br />feedback from our clients. We <br />should ask questions related to the <br />customer experience: for example,<br /> about the quality of our services,<br /> communication with our team and <br />our responsiveness to problems.... </div>

                            <div style={{left:250, top: 600, position: 'absolute', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Copy to query</div>


                        </div>


                        <div style={{ width: '350px',height: '400px',borderRadius: '20px',border: '0.5px solid #ccc',background: '#fff',display: 'flex',justifyContent: 'center',alignItems: 'center', marginLeft: '25px', marginRight: '25px', background: 'white'  }}>
                            <div style={{left:660, top: 600, position: 'absolute', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Copy to query</div>
                            <div style={{left:620, top:250,marginTop:25, position: 'absolute', color: '#333333', fontSize: 20, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word'}}>Employee Experience</div>


                            <div style={{top:330,position: 'absolute', color: '#666666', fontSize: 20, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word',textAlign:'center'}}>I want to write a survey to give to<br /> our employees when they leave the<br /> company. The purpose of this <br />survey is to collect the employee's<br /> opinion on the company culture (in <br />particular diversity, equity and <br />inclusion), collaboration within <br />teams and relations with hierarchy...<br />  </div>




                        </div>



                        <div style={{ width: '350px',height: '400px',borderRadius: '20px',border: '0.5px solid #ccc',background: '#fff',display: 'flex',justifyContent: 'center',alignItems: 'center', marginLeft: '25px', marginRight: '25px', background: 'white'  }}>
                            <div style={{left:1060, top: 600, position: 'absolute', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Copy to query</div>
                            <div style={{left:1030, top:250,marginTop:25, position: 'absolute', color: '#333333', fontSize: 20, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word'}}>Post-event feedback</div>
                            <div style={{top:330,position: 'absolute', color: '#666666', fontSize: 20, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word',textAlign:'center'}}>My company is hosting its first<br /> webinar. At the end of the event, we<br /> want to collect feedback from<br /> participants in order to know their<br /> general impression of the webinar,<br /> and more specifically on its <br />organization, its length, its <br />relevance, its usefulness, and on t... </div>

                        </div>



                        <div style={{ width: '350px',height: '400px',borderRadius: '20px',border: '0.5px solid #ccc',background: '#fff',display: 'flex',justifyContent: 'center',alignItems: 'center', marginLeft: '25px', marginRight: '25px', background: 'white'  }}>
                            <div style={{left:1470, top: 600, position: 'absolute', fontSize: 16, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word', whiteSpace: 'nowrap', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Copy to query</div>
                            <div style={{left:1440, top:250,marginTop:25, position: 'absolute', color: '#333333', fontSize: 20, fontFamily: 'revert', fontWeight: '500', wordWrap: 'break-word'}}>Marketing studies</div>

                            <div style={{top:330,position: 'absolute', color: '#666666', fontSize: 20, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word',textAlign:'center'}}>We sell a non-alcoholic drink. We <br /> want to study the market for wines,<br />  beers and non-alcoholic spirits. The<br />  goal is to determine why consumers<br />  buy these drinks, how often,<br />  whether they are satisfied with<br />  them, what their favorite flavors and <br /> drinks are, and whether they wan..</div>



                        </div>





                    </div>
                    <div style={{left: 85, top: 685, position: 'absolute', color: '#333333', fontSize: 18, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>On what subject(s) do you want information: (1000 characters)</div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop:100}}>

                        <div style={{width: '94%',height: '120px',borderRadius: '20px',border: '0.5px solid #ccc',display: 'flex',justifyContent: 'center',alignItems: 'center',Left: '50px', Right: '50px' }}>
                            <div style={{left: 85, top: 771, position: 'absolute', color: '#666666', fontSize: 20, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>I work for a consulting company and I want to write a survey to collect feedback from our clients. We should ask questions related to the customer experience: for<br /> example, about the quality of our services, communication with our team and our responsiveness to problems. We also want to know if our customers would<br /> recommend us to their colleagues. There should also be questions about the industry and company size of survey participants.
                            </div>
                            <div style={{width: 40, height: 30, right: 110, top: 800, position: 'absolute'}}>
                                <img src={process.env.PUBLIC_URL + '/send.png'} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>

                    </div>













                </div>
                {/*--*/}
                <BHeader/>

            </div>
        </div>



    );
};

export default Surveyia;
