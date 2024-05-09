import ChooseSurvey from '../components/ChooseSurvey.jsx'
import React, {useState} from "react";
import BusinessLeftsidebar from "./Dashboard/BusinessLeftsidebar";
import BHeader from "./Dashboard/BHeader";
function Register() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [selectedSurvey, setSelectedSurvey] = useState(null);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (
        <div>
            <div style={{ display: 'flex' ,background:"white"}}>
                <BusinessLeftsidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
                <BHeader/>
                <div>
                    
                </div>
                < ChooseSurvey/>
            </div>
        </div>

    );
};
export default Register
