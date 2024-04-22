import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ to }) => {
  return (
    <header style={{textAlign:"left",width:'45%',position:"absolute",left:-120, top:100, padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,marginBottom:'2rem',zIndex:999 }}>
     
      
    
      <div style={{ position: 'relative' , Right:10 }}>

    <div style={{background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)'}}>
    <Link to={to} style={{ textDecoration: 'none', position: 'absolute', top: 0 ,left:1400,background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)'}}>
    <button style={{ backgroundColor: '#0055ff',
  color: 'white',
  border: 'none',
  padding: '10px 40px',
  margin: '0 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',whiteSpace: 'nowrap'}}>Create from 0</button>
  
  </Link>
  </div>
  <div>
  <Link to={to} style={{ textDecoration: 'none', position: 'relative', top: 0 ,left:1600,background: 'linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)'}}>
  <button style={{ backgroundColor: '#0055ff',
  color: 'white',
  border: 'none',
  padding: '10px 40px',
  margin: '0 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',whiteSpace: 'nowrap'}}>Create with AI</button>
  </Link>
  </div>

</div>
 

<div className="actions">
<div><span style={{color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Simplified </span><span style={{background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: 24, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Survey Template<br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Use a template to create and send a survey more quickly</span></div></div>
    </header>
  );
};

export default Header;
