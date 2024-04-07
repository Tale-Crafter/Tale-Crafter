import React, { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Header from "../Dashboard/Header";
import Leftsidebar from "../Dashboard/Leftsidebar";
import gift_icon from "../../images/gift_icon.png";
import phone_recharge from "../../images/phone_recharge.png";
import convert_icon from "../../images/coupons.png";
import HistoryComponent from './HistoryComponent'; // Import the HistoryComponent
import arrow_forward from "../../images/Arrow.png";
import arrow_backward from "../../images/Arrow2.png";
import RechargeComponent from "./RechargeComponent"; 
import { Link } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import information from "../../images/Information.png";
import TunisieTelecom from "../../images/Tunisie-Telecom-logo.png";
import Ooredoo from "../../images/Tunisie-Telecom-logo 2.png";
import Orange from "../../images/Tunisie-Telecom-logo 3.png";
import Lyca from "../../images/Tunisie-Telecom-logo 4.png";
import point from "../../images/Information.png";
import TTelecom from "../../images/TTelecom.png";
import Oredo from "../../images/Oredo.png";
import Orang from "../../images/Orang.png";
import Lycamobil from "../../images/Lycamobil.png";
import Twodt from "../../images/2dt.png";
import Fivedt from "../../images/5dt.png";
import Tendt from "../../images/10dt.png";
import Twentydt from "../../images/20dt.png";
import image200 from "../../images/image200.png"    
import yassir from "../../images/yassir.png";
import jumia from "../../images/jumia.png";
import flouci from "../../images/flouci.png";
import tutto from "../../images/tutto.png";
import points20 from "../../images/Points20-200.png";
import forty from "../../images/forty.png";
import Onehundred from "../../images/Onehundred.png";
import PointsConversionPopup from "../Dashboard/PointsConversionPopup";



const CouponRecharge  = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        setShowConfirmation(true);
    };
    const handleBackClick = () => {
        // Redirect to /Surveys/:iduser
        navigate(`/CouponRecharge/${iduser}`);
    };
    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    const handleValidateConfirmation = () => {
        // Your logic for validation goes here
        console.log("Validated");
        setShowConfirmation(false);
    };

    const toggleShowCurrentPassword = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    
    const amount = false;
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const [selectedAmount, setSelectedAmount] = useState(null);

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
    };

    const rechargeBoxStyle = {
        width: '89px',
        height: '89px',
        borderRadius: '16px',
        border: selectedAmount === amount ? '3px solid' : '1px solid black',
        borderImageSource: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Open Sans',
        fontSize: '34px',
        fontWeight: 600,
        lineHeight: '46px',
        letterSpacing: '0em',
        textAlign: 'right',
        color: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
    };
    const divStyle = {
        width: '1400px',
        height: '177px',
        position: 'absolute',
        top: '80px',
        left: '340px',
        borderRadius: '16px',
        background: 'linear-gradient(90.33deg, #FFD451 2.25%, #FFDCBC 47.64%, #FFD7A6 99.87%)',
    };

    const textStyle = {
        width: '169px',
        height: '32px',
        position: 'absolute',
        top: '26px',
        left: '44px',
        fontFamily: 'Revert',
        fontSize: '32px',
        fontWeight: '800',
        lineHeight: '32px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#000',
    };

    const exploreTextStyle = {
        position: 'absolute',
        top: '166px',
        left: '375px',
        fontFamily: 'Revert',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#000',
    };

    const giftIconStyle = {
        width: '174px',
        height: '150px',
        position: 'absolute',
        top: '20px',
        left: '1165px',
    };

    const changePointsTextStyle = {
        fontFamily: 'Revert',
        fontSize: '19px',
        fontWeight: '700',
        lineHeight: '25px',
        letterSpacing: '0em',
        textAlign: 'left',
        width: '175px',
        height: '25px',
        position: 'absolute',
        top: '25px',
        left: '60px',
        color: '#000',
    };

    const infoBoxStyle = {
        width: '1290px',
        height: '105px',
        position: 'absolute',
        top: '80px',
        left: '60px',
        borderRadius: '16px',
        background: 'rgba(0, 0, 0, 0.04)',
    };

    const phoneRechargeStyle = {
        width: '34px',
        height: '42px',
        position: 'absolute',
        top: '20px', // This positioning might need adjustment based on its parent div
        left: '40px', // Same as above
    };

    const phoneRechargeTextStyle = {
        fontFamily: 'Revert',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '25px',
        letterSpacing: '0em',
        textAlign: 'left',
        width: '151px',
        height: '25px',
        position: 'absolute',
        top: '30px', // Adjusted according to the new parent
        left: '120px',
        color: '#000', // Assuming you want black text
    };

    const exploreServiceTextStyle = {
        fontFamily: 'Revert',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '0em',
        textAlign: 'left',
        width: '750px', // Adjust as needed
        height: '24px', // Adjust as needed
        position: 'absolute',
        top: '70px',
        left: '120px',
        color: 'rgba(102, 102, 102, 1)',
    };

    const buttonStyle = {
        width: '94px',
        height: '20px',
        position: 'absolute',
        top: '110px',
        left: '1122px',
        padding: '16px',
        borderRadius: '10px',
        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', // Updated background gradient
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Add box shadow for better appearance
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    };

    const buttonTextStyle = {
        fontFamily: 'Revert',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '19px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#FFF', // White text color
    };

    const historyTextStyle = {
        width: '66px',
        height: '25px',
        position: 'absolute',
        top: "130px",
        fontFamily: 'Revert',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '25px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#000', // Assuming you want black text. Adjust if needed.
    };
    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };
    
    const handleBoxClick = (event) => {
        // Get all box elements
        const allBoxes = document.querySelectorAll('.operator-box');
        const allAmountBoxes = document.querySelectorAll('.amount-box');
    
        // Reset the border color of all operator boxes to default (black)
        allBoxes.forEach(box => {
            box.style.borderColor = 'black';
        });
    
        // Reset the border color of all amount boxes to default (black)
        allAmountBoxes.forEach(box => {
            box.style.borderColor = 'black';
        });
    
        // Get the clicked box element
        const clickedBox = event.currentTarget;
    
        // Change the border color of the clicked box to blue
        clickedBox.style.borderColor = 'blue';
    };
    
    
    return (
        <div className="App">
            <div style={{filter: showConfirmation ? 'blur(5px)' : 'none' }}>
                <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} style={{filter: showConfirmation ? 'blur(5px)' : 'none'}} />
            </div>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease',filter: showConfirmation ? 'blur(5px)' : 'none' }}>
                <Header />
                <div style={divStyle}>
                    <div style={textStyle}>630 Points</div>

                    <img src={gift_icon} alt="Gift Icon" style={giftIconStyle} />
                </div>
                <div style={exploreTextStyle}>
                    Explore our world of rewards! Exchange your points for exclusive gifts and<br></br> discover a myriad of options that will delight you.
                </div>
                <div style={{ width: 1400, height: 700, left: 340, top: 272, position: 'absolute', background: 'white', borderRadius: 16 }} >
                <div style={{ ...changePointsTextStyle, display: 'flex', alignItems: 'center' }}>
                    
                    
                    
                <Link to={`/Points/${iduser}`}>
    <img src={arrow_backward} alt="Backward Arrow" style={{ width: '37px', height: '42px', marginRight: '10px' }} />
