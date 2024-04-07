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
    <Link to={to} style={{ textDecoration: 'none', display: "inline-block", marginTop: "-50px", border: "1px solid lightgrey", borderRadius: "10px", textAlign: "center", padding: "20px", width: "262px", height: "267px", transition: "background-color 0.3s", marginLeft: 20 ,backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.04)' : 'transparent' }}onMouseEnter={handleMouseEnter}
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
      


      <div style={{ textAlign: "center" }}>
  <section className="content" style={{ marginBottom: "100px" ,marginTop: "150px",position:'relative' ,display:'flex'}}>
    <SquareButton title="Feedback and NPS" description="Instill trust in your technology." imageUrl={process.env.PUBLIC_URL + '/1.png'} to="/1" />
    <SquareButton title="Template: Net Promoter® Score (NPS) Survey" description="Gather customer feedback through evaluation." imageUrl={process.env.PUBLIC_URL + '/2.png'} to="/2.png" />
    <SquareButton title="Industry Tracker" description="Monitor the evolution over time of a specific category of products." imageUrl={process.env.PUBLIC_URL + '/3.png'} to="/3" />
  </section>
  <section className="content2" style={{ marginTop: "100px", textAlign: "center" ,position:'relative' ,display:'flex'}}>
    <SquareButton title="Consumer Segmentation" description="Begin with a blank survey or copy and paste a survey you've already drafted." imageUrl={process.env.PUBLIC_URL + '/4.png'} to="/4" />
    <SquareButton title="Usage and Attitudes" description="Explore consumer preferences, habits, and purchasing behaviors." imageUrl={process.env.PUBLIC_URL + '/5.png'} to="/5" />
    <SquareButton title="Discover what distinguishes your main buyer segments." description="Access consumer feedback on the design of your packaging." imageUrl={process.env.PUBLIC_URL + '/6.png'} to="/survey3" />
  </section>
</div>

      </main>
     
    </div>
  );
};

export default MainPage;
