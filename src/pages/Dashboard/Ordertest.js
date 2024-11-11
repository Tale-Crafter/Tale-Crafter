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

    const [isChecked, setIsChecked] = useState(false);




    const handleClick = () => {
        setIsChecked(!isChecked);
    };









    return (
        <div className="App">
            <div style={{width: '100%', height: '100%', position: 'relative', background: '#EFEFEF'}}>
                <div style={{padding: 8, left: 1160, top: 20, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 3.45, height: 1.05, left: 10.27, top: 21, position: 'absolute', border: '2px #F9BC33 solid'}}></div>
                        <div style={{width: 18, height: 15.90, left: 3, top: 2.10, position: 'absolute', border: '2px #F9BC33 solid'}}></div>
                        <div style={{width: 9.75, height: 9.75, left: 12.75, top: 0.75, position: 'absolute', background: '#FF015C', borderRadius: 9999, border: '2px white solid'}} />
                    </div>
                </div>

                <div style={{padding: 8, left: 1112, top: 20, position: 'absolute', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                    <div style={{width: 24, height: 24, paddingLeft: 2, paddingRight: 2, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <div style={{width: 20, height: 14, position: 'relative'}}>
                            <div style={{width: 10, height: 3.50, left: 5, top: 4, position: 'absolute', border: '2px #F9BC33 solid'}}></div>
                            <div style={{width: 20, height: 14, left: 0, top: 0, position: 'absolute', border: '2px #F9BC33 solid'}}></div>
                        </div>
                    </div>
                </div>
                <img style={{width: 48, height: 48, left: 1216, top: 16, position: 'absolute', boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} src="https://via.placeholder.com/48x48" />
                <div style={{width: 17, height: 17, left: 1247, top: 47, position: 'absolute', background: '#151515', borderRadius: 9999, border: '1px #F2F2F2 solid'}} />
                <div style={{width: 15, height: 15, left: 1248, top: 48, position: 'absolute'}}>
                    <div style={{width: 6.25, height: 3.12, left: 4.38, top: 6.25, position: 'absolute', border: '1.33px white solid'}}></div>
                </div>
                <div style={{width: 48, height: 48, left: 198, top: 16, position: 'absolute', background: 'rgba(0, 0, 0, 0.04)', borderRadius: 9999}} />
                <div style={{width: 32, height: 32, left: 206, top: 24, position: 'absolute'}}>
                    <div style={{width: 23.33, height: 15.33, left: 4.33, top: 8.33, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)'}}></div>
                </div>
                <div style={{width: 126, height: 44.56, left: 16, top: 16, position: 'absolute'}}>
                    <div style={{width: 125.31, height: 36.77, left: 0, top: 0.45, position: 'absolute'}}>
                        <div style={{height: 27.48, left: 52.81, top: 3.31, position: 'absolute'}}>
                            <div style={{width: 14.14, height: 27.32, left: 0, top: 0.01, position: 'absolute', background: '#111111'}}></div>
                            <div style={{width: 19.84, height: 21.97, left: 17.13, top: 5.35, position: 'absolute', background: '#111111'}}></div>
                            <div style={{width: 6.93, height: 26.82, left: 40.55, top: 0, position: 'absolute', background: '#111111'}}></div>
                            <div style={{width: 21.67, height: 22.14, left: 50.81, top: 5.34, position: 'absolute', background: '#111111'}}></div>
                        </div>
                        <div style={{width: 33.52, height: 35.68, left: -0, top: 1.09, position: 'absolute', background: 'linear-gradient(337deg, #00C0FF 0%, #00BDA9 99%)'}}></div>
                        <div style={{width: 32.20, height: 22.40, left: 6.55, top: 0, position: 'absolute', background: 'linear-gradient(59deg, #F9C82E 1%, #FE346E 99%)'}}></div>
                    </div>
                    <div style={{width: 55.32, height: 10.40, left: 69.91, top: 33.93, position: 'absolute'}}>
                        <div style={{width: 5.68, height: 7.25, left: 49.64, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                        <div style={{width: 5.68, height: 7.25, left: 43.30, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                        <div style={{width: 6.93, height: 7.25, left: 35.52, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                        <div style={{width: 6.31, height: 7.05, left: 27.61, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                        <div style={{width: 2.20, height: 10.20, left: 23.58, top: 0, position: 'absolute', background: '#666666'}}></div>
                        <div style={{width: 5.68, height: 7.25, left: 16.64, top: 3.15, position: 'absolute', background: '#666666'}}></div>
                        <div style={{width: 6.31, height: 7.05, left: 9.10, top: 3.35, position: 'absolute', background: '#666666'}}></div>
                        <div style={{width: 7.46, height: 10.10, left: 0, top: 0.10, position: 'absolute', background: '#666666'}}></div>
                    </div>
                </div>
                <div style={{width: 1248, height: 1570, left: 13, top: 78, position: 'absolute', background: 'white', borderRadius: 16}} />
                <div style={{width: 800, height: 201, left: 29, top: 256, position: 'absolute', background: 'linear-gradient(360deg, #F4F4F4 0%, #EBEBEB 100%)', borderRadius: 10}} />
                <div style={{width: 800, height: 1093, left: 29, top: 473, position: 'absolute', background: '#F5F5F5', borderRadius: 10}} />
                <div style={{width: 400, height: 737, left: 845, top: 258, position: 'absolute', background: 'white', borderRadius: 10, border: '3px #F9BC33 solid'}} />
                <div style={{width: 368, height: 51, padding: 16, left: 861, top: 861, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Confirm your order</div>
                </div>
                <div style={{left: 861, top: 274, position: 'absolute', color: '#F9BC33', fontSize: 18, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Order summary</div>
                <div style={{left: 40, top: 105, position: 'absolute', color: '#111111', fontSize: 24, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Customer Experience Survey - Consulting Company</div>
                <div style={{width: 147, height: 50, padding: 16, left: 29, top: 1582, position: 'absolute', borderRadius: 10, border: '2px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Previous</div>
                </div>
                <div style={{left: 45, top: 272, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>How many responses do you need?</div>
                <div style={{paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3, left: 619, top: 272, position: 'absolute', background: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{color: '#F9BC33', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>50 : Margin of error > 10%</div>
                </div>
                <div style={{left: 45, top: 489, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Who do you want to survey?</div>
                <div style={{left: 45, top: 521, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Tale is built on a foundation of reliable, high-quality data</div>
                <div style={{height: 45, padding: 16, left: 625, top: 489, position: 'absolute', borderRadius: 10, border: '2px #00BDA9 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>+ Add targeting criteria</div>
                </div>
                <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 53, top: 568, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, padding: 2, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 20, height: 20, position: 'relative'}}>
                                <div style={{width: 20, height: 20, left: 0, top: 0, position: 'absolute', border: '2px #111111 solid'}}></div>
                                <div style={{width: 19, height: 18, left: 0.50, top: 1, position: 'absolute', border: '2px #111111 solid'}}></div>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Country</div>
                            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Tunisia</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 5, height: 10, left: 10, top: 7, position: 'absolute', border: '1.33px #111111 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 53, top: 832, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 18.37, height: 22.03, left: 2.82, top: 0.98, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Marital Status</div>
                            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Married</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 5, height: 10, left: 10, top: 7, position: 'absolute', border: '1.33px #111111 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 53, top: 634, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 16, height: 16, left: 4, top: 4, position: 'absolute', background: '#111111'}}></div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Gender</div>
                            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Both</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 5, height: 10, left: 10, top: 7, position: 'absolute', border: '1.33px #111111 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 752, height: 512, left: 53, top: 898, position: 'absolute', background: 'white', borderRadius: 10, border: '1px rgba(0, 0, 0, 0.15) solid'}}>
                    <div style={{left: 16, top: 8, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 23.67, height: 21.19, left: 0.16, top: 0.81, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)'}}></div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Education</div>
                            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Primary school, High school, Some college, 2-year college, Some high school</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, left: 736, top: 16, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0'}}>
                        <div style={{width: 5, height: 10, left: 10, top: 7, position: 'absolute', border: '1.33px #00BDA9 solid'}}></div>
                    </div>
                    <div style={{width: 420, left: 32, top: 74, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 20, wordWrap: 'break-word'}}>What is the highest level of school that you have completed?</div>
                    <div style={{left: 32, top: 110, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 4, border: '1.50px #CCCCCC solid'}} />
                        </div>
                        <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Select all</div>
                    </div>
                    <div style={{left: 32, top: 166, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 4, border: '1.50px #CCCCCC solid'}} />
                            </div>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Primary school</div>
                        </div>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 4, border: '1.50px #CCCCCC solid'}} />
                            </div>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Some high school</div>
                        </div>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 4, border: '1.50px #CCCCCC solid'}} />
                            </div>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>High school</div>
                        </div>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 4, border: '1.50px #CCCCCC solid'}} />
                            </div>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Some college</div>
                        </div>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 4, border: '1.50px #CCCCCC solid'}} />
                            </div>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>2-year college</div>
                        </div>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 4, border: '1.50px #CCCCCC solid'}} />
                            </div>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>4-year college</div>
                        </div>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 4, border: '1.50px #CCCCCC solid'}} />
                            </div>
                            <div style={{color: 'black', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Graduate degree</div>
                        </div>
                    </div>
                    <div style={{width: 704, height: 0, left: 24, top: 151, position: 'absolute', border: '1px #DDDDDD solid'}}></div>
                    <div style={{width: 118, height: 51, padding: 16, left: 618, top: 445, position: 'absolute', background: 'linear-gradient(90deg, #F9BC33 0%, #FE346E 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: 'white', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Submit</div>
                    </div>
                    <div style={{width: 118, height: 51, padding: 16, left: 492, top: 445, position: 'absolute', borderRadius: 10, border: '2px #111111 solid', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Cancel</div>
                    </div>
                    <div style={{width: 28.44, height: 32, left: 24, top: 456, position: 'absolute'}}>
                        <div style={{width: 0, height: 8, left: 11.38, top: 15.17, position: 'absolute', border: '2px #333333 solid'}}></div>
                        <div style={{width: 0, height: 8, left: 16.62, top: 15.17, position: 'absolute', border: '2px #333333 solid'}}></div>
                        <div style={{width: 21, height: 0, left: 3.50, top: 9.83, position: 'absolute', border: '2px #333333 solid'}}></div>
                        <div style={{width: 15.76, height: 18.67, left: 6.12, top: 9.83, position: 'absolute', border: '2px #333333 solid'}}></div>
                        <div style={{width: 7.88, height: 5.34, left: 10.05, top: 4.50, position: 'absolute', border: '2px #333333 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 53, top: 700, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 18, height: 14, left: 3, top: 5, position: 'absolute', border: '2px #111111 solid'}}></div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Age range</div>
                            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>18-99+</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 5, height: 10, left: 10, top: 7, position: 'absolute', border: '1.33px #111111 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 53, top: 1418, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 19.20, left: -0, top: 2.40, position: 'absolute', background: 'black'}}></div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Credit Cards Owned</div>
                            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>American Express, Discover, Mastercard</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 5, height: 10, left: 10, top: 7, position: 'absolute', border: '1.33px #111111 solid'}}></div>
                    </div>
                </div>
                <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 53, top: 766, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
                                <div style={{width: 18, height: 18, left: 3, top: 3, position: 'absolute', background: '#111111'}}></div>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Household Income</div>
                            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>0DT - 200DT</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 5, height: 10, left: 10, top: 7, position: 'absolute', border: '1.33px #111111 solid'}}></div>
                    </div>
                </div>
                <div
                    style={{
                        position:'absolute',
                        width: '100px',
                        height: '120px',
                        top: '86px',
                        left: '29px',
                        gap: '0px',
                        borderRadius: '10px ',
                        opacity: '0px',
                        background: isChecked ? '#E5E5E5' : 'white',
                        border: isChecked ? '5px solid #00BDA9' : '3px solid grey',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={handleClick}
                >
                    <div style={{ fontSize: '26px', fontWeight: 'bold' }}>50</div>
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
                <div style={{width: 752, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, left: 53, top: 1484, position: 'absolute', background: 'rgba(0, 0, 0, 0.06)', borderRadius: 10, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                        <div style={{width: 24, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute'}}></div>
                                <div style={{width: 20, height: 17, left: 2, top: 4, position: 'absolute', background: 'black'}}></div>
                            </div>
                        </div>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                            <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Current Auto Insurance</div>
                            <div style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>American Family Insurance Group, Auto-Owners Insurance Group</div>
                        </div>
                    </div>
                    <div style={{width: 24, height: 24, position: 'relative'}}>
                        <div style={{width: 5, height: 10, left: 10, top: 7, position: 'absolute', border: '1.33px #111111 solid'}}></div>
                    </div>
                </div>

                <div style={{left: 868, top: 315, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Completed responses</div>
                <div style={{left: 1213, top: 315, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>50</div>
                <div style={{left: 868, top: 350, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Price per responses</div>
                <div style={{left: 1203, top: 350, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>2DT</div>
                <div style={{left: 884, top: 385, position: 'absolute', color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>10 survey questions</div>
                <div style={{width: 368, padding: 8, left: 861, top: 687, position: 'absolute', background: 'rgba(0, 0, 0, 0.05)', borderRadius: 10, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 265, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Subtotal</div>
                        <div style={{color: '#666666', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>TVA 19%</div>
                    </div>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 4, display: 'inline-flex'}}>
                        <div style={{textAlign: 'right', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>240DT</div>
                        <div style={{color: '#666666', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>45.6</div>
                    </div>
                </div>
                <div style={{left: 893, top: 447, position: 'absolute'}}><span style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Country<br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Tunisia</span></div>
                <div style={{left: 893, top: 495, position: 'absolute'}}><span style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Regions<br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Mannouba, Ariana, Ben arous</span></div>
                <div style={{left: 893, top: 541, position: 'absolute'}}><span style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Gender<br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>Both</span></div>
                <div style={{left: 893, top: 587, position: 'absolute'}}><span style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Age Range<br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>18 - 35</span></div>
                <div style={{left: 893, top: 633, position: 'absolute'}}><span style={{color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Household Income<br/></span><span style={{color: '#333333', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>0DT - 200KDT</span></div>
                <div style={{left: 884, top: 420, position: 'absolute', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Targeting options</div>
                <div style={{left: 1195, top: 385, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>20DT</div>
                <div style={{left: 1224, top: 447, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>-</div>
                <div style={{left: 1195, top: 495, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>10DT</div>
                <div style={{left: 1224, top: 541, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>-</div>
                <div style={{left: 1183, top: 587, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>100 DT</div>
                <div style={{left: 1195, top: 633, position: 'absolute', textAlign: 'right', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', wordWrap: 'break-word'}}>10DT</div>
                <div style={{width: 16, height: 16, left: 1213, top: 422, position: 'absolute'}}>
                    <div style={{width: 10.67, height: 6.67, left: 2.67, top: 4.67, position: 'absolute', background: '#111111'}}></div>
                </div>
                <div style={{width: 16, height: 16, left: 1004, top: 352, position: 'absolute'}}>
                    <div style={{width: 10.67, height: 6.67, left: 2.67, top: 4.67, position: 'absolute', background: '#111111'}}></div>
                </div>
                <div style={{width: 220, height: 0, left: 885, top: 448, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #00BDA9 solid'}}></div>
                <div style={{left: 77, top: 318, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                    <div style={{paddingTop: 16, paddingBottom: 16, background: 'rgba(0, 192, 252, 0.09)', borderRadius: 10, border: '3px #00BDA9 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 74, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>50</div>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 50}} />
                            <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)', borderRadius: 9999}} />
                        </div>
                    </div>
                    <div style={{paddingTop: 16, paddingBottom: 16, background: 'white', boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.10)', borderRadius: 10, border: '3px white solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 74, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>100</div>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                        </div>
                    </div>
                    <div style={{paddingTop: 16, paddingBottom: 16, background: 'white', boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.10)', borderRadius: 10, border: '3px white solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 74, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>150</div>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                        </div>
                    </div>
                    <div style={{paddingTop: 16, paddingBottom: 16, background: 'white', boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.10)', borderRadius: 10, border: '3px white solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 74, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>250</div>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                        </div>
                    </div>
                    <div style={{paddingTop: 16, paddingBottom: 16, background: 'white', boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.10)', borderRadius: 10, border: '3px white solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 74, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>500</div>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                        </div>
                    </div>
                    <div style={{paddingTop: 16, paddingBottom: 16, background: 'white', boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.10)', borderRadius: 10, border: '3px white solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 74, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>1000</div>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                        </div>
                    </div>
                    <div style={{paddingTop: 16, paddingBottom: 16, background: 'white', boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.10)', borderRadius: 10, border: '3px white solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 74, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>2000</div>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                        </div>
                    </div>
                    <div style={{paddingTop: 16, paddingBottom: 16, background: 'white', boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.10)', borderRadius: 10, border: '3px white solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 74, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>5000</div>
                        <div style={{width: 24, height: 24, position: 'relative'}}>
                            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', borderRadius: 50, border: '3px #CCCCCC solid'}} />
                        </div>
                    </div>
                </div>
                <div style={{width: 368, left: 861, top: 928, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 18, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', height: 51, padding: 16, borderRadius: 10, border: '2px #F9BC33 solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: '#F9BC33', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Exporter in PDF</div>
                    </div>
                    <div style={{flex: '1 1 0', height: 51, padding: 16, borderRadius: 10, border: '2px #F9BC33 solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <div style={{color: '#F9BC33', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>Register</div>
                    </div>
                </div>
                <div style={{width: 995, left: 229, top: 161, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                                <div style={{width: 16, height: 16, left: 4, top: 4, position: 'absolute'}}>
                                    <div style={{width: 11.17, height: 8.38, left: 2.55, top: 4.01, position: 'absolute', background: 'white'}}></div>
                                </div>
                            </div>
                            <div style={{flex: '1 1 0', height: 0, transform: 'rotate(180deg)', transformOrigin: '0 0', border: '2px #00BDA9 solid'}}></div>
                        </div>
                        <div style={{alignSelf: 'stretch', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 16, wordWrap: 'break-word'}}>Survey Initiation</div>
                    </div>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                                <div style={{width: 16, height: 16, left: 4, top: 4, position: 'absolute'}}>
                                    <div style={{width: 11.17, height: 8.38, left: 2.55, top: 4.01, position: 'absolute', background: 'white'}}></div>
                                </div>
                            </div>
                            <div style={{flex: '1 1 0', height: 0, transform: 'rotate(180deg)', transformOrigin: '0 0', border: '2px #00BDA9 solid'}}></div>
                        </div>
                        <div style={{alignSelf: 'stretch', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 16, wordWrap: 'break-word'}}>Question Development</div>
                    </div>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                                <div style={{width: 16, height: 16, left: 4, top: 4, position: 'absolute'}}>
                                    <div style={{width: 11.17, height: 8.38, left: 2.55, top: 4.01, position: 'absolute', background: 'white'}}></div>
                                </div>
                            </div>
                            <div style={{flex: '1 1 0', height: 0, transform: 'rotate(180deg)', transformOrigin: '0 0', border: '2px #00BDA9 solid'}}></div>
                        </div>
                        <div style={{alignSelf: 'stretch', color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', lineHeight: 16, wordWrap: 'break-word'}}>Review and Preview</div>
                    </div>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #00BDA9 0%, #00C0FC 100%)', borderRadius: 9999}} />
                                <div style={{width: 12, height: 12, left: 6, top: 6, position: 'absolute', background: 'white', borderRadius: 9999}} />
                            </div>
                            <div style={{flex: '1 1 0', height: 0, transform: 'rotate(180deg)', transformOrigin: '0 0', border: '1px #DDDDDD solid'}}></div>
                        </div>
                        <div style={{alignSelf: 'stretch', color: '#00BDA9', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '600', lineHeight: 16, wordWrap: 'break-word'}}>Targeting and Parameters</div>
                    </div>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                            <div style={{width: 24, height: 24, position: 'relative'}}>
                                <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', background: '#DDDDDD', borderRadius: 9999}} />
                            </div>
                        </div>
                        <div style={{alignSelf: 'stretch', color: '#999999', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Payment and Finalization</div>
                    </div>
                </div>
                <div style={{width: 368, height: 92, left: 861, top: 753, position: 'absolute'}}>
                    <div style={{width: 368, height: 92, left: 0, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.05)', borderRadius: 10}} />
                    <div style={{width: 122, height: 60, left: 230, top: 16, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 8, display: 'inline-flex'}}>
                        <div style={{color: '#111111', fontSize: 14, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Total to pay (TTC)</div>
                        <div style={{textAlign: 'right', color: '#F9BC33', fontSize: 24, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>285.6DT</div>
                    </div>
                    <div style={{width: 60, height: 60, paddingLeft: 5.31, paddingRight: 5.31, left: 16, top: 16, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{width: 49.39, height: 60, position: 'relative'}}>
                            <div style={{width: 49.39, height: 60, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #FFB3B3 0%, rgba(255, 232, 220, 0) 99%)'}}></div>
                            <div style={{width: 45.66, height: 53.26, left: 0.61, top: 3.66, position: 'absolute'}}>
                                <div style={{width: 45.66, height: 53.26, left: 0, top: 0, position: 'absolute'}}>
                                    <div style={{width: 39.79, height: 43.43, left: 3.67, top: 4.62, position: 'absolute'}}>
                                        <div style={{width: 11, height: 19.95, left: 0, top: 23.48, position: 'absolute'}}>
                                            <div style={{width: 11, height: 3.99, left: 0, top: 15.96, position: 'absolute', background: '#FFAB66'}}></div>
                                            <div style={{width: 11, height: 3.99, left: 0, top: 11.97, position: 'absolute', background: '#FF9D33'}}></div>
                                            <div style={{width: 11, height: 3.99, left: 0, top: 7.98, position: 'absolute', background: '#FFAB66'}}></div>
                                            <div style={{width: 11, height: 3.99, left: 0, top: 3.99, position: 'absolute', background: '#FF9D33'}}></div>
                                            <div style={{width: 11, height: 3.99, left: 0, top: 0, position: 'absolute', background: '#FFAB66'}}></div>
                                        </div>
                                        <div style={{width: 36.29, height: 43.43, left: 3.50, top: 0, position: 'absolute'}}>
                                            <div style={{width: 7.50, height: 12.10, left: 0, top: 0, position: 'absolute'}}>
                                                <div style={{width: 7.50, height: 12.10, left: 0, top: 0, position: 'absolute', background: '#FF6C6C'}}></div>
                                                <div style={{width: 7.50, height: 10.88, left: 0, top: 0, position: 'absolute', background: '#FF4D4D'}}></div>
                                            </div>
                                            <div style={{width: 30.32, height: 43.43, left: 1.99, top: 0, position: 'absolute', background: 'white'}}></div>
                                            <div style={{width: 4.95, height: 9.58, left: 27.37, top: 7.99, position: 'absolute', background: '#EBEBFF'}}></div>
                                            <div style={{width: 7.81, height: 10.87, left: 1.99, top: 0, position: 'absolute', background: '#EBEBFF'}}></div>
                                            <div style={{width: 30.32, height: 6.11, left: 5.97, top: 37.32, position: 'absolute', background: '#FF6C6C'}}></div>
                                        </div>
                                    </div>
                                    <div style={{width: 3.05, height: 2.11, left: 42.61, top: 20.64, position: 'absolute', background: '#6C6CFF'}}></div>
                                    <div style={{width: 3.05, height: 2.11, left: 35.87, top: -0, position: 'absolute', background: '#FF6C6C'}}></div>
                                    <div style={{width: 3.05, height: 2.11, left: -0, top: 24.15, position: 'absolute', background: '#FFAB66'}}></div>
                                    <div style={{width: 3.05, height: 3.05, left: 41.50, top: 3.10, position: 'absolute', background: '#FFAB66'}}></div>
                                    <div style={{width: 3.05, height: 3.05, left: 29.87, top: 50.22, position: 'absolute', background: '#FF6C6C'}}></div>
                                </div>
                                <div style={{width: 22.82, height: 1.17, left: 14.22, top: 29.28, position: 'absolute', background: '#FF9494'}}></div>
                                <div style={{width: 9.11, height: 1.17, left: 26.01, top: 36.43, position: 'absolute', background: '#8383FF'}}></div>
                                <div style={{width: 2.08, height: 1.17, left: 33.05, top: 34.08, position: 'absolute', background: '#8383FF'}}></div>
                                <div style={{width: 3.13, height: 1.17, left: 28.47, top: 34.08, position: 'absolute', background: '#8383FF'}}></div>
                                <div style={{width: 17.94, height: 13.99, left: 16.48, top: 13.44, position: 'absolute'}}>
                                    <div style={{width: 10.16, height: 13.99, left: 0, top: 0, position: 'absolute'}}>
                                        <div style={{width: 10.16, height: 1.17, left: 0, top: 12.82, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 6.65, height: 1.17, left: 0, top: 10.25, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 10.16, height: 1.17, left: 0, top: 7.69, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 9.11, height: 1.17, left: 0, top: 5.13, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 7.70, height: 1.17, left: 0, top: 2.56, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 10.16, height: 1.17, left: 0, top: 0, position: 'absolute', background: '#8383FF'}}></div>
                                    </div>
                                    <div style={{width: 3.13, height: 13.99, left: 14.80, top: -0, position: 'absolute'}}>
                                        <div style={{width: 3.13, height: 1.17, left: -0, top: 12.82, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 3.13, height: 1.17, left: -0, top: 10.25, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 3.13, height: 1.17, left: -0, top: 7.69, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 3.13, height: 1.17, left: -0, top: 5.13, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 3.13, height: 1.17, left: -0, top: 2.56, position: 'absolute', background: '#8383FF'}}></div>
                                        <div style={{width: 3.13, height: 1.17, left: 0, top: 0, position: 'absolute', background: '#8383FF'}}></div>
                                    </div>
                                </div>
                                <div style={{width: 4.64, height: 6.95, left: 17.49, top: 32.14, position: 'absolute', background: '#6C6CFF'}}></div>
                            </div>
                            <div style={{width: 30.32, height: 43.43, left: 9.77, top: 8.28, position: 'absolute', background: 'linear-gradient(0deg, rgba(255, 77, 77, 0.40) 0%, rgba(255, 77, 77, 0) 100%)'}}></div>
                            <div style={{width: 11.50, height: 11.50, left: 34.20, top: 12.51, position: 'absolute'}}>
                                <div style={{width: 9.58, height: 9.58, left: 0, top: 9.34, position: 'absolute', transform: 'rotate(-76.94deg)', transformOrigin: '0 0', background: '#FF6C6C'}}></div>
                                <div style={{width: 3.89, height: 5.25, left: 3.80, top: 3.02, position: 'absolute', background: 'white'}}></div>
                            </div>
                            <div style={{width: 12.10, height: 12.10, left: 5.48, top: 4.25, position: 'absolute'}}>
                                <div style={{width: 12.10, height: 12.10, left: 0, top: 0, position: 'absolute', background: '#4D4DFF'}}></div>
                                <div style={{width: 4.64, height: 6.95, left: 3.73, top: 2.57, position: 'absolute', background: 'white'}}></div>
                            </div>
                            <div style={{width: 11, height: 7.98, left: 37.19, top: 43.73, position: 'absolute'}}>
                                <div style={{width: 11, height: 3.99, left: 0, top: 3.99, position: 'absolute', background: '#FF9D33'}}></div>
                                <div style={{width: 11, height: 3.99, left: 0, top: 0, position: 'absolute', background: '#FFAB66'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SurveyColl;