</Link>    <span style={{ whiteSpace: 'nowrap', fontSize: '25px' }}>Phone recharges</span>
</div>
<div style={{marginLeft:"10px",marginTop:'100px',whiteSpace: 'nowrap', fontFamily: 'Revert', fontSize: '22px', fontWeight: 1700, lineHeight: '19px', letterSpacing: 0, textAlign: 'left', width: '150px', height: '49px' }}>
        1. Select an operator
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="operator-box" style={{marginLeft:"50px", marginRight:"50px",width: '248px', height: '124px', borderRadius: '16px', border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleBoxClick}>
        <img src={yassir} alt="Tunisie Telecom" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
       
    </div>
    <div className="operator-box" style={{ width: '248px', height: '124px', borderRadius: '16px', border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleBoxClick}>
        <img src={jumia} alt="Ooredoo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
        
    </div>
    <div className="operator-box" className="operator-box" style={{ width: '248px', height: '124px', borderRadius: '16px', border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleBoxClick}>
        <img src={tutto} alt="Orange" style={{ width: '80%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
        
    </div>
    <div className="operator-box" style={{marginRight:"50px", width: '248px', height: '124px', borderRadius: '16px', border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={handleBoxClick}>
        <img src={flouci} alt="Lycamobile" style={{ width: '240px', height: '120px', objectFit: 'cover', borderRadius: '16px' }} />
       
    </div>
   
</div>
<div className="amount-box"  style={{marginLeft:"10px", marginTop: '50px', whiteSpace: 'nowrap', fontFamily: 'Revert', fontSize: '22px', fontWeight: 1700, lineHeight: '19px', letterSpacing: 0, textAlign: 'left', width: '200px', height: '49px' }}>
        2. Select a recharge amount
    </div>
    <div style={{ display: 'flex', marginTop: '30px' }}>
        <div className="amount-box" style={{marginLeft:"20px",width: '89px', height: '89px', borderRadius: '16px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Revert', fontSize: '34px', fontWeight: 600, lineHeight: '46px', letterSpacing: '0em', textAlign: 'right', color: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)' }}    onClick={handleBoxClick}>
        <img src={Tendt} alt="10dt" style={{ width: '100%', height: '80%', objectFit: 'cover', borderRadius: '16px' }} />

            </div>
        <div className="amount-box" style={{  width: '89px', height: '89px', borderRadius: '16px', border: '1px solid black', marginLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Revert', fontSize: '34px', fontWeight: 600, lineHeight: '46px', letterSpacing: '0em', textAlign: 'right', color: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'}}  onClick={handleBoxClick}>
        <img src={Twentydt} alt="20dt" style={{ width: '100%', height: '80%', objectFit: 'cover', borderRadius: '16px' }} />

            
            
        </div>
        <div className="amount-box"  style={{ width: '89px', height: '89px', borderRadius: '16px', border: '1px solid black', marginLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Revert', fontSize: '34px', fontWeight: 600, lineHeight: '46px', letterSpacing: '0em', textAlign: 'right' }} onClick={handleBoxClick}>
        <img src={forty} alt="10dt" style={{ width: '100%', height: '60%', objectFit: 'cover', borderRadius: '16px' }} />
        </div>
        <div className="amount-box"  style={{  width: '89px', height: '89px', borderRadius: '16px', border: '1px solid black', marginLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Revert', fontSize: '34px', fontWeight: 600, lineHeight: '46px', letterSpacing: '0em', textAlign: 'right'  }} onClick={handleBoxClick}>
        <img src={Onehundred} alt="20dt" style={{ width: '100%', height: '50%', objectFit: 'cover', borderRadius: '16px' }} />
        </div>
       </div>
    <div style={{marginLeft:"10px",marginTop:'50px',whiteSpace: 'nowrap', fontFamily: 'Revert', fontSize: '22px', fontWeight: 1700, lineHeight: '19px', letterSpacing: 0, textAlign: 'left', width: '150px', height: '49px' }}>
        3. Enter your password
    </div>
    <div style={{ marginLeft:"10px",width: 497, height: 51, position: 'relative' }}>
    <input
        type={showCurrentPassword ? 'text' : 'password'}
        id="currentPassword"
        value={currentPassword}
        onChange={handleCurrentPasswordChange}
        style={{ width: '100%', height: '100%', border: 'none', padding: '0 16px', background: 'rgba(17, 17, 17, 0.10)',borderRadius: 10 }}
    />
    <div style={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={toggleShowCurrentPassword}>
        {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
    </div>

</div>
<button onClick={handleNext}  style={{marginLeft:"500px",borderColor:"transparent",color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word', position:"relative", left:300, width: '13%', height: '7%', padding: 16, background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}> Submit</button>

</div>


</div>
            {showConfirmation && <PointsConversionPopup onClose={handleCloseConfirmation} onValidate={handleValidateConfirmation} />}

        </div>


);

};
    
    export default CouponRecharge;
