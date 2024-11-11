import React, { useEffect, useState } from 'react';
import {useNavigate, useParams, useLocation } from "react-router-dom";
import BSidebarButton from "./BSidebarButton";
import BSidebarButtonHide from "./BSidebarButtonHide";
import { Link } from 'react-router-dom';
import BSidebarButtonAdmin from "./BSidebarButtonAdmin";
import SidebarButtonAdminHide from "./BSidebarButtonAdminHide";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Leftsidebar = ({ sidebarVisible, toggleSidebar }) => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('Tableau de Bord');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    useEffect(() => {
        const path = location.pathname;
        if (path.includes('Tableau de Bord')) {
            setActiveButton('Tableau de Bord');
        } else if (path.includes('Gestion des Utilisateurs')) {
            setActiveButton('Gestion des Utilisateurs');
        } else if (path.includes('Gestion des Sanctions')) {
            setActiveButton('Gestion des Sanctions');
        } else if (path.includes('Réclamations des Clients')) {
            setActiveButton('Réclamations des Clients');
        } else if (path.includes('Approbation des Contenus')) {
            setActiveButton('Approbation des Contenus');
        } else if (path.includes('Gestion des Rôles et Permissions')) {
            setActiveButton('Gestion des Rôles et Permissions');
        } else if (path.includes('Analyse et Reporting')) {
            setActiveButton('Analyse et Reporting');
        } else if (path.includes('Centre de Support')) {
            setActiveButton('Centre de Support');
        }
    }, [location.pathname]);

    const handleButtonClick = (label) => {
        setActiveButton(label);
    };

    return (
        <div>
            <Link to={`/Adminhome`}>
                <div style={{ width: 160, height: 48, left: 24, top: 22, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <img src={process.env.PUBLIC_URL + '/logobus.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
            </Link>

            <div style={{ width: 55, height: 55, left: 340, top: 16, position: 'absolute', background: 'rgba(255, 255, 255, 0.70)', borderRadius: 9999 }} />
            <div style={{ width: 40, height: 40, left: 348, top: 24, position: 'absolute', cursor: 'pointer',zIndex:999999999 }} onClick={toggleSidebar}>
                <img src={process.env.PUBLIC_URL + '/AdminNav.png'} alt="" style={{ width: '100%', height: '100%' }} />
            </div>

            {sidebarVisible ? (
                <div style={{ width: 265, height: 736, left: 16, top: 80, position: 'absolute', background: '#00BED4', borderRadius: 16 }} />
            ) : (
                <div style={{ width: 90, height: 736, left: 16, top: 80, position: 'absolute', background: '#00BED4', borderRadius: 16 }} />
            )}

            {sidebarVisible ? (
                <div style={{ left: 24, top: 88, position: 'absolute', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                    <Link to={`/Adminhome`}>
                        <BSidebarButtonAdmin label="Tableau de Bord" icon="tachometer-alt" active={activeButton === 'Tableau de Bord'} onClick={() => handleButtonClick('Tableau de Bord')} />
                    </Link>
                    <Link to={`/GestionDesUtilisateurs`}>
                        <BSidebarButtonAdmin label="Gestion des Utilisateurs" icon="users" active={activeButton === 'Gestion des Utilisateurs'} onClick={() => handleButtonClick('Gestion des Utilisateurs')} />
                    </Link>
                    <Link to={`/GestionDesSanctions`}>
                        <BSidebarButtonAdmin label="Gestion des Sanctions" icon="exclamation-triangle" active={activeButton === 'Gestion des Sanctions'} onClick={() => handleButtonClick('Gestion des Sanctions')} />
                    </Link>
                    <Link to={`/ReclamationsDesClients`}>
                        <BSidebarButtonAdmin label="Réclamations des Clients" icon="clipboard-list" active={activeButton === 'Réclamations des Clients'} onClick={() => handleButtonClick('Réclamations des Clients')} />
                    </Link>
                    <Link to={`/ApprobationDesContenus`}>
                        <BSidebarButtonAdmin label="Approbation des Contenus" icon="check-circle" active={activeButton === 'Approbation des Contenus'} onClick={() => handleButtonClick('Approbation des Contenus')} />
                    </Link>
                    <Link to={`/GestionDesRolesEtPermissions`}>
                        <BSidebarButtonAdmin label="Gestion des Rôles et Permissions" icon="lock" active={activeButton === 'Gestion des Rôles et Permissions'} onClick={() => handleButtonClick('Gestion des Rôles et Permissions')} />
                    </Link>
                    <Link to={`/AnalyseEtReporting`}>
                        <BSidebarButtonAdmin label="Analyse et Reporting" icon="chart-line" active={activeButton === 'Analyse et Reporting'} onClick={() => handleButtonClick('Analyse et Reporting')} />
                    </Link>
                    <Link to={`/CentreDeSupport`}>
                        <BSidebarButtonAdmin label="Centre de Support" icon="life-ring" active={activeButton === 'Centre de Support'} onClick={() => handleButtonClick('Centre de Support')} />
                    </Link>
                </div>
            ) : (
                <div style={{ left: 35, top: 88, position: 'absolute', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                    <Link to={`/Adminhome`}>
                        <SidebarButtonAdminHide label="Tableau de Bord" icon="tachometer-alt" active={activeButton === 'Tableau de Bord'} onClick={() => handleButtonClick('Tableau de Bord')} />
                    </Link>
                    <Link to={`/GestionDesUtilisateurs`}>
                        <SidebarButtonAdminHide label="Gestion des Utilisateurs" icon="users" active={activeButton === 'Gestion des Utilisateurs'} onClick={() => handleButtonClick('Gestion des Utilisateurs')} />
                    </Link>
                    <Link to={`/GestionDesSanctions`}>
                        <SidebarButtonAdminHide label="Gestion des Sanctions" icon="exclamation-triangle" active={activeButton === 'Gestion des Sanctions'} onClick={() => handleButtonClick('Gestion des Sanctions')} />
                    </Link>
                    <Link to={`/ReclamationsDesClients`}>
                        <SidebarButtonAdminHide label="Réclamations des Clients" icon="clipboard-list" active={activeButton === 'Réclamations des Clients'} onClick={() => handleButtonClick('Réclamations des Clients')} />
                    </Link>
                    <Link to={`/ApprobationDesContenus`}>
                        <SidebarButtonAdminHide label="Approbation des Contenus" icon="check-circle" active={activeButton === 'Approbation des Contenus'} onClick={() => handleButtonClick('Approbation des Contenus')} />
                    </Link>
                    <Link to={`/GestionDesRolesEtPermissions`}>
                        <SidebarButtonAdminHide label="Gestion des Rôles et Permissions" icon="lock" active={activeButton === 'Gestion des Rôles et Permissions'} onClick={() => handleButtonClick('Gestion des Rôles et Permissions')} />
                    </Link>
                    <Link to={`/AnalyseEtReporting`}>
                        <SidebarButtonAdminHide label="Analyse et Reporting" icon="chart-line" active={activeButton === 'Analyse et Reporting'} onClick={() => handleButtonClick('Analyse et Reporting')} />
                    </Link>
                    <Link to={`/CentreDeSupport`}>
                        <SidebarButtonAdminHide label="Centre de Support" icon="life-ring" active={activeButton === 'Centre de Support'} onClick={() => handleButtonClick('Centre de Support')} />
                    </Link>
                </div>
            )}

            {sidebarVisible ? (
                <div style={{ width: 261, height: 0, left: 280, top: 770, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid' }} />
            ) : (
                <div style={{ width: 80, height: 0, left: 97, top: 770, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid' }} />
            )}
            {sidebarVisible ? (
                <div style={{ width: 150, height: 50, left: 65, top: 773, position: 'absolute', textAlign: 'center', color: 'whitesmoke', fontSize: 15, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                    ©{currentYear} Tale. All rights reserved.<br /><br />
                </div>
            ) : (
                <div style={{ width: 50, height: 35, left: 30, top: 780, position: 'absolute', textAlign: 'center', color: 'whitesmoke', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word' }}>
                    ©{currentYear} Tale.<br /><br />
                </div>
            )}
        </div>
    );
};

export default Leftsidebar;
