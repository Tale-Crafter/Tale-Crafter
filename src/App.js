
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Assistance from "./Assistance";
import HomeFull from "./HomeFull";
import HomeFulltest from "./HomeFulltest";
import Surveys from "./Surveys";
import Dashboard from "./Dashboard";
import SurveyDetail from "./SurveyDetail";
import Datasecurity from "./Datasecurity";
import Focusgroup from "./Focusgroup";
import Awards from "./Awards";
import Focusgroupdetails from "./Focusgroupdetails";
import LanguagePage from "./LanguagePage";
import OpinionSurvey from "./OpinionSurvey";
import OneanswerSurv from "./OneanswerSurv";
import EarnsPage from "./EarnsPage";
import Verylikely from "./Verylikely";
import LiveSurvey from "./LiveSurvey";
import VerylikelyVierge from "./VerylikelyVierge";
import LiveSurvey1 from "./LiveSurvey1";
import AssistanceRegisterAccountmanagement from "./pages/Dashboard/Assistance-Register&accountmanagement";
import Headcomponent from "./pages/Dashboard/Headcomponent";
import Policy from "./Policy";
import Changepwd from "./pages/Dashboard/Changepwd";
import Assistancechangepwd from "./pages/Dashboard/Assistancechangepwd";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomeFull />} />
                <Route path="/surveys" element={<Surveys/>} />
                <Route path="/assistance" element={<Assistance />} />
                <Route path="/surveydetails" element={<SurveyDetail />} />
                <Route path="/dataverification" element={<Datasecurity />} />
                <Route path="/focusgroup" element={<Focusgroup />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/focusgroupdetails" element={<Focusgroupdetails />} />
                <Route path="/language" element={<LanguagePage />} />
                <Route path="/opinionsurvey" element={<OpinionSurvey />} />
                <Route path="/generallyspeaking" element={<OneanswerSurv />} />
                <Route path="/endsurvey" element={<EarnsPage />} />
                <Route path="/very" element={<VerylikelyVierge />} />
                <Route path="/livesurvey" element={<LiveSurvey />} />
                <Route path="/livesurvey1" element={<LiveSurvey1 />} />
                <Route path="/assistancevid" element={<AssistanceRegisterAccountmanagement />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/account" element={<Assistance />} />
                <Route path="/account1" element={<Assistancechangepwd />} />
            </Routes>
        </Router>

    );
}

export default App;


const domain = "dev-8ja5z27gacw183vf.eu.auth0.com";
const clientId = "P5ePbyjmq6xLc09ZxshMaqkwcNmVbKNX";

function Main() {

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
            cacheLocation="localstorage" // Helps persist login state across page reloads
        >
            <Router>
                <App />
            </Router>
        </Auth0Provider>
    );
}

export default Main;