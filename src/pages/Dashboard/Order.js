// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import BusinessLeftsidebar from "./BusinessLeftsidebar";
import BHeader from "./BHeader";
import { EditOutlined } from '@ant-design/icons'; // import EditOutlined icon
import { Table, Button, Modal } from 'antd';
import moment from 'moment';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // for date formatting
import { FaEyeSlash, FaEye, FaCheck, FaArrowDown,FaAngleDown,FaAngleRight } from 'react-icons/fa';
import SubBrandPopup from "./SubBrandPopup";
import AddTargetCriteriaPopup from "./AddTargetCriteriaPopup";


const SurveyColl = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showConfirmation1, setShowConfirmation1] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

// Sample data for the table
    const data = [
        {
            key: '1',
            icon: <EditOutlined />, // Icon for each row
            name: 'Survey 1',
            status: 'Open',
            responses: 100,
            dateCreated: '2023-01-01',
            dateModified: '2023-01-10',
        },
        {
            key: '2',
            icon: <EditOutlined />, // Icon for each row
            name: 'Survey 2',
            status: 'Closed',
            responses: 50,
            dateCreated: '2023-02-01',
            dateModified: '2023-02-15',
        },{
            key: '3',
            icon: <EditOutlined />, // Icon for each row
            name: 'Survey ',
            status: 'Closed',
            responses: 50,
            dateCreated: '2023-02-01',
            dateModified: '2023-02-15',
        },
    ];

    // Columns configuration for the table
    // Columns configuration for the table
    const columns = [
        {
            title: '', // Empty title for the icon column
            dataIndex: 'icon', // Use dataIndex 'icon' to render the icon
            key: 'icon',
            width: 70, // Set width for the column
            fixed: 'left', // Fix the column to the left
        },
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            width: 600, // Set width for the column
            fixed: 'left', // Fix the column to the left
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <span style={{ background: status === 'Open' ? 'green' : 'black', color: 'white', padding: '5px 10px', borderRadius: 5 }}>
                    {status}
                </span>
            ),
        },
        {
            title: 'Responses',
            dataIndex: 'responses',
            key: 'responses',
        },
        {
            title: 'Date Created',
            dataIndex: 'dateCreated',
            key: 'dateCreated',
            render: (date) => moment(date).format('YYYY-MM-DD'), // format date
        },
        {
            title: 'Date Modified',
            dataIndex: 'dateModified',
            key: 'dateModified',
            width: 200, // Set width for the column
            render: (date) => moment(date).format('YYYY-MM-DD'), // format date
        },
        {
            title: '',
            width: 40, // Set width for the column
            key: 'icon',
            render: (text, record) => (
                <Button onClick={() => handleEdit(record)} type="link" >
                    <img src={process.env.PUBLIC_URL + `/3pts.png`} style={{  height: '100%' }} />
                </Button>
            ),
        },
    ];

    const handleEdit = (record) => {
        // Handle edit functionality, e.g., show edit popup
        console.log('Edit record:', record);
    };
    const components = {
        header: {
            // Custom header for the table with gray background
            wrapper: (props) => <thead {...props} style={{ background: 'gray' }} />,
        },
    };

    const [isChecked, setIsChecked] = useState(false);
    const handleClick = () => {
        setIsChecked(!isChecked);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked6(false);
        setIsChecked7(false);
    };
