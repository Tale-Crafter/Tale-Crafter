// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import Frame1 from '../../images/Frame1.png';
import close from '../../images/close.png';
import vert from '../../images/vert.png';
import Vector from '../../images/Vector.png';
import { Link } from 'react-router-dom';


import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
const opencage = require('opencage-api-client');

const Awards = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const [isInputVisible, setInputVisible] = useState(true); // État pour gérer la visibilité du rectangle

    // Fonction pour basculer la visibilité du rectangle lors du clic
    const handleClick = () => {
        setInputVisible(!isInputVisible);
    };
    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <Header/>
                <div style={{width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >



                <div style={{ position: 'relative', width: 284, height: 456, background: 'white', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.25)', borderRadius: '16px', top: 358, bottom: 6, right: 6, left: 990, justifyContent: 'center', alignItems: 'center'  }}>
       
       

                <div style={{ position: 'absolute', width: 280, height: 74,  background: 'linear-gradient(90deg, #FFF3F9 0%, #D9F8FF 100%)', borderRadius: '16px',  top: 2, bottom: 380, right: 2, left: 2, justifyContent: 'center', alignItems: 'center'  }}>
                    <div style={{ position: 'absolute', top: 7, left:12, bottom: 12, right: 213 }}>
                         <img src={Frame1} alt="Frame1" style={{ width: 55, height: 55, borderRadius: '16px',top:'20%' }} />
                     </div>

                     <div style={{ position: 'absolute', top: 10, left: 254, bottom: 48, right: 10 }}>
                          <img src={close} alt="close" style={{ width: 16, height: 16}} />
                     </div>

                     <div style={{ position: 'absolute', color: '#3F0082', fontSize: '18px', fontFamily: 'Revert', fontWeight: '800', lineHeight: '20px', wordWrap: 'break-word', top: 13, left: 79, right: 133,bottom:41 }}>Talebot</div>

                     <div style={{ position: 'absolute', top: 43, left: 79 }}>
                            <img src={vert} alt="vert" style={{ width: 8, height: 8 }} />
                             <div style={{ position: 'absolute', color: 'black', fontSize: '10px', fontFamily: 'Revert', fontWeight: '600', lineHeight: '20px', wordWrap: 'break-word', top: 0, left: 16 }}>Online</div>
                    </div>

                </div>
                
                <div style={{ position: 'absolute', color: '#999999', fontSize: '10px', fontFamily: 'Revert', fontWeight: '400', lineHeight: '19px', wordWrap: 'break-word', justifyContent: 'center', alignItems: 'center', top: 86, left: '50%', transform: 'translateX(-50%)' }}>12/04/2021 19:22</div>
                
                
                <div style={{ position: 'absolute',top:120,left:8,right:28, width: 228, height: 57, padding: 10, background: '#E7F9FF', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex' }}>
                      <div style={{ width: 228, color: 'black', fontSize: '12px', fontFamily: 'Revert', fontWeight: 400, lineHeight: '19px', wordWrap: 'break-word' }}>It is a long established fact that a reader will be distracted by the readable content of a page</div>
                </div>

                <div style={{ position: 'absolute', color: '#999999', fontSize: '10px', fontFamily: 'Revert', fontWeight: '400', lineHeight: '19px', wordWrap: 'break-word', justifyContent: 'center', alignItems: 'center', top: 200, left: '50%', transform: 'translateX(-50%)' }}>12/04/2021 19:22</div>

                <div style={{ position: 'absolute', top: 222, left: 28, right: 246, width: 228, height: 29, padding: '10px', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex', marginBottom: '8px' }}>
                     <div style={{ width: 228, textAlign: 'right', color: 'white', fontSize: '12px', fontFamily: 'Revert', fontWeight: 400, lineHeight: '19px', wordWrap: 'break-word' }}>It is a long established fact that a reade</div>
                </div>

                <div style={{ position: 'absolute', top: 269, left: 28, right: 8, bottom: 72, width: 228, height: 95, padding: '10px', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'inline-flex' ,marginTop:'8px'}}>
                   <div style={{ width: 228, textAlign: 'right', color: 'white', fontSize: '12px', fontFamily: 'Revert', fontWeight: 400, lineHeight: '19px', wordWrap: 'break-word' }}>packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</div>
                </div>

                
                <div>{isInputVisible ? ( <div style={{ position: 'absolute', top: 409, right: 54, left: 8, bottom: 8, width: 202, height: 19, padding: '10px', background: 'rgba(0, 0, 0, 0.08)', borderRadius: '20px', justifyContent: 'left', alignItems: 'left', gap: '10px', display: 'inline-flex' , cursor: 'pointer'}}onClick={handleClick}>
                   
                     <div style={{ width: 194, color: 'black', fontSize: '12px', fontFamily: 'Revert', fontWeight: 400, lineHeight: '19px', wordWrap: 'break-word', textAlign: 'left' }}>Type a message</div>
                    </div> 
                    ):(
                         <input type="text" style={{position: 'absolute',top: 409,right: 54,left: 8,bottom: 8,width: 202,height: 19,padding: '10px',background: 'rgba(0, 0, 0, 0.08)',borderRadius: '20px',justifyContent: 'left',alignItems: 'left', gap: '10px', display: 'inline-flex',fontSize: '12px',fontFamily: 'Revert',fontWeight: 400,}}/>
                         )}
                     </div>
                     
                    <div style={{ position: 'absolute', top: 410, left: 238, bottom: 8, right: 8, width: 20, height: 20, padding: '9px', background: 'rgba(0, 192, 252, 0.10)', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <img src={Vector} alt="Vector" style={{ width: 24, height: 24 }} />
                    </div>



                    


                


       
   
   
   
                </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;
