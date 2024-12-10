import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import  { useState } from 'react';
import BusinessLeftsidebar from "../pages/Dashboard/BusinessLeftsidebar";
import BHeader from "../pages/Dashboard/BHeader";
import Timeline from "../pages/Dashboard/Timeline";
const SquareButton = ({ title, description, imageUrl, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { iduser } = useParams();

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleClick = () => {
        onClick(); // Call the onClick prop passed from the parent
        // navigate(to); // Navigate to the destination URL
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
  return (
    <div style={{ textDecoration: 'none', display: "inline-block", border: "1px solid lightgrey", borderRadius: "16px", textAlign: "center", padding: "20px", width: "272px", height: "272px", transition: "background-color 0.3s", marginLeft: 20 ,backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.04)' : 'transparent' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
    >
      <div>
        <img src={imageUrl} alt={title} style={{ width: "40px", height: "40px", marginBottom: "10px" }} />
        <h3 style={{ color: "#111111", fontSize: "16px", fontFamily: "revert", fontWeight: "700" }}>{title}</h3>
        <p style={{ color: "#666", fontFamily: "revert", fontSize: "14px" }}>{description}</p>
      </div>
    
    </div>
  );
};

const MainPage = ({survey, onNext}) => {
    const [selectedOption, setSelectedOption] = useState(null);  // Track the selected option
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        // onNext(survey, selectedOption);
        // Additional logic if needed based on the option selected
        // console.log(option);  // Log the selected option
    };
    useEffect(() => {
        if (selectedOption !== null) {
            // Call the onNext handler when selectedOption changes
            onNext(survey, selectedOption);
        }
    }, [selectedOption, survey, onNext]);  // Dependencies on selectedOption and survey

    const [sidebarVisible, setSidebarVisible] = useState(true);
    return (
      <div className="App">
          <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
          <BHeader />

          <div className="container" style={{ borderRadius:10,display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", position: 'absolute', left: 340,top:84, background:"white",width:'76%', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
      <main className="main">
          <div style={{width:'100%', position:"absolute", top:-70, left:0}}>
              <Timeline level={3} />
          </div>

          {/* Back button */}
          <button
              onClick={() => handleOptionSelect('backch1')}
              style={{ width: 30, height: 30, padding: 0, left: 25, top: 200, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex', background: 'transparent', border: 0 }}>
              <div style={{ width: 32, height: 32, position: 'relative',zIndex:99999 }}>
                  <img src={process.env.PUBLIC_URL + '/retour.png'} style={{ width: 32, height: 32, left: 0, top: 0, position: 'absolute' }} />
              </div>
              <div style={{ marginLeft:80,width: 300, position: 'absolute', color: '#111111', fontSize: 18, fontFamily: 'revert', fontWeight: '500', lineHeight: 1, wordWrap: 'break-word' }}>Back</div>
          </button>

          <h1 style={{ background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',fontSize: 26, fontFamily: "revert", fontWeight: "700", textAlign: "center", position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}>How do you prefer to gather responses for your survey?</h1>

        <section className="content" style={{ textAlign: "center" ,position:"relative",top:140,left:0}}>
            <SquareButton
                onClick={() => handleOptionSelect('Share a survey link')}
                title="Share a survey link"
                description="Easily share your survey by copying a link—ideal for scheduling  recurring surveys, handling multiple responses." imageUrl={process.env.PUBLIC_URL + '/link.png'} to="/surveylink" />
            <SquareButton
                onClick={() => handleOptionSelect('Embed on a website')}
                title="Embed on a website"
                description="Integrate your survey seamlessly into your website or direct respondents through a pop-up message." imageUrl={process.env.PUBLIC_URL + '/embed.png'} to="/simplesurvey" />
            {/*<SquareButton*/}
            {/*    title="Share on social media" */}
            {/*    description="Promote your survey by posting a link on Twitter, LinkedIn, Instagram, Whatsapp or Facebook." imageUrl={process.env.PUBLIC_URL + '/sm.png'} to="/survey3" />*/}
            <SquareButton
                onClick={() => handleOptionSelect('Obtain targeted responses')}
                title="Obtain targeted responses"
                description="Access our global panel to find respondents matching your criteria—select from region, age, income, and more." imageUrl={process.env.PUBLIC_URL + '/tr.png'} to="/survey3" />
        </section>
          {/*<button style={{border:"2px solid black",backgroundColor:"transparent",position:"absolute",top:660,left:40,width: 147, height: 51, padding: 16, borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>*/}
          {/*    <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>*/}
          {/*</button>*/}
      </main>
    </div>
    </div>
  );
};

export default MainPage;
