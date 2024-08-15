import React from "react";
import { faTableColumns,faTachometerAlt, faUsers, faExclamationTriangle, faClipboardList, faCheckCircle, faLock, faChartLine, faLifeRing } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
const SidebarButtonAdminHide = ({ label, icon, active, onClick }) => {
    const buttonStyle = {
        width: 40,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
        cursor: 'pointer',
        background: active ? 'white' : 'transparent',
        color: active ? '#00BED4' : 'whitesmoke',
        zIndex:999999999
    };
    return (
        <div style={buttonStyle} onClick={onClick}>
            <div style={{ width: 24, height: 24, position: 'relative' }}>
                {/*<img src={process.env.PUBLIC_URL + `/${icon}`} alt={label} style={{ width: '100%', height: '100%' }} />*/}
                <FontAwesomeIcon icon={iconMap[icon]} style={{ width: '100%', height: '100%' }} />

            </div>
        </div>
    );
};

export default SidebarButtonAdminHide; // Make sure to export the component properly
