// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../../images/assistance1.png';
import Rectangle96 from '../../images/Rectangle96.png';
import Rectangle97 from '../../images/Rectangle97.png';
import Rectangle98 from '../../images/Rectangle98.png';
import Rectangle99 from '../../images/Rectangle99.png';
import icplus from '../../images/icplus.png';
import icminus from '../../images/icminus.png';

import { Link } from 'react-router-dom';
import './App.css';  // Import the CSS file
import Header from "./Header";
import Leftsidebar from "./Leftsidebar";
import { color } from '@mui/system';
const opencage = require('opencage-api-client');


const AssistanceO = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);



    const toggleSidebar = () => {setSidebarVisible(!sidebarVisible);};
    

    return (
        <div className="App">
            
              <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
                 <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                      <Header/>
                      
                     <div style={{width: 1400, height: 736, left: 340, top: 80, position: 'absolute', background: 'lightgray', borderRadius: 16}} >
                
               

                
 <div style={{position: 'relative', width: '100%', height: '177px', background: 'linear-gradient(90deg, #00C0FC 0%, #98ECFF 47%, #FFE2B7 100%)', borderRadius: '16px', border: '1px solid #000000'}}>
    <div style={{position: 'absolute', top: '43px', right: '723px', left: '46px', bottom: '97px'}}>
        <div style={{color: '#111111', fontSize: '32px', fontFamily: 'Revert', fontWeight: 800, lineHeight: '32px', wordWrap: 'break-word'}} >Assistance Center</div>
     </div>
                     
    <div style={{position: 'absolute', top: '80px', right: '336px', left: '46px', bottom: '51px',textAlign:'left'}}>
        <div style={{color: '#111111', fontSize: '14px', fontFamily: 'Revert',fontweight: 400, lineHeight: '24px',wordwrap: 'break-word', marginTop: '20px'}}>Welcome to our Assistance Center, dedicated to helping you make the most of your experience as a valued panelist. Whether you have questions about registration, survey participation, or rewards, we're here to assist you</div>
                                 
    </div>
    <div style={{position: 'absolute', top: '20px', right: '31px'}}>
        <img src={Question} alt="Question" style={{width: '218px', height: '145px'}} />
    </div>
 </div>
               
              
 <div style={{ alignItems: 'center',  position: 'relative', top : '17px', bottom: '16px', width: '100%', height: '944px', background: 'white', borderRadius: '16px', marginTop: '19px'}}>       
    <div style={{position: 'absolute', top: '23px', left: '24px'}}>
        <div style={{color: '#111111', fontSize: '18px', fontFamily: 'Revert', fontWeight: '700', lineHeight: '32px', wordWrap: 'break-word'}}>Getting Started</div>
    </div>
   <div>
                                  <div style={{position: 'absolute', top: '72px', right: '450px', left: '110px', bottom: '853px'}}>
                                     

                                    <Link to={`/Awards/${iduser}`}>
                
                                   
                                     <div style={{color: '#111111', width: '100%',fontSize: '14px', fontFamily: 'Revert', fontWeight: '700', wordWrap: 'break-word', textAlign: 'left'}}>Registration and Account Management
                                     
                                     </div>
                                   </Link>
                                 </div>
                              <div style={{position: 'absolute', top: '99px', right: '69px', left: '110px', bottom: '797px'}}>
                                 <div style={{color: '#111111', width: '100%', fontSize: '14px', fontFamily: 'Revert', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', textAlign: 'left'}}>Learn how to sign up as a panelist and manage your account. Find guidance on updating your profile, resetting your password, and ensuring your information is up-to-date</div>
                                </div>

                               <div style={{position: 'absolute', top: '72px', left: '24px'}}>
                                <img src={Rectangle96} alt="Rectangle96" style={{width: '100%',height: '100%',borderRadius: '16px',border: '1px solid #EEEEEE'}} />
                                  </div>    

                                  <div style={{position: 'absolute', top: '163px', right: '31px', left: '24px', border: '1px #DDDDDD solid'}}></div>
</div>


    <div>
    <div style={{position: 'absolute', top: '179px', right: '450px', left: '110px', bottom: '746px'}}>
                                 <div style={{color: '#111111', width: '100%',fontSize: '14px', fontFamily: 'Revert', fontWeight: '700', wordWrap: 'break-word', textAlign: 'left'}}>
                                    <Link to="/Surveys/:iduser">
                                    Survey Participation
                                    </Link></div>
                                 </div>
                              <div style={{position: 'absolute', top: '206px', right: '69px', left: '110px', bottom: '690px'}}>
                                   <div style={{color: '#111111', width: '100%', fontSize: '14px', fontFamily: 'Revert', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', textAlign: 'left'}}>Discover tips and tricks to enhance your survey participation. Understand the survey process, from receiving invitations to completing them efficiently</div>
                                  </div>

                                  <div style={{position: 'absolute', top: '179px', left: '24px'}}>
                                        <img src={Rectangle97} alt="Rectangle97" style={{width: '100%',height: '100%',borderRadius: '16px',border: '1px solid #EEEEEE'}} />
                                     </div>    

                                   <div style={{position: 'absolute', top: '270px', right: '31px', left: '24px', border: '1px #DDDDDD solid'}}></div>
    </div>
    
    
    <div>
    <div style={{position: 'absolute', top: '286px', right: '450px', left: '110px', bottom: '639px'}}>
                                    <div style={{color: '#111111', width: '100%',fontSize: '14px', fontFamily: 'Revert', fontWeight: '700', wordWrap: 'break-word', textAlign: 'left'}}>
                                        <Link to="/Focusgroup/:iduser">
                                        
                                        Focus group</Link>
                                        </div>
                                     </div>
                                    <div style={{position: 'absolute', top: '313px', right: '69px', left: '110px', bottom: '583px'}}>
                                        <div style={{color: '#111111', width: '100%', fontSize: '14px', fontFamily: 'Revert', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', textAlign: 'left'}}>Explore how to earn points and redeem them for exciting rewards. Get insights into our rewards system, including available options and how to track your points</div>
                                        </div>

                                  <div style={{position: 'absolute', top: '286px', left:'24px'}}>
                                     <img src={Rectangle98} alt="Rectangle98" style={{width: '100%',height: '100%',borderRadius: '16px',border: '1px solid #EEEEEE'}} />
                                      </div>    

                                <div style={{position: 'absolute', top: '378px', right: '31px', left: '24px', border: '1px #DDDDDD solid'}}></div>
    </div>



<div>
<div style={{position: 'absolute', top: '394px', right: '450px', left: '110px', bottom: '531px'}}>
                                          <div style={{color: '#111111', width: '100%',fontSize: '14px', fontFamily: 'Revert', fontWeight: '700', wordWrap: 'break-word', textAlign: 'left'}}>
                                            <Link to="/Points/:iduser">
                                            
                                            Earning and Redeeming Point
                                            </Link></div>
                                          </div>
                                      <div style={{position: 'absolute', top: '421px', right: '69px', left: '110px', bottom: '475px'}}>
                                           <div style={{color: '#111111', width: '100%', fontSize: '14px', fontFamily: 'Revert', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', textAlign: 'left'}}>Explore how to earn points and redeem them for exciting rewards. Get insights into our rewards system, including available options and how to track your points</div>
                                           </div>

                                     <div style={{position: 'absolute', top: '394px',  left:'24px' }}>
                                        <img src={Rectangle99} alt="Rectangle99" style={{width: '100%',height: '100%',borderRadius: '16px',border: '1px solid #EEEEEE'}} />
                                        </div>    
    </div>


     <div>
             <div style={{position: 'absolute', top: '496px',  left: '24px'}}>
                  <div style={{color: '#111111', fontSize: '18px', fontFamily: 'Revert', fontWeight: '700', lineHeight: '32px', wordWrap: 'break-word'}}>Frequently Asked Questions (FAQ)</div>
             </div>

                 <div style={{position: 'absolute', top: '529px', right: '24px', left: '24px', bottom: '367px'}}>
                     <div style={{color: '#111111', width: '100%', fontSize: '14px', fontFamily: 'Revert', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', textAlign: 'left'}}>Check out our FAQs for quick answers to common queries. Find information on a variety of topics, from technical issues to inquiries about reward redemption</div>
                 </div>
        
     
        </div>

<div style={{ display: 'flex', flexDirection: 'row' }}>

 <div style={{ position: 'relative', top: '593px', left: '24px',Bottom:'24px', right:'545px'}}>
    <div style={{ position: 'relative', width: '497px', height: '56px', background: 'rgba(0, 0, 0, 0.04)', borderRadius: '10px',marginBottom:'8px' }}>
        <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'black', fontSize: '14px', fontFamily: 'Revert', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word' }}>How do I sign up as a panelist?</div>
        <div style={{ position: 'absolute', right: '20px', top: '16px' }}>
            <img src={icplus} alt="icplus" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
        </div>
    </div>
    <div style={{ position: 'relative',  marginTop: '8px' ,width: '497px', height: '135px', background: 'rgba(0, 0, 0, 0.04)', borderRadius: '10px' ,marginBottom:'8px'}}>
        <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'black', fontSize: '14px', fontFamily: 'Revert', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word' }}>How can I reset my password?</div>
        <div style={{ position: 'absolute', right: '20px', top: '16px' }}>
            <img src={icminus} alt="icminus" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
        </div>
        <div style={{ position: 'absolute', right: '16px', left: '16px', top: '48px', bottom: '15px', color: '#666666', fontSize: '14px', fontFamily: 'Revert', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word', textAlign: 'left' }}>If you've forgotten your password, click on the 'Forgot Password' link on the login page. Follow the prompts to reset your password via the email address associated with your account.</div>
    </div>
    <div style={{ position: 'relative', width: '497px', height: '56px', background: 'rgba(0, 0, 0, 0.04)', borderRadius: '10px',marginBottom:'8px' }}>
        <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'black', fontSize: '14px', fontFamily: 'Revert', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word' }}>How do I participate in surveys?</div>
        <div style={{ position: 'absolute', right: '20px', top: '16px' }}>
            <img src={icplus} alt="icplus" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
        </div>
    </div>
    <div style={{ position: 'relative', width: '497px', height: '56px', background: 'rgba(0, 0, 0, 0.04)', borderRadius: '10px'}}>
        <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'black', fontSize: '14px', fontFamily: 'Revert', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word' }}>When will I receive my rewards after redeeming points?</div>
        <div style={{ position: 'absolute', right: '20px', top: '16px' }}>
            <img src={icplus} alt="icplus" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
        </div>
    </div>

</div>



   
<div style={{ position: 'relative', top: '593px', left: '40px',Bottom:'24px', right:'24px'}}>
    <div style={{ position: 'relative', width: '497px', height: '56px', background: 'rgba(0, 0, 0, 0.04)', borderRadius: '10px',marginBottom:'8px' }}>
        <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'black', fontSize: '14px', fontFamily: 'Revert', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word' }}>Can I update my profile information?</div>
        <div style={{ position: 'absolute', right: '20px', top: '16px' }}>
            <img src={icplus} alt="icplus" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
        </div>
    </div>
    <div style={{ position: 'relative', width: '497px', height: '56px', background: 'rgba(0, 0, 0, 0.04)', borderRadius: '10px',marginBottom:'8px' }}>
        <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'black', fontSize: '14px', fontFamily: 'Revert', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word' }}>What should I do if I encounter technical issues during a survey?</div>
        <div style={{ position: 'absolute', right: '20px', top: '16px' }}>
            <img src={icplus} alt="icplus" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
        </div>
    </div>
    <div style={{ position: 'relative', width: '497px', height: '56px', background: 'rgba(0, 0, 0, 0.04)', borderRadius: '10px',marginBottom:'8px' }}>
        <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'black', fontSize: '14px', fontFamily: 'Revert', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word' }}>Are there any eligibility criteria to become a panelist?</div>
        <div style={{ position: 'absolute', right: '20px', top: '16px' }}>
            <img src={icplus} alt="icplus" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
        </div>
    </div>
    <div style={{ position: 'relative', width: '497px', height: '56px', background: 'rgba(0, 0, 0, 0.04)', borderRadius: '10px'}}>
        <div style={{ position: 'absolute', left: '16px', top: '16px', color: 'black', fontSize: '14px', fontFamily: 'Revert', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word' }}> How do I track my points and view my reward history?</div>
        <div style={{ position: 'absolute', right: '20px', top: '16px' }}>
            <img src={icplus} alt="icplus" style={{ width: '100%', height: '100%', borderRadius: '16px' }} />
        </div>
    </div>

</div>
</div> 
    
    
    
    
    
   








                </div>    
                </div>
                </div>
                </div>
    );
};

export default AssistanceO ;
