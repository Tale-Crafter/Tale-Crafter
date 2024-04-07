import ChooseSurvey from '../components/SimplifdiefSurvey.jsx'
import BusinessHeader from '../components/SurveyHeader';
function Register() {
    return (
        <div>
            <div style={{ display: 'flex' ,background:"white"}}>
                <div>
                <BusinessHeader /> 
                </div>
                < ChooseSurvey/>
            </div>
        </div>

    );
};
export default Register