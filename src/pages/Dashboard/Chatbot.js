import React from 'react';

const ChatBot = () => {
    return (
        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(142deg, white 0%, #E0F8FF 48%, white 100%)', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)', borderRadius: '16px' }}>
            <div style={{ color: '#3F0082', fontSize: '22px', fontFamily: 'Open Sans', fontWeight: '800', lineHeight: '20px', wordWrap: 'break-word', top: '212px', left: '103px', right: '98px' }}>Talebot</div>
            <img src="frame.png" alt="Avatar" style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '100px', borderRadius: '50%' }} />
            <div style={{ width: '100%', textAlign: 'center', color: 'black', fontSize: '14px', fontFamily: 'Open Sans', fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word', top: '248px', left: '36px', right: '31px', bottom: '148px' }}>I'm your virtual assistant here to help make your experience seamless and enjoyable</div>
            <div style={{ width: '100%', height: '100%', padding: '16px', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: '10px', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', top: '381px', left: '41px', right: '41px', bottom: '24px' }}>
                <div style={{ color: 'white', fontSize: '14px', fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word', position: 'center' }}>Next</div>
            </div>
        </div>
    );
};

export default ChatBot;
