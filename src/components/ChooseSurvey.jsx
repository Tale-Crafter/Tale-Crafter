import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
const SquareButton = ({ title, description, imageUrl, to }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
  return (
    <Link to={to} style={{ textDecoration: 'none', display: "inline-block", marginTop: "-50px", border: "1px solid lightgrey", borderRadius: "10px", textAlign: "center", padding: "20px", width: "272px", height: "276px", transition: "background-color 0.3s", marginLeft: 20 ,backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.04)' : 'transparent' }}onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div>
        <img src={imageUrl} alt={title} style={{ width: "80px", height: "80px", marginBottom: "10px" }} />
        <h3 style={{ color: "#111111", fontSize: "16px", fontFamily: "revert", fontWeight: "700" }}>{title}</h3>
        <p style={{ color: "#666", fontFamily: "revert", fontSize: "14px" }}>{description}</p>
      </div>
    
    </Link>
  );
};

const MainPage = () => {
  return (
    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", position: 'absolute', left: 450 }}>
      <main className="main">
      <h1 style={{ color:" #f9bc33",fontSize: 36, fontFamily: "revert", fontWeight: "700", textAlign: "center", position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}>What would you like to do?</h1>

        <section className="content" style={{ textAlign: "center" }}>
          <SquareButton title="Start from Scratch" description="Begin with a blank survey or copy and paste a survey you've already drafted." imageUrl={process.env.PUBLIC_URL + '/survey1.png'} to="/survey1" />
          <SquareButton title="Simplified Survey Template" description="Use a template to create and send a survey more quickly." imageUrl={process.env.PUBLIC_URL + '/survey2.png'} to="/survey2" />
          <SquareButton title="Create with AI Assistance" description="Enter a brief prompt. AI will generate a survey tailored to your needs." imageUrl={process.env.PUBLIC_URL + '/survey3.png'} to="/survey3" />
        </section>
      </main>
     
    </div>
  );
};

export default MainPage;
