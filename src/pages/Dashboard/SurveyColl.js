import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './App.css';  // Import the CSS file
import BusinessLeftsidebar from "./BusinessLeftsidebar";
import BHeader from "./BHeader";
import { EditOutlined, LinkOutlined, AimOutlined } from '@ant-design/icons'; // import Link and Embed icons
import { Table, Button, Modal } from 'antd';
import moment from 'moment';
import Timeline from "./Timeline"; // for date formatting

// Fetch SurveyColl data function
const fetchSurveyColl = async () => {
    try {
        const response = await fetch('/api/surveycolls'); // Replace with your actual API endpoint
        const data = await response.json();
        return data;  // Assume the response is an array of survey collections
    } catch (error) {
        console.error('Error fetching SurveyColl:', error);
        return [];  // Return empty array on error
    }
};

const SurveyColl = ({ survey, onNext }) => {
    const { iduser } = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showConfirmation1, setShowConfirmation1] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);  // Track the selected option
    const [surveyColls, setSurveyColls] = useState([]);  // State to store fetched SurveyColl data

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    // Use a side effect to trigger the next step when selectedOption is updated
    useEffect(() => {
        if (selectedOption !== null) {
            onNext(survey, selectedOption);
        }
    }, [selectedOption, survey, onNext]);  // Dependencies on selectedOption and survey

    // Fetch SurveyColls when component mounts
    useEffect(() => {
        const loadSurveyColls = async () => {
            const data = await fetchSurveyColl();
            // Filter data where the survey id matches the current survey.id
            const filteredData = data.filter((surveyColl) => surveyColl.survey.id === survey.id);
            setSurveyColls(filteredData);
        };
        loadSurveyColls();
    }, [survey.id]);  // Depend on survey.id to refetch data when it changes

    // Map SurveyColl data to the table format
    const mappedData = surveyColls.map((surveyColl, index) => ({
        key: surveyColl.id,
        icon: surveyColl.codeName.includes('-link') ? <LinkOutlined /> : <AimOutlined />,
        name: surveyColl.codeName,
        status: surveyColl.status === 1 ? 'Open' : 'Closed',
        responses: surveyColl.responses,
        dateCreated: surveyColl.dateCreated,
        dateModified: surveyColl.dateModified,
    }));

    const columns = [
        {
            title: '', // Empty title for the icon column
            dataIndex: 'icon',
            key: 'icon',
            width: 70, // Set width for the column
            fixed: 'left',
        },
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            width: 600,
            fixed: 'left',
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
            render: (date) => moment(date).format('YYYY-MM-DD'),
        },
        {
            title: 'Date Modified',
            dataIndex: 'dateModified',
            key: 'dateModified',
            width: 200,
            render: (date) => moment(date).format('YYYY-MM-DD'),
        },
        {
            title: '',
            width: 40,
            key: 'icon',
            render: (text, record) => (
                <Button onClick={() => handleEdit(record)} type="link" >
                    <img src={process.env.PUBLIC_URL + `/3pts.png`} style={{ height: '100%' }} />
                </Button>
            ),
        },
    ];

    const handleEdit = (record) => {
        console.log('Edit record:', record);
    };

    const components = {
        header: {
            wrapper: (props) => <thead {...props} style={{ background: 'gray' }} />,
        },
    };

    return (
        <div className="App">
            <div style={{ filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            </div>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: '#EFEFEF', marginLeft: !sidebarVisible ? -100 : 0, transition: 'margin-left 0.3s ease', filter: showConfirmation || showConfirmation1 ? 'blur(5px)' : 'none' }}>
                <BHeader />
                <div style={{ width: 1400, height: 800, position: 'absolute', top: 80, left: 340, background: 'white', borderRadius: 16 }} >
                    <div style={{ width: '100%', position: 'absolute', top: -70, left: 0 }}>
                        <Timeline level={3} />
                    </div>

                    <div style={{ left: 50, top: 260, position: 'absolute', color: '#111111', fontSize: 22, fontFamily: 'REVERT', fontWeight: '700', wordWrap: 'break-word' }}>Survey Collectors</div>
                    <button
                        onClick={() => handleOptionSelect('CollNext')}
                        style={{border:"none",position:"absolute",top:200,right:330,width: 287, height: 71, padding: 16, background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Obtain targeted responses</div>
                    </button>
                    <button
                        onClick={() => handleOptionSelect('CollBack')}
                        style={{border:"none",position:"absolute",top:200,right:50,width: 257, height: 71, padding: 16, background: 'lightgrey', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 16, fontFamily: 'revert', fontWeight: '550',textAlign:'left', wordWrap: 'break-word'}}>Add new collectors</div>
                    </button>
                    <Table
                        dataSource={mappedData}
                        columns={columns}
                        pagination={false}
                        components={components}
                        className="custom-table-header"
                        style={{ position: 'relative', top: 280, marginTop: 20, border: '1px solid #ddd' }}
                    />
                    <button
                        onClick={() => handleOptionSelect('CollBack')}
                        style={{borderColor:'black',position:"absolute",top:730,left:30,width: 147, height: 51, padding: 16, background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'black', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                    </button>

                    <button
                        onClick={() => handleOptionSelect('CollNext')}
                        style={{border:"none",position:"absolute",top:730,right:30,width: 147, height: 51, padding: 16, background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'white', fontSize: 14, fontFamily: 'revert', fontWeight: '600', wordWrap: 'break-word'}}>Next</div>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SurveyColl;
