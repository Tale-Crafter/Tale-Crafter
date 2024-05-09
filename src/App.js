
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
                <Route path="/home/:iduser" element={<HomeFull />} />
                <Route path="/surveys/:iduser" element={<Surveys/>} />
                <Route path="/assistance/:iduser" element={<Assistance />} />
                <Route path="/surveydetails/:iduser" element={<SurveyDetail />} />
                <Route path="/dataverification/:iduser" element={<Datasecurity />} />
                <Route path="/focusgroup/:iduser" element={<Focusgroup />} />
                <Route path="/awards/:iduser" element={<Awards />} />
                <Route path="/focusgroupdetails/:iduser" element={<Focusgroupdetails />} />
                <Route path="/language/:iduser" element={<LanguagePage />} />
                <Route path="/opinionsurvey/:iduser" element={<OpinionSurvey />} />
                <Route path="/generallyspeaking/:iduser" element={<OneanswerSurv />} />
                <Route path="/endsurvey/:iduser" element={<EarnsPage />} />
                <Route path="/very/:iduser" element={<VerylikelyVierge />} />
                <Route path="/livesurvey/:iduser" element={<LiveSurvey />} />
                <Route path="/livesurvey1/:iduser" element={<LiveSurvey1 />} />
                <Route path="/assistancevid/:iduser" element={<AssistanceRegisterAccountmanagement />} />
                <Route path="/policy/:iduser" element={<Policy />} />
                <Route path="/account/:iduser" element={<Assistance />} />
                <Route path="/account1/:iduser" element={<Assistancechangepwd />} />


            </Routes>
        </Router>
    );
}

export default App;