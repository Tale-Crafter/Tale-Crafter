import React, { useEffect, useState } from 'react';
import {useNavigate, useParams, useLocation } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import SidebarButtonHide from "./SidebarButtonHide";
import { Link } from 'react-router-dom';

const Leftsidebar = ({ sidebarVisible, toggleSidebar }) => {
    const navigate = useNavigate();
    const { iduser } = useParams();
    const location = useLocation(); // Utilisez useLocation pour obtenir la route actuelle
    const [activeButton, setActiveButton] = useState('Dashboard');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Utilisez useEffect pour mettre à jour activeButton en fonction de la route actuelle
    useEffect(() => {
        const path = location.pathname;
        if (path.includes('dashboard')) {
            setActiveButton('Dashboard');
        } else if (path.includes('surveys') ) {
            setActiveButton('Surveys');
        } else if (path.includes('Focusgroup')) {
            setActiveButton('Focus group');
        } else if (path.includes('Awards')) {
            setActiveButton('Awards');
        } else if (path.includes('Assistance')) {
            setActiveButton('Assistance');
        } else if (path.includes('logout')) {
            setActiveButton('Logout');
        } else if (path.includes('surveydetails')) {
        setActiveButton('Surveys');}
}, [location.pathname]);

    const handleButtonClick = (label) => {
        setActiveButton(label);
    };

    return (
        <div>
            {/* Logo redirigeant vers la page home */}
            <Link to={`/home/${iduser}`}>
                <div style={{ width: 160, height: 48, left: 24, top: 22, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <img src={process.env.PUBLIC_URL + '/logotale.png'} alt="LogoTale" style={{ width: '100%', height: '100%' }} />
                </div>
            </Link>

            <div style={{width: 55, height: 55, left: 340, top: 16, position: 'absolute', background: 'rgba(255, 255, 255, 0.70)', borderRadius: 9999}} />
            <div style={{ width: 40, height: 40, left: 348, top: 24, position: 'absolute', cursor: 'pointer' }} onClick={toggleSidebar}>
                <img src={process.env.PUBLIC_URL + '/nav.png'} alt="" style={{ width: '100%', height: '100%' }} />
            </div>

            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{width: 265, height: 736, left: 16, top: 80, position: 'absolute', background: 'white', borderRadius: 16}}/>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{width: 80, height: 736, left: 16, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} />
            )}

            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{ left: 24, top: 88, position: 'absolute', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'inline-flex' }}>
                    <Link to={`/home/${iduser}`}>
                        <SidebarButton label="Dashboard" icon1="ic.png" icon="image3.png" active={activeButton === 'Dashboard'} onClick={() => handleButtonClick('Dashboard')} />
                    </Link>
                    <Link to={`/surveys/${iduser}`}>
                        <SidebarButton label="Surveys" icon="image12.png" active={activeButton === 'Surveys'} onClick={() => handleButtonClick('Surveys')} />
                    </Link>
                    <Link to={`/Focusgroup/${iduser}`}>
                    <SidebarButton label="Focus group" icon="image13.png" active={activeButton === 'Focus group'} onClick={() => handleButtonClick('Focus group')} />
                    </Link>
                    <Link to={`/Points/${iduser}`}>
                        <SidebarButton label="Awards" icon="image14.png" active={activeButton === 'Awards'} onClick={() => handleButtonClick('Awards')} />
                    </Link>
                </div>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{left: 35, top: 88, position: 'absolute', borderRadius: 10, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 1, display: 'inline-flex' }}>
                    <Link to={`/home/${iduser}`}>
                    <SidebarButtonHide label="Dashboard" icon="image3.png" active={activeButton === 'Dashboard'} onClick={() => handleButtonClick('Dashboard')} />
                    </Link>
                    <Link to={`/surveys/${iduser}`}>
                    <SidebarButtonHide label="Surveys" icon="image12.png" active={activeButton === 'Surveys'} onClick={() => handleButtonClick('Surveys')} />
                    </Link>
                    <Link to={`/Focusgroup/${iduser}`}>
                    <SidebarButtonHide label="Focus group" icon="image13.png" active={activeButton === 'Focus group'} onClick={() => handleButtonClick('Focus group')} />
                    </Link>
                    <Link to={`/Awards/${iduser}`}>
                    <SidebarButtonHide label="Awards" icon="image14.png" active={activeButton === 'Awards'} onClick={() => handleButtonClick('Awards')} />
                    </Link>
                </div>            )}

            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{ width: 250, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 677, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <Link to={`/AssistanceO/${iduser}`}>
                    <SidebarButton label="Assistance" icon="assistance.png" active={activeButton === 'Assistance'} onClick={() => handleButtonClick('Assistance')} />
                    </Link>
                </div>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{ width: 250, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 35, top: 677, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <Link to={`/AssistanceO/${iduser}`}>
                    <SidebarButtonHide label="Assistance" icon="assistance.png" active={activeButton === 'Assistance'} onClick={() => handleButtonClick('Assistance')} />
                    </Link>
                </div>
            )}
            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{ width: 250, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 24, top: 717, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <Link to={`/Logout/${iduser}`}>
                    <SidebarButton label="Logout" icon="logout.png" active={activeButton === 'Logout'} onClick={() => handleButtonClick('Logout')} />
                    </Link>
                </div>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{ width: 250, paddingTop: 8, paddingBottom: 8, paddingLeft: 0, left: 35, top: 717, position: 'absolute', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <Link to={`/Logout/${iduser}`}>
                        <SidebarButtonHide label="Logout" icon="logout.png" active={activeButton === 'Logout'} onClick={() => handleButtonClick('Logout')} />
                    </Link>
                </div>
            )}
            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{width: 218, height: 0, left: 236, top: 770, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}>
                </div>
                ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{width: 80, height: 0, left: 97, top: 770, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}>
                </div>
            )}
            {sidebarVisible ? (
                // Regular SidebarButton when sidebar is visible
                <div style={{width: 150, height: 50, left: 55, top: 780, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>©{currentYear} Tale. All rights reserved.<br/><br/></div>
            ) : (
                // SidebarButtonHide when sidebar is hidden
                <div style={{width: 50, height: 35, left: 30, top: 780, position: 'absolute', textAlign: 'center', color: '#666666', fontSize: 12, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>©{currentYear} Tale.<br/><br/></div>
            )}

        </div>
    );
};

export default Leftsidebar;
