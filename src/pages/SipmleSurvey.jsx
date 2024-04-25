import ChooseSurvey from '../components/SimplifdiefSurvey.jsx'
import BusinessHeader from '../components/SurveyHeader';
import BusinessLeftsidebar from "./Dashboard/BusinessLeftsidebar";
import BHeader from "./Dashboard/BHeader";
import React, {useState} from "react";
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
                <BusinessHeader /> 
                </div>
                < ChooseSurvey/>
            </div>
        </div>

    );
};
export default Register
