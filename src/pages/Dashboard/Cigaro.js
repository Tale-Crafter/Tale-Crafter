// import Cigaro from "./pages/Dashboard/Cigaro";
// {
//     path: "/Cigaro", element: <Cigaro />,},
// Home.js or your component for the home page
import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import { useNavigate } from 'react-router-dom';
import BusinessLeftsidebar from "./BusinessLeftsidebar";
import BHeader from "./BHeader";
import { EditOutlined } from '@ant-design/icons'; // import EditOutlined icon
import { Table, Button, Modal } from 'antd';
import moment from 'moment'; // for date formatting




const SurveyColl = () => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showConfirmation1, setShowConfirmation1] = useState(false);




    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };






    const CountryButton = ({ countryName }) => {
        <CountryButton countryName="Tunisia" />


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


    return (
        <div className="App">
            <div style={{filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} style={{filter: showConfirmation || showConfirmation1 ?  'blur(5px)' : 'none'}} />
            </div>
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BHeader/>
                <div style={{width: 1400, height: 800, buttom:20,left: 340, top: 80, position: 'absolute', background: 'white', borderRadius: 16}} >
                    {/* Intégrez le formulaire de contact ici */}


                    <img src={process.env.PUBLIC_URL + '/retour.png'} style={{width: 30, height: 30, left: 35, top: 25, position: 'absolute'}}></img>
                    <div style={{left: 70, top: 20, position: 'absolute', color: '#111111', fontSize: 26, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Tobacco consumption</div>






                    <img src={process.env.PUBLIC_URL + '/cig.png'} style={{borderRadius:10,width: 1320, height: 250, left: 35, top: 85, position: 'absolute'}}></img>
                    <div style={{left: 45, top: 95,width:90,height:20,background:'#00BDA9',borderRadius:10, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'REVERT', fontWeight: '600',  wordWrap: 'break-word'}}>Points 50</div>


                    <img src={process.env.PUBLIC_URL + '/taleo.png'} style={{borderRadius:10,width: 40, height: 40, left: 45, top: 285, position: 'absolute'}}></img>
                    <div style={{left: 90, top: 295, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'REVERT', fontWeight: '600',  wordWrap: 'break-word'}}>Tale</div>








                    <div style={{left: 40, top: 340, position: 'absolute', color: '#111111', fontSize: 20, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Details</div>


                    <img src={process.env.PUBLIC_URL + '/noq.png'} style={{width: 28, height: 28, left: 58, top: 375, position: 'absolute'}}></img>
                    <div style={{left: 90, top: 383, position: 'absolute', color: 'grey', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Number of Questions:</div>
                    <div style={{left: 235, top: 383, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '750',  wordWrap: 'break-word'}}>15</div>


                    <img src={process.env.PUBLIC_URL + '/pe.png'} style={{width: 28, height: 28, left: 58, top: 405, position: 'absolute'}}></img>
                    <div style={{left: 90, top: 413, position: 'absolute', color: 'grey', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Points Earned:</div>
                    <div style={{left: 185, top: 413, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '750',  wordWrap: 'break-word'}}>50</div>




                    <div style={{left: 40, top: 475, position: 'absolute', color: '#111111', fontSize: 20, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Introduction</div>
                    <div style={{left: 40, right:30,top: 515, textAlign:'left',position: 'absolute', color: '#111111', fontSize: 16, fontFamily: 'revert', fontWeight: '450',  wordWrap: 'break-word'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>










                    {/*<button style={{border:"none",position:"absolute",top:730,right:20,width: 147, height: 51, padding: 16, background: 'linear-gradient(43.78deg, #00BDA9 13.99%, #00C0FC 101.43%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>*/}
                    {/*    <div style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Start</div>*/}
                    {/*</button>*/}

                </div>
            </div>
        </div>
    );
};
export default SurveyColl;