const [isChecked1, setIsChecked1] = useState(false);
    const handleClick1 = () => {
        setIsChecked1(!isChecked1);
        setIsChecked(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked6(false);
        setIsChecked7(false);
    };
const [isChecked2, setIsChecked2] = useState(false);
    const handleClick2 = () => {
        setIsChecked2(!isChecked2);
        setIsChecked(false);
        setIsChecked1(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked6(false);
        setIsChecked7(false);
    };
const [isChecked3, setIsChecked3] = useState(false);
    const handleClick3 = () => {
        setIsChecked3(!isChecked3);
        setIsChecked(false);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked6(false);
        setIsChecked7(false);
    };
const [isChecked4, setIsChecked4] = useState(false);
    const handleClick4 = () => {
        setIsChecked4(!isChecked4);
        setIsChecked(false);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked5(false);
        setIsChecked6(false);
        setIsChecked7(false);
    };
const [isChecked6, setIsChecked6] = useState(false);
    const handleClick6 = () => {
        setIsChecked6(!isChecked6);
        setIsChecked(false);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked7(false);
    };
const [isChecked7, setIsChecked7] = useState(false);
    const handleClick7 = () => {
        setIsChecked7(!isChecked7);
        setIsChecked(false);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked6(false);

    };
const [isChecked5, setIsChecked5] = useState(false);
    const handleClick5 = () => {
        setIsChecked5(!isChecked5);
        setIsChecked(false);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked6(false);
        setIsChecked7(false);
    };
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    const cities = [
        'Primary school', 'Hampton (VA)', 'San Isidro', 'Tampa (FL)', 'Hagen', 'Morón', 'Aurora (IL)',
    ];

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };
    const handleValidateConfirmation = () => {
        // Your logic for validation goes here
        console.log("Validated");
        setShowConfirmation(false);
    };
    const handleCityChange = (city) => {
        const selectedIndex = selectedCities.indexOf(city);
        let newSelectedCities = [];

        if (selectedIndex === -1) {
            newSelectedCities = [...selectedCities, city];
        } else if (selectedIndex === 0) {
            newSelectedCities = selectedCities.slice(1);
        } else if (selectedIndex === selectedCities.length - 1) {
            newSelectedCities = selectedCities.slice(0, -1);
        } else if (selectedIndex > 0) {
            newSelectedCities = [
                ...selectedCities.slice(0, selectedIndex),
                ...selectedCities.slice(selectedIndex + 1),
            ];
        }

        setSelectedCities(newSelectedCities);

    };

    const handleSelectAllChange = (event) => {
        const isChecked = event.target.checked;
        setSelectAllChecked(isChecked);
        setSelectedCities(isChecked ? cities : []);
    };


    const handleNext = () => {
        setShowConfirmation(true);
    };
    const [openStatus, setOpenStatus] = useState({
        country: false,
        age: false,
        household: false,
        marital: false,
        gender: false,
        education: false,
        creditCards: false,
        autoInsurance: false
    });

    const handleToggle = (item) => {
        setOpenStatus(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
    };

    return (
        <div className="App">
            <div style={{filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} style={{filter: showConfirmation || showConfirmation1 ?  'blur(5px)' : 'none'}} />
            </div>
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BHeader/>
                <div style={{width: 1400, height: !openStatus.education ? 1300 : 1700, buttom:20,left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Intégrez le formulaire de contact ici */}
                    <div style={{position:"relative",top:-80}}>
                        <div style={{left: 40, top: 105, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Creating a new survey</div>
                        <div style={{left: 190, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Survey Initiation</div>
                        <div style={{width: 157, left: 340, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Question<br/>Development</div>
                        <div style={{width: 160, left: 540, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Review and Preview</div>
                        <div style={{width: 160, left: 715, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
                        <div style={{width: 149, left: 890, top: 193, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
                        <div style={{width: 24, height: 24, left: 190, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                            {/*<div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />*/}
                        </div>
                        <div style={{width: 24, height: 24, left: 365, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 24, height: 24, left: 540, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />

                        </div>
                        <div style={{width: 24, height: 24, left: 715, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />

                        </div>

                        <div style={{width: 24, height: 24, left: 890, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                            <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 143, height: 0, left: 535, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                        <div style={{width: 143, height: 0, left: 711, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                        <div style={{width: 143, height: 0, left: 886, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                        <div style={{width: 143, height: 0, left: 361, top: 171, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                    </div>
                    <div style={{width: 820, height: 201, left: 29, top: 256, position: 'absolute', background: 'linear-gradient(360deg, #F4F4F4 0%, #EBEBEB 100%)', borderRadius: 10}}>
                        <div style={{left: 35, top: 25, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>How many responses do you need?</div>
                        <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3, left: 619, top: 25, position: 'absolute', background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{color: '#F9BC33', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>50 : Margin of error > 10%</div>
                        </div>
                        <div
                            style={{
                                position:'absolute',
                                width: '70px',
                                height: '90px',
                                top: '70px',
                                left: '29px',
                                gap: '0px',
                                borderRadius: '10px ',
                                opacity: '0px',
                                background: isChecked ? '#E5E5E5' : 'white',
                                border: isChecked ? '3px solid #00BDA9' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, .1)'
                            }}
                            onClick={handleClick}
                        >
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>50</div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    checked={isChecked}
                                    onChange={handleClick}
                                    style={{ display: 'none' }}
                                />
                                <span
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '60%',
                                        border: isChecked ? '6px solid #00BDA9' : '3px solid grey',
                                        display: 'inline-block',
                                        marginTop: '15px',
                                        backgroundColor: 'white',
                                    }}
                                />
                                <span style={{ fontSize: '16px', color: isChecked ? '#00BDA9' : 'black' }}>

        </span>
                            </label>
                        </div>
                        {/*//////////////*/}
                        <div
                            style={{
                                position:'absolute',
                                width: '70px',
                                height: '90px',
                                top: '70px',
                                left: '125px',
                                gap: '0px',
                                borderRadius: '10px ',
                                opacity: '0px',
                                background: isChecked1 ? '#E5E5E5' : 'white',
                                border: isChecked1 ? '3px solid #00BDA9' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, .1)'
                            }}
                            onClick={handleClick1}
                        >
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>100</div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    checked={isChecked1}
                                    onChange={handleClick1}
                                    style={{ display: 'none' }}
                                />
                                <span
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '60%',
                                        border: isChecked1 ? '6px solid #00BDA9' : '3px solid grey',
                                        display: 'inline-block',
                                        marginTop: '15px',
                                        backgroundColor: 'white',
                                    }}
                                />
                                <span style={{ fontSize: '16px', color: isChecked1 ? '#00BDA9' : 'black' }}>

        </span>
                            </label>
                        </div>
                        {/*//////////////*/}
                        <div
                            style={{
                                position:'absolute',
                                width: '70px',
                                height: '90px',
                                top: '70px',
                                left: '221px',
                                gap: '0px',
                                borderRadius: '10px ',
                                opacity: '0px',
                                background: isChecked2 ? '#E5E5E5' : 'white',
                                border: isChecked2 ? '3px solid #00BDA9' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, .1)'
                            }}
                            onClick={handleClick2}
                        >
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>150</div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    checked={isChecked2}
                                    onChange={handleClick2}
                                    style={{ display: 'none' }}
                                />
                                <span
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '60%',
                                        border: isChecked2 ? '6px solid #00BDA9' : '3px solid grey',
                                        display: 'inline-block',
                                        marginTop: '15px',
                                        backgroundColor: 'white',
                                    }}
                                />
                                <span style={{ fontSize: '16px', color: isChecked2 ? '#00BDA9' : 'black' }}>

        </span>
                            </label>
                        </div>
                        {/*//////////////*/}
                        <div
                            style={{
                                position:'absolute',
                                width: '70px',
                                height: '90px',
                                top: '70px',
                                left: '318px',
                                gap: '0px',
                                borderRadius: '10px ',
                                opacity: '0px',
                                background: isChecked3 ? '#E5E5E5' : 'white',
                                border: isChecked3 ? '3px solid #00BDA9' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, .1)'
                            }}
                            onClick={handleClick3}
                        >
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>250</div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    checked={isChecked3}
                                    onChange={handleClick3}
                                    style={{ display: 'none' }}
                                />
                                <span
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '60%',
                                        border: isChecked3 ? '6px solid #00BDA9' : '3px solid grey',
                                        display: 'inline-block',
                                        marginTop: '15px',
                                        backgroundColor: 'white',
                                    }}
                                />
                                <span style={{ fontSize: '16px', color: isChecked3 ? '#00BDA9' : 'black' }}>

        </span>
                            </label>
                        </div>
                        {/*//////////////*/}
                        <div
                            style={{
                                position:'absolute',
                                width: '70px',
                                height: '90px',
                                top: '70px',
                                left: '414px',
                                gap: '0px',
                                borderRadius: '10px ',
                                opacity: '0px',
                                background: isChecked4 ? '#E5E5E5' : 'white',
                                border: isChecked4 ? '3px solid #00BDA9' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, .1)'
                            }}
                            onClick={handleClick4}
                        >
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>500</div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    checked={isChecked4}
                                    onChange={handleClick4}
                                    style={{ display: 'none' }}
                                />
                                <span
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '60%',
                                        border: isChecked4 ? '6px solid #00BDA9' : '3px solid grey',
                                        display: 'inline-block',
                                        marginTop: '15px',
                                        backgroundColor: 'white',
                                    }}
                                />
                                <span style={{ fontSize: '16px', color: isChecked4 ? '#00BDA9' : 'black' }}>

        </span>
                            </label>
                        </div>
                        {/*//////////////*/}
                        <div
                            style={{
                                position:'absolute',
                                width: '70px',
                                height: '90px',
                                top: '70px',
                                left: '512px',
                                gap: '0px',
                                borderRadius: '10px ',
                                opacity: '0px',
                                background: isChecked5 ? '#E5E5E5' : 'white',
                                border: isChecked5 ? '3px solid #00BDA9' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, .1)'
                            }}
                            onClick={handleClick5}
                        >
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>1000</div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    checked={isChecked5}
                                    onChange={handleClick5}
                                    style={{ display: 'none' }}
                                />
                                <span
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '60%',
                                        border: isChecked5 ? '6px solid #00BDA9' : '3px solid grey',
                                        display: 'inline-block',
                                        marginTop: '15px',
                                        backgroundColor: 'white',
                                    }}
                                />
                                <span style={{ fontSize: '16px', color: isChecked5 ? '#00BDA9' : 'black' }}>

        </span>
                            </label>
                        </div>
                        {/*//////////////*/}
                        <div
                            style={{
                                position:'absolute',
                                width: '70px',
                                height: '90px',
                                top: '70px',
                                left: '615px',
                                gap: '0px',
                                borderRadius: '10px ',
                                opacity: '0px',
                                background: isChecked6 ? '#E5E5E5' : 'white',
                                border: isChecked6 ? '3px solid #00BDA9' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, .1)'
                            }}
                            onClick={handleClick6}
                        >
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>2000</div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    checked={isChecked6}
                                    onChange={handleClick6}
                                    style={{ display: 'none' }}
                                />
                                <span
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '60%',
                                        border: isChecked6 ? '6px solid #00BDA9' : '3px solid grey',
                                        display: 'inline-block',
                                        marginTop: '15px',
                                        backgroundColor: 'white',
                                    }}
                                />
                                <span style={{ fontSize: '16px', color: isChecked6 ? '#00BDA9' : 'black' }}>

        </span>
                            </label>
                        </div>

                        {/*//////////////*/}
                        <div
                            style={{
                                position:'absolute',
                                width: '70px',
                                height: '90px',
                                top: '70px',
                                left: '715px',
                                gap: '0px',
                                borderRadius: '10px ',
                                opacity: '0px',
                                background: isChecked7 ? '#E5E5E5' : 'white',
                                border: isChecked7 ? '3px solid #00BDA9' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '1px 1px 5px 5px rgba(0, 0, 0, .1)'
                            }}
                            onClick={handleClick7}
                        >
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>5000</div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    checked={isChecked7}
                                    onChange={handleClick7}
                                    style={{ display: 'none' }}
                                />
                                <span
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '60%',
                                        border: isChecked7 ? '6px solid #00BDA9' : '3px solid grey',
                                        display: 'inline-block',
                                        marginTop: '15px',
                                        backgroundColor: 'white',
                                    }}
                                />
                                <span style={{ fontSize: '16px', color: isChecked7 ? '#00BDA9' : 'black' }}>

        </span>
                            </label>
                        </div>
                    </div>
                    <div style={{width: 820, height: !openStatus.education ? 700 : 1115, left: 29, top: 473, position: 'absolute', background: '#F5F5F5', borderRadius: 10}} >
                        <div style={{left: 30, top: 25, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Who do you want to survey?</div>
                        <div style={{left:30, top: 58, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Tale is built on a foundation of reliable, high-quality data</div>
                        <button onClick={handleNext} style={{height: 45, padding: 16, left: 625, top: 25, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>+ Add targeting criteria</div>
                        </button>

                        <div onClick={() => handleToggle('country')}  style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 100, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                <div style={{width: 24, height: 24, padding: 2, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 20, height: 20, position: 'relative'}}>
                                        <img src={process.env.PUBLIC_URL + '/country.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                                    </div>
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                    <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Country</div>
                                    <div style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Tunisia</div>
                                </div>
                            </div>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                {!openStatus.country && <div><FaAngleRight /></div>}
                                {openStatus.country && <div style={{ transform: 'rotate(90deg)' }}><FaAngleRight /></div>}
                            </div>
                        </div>
                        <div onClick={() => handleToggle('country')} style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 240, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                <div style={{width: 24, height: 24, position: 'relative'}}>
                                    <img src={process.env.PUBLIC_URL + '/gender.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                    <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Age range</div>
                                    <div style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>18-99+</div>
                                </div>
                            </div>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <FaAngleRight  />
                            </div>
                        </div>
                        <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 310, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <img src={process.env.PUBLIC_URL + '/household.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                                    </div>
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                    <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Household Income</div>
                                    <div style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>0DT - 200DT</div>
                                </div>
                            </div>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <FaAngleRight  />
                            </div>
                        </div>
                        <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 380, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                <div style={{width: 24, height: 24, position: 'relative'}}>
                                    <img src={process.env.PUBLIC_URL + '/marital.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                    <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Marital Status</div>
                                    <div style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Married</div>
                                </div>
                            </div>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <FaAngleRight  />
                            </div>
                        </div>
                        <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 170, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                <div style={{width: 24, height: 24, position: 'relative'}}>
                                    <img src={process.env.PUBLIC_URL + '/age.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                                </div>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                    <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Gender</div>
                                    <div style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Both</div>
                                </div>
                            </div>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <FaAngleRight  />
                            </div>
                        </div>
                        {/*{openStatus.education ? (*/}
                        {/*{openStatus.education ? (*/}
                        {openStatus.education ? (
                                <div  style={{width: 780, height: 512, left: 30, top: 450, position: 'absolute', background: 'white', borderRadius: 10, border: '1px rgba(0, 0, 0, 0.15) solid'}}>
                                <div  onClick={() => handleToggle('education')} style={{left: 16, top: 8, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <img src={process.env.PUBLIC_URL + '/Edu.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                                    </div>
                                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                        <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Education</div>
                                        <div style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Primary school, High school, Some college, 2-year college, Some high school</div>
                                    </div>
                                </div>
                                <div style={{width: 24, height: 24, left: 736, top: 16, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0'}}>
                                    {!openStatus.education && <div ><FaAngleRight /></div>}
                                    {openStatus.education && <div  onClick={() => handleToggle('education')} style={{ transform: 'rotate(360deg)' }}><FaAngleRight /></div>}
                                </div>
                                <div style={{width: 420, left: 32, top: 74, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', lineHeight: 1, wordWrap: 'break-word'}}>What is the highest level of school that you have completed?</div>
                                <div style={{ left: 32, top: 110, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onClick={handleSelectAllChange}
                                            style=
                                                {{
                                                    width: '27px',
                                                height: '27px',
                                                border: `3px solid ${selectAllChecked ? '#00BDA9' : '#CCCCCC'}`,
                                                borderRadius: '20%',
                                                backgroundColor: selectAllChecked ? '#00BDB9' : 'transparent',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                }}/>
                                    </label>
                                    <div style={{ color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '400', lineHeight: 1, wordWrap: 'break-word' }}>Select all</div>
                                </div>
                                <div style={{left: 32, top: 166, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                                    <div style={{ position: 'relative', display: 'grid' }}>
                                        {cities.map(city => (
                                            <label key={city} style={{ width:150,marginRight:160,marginTop: 7, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                                                <input
                                                type="checkbox"
                                                value={city}
                                                checked={selectedCities.includes(city)}
                                                onChange={() => handleCityChange(city)}
                                                style={{ display: 'none' }}
                                                />
                                                <span
                                                    style={{
                                                    width: '27px',
                                                    height: '27px',
                                                    border: '3px solid ' + (selectedCities.includes(city) ? '#00BDA9' : '#CCCCCC'),
                                                    borderRadius: '20%',
                                                    marginRight: '5px',
                                                    backgroundColor: selectedCities.includes(city) ?  '#00BDB9' : 'transparent',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                                >
                                                    {selectedCities.includes(city) && (
                                                        <svg viewBox="0 4 8 8" style={{ fill: 'white', width: '80%', height: '80%', display: 'inline-block' }}>
                                                            <path d="M1.5 9l2 2 4-4-1-1-3 3-1-1z" />
                                                        </svg>
                                                    )}
                                                </span>
                                            <span style={{ color: selectedCities.includes(city) ? '#00BDA9' : '#111', fontSize: '16px' }}>{city}</span>
                                        </label>
                                    ))}
                                    </div>
                                </div>
                                    <button style={{border:"none",width: 118, height: 51, padding: 16, left: 640, top: 450, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Submit</div>
                                    </button>
                                    <button style={{width: 118, height: 51, padding: 16, left: 490, top: 450, position: 'absolute', borderRadius: 10, border: '2px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Cancel</div>
                                    </button>
                                    <div style={{width: 28.44, height: 32, left: 30, top: 460, position: 'absolute'}}>
                                        <img src={process.env.PUBLIC_URL + '/poubelle.png'} style={{width: 28.44, height: 32, position: 'relative'}}></img>
                                    </div>
                            </div>
                        ) : (
                            <div onClick={() => handleToggle('education')} style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: 450, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <img src={process.env.PUBLIC_URL + '/cc.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                                    </div>
                                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Education</div>
                                        <div style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>Primary school, High school, Some college, 2-year college, Some high school</div>
                                    </div>
                                </div>
                                <div style={{width: 24, height: 24, position: 'relative'}}>
                                    <FaAngleRight  />
                                </div>
                            </div>
                        )}
                            <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: !openStatus.education ? 520 : 975, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                    <div style={{width: 24, height: 24, position: 'relative'}}>
                                        <img src={process.env.PUBLIC_URL + '/cc.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                                    </div>
                                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Credit Cards Owned</div>
                                        <div style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>American Express, Discover, Mastercard</div>
                                    </div>
                                </div>
                                <div style={{width: 24, height: 24, position: 'relative'}}>
                                    <FaAngleRight  />
                                </div>
                            </div>
                            <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 30, top: !openStatus.education ? 590 : 1045, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                                    <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <div style={{width: 24, height: 24, position: 'relative'}}>
                                            <img src={process.env.PUBLIC_URL + '/ca.png'} style={{width: 28.44, height: 28, position: 'relative'}}></img>
                                        </div>
                                    </div>
                                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '700', wordWrap: 'break-word'}}>Current Auto Insurance</div>
                                        <div style={{color: '#333333', fontSize: 14, fontFamily: 'revert', fontWeight: '400', wordWrap: 'break-word'}}>American Family Insurance Group, Auto-Owners Insurance Group</div>
                                    </div>
                                </div>
                                <div style={{width: 24, height: 24, position: 'relative'}}>
                                    <FaAngleRight  />
                                </div>
                            </div>
                        </div>
                    <button style={{width: 160, height: 60, padding: 16, left: 30, top: !openStatus.education ? 1200 : 1600, position: 'absolute', borderRadius: 10, border: '2px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </button>
                    </div>
                    <div style={{position:'absolute',top: 330,left: 1280, width: 400,height: 757,position: 'absolute',border: '2px solid ',border: '2px solid transparent',borderImage: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%) 1',borderRadius: '20px',backgroundColor: 'white' }}>
                    </div>
                    <div style={{
                        width: '276px',
                        height: '0px',
                        position: 'absolute',
                        top: '647px',
                        left: '1185px',
                        border: '1px solid',
                        borderImageSource: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                        borderImageSlice: '1',
                        transform: 'rotate(-90deg)' // Rotate the line to make it vertical
                    }}></div>


                    <div style={{
                        width: 143,
                        height: 25,
                        position: 'absolute',
                        top: 346,
                        left: 1306,
                        fontFamily: 'Revert',
                        fontWeight: 700,
                        fontSize: 18,
                        lineHeight: '24.51px',
                        background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Order summary
                    </div>
                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 377,
                        left: 1312,
                        fontFamily: 'Revert',
                        fontWeight: 600,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        Completed responses
                    </div>


                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 377,
                        left: 1650,
                        fontFamily: 'Revert',
                        fontWeight: 600,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        50
                    </div>


                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 407,
                        left: 1312,
                        fontFamily: 'Revert',
                        fontWeight: 600,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        Price per responses
                    </div>
                    <img src={process.env.PUBLIC_URL + '/Fdown.png'} style={{width: 28.44, height: 28.44, left: 1463, top: 407, position: 'absolute'}}></img>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 407,
                        left: 1640,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        2DT
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 437,
                        left: 1332,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        10 survey questions
                    </div>
                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 437,
                        left: 1630,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        20DT
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 467,
                        left: 1334,
                        fontFamily: 'Revert',
                        fontWeight: 600,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        Targeting options
                    </div>
                    <img src={process.env.PUBLIC_URL + '/Fdown.png'} style={{width: 28.44, height: 28.44, left: 1640, top: 467, position: 'absolute'}}></img>









                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 507,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 700,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        textAlign: 'left',
                        display: 'flex',
                        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Country
                    </div>
                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 532,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        Tunisia
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 507,
                        left: 1660,
                        fontFamily: 'Revert',
                        fontWeight: 700,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        -
                    </div>



                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 562,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 700,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        textAlign: 'left',
                        display: 'flex',
                        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Regions
                    </div>
                    <div style={{
                        width: 413,
                        height: 25,
                        position: 'absolute',
                        top: 587,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        Mannouba, Ariana, Ben arous
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 562,
                        left: 1630,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        10DT
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 617,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 700,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        textAlign: 'left',
                        display: 'flex',
                        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Gender
                    </div>
                    <div style={{
                        width: 413,
                        height: 25,
                        position: 'absolute',
                        top: 645,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        Both
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 617,
                        left: 1660,
                        fontFamily: 'Revert',
                        fontWeight: 700,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        -
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 682,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 700,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        textAlign: 'left',
                        display: 'flex',
                        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Age Range
                    </div>
                    <div style={{
                        width: 413,
                        height: 25,
                        position: 'absolute',
                        top: 707,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        18 - 35
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 682,
                        left: 1620,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        100DT
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 742,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 700,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        textAlign: 'left',
                        display: 'flex',
                        background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        Household Income
                    </div>
                    <div style={{
                        width: 413,
                        height: 25,
                        position: 'absolute',
                        top: 767,
                        left: 1345,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        0DT - 200KDT
                    </div>

                    <div style={{
                        width: 193,
                        height: 25,
                        position: 'absolute',
                        top: 742,
                        left: 1630,
                        fontFamily: 'Revert',
                        fontWeight: 400,
                        fontSize: 17,
                        lineHeight: '24.51px',
                        color: 'black',
                        textAlign: 'left',
                        display: 'flex' // Display in the same line
                    }}>
                        10DT
                    </div>
















                    <div style={{
                        width: '368px',
                        height: '58px',
                        position: 'absolute',
                        top: '802px',
                        left: '1290px',
                        padding: '8px 0px 0px 20px', // Added padding-left to move the text 20px from the left
                        backgroundColor: '#f2f2f2', // Light grey background color
                        borderRadius: '10px', // Rounded corners
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: 193,
                            height: 25,
                            position: 'absolute',
                            top: 10,
                            left: 17,
                            fontFamily: 'Revert',
                            fontWeight: 600,
                            fontSize: 17,
                            lineHeight: '24.51px',
                            color: 'black',
                            textAlign: 'left',
                            display: 'flex' // Display in the same line
                        }}>
                            Subtotal
                        </div>

                        <div style={{
                            width: 193,
                            height: 25,
                            position: 'absolute',
                            top: 10,
                            right: -127,
                            fontFamily: 'Revert',
                            fontWeight: 600,
                            fontSize: 17,
                            lineHeight: '24.51px',
                            color: 'black',
                            textAlign: 'left',
                            display: 'flex' // Display in the same line
                        }}>
                            240DT
                        </div>

                        <div style={{
                            width: 193,
                            height: 25,
                            position: 'absolute',
                            top: 35,
                            left: 17,
                            fontFamily: 'Revert',
                            fontWeight:400,
                            fontSize: 17,
                            lineHeight: '24.51px',
                            color: 'GREY',
                            textAlign: 'left',
                            display: 'flex' // Display in the same line
                        }}>
                            TVA 19%
                        </div>
                        <div style={{
                            width: 193,
                            height: 25,
                            position: 'absolute',
                            top: 35,
                            right: -143,
                            fontFamily: 'Revert',
                            fontWeight:400,
                            fontSize: 17,
                            lineHeight: '24.51px',
                            color: 'GREY',
                            textAlign: 'left',
                            display: 'flex' // Display in the same line
                        }}>
                            45.6
                        </div>

                    </div>





                    <div style={{
                        width: '368px',
                        height: '68px',
                        position: 'absolute',
                        top: '872px',
                        left: '1290px',
                        padding: '8px 0px 0px 20px', // Added padding-left to move the text 20px from the left
                        backgroundColor: '#f2f2f2', // Light grey background color
                        borderRadius: '10px', // Rounded corners
                        display: 'flex',
                        alignItems: 'center'
                    }}>


                        <div style={{
                            width: 193,
                            height: 25,
                            position: 'absolute',
                            top: 15,
                            right: -37,
                            fontFamily: 'Revert',
                            fontWeight: 600,
                            fontSize: 17,
                            lineHeight: '24.51px',
                            color: 'black',
                            textAlign: 'left',
                            display: 'flex' // Display in the same line
                        }}>
                            Total to pay (TTC)
                        </div>


                        <div style={{
                            width: 193,
                            height: 25,
                            position: 'absolute',
                            top: 45,
                            right: -43,
                            fontFamily: 'Revert',
                            fontWeight: 700,
                            fontSize: 18,
                            lineHeight: '24.51px',
                            background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            285.6DT
                        </div>
                        <img src={process.env.PUBLIC_URL + '/pay.png'} style={{width: 60, height: 60, left: 16, top: 8, position: 'absolute'}}></img>

                    </div>





                    <button style={{border:"none",position:"absolute", borderRadius: 16, width: 385,height: 60,left: 1290,top: 962, padding: 16, background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'WHITE', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Confirm your order</div>
                    </button>

                    <button style={{
                        border: '3px solid',
                        borderImage: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%) 1',
                        borderRadius: '10px',
                        backgroundColor: "transparent",
                        position: "absolute",
                        top: 1029,
                        left: 1290,
                        width: 185,
                        height: 51,
                        padding: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'inline-flex'
                    }}>
                        <div style={{
                            background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontSize: 14,
                            fontFamily: 'revert',
                            fontWeight: '600',
                            wordWrap: 'break-word'
                        }}>
                            Register
                        </div>
                    </button>



                    <button style={{
                        border: '3px solid',
                        borderImage: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%) 1',
                        borderRadius: '10px',
                        backgroundColor: "transparent",
                        position: "absolute",
                        top: 1029,
                        left: 1490,
                        width: 185,
                        height: 51,
                        padding: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'inline-flex'
                    }}>
                        <div style={{
                            background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            fontSize: 14,
                            fontFamily: 'revert',
                            fontWeight: '600',
                            wordWrap: 'break-word'
                        }}>
                            Exporter in PDF
                        </div>
                    </button>


                </div>
            {showConfirmation && <AddTargetCriteriaPopup onClose={handleCloseConfirmation} onValidate={handleValidateConfirmation} />}
        </div>
    );
};
export default SurveyColl;
