import ChooseSurvey from '../components/ChooseSurvey.jsx'
import React, {useState} from "react";
import BusinessLeftsidebar from "./Dashboard/BusinessLeftsidebar";
import BHeader from "./Dashboard/BHeader";
import ChooseSurvey1 from "../components/ChooseSurvey1";
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
                < ChooseSurvey1/>
            </div>
        </div>

    );
};
export default Register
