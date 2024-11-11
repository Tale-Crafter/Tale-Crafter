import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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

const PointsDashboard = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // Initialize currentPage state
    const itemsPerPage = 10; // Set the maximum items per page here
    const [showHistory, setShowHistory] = useState(true);
    const [showBottomNavigation, setShowBottomNavigation] = useState(true); 
    const [phoneRecharge, setphoneRecharge] = useState(true); 

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const [filteredHistoryData, setFilteredHistoryData] = useState([]);
    const [records, setRecords] = useState([]); // Placeholder array for records
    const [showRechargeComponent, setShowRechargeComponent] = useState(false); // State variable to toggle RechargeComponent
    
    const baseLeft = 400; // Adjust this based on your layout's needs
    const buttonSpacing = 20;
    const [selectedButton, setSelectedButton] = useState('accumulatedPoints'); 
    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
        if (buttonId === 'accumulatedPoints') {
            setShowHistory(true); // Always set showHistory to true when the Accumulated Points button is clicked
            setShowBottomNavigation(true); // Show bottom navigation when history is shown
        } else if (buttonId === 'rechargePhone') {
            setShowRechargeComponent(true);
        setphoneRecharge(true);
            setShowBottomNavigation(true); 
        } else {
            setShowHistory(false); // Hide history for other buttons
            setShowBottomNavigation(false); // Hide bottom navigation when history is hidden
            setphoneRecharge(false);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(historyData.length / itemsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const getButtonStyle = (buttonId) => {
        const baseStyle = {
            width: '167px',
            height: '43px',
            position: 'absolute',
            top: '650px',
            left: '600px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid black',
        };
        if (selectedButton === buttonId) {
            return {
                ...baseStyle,
                background: 'rgba(255, 212, 80, 1)', // Selected state background
            };
        } else {
            return {
                ...baseStyle,
                background: 'rgba(255, 255, 255, 1)', // Deselected state background
            };
        }
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

    const buttonOneTextStyle = {
        width: '135px',
        height: '19px',
        fontFamily: 'Revert',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '19px',
        textAlign: 'left',
        color: '#000', // Assuming you want black text
    };

    // Assuming a margin of 20px between each button
    const secondButtonLeft = 222 + 167 + 230;

    const buttonTwoTextStyle = {
        fontFamily: 'Revert',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '19px',
        textAlign: 'left',
        color: '#000', // Assuming you want black text
    };
    const historyData = [
        { id: 1, name: 'Survey type',type:'Survey type', points: 30, date: '11/12/2024' },
        { id: 2, name: 'Survey type',type:'Survey type', points: 40, date: '11/13/2024' },
        { id: 3, name: 'Survey type',type:'Survey type', points: 20, date: '11/14/2024' },
       
        
       
   
        
    ];
    
    
    const rechargeRecords = [
        { id: 1, name: 'Recharge mobile', points: 50, sum: 100, num: '1234567890', type: 'Lycamobile', date: '2024-03-01' },
        { id: 2, name: 'Recharge mobile', points: 60, sum: 120, num: '9876543210', type: 'Ooredoo', date: '2024-03-02' },
        { id: 3, name: 'Recharge mobile', points: 60, sum: 120, num: '9876543210', type: 'Tunisie Telecom', date: '2024-03-02' },
        { id: 4, name: 'Recharge mobile', points: 60, sum: 120, num: '9876543210', type: 'Ooredoo', date: '2024-03-02' },
    ];
        
        const totalRecharge=rechargeRecords.length;
        const totalRechargePages = Math.ceil(totalRecharge / itemsPerPage);
    const totalRecords = historyData.length;
    const totalPages = Math.ceil(totalRecords / itemsPerPage);
    
    const visiblePageNumbers = [];
    for (let i = 1; i <= totalPages && visiblePageNumbers.length < 4; i++) {
        visiblePageNumbers.push(i);
    }
    const thirdButtonLeft = secondButtonLeft + 167 + 20; // Left of second button + width of second button + margin

    const buttonOneStyle = getButtonStyle('accumulatedPoints');
    const buttonTwoStyle = getButtonStyle('rechargePhone');
    const buttonThreeStyle = getButtonStyle('coupons');
    const [currentRechargePage, setCurrentRechargePage] = useState(1);
    const handleBoxClick = (event) => {
        // Get the clicked box element
        const clickedBox = event.currentTarget;
    
        // Check if the border color is light blue
        if (clickedBox.style.borderColor === 'blue') {
            // If it is light blue, change it back to the default color (black)
            clickedBox.style.borderColor = 'black';
        } else {
            // If it is not light blue, change it to light blue
            clickedBox.style.borderColor = 'blue';
        }
    };
    
    
    return (
        <div className="App">
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease' }}>
                <Header />
                <div style={divStyle}>
                    <div style={textStyle}>630 Points</div>

                    <img src={gift_icon} alt="Gift Icon" style={giftIconStyle} />
                </div>
                <div style={exploreTextStyle}>
                    Explore our world of rewards! Exchange your points for exclusive gifts and<br></br> discover a myriad of options that will delight you.
                </div>
                <div style={{ width: 1400, height: 1200, left: 340, top: 272, position: 'absolute', background: 'white', borderRadius: 16 }} >
                    <div style={changePointsTextStyle}>Change your points</div>
                    
                    
                    <div style={infoBoxStyle}>
                   

                       
                        <img src={phone_recharge} alt="Phone Recharge" style={phoneRechargeStyle} /> 
                        <div style={phoneRechargeTextStyle}>Phone Recharges</div>
                        <div style={exploreServiceTextStyle}>
                            Explore our latest service enabling you to redeem your collected points for mobile phone top-ups effortlessly
                        </div>


                    </div>
                    <div style={buttonStyle}>
                    <Link to={`/PhoneRecharge`}>
                        <span style={buttonTextStyle}>Recharge</span></Link>
                    </div>
                </div>
                <div style={{ ...infoBoxStyle, top: "490px", left: "400px" }}>
                    
                    <img src={convert_icon} alt="Coupons" style={phoneRechargeStyle} />
                    <div style={phoneRechargeTextStyle}>Coupons</div>
                    <div style={exploreServiceTextStyle}>
                        Convert your accumulated points into vouchers with one of our partners.
                    </div>
                    <div style={historyTextStyle}>History</div>
                </div>
                <div style={{ ...buttonStyle, top: "520px", left: "1460px" }}>
                <Link to={`/CouponRecharge`}>
                    <span style={buttonTextStyle}>Convert</span>
                    </Link>
                </div>

                <div style={{ ...buttonOneStyle, left: `${baseLeft}px`, top: "660px" }} onClick={() => handleButtonClick('accumulatedPoints')}>
                    <span style={buttonOneTextStyle}>Accumulated Points</span>
                </div>
                <div style={{ ...buttonTwoStyle, top: "660px" }} onClick={() => handleButtonClick('rechargePhone')}>
                    <span style={buttonTwoTextStyle}>Recharge Phone</span>
                </div>
                <div style={{ ...buttonThreeStyle, top: "660px", left: "800px" }} onClick={() => handleButtonClick('coupons')}>
                    <span style={buttonTwoTextStyle}>Coupons</span>
                </div>
                <div style={{ width: '1400px', position: 'absolute', top: '720px', left: '400px' }}>
                {showHistory && selectedButton === 'accumulatedPoints' && (
                        historyData
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((item, index) => (
                                <HistoryComponent
                                    key={index}
                                    id={item.id}
                                    name={item.name}
                                    type={item.type}
                                    points={item.points}
                                    date={item.date}
                                    currentPage={currentPage}
                                    itemsPerPage={itemsPerPage}
                                    handlePageChange={handlePageChange}
                                    style={{ top: `${index * 20}px` }}
                                />
                            ))
                    )}
                     {phoneRecharge && selectedButton === 'rechargePhone' && (
                        rechargeRecords
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((item, index) => (
                                <RechargeComponent
                                    key={index}
                                    id={item.id}
                                    name={item.name}
                                    sum={item.sum}
                                    num={item.num}
                                    points={item.points}
                                    type={item.type}
                                    date={item.date}
                                    currentPage={currentPage}
                                    itemsPerPage={itemsPerPage}
                                    handlePageChange={handlePageChange}
                                    style={{ top: `${index * 20}px` }}
                                />
                            ))
                    )}
                    {showBottomNavigation && (
                  <div style={{ position: 'absolute', bottom: '-50px', right: '130px', display: 'flex', alignItems: 'center' }}>
                    
              
                    
                    
    <img src={arrow_backward} alt="Backward" style={{ width: '27px', height: '32px', marginLeft: '5px', cursor: 'pointer' }} onClick={handlePreviousPage} />
    {visiblePageNumbers.map((pageNumber) => (
        <div
            key={pageNumber}
            style={{
                width: '24px',
                height: '24px',
                borderRadius: '8px',
                border: '1px solid black',
                background:
                    pageNumber === currentPage
                        ? 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'
                        : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5px',
                cursor: 'pointer',
            }}
            onClick={() => setCurrentPage(pageNumber)}
        >
            {pageNumber}
        </div>
    ))}
    <img src={arrow_forward} alt="Forward" style={{ width: '27px', height: '32px', marginLeft: '5px', cursor: 'pointer' }} onClick={handleNextPage} />
            </div>)}
        </div>
        
        </div>
        </div>
    );
};

export default PointsDashboard;

