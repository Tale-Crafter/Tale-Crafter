import React from "react";

const SidebarButtonHide = ({ label, icon, active, onClick }) => {
    const buttonStyle = {
        width: 40,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 8,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        display: 'inline-flex',
        cursor: 'pointer',
        background: active ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' : 'transparent',
        color: active ? 'white' : '#111111',
    };
    return (
        <div style={buttonStyle} onClick={onClick}>
            <div style={{ width: 24, height: 24, position: 'relative' }}>
                <img src={process.env.PUBLIC_URL + `/${icon}`} alt={label} style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
    );
};

export default SidebarButtonHide; // Make sure to export the component properly
