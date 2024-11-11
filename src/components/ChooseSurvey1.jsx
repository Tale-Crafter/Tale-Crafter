import React from 'react';
import {Link, useParams} from 'react-router-dom';
import  { useState } from 'react';
import BusinessLeftsidebar from "../pages/Dashboard/BusinessLeftsidebar";
import BHeader from "../pages/Dashboard/BHeader";
const SquareButton = ({ title, description, imageUrl, to }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { iduser } = useParams();

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
  return (
    <Link to={to} style={{ textDecoration: 'none', display: "inline-block", marginTop: "-50px", border: "1px solid lightgrey", borderRadius: "16px", textAlign: "center", padding: "20px", width: "272px", height: "276px", transition: "background-color 0.3s", marginLeft: 20 ,backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.04)' : 'transparent' }}onMouseEnter={handleMouseEnter}
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
    <div className="container" style={{ borderRadius:10,display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", position: 'absolute', left: 340,top:84, background:"white",width:'76%' }}>
      <main className="main">
          <div style={{left: 40, top: 25, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Customer Experience Survey - Consulting Company</div>
          <div style={{left: 220, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Survey Initiation</div>
          <div style={{width: 157, left: 370, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Question<br/>Development</div>
          <div style={{width: 160, left: 560, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Review and Preview</div>
          <div style={{width: 160, left: 730, top: 123, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
          <div style={{width: 149, left: 900, top: 123, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
          <div style={{width: 24, height: 24, left: 220, top: 91, position: 'absolute'}}>
              <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
              {/*<div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />*/}
          </div>
          <div style={{width: 24, height: 24, left: 395, top: 91, position: 'absolute'}}>
              <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
          </div>
          <div style={{width: 24, height: 24, left: 570, top: 91, position: 'absolute'}}>
              <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
          </div>
          <div style={{width: 24, height: 24, left: 745, top: 91, position: 'absolute'}}>
              <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
              <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />

          </div>

          <div style={{width: 24, height: 24, left: 920, top: 91, position: 'absolute'}}>
              <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
          </div>
          <div style={{width: 143, height: 0, left: 566, top: 101, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
          <div style={{width: 143, height: 0, left: 741, top: 101, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
          <div style={{width: 143, height: 0, left: 916, top: 101, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
          <div style={{width: 143, height: 0, left: 391, top: 101, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>

          <h1 style={{ background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',fontSize: 26, fontFamily: "revert", fontWeight: "700", textAlign: "center", position: 'absolute', top: '26%', left: '50%', transform: 'translate(-50%, -50%)' }}>How do you prefer to gather responses for your survey?</h1>

        <section className="content" style={{ textAlign: "center" ,position:"absolute",top:320,left:370}}>
          <SquareButton title="Customize distribution channels" description="Tailor your survey distribution: send via email, embed on your website, share links on social media or web pages, and more." imageUrl={process.env.PUBLIC_URL + '/i1.png'} to="/chsurvey2" />
          <SquareButton title="Reach your target audience" description="Access our survey panel, tale Audience, to acquire responses from specific demographics." imageUrl={process.env.PUBLIC_URL + '/i2.png'} to="/simplesurvey" />
          {/*<SquareButton title="Create with AI Assistance" description="Enter a brief prompt. AI will generate a survey tailored to your needs." imageUrl={process.env.PUBLIC_URL + '/survey3.png'} to="/survey3" />*/}
        </section>
          <button style={{border:"2px solid black",backgroundColor:"transparent",position:"absolute",top:660,left:40,width: 147, height: 51, padding: 16, borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
          </button>
      </main>
     
    </div>
  );
};

export default MainPage;
