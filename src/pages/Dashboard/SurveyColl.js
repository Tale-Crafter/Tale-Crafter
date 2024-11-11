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
                    <div style={{position:"relative",top:-80}}>
                        <div style={{left: 40, top: 105, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Creating a new survey</div>
                        <div style={{left: 190, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Survey Initiation</div>
                        <div style={{width: 157, left: 340, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Question<br/>Development</div>
                        <div style={{width: 160, left: 540, top: 193, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'revert', fontWeight: '600',  wordWrap: 'break-word'}}>Review and Preview</div>
                        <div style={{width: 160, left: 715, top: 193, position: 'absolute', color: '#00BDA9', fontSize: 14, fontFamily: 'revert', fontWeight: '700',  wordWrap: 'break-word'}}>Targeting and<br/>Parameters</div>
                        <div style={{width: 149, left: 890, top: 193, position: 'absolute', color: '#CCCCCC', fontSize: 14, fontFamily: 'revert', fontWeight: '400',  wordWrap: 'break-word'}}>Payment and <br/>Finalization</div>
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
                            <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />

                        </div>

                        <div style={{width: 24, height: 24, left: 890, top: 161, position: 'absolute'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                        </div>
                        <div style={{width: 143, height: 0, left: 536, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                        <div style={{width: 143, height: 0, left: 711, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                        <div style={{width: 143, height: 0, left: 886, top: 171, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                        <div style={{width: 143, height: 0, left: 361, top: 171, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                    </div>
                    <div style={{left: 50, top: 260, position: 'absolute', color: '#111111', fontSize: 22, fontFamily: 'REVERT', fontWeight: '700',  wordWrap: 'break-word'}}>Survey Collectors</div>



                    <button style={{border:"none",position:"absolute",top:200,right:330,width: 287, height: 71, padding: 16, background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Obtain targeted responses</div>
                    </button>
                    <button style={{border:"none",position:"absolute",top:200,right:50,width: 257, height: 71, padding: 16, background: 'lightgrey', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '550',textAlign:'left', wordWrap: 'break-word'}}>Add new collectors</div>
                    </button>

                    {/* Your sidebar and header components */}
                    <Table
                        dataSource={data}
                        columns={columns}
                        pagination={false}
                        components={{
                            header: {
                                style: { background: 'gray' },
                            },
                        }}
                        className="custom-table-header"
                        style={{ position:"relative",top:280,marginTop: 20, border: '1px solid #ddd' }}
                    />


                    <button style={{borderColor:'black',position:"absolute",top:730,left:30,width: 147, height: 51, padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </button>

                    <button style={{border:"none",position:"absolute",top:730,right:30,width: 147, height: 51, padding: 16, background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Next</div>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SurveyColl;
