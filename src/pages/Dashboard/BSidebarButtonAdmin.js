import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns,faTachometerAlt, faUsers, faExclamationTriangle, faClipboardList, faCheckCircle, faLock, faChartLine, faLifeRing } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
    'tachometer-alt': faTableColumns,
    'users': faUsers,
    'exclamation-triangle': faExclamationTriangle,
    'clipboard-list': faClipboardList,
    'check-circle': faCheckCircle,
    'lock': faLock,
    'chart-line': faChartLine,
    'life-ring': faLifeRing,
};
const SidebarButtonAdmin = ({ label, icon, active, onClick }) => {
    const buttonStyle = {
        width: 240,
        paddingTop: 10,
        zIndex:999999999,
        paddingBottom: 10,
        paddingLeft: 8,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
        cursor: 'pointer',
        background: active ? 'white' : 'transparent',
        color: active ? '#00BED4' : 'whitesmoke',
    };
    return (
        <div style={buttonStyle} onClick={onClick}>
            <div style={{ width: 24, height: 24, position: 'relative' }}>
                {/*<img src={process.env.PUBLIC_URL + `/${icon}`} alt={label} style={{ width: '100%', height: '100%' }} />*/}
                <FontAwesomeIcon icon={iconMap[icon]} style={{ width: '100%', height: '100%' }} />

                {/*{active ? (*/}
                {/*    <img src={process.env.PUBLIC_URL + `/${icon1}`} alt={label} style={{ width: '100%', height: '100%' }} />*/}
                {/*) : (*/}
                {/*    <img src={process.env.PUBLIC_URL + `/${icon}`} alt={label} style={{ width: '100%', height: '100%' }} />*/}
                {/*)}*/}

            </div>
            <div style={{ fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word' }}>
                {label}
            </div>
        </div>
    );
};

export default SidebarButtonAdmin; // Make sure to export the component properly
