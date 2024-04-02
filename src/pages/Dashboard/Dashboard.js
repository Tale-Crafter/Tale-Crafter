// Dashboard.js
import React, { useState } from 'react';
import Leftsidebar from './Leftsidebar';
import Home from './Home';
import HomeFull from "./HomeFull";

const Dashboard = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div>
            <Leftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <HomeFull sidebarVisible={sidebarVisible} />
        </div>
    );
};

export default Dashboard;
