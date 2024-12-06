import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './pages/Register';
import LoginOne from './pages/login/LoginOne';
import Notfound from './pages/Notfound';
import ForgotPasswordOne from './pages/forgotPassword/ForgotPasswordOne';
import ForgotPasswordTwo from './pages/forgotPassword/ForgotPasswordTwo';
import ForgotPasswordThree from './pages/forgotPassword/ForgotPasswordThree';
import { UserProvider } from './pages/forgotPassword/UserContext';
import HomeFull from "./pages/Dashboard/HomeFull";
import Surveys from "./pages/Dashboard/Surveys";
import Focusgroup from "./pages/Dashboard/Focusgroup";
import Awards from "./pages/Dashboard/Assistance-Register&accountmanagement";
import Assistance from "./pages/Dashboard/Assistance";


import SurveyDetail from "./pages/Dashboard/SurveyDetail";
import Datasecurity from "./pages/Dashboard/Datasecurity";
import DashboardSurvery40 from "./pages/Dashboard/Tale-4-Dashboard-1-Survery-40";
import DashboardSurvery50 from "./pages/Dashboard/Tale-4-Dashboard-1-Surveys-1-50";
import DashboardSurvery60 from "./pages/Dashboard/Tale-4-Dashboard-1-Survery60";
import DashboardSurvery70 from '././pages/Dashboard/Tale-4-Dashboard-1-Survery70';
import DashboardSurveryDetail from '././pages/Dashboard/Tale-4-Dashboard-SurveryDetail';
import DashboardSurvery30 from './pages/Dashboard/Tale-4-Dashboard-1-Survery-30';
import DashboardSurvery10 from './pages/Dashboard/Tale-4-Dashboard-1-Survery-10';
import DashboardSurvery80 from './pages/Dashboard/Tale-4-Dashboard-1-Survery80';
import DashboardSurvery20 from './pages/Dashboard/Tale-4-Dashboard-1-Survery20';
import DashboardSurvery90 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90';
import DashboardSurvery901 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-1';
import DashboardSurvery902 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-2';
import DashboardSurvery903 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-3';
import DashboardSurvery904 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-4';
import DashboardSurvery905 from './pages/Dashboard/Tale-4-Dashboard-1-Survery90-5';
import DashboardSurvery906 from './pages/Dashboard/Tale-4-Dashboard-1-Survery906';
import DashboardSurvery907 from './pages/Dashboard/Tale-4-Dashboard-1-Survery907';
import DashboardSurvery908 from  './pages/Dashboard/Tale-4-Dashboard-1-Survery908';
import Focusgroupdetails from './pages/Dashboard/Focusgroupdetails';
import LanguagePage from    "./pages/Dashboard/LanguagePage";
import OpinionSurvey from './pages/Dashboard/OpinionSurvey';
import OneanswerSurv from './pages/Dashboard/OneanswerSurv';
import EarnsPage from './pages/Dashboard/EarnsPage';
import Verylikely from './pages/Dashboard/Verylikely';
import EmojiComponent from './components/Emoji';
import DashboardSurvery101 from './pages/Dashboard/Tale-4-Dashboard-1-Survery-10-1';
import DashboardSurvery909 from  './pages/Dashboard/Tale-4-Dashboard-1-Survery909';
import DashboardSurvery9090 from  './pages/Dashboard/Tale-4-Dashboard-1-Survery90-9';
import Jitci from './pages/Dashboard/jitci';
import PointsDashboard from './pages/Points/PointsDashboard';
import PhoneRecharge from './pages/Points/PhoneRecharges';
import CouponRecharge from './pages/Points/RechargeCoupons';
import LiveSurvey from "./pages/Dashboard/LiveSurvey";
import VerylikelyVierge from "./pages/Dashboard/VerylikelyVierge";
import LiveSurvey1 from "./pages/Dashboard/LiveSurvey1";
import AssistanceRegisterAccountmanagement from "./pages/Dashboard/Assistance-Register&accountmanagement";
import Headcomponent from "./pages/Dashboard/Headcomponent";
import Policy from "./pages/Dashboard/Policy";
import Changepwd from "./pages/Dashboard/Changepwd";
import Assistancechangepwd from "./pages/Dashboard/Assistancechangepwd";
import AssistanceO from './pages/Dashboard/AssistanceO';
import TaleCustomerSubscribe from "./pages/TaleCustomerSubscribe";
import CustomerExperience from "./pages/Dashboard/CustomerExperienceSurvey";
import BusinessSurveys from "./pages/Dashboard/BusinessSurveys";
import CreateSurveySTEP1 from "./pages/Dashboard/CreateSurveySTEP1";
import CreateSurveySTEP2 from "./pages/Dashboard/CreateSurveySTEP2";
import CreateSurveySTEP3 from "./pages/Dashboard/CreateSurveySTEP3";
import Tale5 from "./pages/Dashboard/Tale5";
import LoginO from './pages/blogin';
import BusinessRegister from './pages/BusinessRegister';
import Bverif from './pages/Bemailverif';
import Chsurvey from './pages/ChSurvey';
import Simplesurvey from './pages/SipmleSurvey';
import Createpwd from "./components/Createpwd";
import Createpassword from "./pages/Createpassword";
import Businesshome from "./pages/Dashboard/Businesshome";
import Businesshomedata from "./pages/Dashboard/Businesshomedata";
import Surveyia from "./pages/Dashboard/Surveyia";
import Importqs1 from "./pages/Dashboard/Importqs1";
import CreateSurveySTEP4 from "./pages/Dashboard/CreateSurveySTEP4";
import CreateSurveySTEP5 from "./pages/Dashboard/CreateSurveySTEP5";
import CreateSurveySTEP6 from "./pages/Dashboard/CreateSurveySTEP6";
import CreateSurveySTEP7 from "./pages/Dashboard/CreateSurveySTEP7";
import CreateSurveySTEP8 from "./pages/Dashboard/CreateSurveySTEP8";
import CreateSurveySTEP9 from "./pages/Dashboard/CreateSurveySTEP9";
import CustomerExperienceSurveylv3 from "./pages/Dashboard/CustomerExperienceSurveylv3";
import ReviewPreview1 from "./pages/Review&Preview1";
import ReviewPreview2 from "./pages/Review&Preview2";
import SurveyLink from "./pages/Dashboard/SurveyLink";
import ReviewPreview3 from "./pages/Review&Preview3";
import SurveyColl from "./pages/Dashboard/SurveyColl";
import Order from "./pages/Dashboard/Order";
import Ordertest from "./pages/Dashboard/Ordertest";
import Cigaro from "./pages/Dashboard/Cigaro";
import TobaccoC from "./pages/Dashboard/TobaccoC";
import TLanguage from "./pages/Dashboard/TLanguage";
import TobaccoC10 from "./pages/Dashboard/TobaccoC10";
import TobaccoC20 from "./pages/Dashboard/TobaccoC20";
import TobaccoC30 from "./pages/Dashboard/TobaccoC30";
import TobaccoC40 from "./pages/Dashboard/TobaccoC40";
import TobaccoC50 from "./pages/Dashboard/TobaccoC50";
import TobaccoC60 from "./pages/Dashboard/TobaccoC60";
import TobaccoC70 from "./pages/Dashboard/TobaccoC70";
import TobaccoC80 from "./pages/Dashboard/TobaccoC80";
import TobaccoC90 from "./pages/Dashboard/TobaccoC90";
import TobaccoC100 from "./pages/Dashboard/TobaccoC100";
import TobaccoC110 from "./pages/Dashboard/TobaccoC110";
import TSport from "./pages/Dashboard/TSport";
import TWl from "./pages/Dashboard/TWl";
import TActivw from "./pages/Dashboard/TActivw";
import TcarD from "./pages/Dashboard/TcarD";
import TConsumptionB from "./pages/Dashboard/TConsumptionB";
import THT from "./pages/Dashboard/THT";
import TheStudies from "./pages/Dashboard/TheStudies";
import Tltelevision from "./pages/Dashboard/Tltelevision";
import SocialNetworks from "./pages/Dashboard/SocialNetworks";
import ConsumptionHabits from "./pages/Dashboard/ConsumptionHabits";
import EntOfTunisia from "./pages/Dashboard/EntOfTunisia";
import EducationFormation from "./pages/Dashboard/Education&Formation";
import LoginAdmin from "./pages/LoginAdmin";
import Adminhome from "./pages/Dashboard/Adminhome";
import {ProtectedRoutes}  from "./pages/Dashboard/ProtectedRoutes";
import Chart from "./pages/Dashboard/chart";
import GestionUser from "./pages/Dashboard/GestionUser";
import AssistanceAdmin from "./pages/Dashboard/AssistanceAdmin";
import ConfirmationPopup from "./pages/Dashboard/ConfirmationPopup";
import GestionSanction from "./pages/Dashboard/GestionSanction";
import Oneto10Component from "./pages/Dashboard/1to10Component";
import ReviewAndPreview from "./pages/Dashboard/R&P";
import SurveyCreationFlow from "./pages/Dashboard/SurveyCreationFlow";
import CreateSurveySTEP21 from "./pages/Dashboard/CreateSurveySTEP2.1";
import ChooseSurvey1 from "./components/ChooseSurvey1";
import ChooseSurvey2 from "./components/ChooseSurvey2";
import ChooseSurvey3 from "./components/ChooseSurvey3";

const routes = createBrowserRouter([

  {
    path: "/Businesslogin", element: <LoginO />,
  },
  {
    path: "/login", element: <LoginOne />,
  },
  {
    path: "/Adminlogin", element: <LoginAdmin />,
  },
  {
    path: "/BusinessRegister", element: <BusinessRegister />,
  },
  {
    path: "/register", element: <Register />,
  },

  // Protected routes
  {
    path: "/",
    element: <ProtectedRoutes />, // This will wrap all child routes below
    children: [
      {path:"/Oneto10Component", element: <Oneto10Component/>},
      {path:"/Businesshome", element: <Businesshome/>},
      {path:"/GestionDesSanctions", element: <GestionSanction/>},
      {path:"/ConfirmationPopup", element: <ConfirmationPopup/>},
      {path:"/AssistanceAdmin", element: <AssistanceAdmin/>},
      {path:"/GestionDesUtilisateurs", element: <GestionUser/>},
      {path:"/Adminhome", element: <Adminhome/>},
      {path:"/Businesshomedata", element: <Businesshomedata />},
      {path:"/chart", element: <Chart />},
      {path:"/customexperiencelv3", element: <ReviewAndPreview />},
      {path:"/SurveyCreationFlow", element: <SurveyCreationFlow />},
      {path:"/Surveyia", element: <Surveyia/>},
      {
        path: "/Tobacco", element: <TobaccoC />,
      },{
        path: "/TSport", element: <TSport />,
      },{
        path: "/tlearning", element: <TWl />,
      },{
        path: "/tactiv", element: <TActivw />,
      },{
        path: "/tcarD", element: <TcarD />,
      },{
        path: "/tconsumptionb", element: <TConsumptionB />,
      },{
        path: "/travelhabitst", element: <THT />,
      },{
        path: "/studies", element: <TheStudies />,
      },{
        path: "/education", element: <EducationFormation />,
      },{
        path: "/television", element: <Tltelevision />,
      },{
        path: "/socialnet", element: <SocialNetworks />,
      },{
        path: "/habits", element: <ConsumptionHabits />,
      },{
        path: "/Entertainment", element: <EntOfTunisia />,
      },
      {
        path: "/subscribe", element: <TaleCustomerSubscribe />,
      },
      {
        path: "/*", element: <Notfound />,
      }, {
        path: "/Surveycoll", element: <SurveyColl />,
      },{
        path: "/Order", element: <Order />,
      },{
        path: "/Ordert", element: <Ordertest />,
      },
      {
        path: "/Verif", element: <Bverif />,
      }, {
        path: "/CustomerExperience", element: <CustomerExperience/>,
      }, {
        path: "/CustomerExperiencelv3", element: <CustomerExperienceSurveylv3/>,
      },{
        path: "/SurveyLink", element: <SurveyLink/>,
      },
      {
        path: "/chsurvey", element: <Chsurvey />,
      },{
        path: "/chsurvey1", element: <ChooseSurvey1 />,
      },{
        path: "/chsurvey2", element: <ChooseSurvey2 />,
      },{
        path: "/chsurvey3", element: <ChooseSurvey3 />,
      },
      {
        path: "/simplesurvey", element: <Simplesurvey />,
      },{path:"/Importqs1", element: <Importqs1/>},
      {
        path: "/createpwd", element: <Createpassword />,
      },
      {
        path: "/ForgotPasswordOne", element: <ForgotPasswordOne />,
      },
      {
        path: "/ForgotPasswordTwo", element: <ForgotPasswordTwo />,
      },
      {
        path: "/ForgotPasswordThree", element: <ForgotPasswordThree />,
      },
      {
        path: "", element: <HomeFull />,
      },
      {
        path: "/surveys", element: <Surveys />,
      },
      {
        path: "/createsurvey", element: <CreateSurveySTEP1 />,
      },
      {
        path: "/createsurvey2", element: <CreateSurveySTEP2 />,
      },
      {
        path: "/createsurvey21", element: <CreateSurveySTEP21/>,
      },
      {
        path: "/createsurvey3", element: <CreateSurveySTEP3 />,
      },
      {
        path: "/createsurvey4", element: <CreateSurveySTEP4 />,
      },{
        path: "/createsurvey5", element: <CreateSurveySTEP5 />,
      },{
        path: "/createsurvey6", element: <CreateSurveySTEP6 />,
      },{
        path: "/createsurvey7", element: <CreateSurveySTEP7 />,
      },{
        path: "/createsurvey8", element: <CreateSurveySTEP8 />,
      },{
        path: "/createsurvey9", element: <CreateSurveySTEP9 />,
      },
      {
        path: "/tale", element: <Tale5 />,
      },
      {
        path: "/bsurveys", element: <BusinessSurveys />,
      },
      {
        path: "/Focusgroup", element: <Focusgroup />,
      },
      {
        path: "/Awards", element: <Awards />,
      },
      {
        path: "/Assistance", element: <Assistance />,
      }, {
        path: "/surveydetails", element: <SurveyDetail />,
      }, {
        path: "/dataverification", element: <Datasecurity />,
      },
      {path: "/dashboard40", element: <DashboardSurvery40 />,
      },
      {path: "/dashboard50", element: <DashboardSurvery50 />,
      },
      {path: "/dashboard60", element: <DashboardSurvery60 />,
      },
      {path: "/dashboard70", element: <DashboardSurvery70 />,
      },
      {path: "/DashboardSurveryDetail", element: <DashboardSurveryDetail />,
      },
      {path: "/dashboard30", element: <DashboardSurvery30 />,
      },
      {path: "/dashboard10", element: <DashboardSurvery10 />,
      },
      {path: "/dashboard20", element: <DashboardSurvery20 />,
      },
      {path: "/dashboard80", element: <DashboardSurvery80 />,
      },
      {path: "/dashboard90", element: <DashboardSurvery90 />,
      },
      {path: "/dashboard901", element: <DashboardSurvery901 />,
      },
      {path: "/dashboard902", element: <DashboardSurvery902 />,
      },
      {path: "/dashboard903", element: <DashboardSurvery903 />,
      },
      {path: "/dashboard904", element: <DashboardSurvery904 />,
      },
      {path: "/dashboard905", element: <DashboardSurvery905 />,
      },
      {path: "/dashboard906", element: <DashboardSurvery906 />,
      },
      {path: "/dashboard907", element: <DashboardSurvery907 />,
      },
      {path: "/dashboard908", element: <DashboardSurvery908 />,
      },
      {path: "/dashboard9090", element: <DashboardSurvery9090 />,
      },
      {path:"/surveydetails/:idSurvey", element: <SurveyDetail />,},
      { path: "/dataverification", element: <Datasecurity /> },
      { path: "/focusgroup", element: <Focusgroup /> },
      { path: "/awards", element: <Awards /> },
      { path: "/focusgroupdetails", element: <Focusgroupdetails /> },
      { path: "/language", element: <LanguagePage /> },
      { path: "/tlanguage/:idSurvey", element: <TLanguage /> },
      { path: "/tobacco", element: <TobaccoC10 /> },
      { path: "/tobacco2", element: <TobaccoC20 /> },
      { path: "/tobacco3", element: <TobaccoC30 /> },
      { path: "/tobacco4", element: <TobaccoC40 /> },
      { path: "/tobacco5", element: <TobaccoC50 /> },
      { path: "/tobacco6", element: <TobaccoC60 /> },
      { path: "/tobacco7", element: <TobaccoC70 /> },
      { path: "/tobacco8", element: <TobaccoC80 /> },
      { path: "/tobacco9", element: <TobaccoC90 /> },
      { path: "/tobacco10", element: <TobaccoC100 /> },
      { path: "/tobacco11", element: <TobaccoC110 /> },
      { path: "/opinionsurvey", element: <OpinionSurvey /> },
      { path: "/generallyspeaking", element: <OneanswerSurv /> },
      { path: "/endsurvey", element: <EarnsPage /> },
// { path: "/very", element: <Verylikely /> },
      { path: "/DashboardSurvery101", element: <DashboardSurvery101 /> },
      { path: "/Dashboard909", element: <DashboardSurvery909 /> },
      { path: "/jitci", element: <Jitci /> },
      { path: "/Points", element: <PointsDashboard /> },
      { path: "/PhoneRecharge", element: <PhoneRecharge /> },
      { path: "/CouponRecharge", element: <CouponRecharge /> },
      {path:"/accountpwd", element: <Assistancechangepwd /> },
      {path:"/account", element: <Assistance /> },
      {path:"/policy", element: <Policy />},

      {path:"/assistancevid", element: <AssistanceRegisterAccountmanagement />},
      {path:"/livesurvey1", element: <LiveSurvey1 />},
      {path:"/livesurvey", element: <LiveSurvey />},
      {path:"/very", element: <VerylikelyVierge />},
      {path:"/veryl", element: <Verylikely />},

      {path:"/endsurvey", element: <EarnsPage />},
      {path:"/AssistanceO", element: <AssistanceO/>}
    ],
  },

  // Catch-all route
  { path: "/*", element: <Notfound /> },

]);

const domain = "dev-8ja5z27gacw183vf.eu.auth0.com";
const clientId = "P5ePbyjmq6xLc09ZxshMaqkwcNmVbKNX";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin, // Ensure this matches the callback URL in your Auth0 dashboard
          audience: "http://localhost/api",    // Add audience if using API authorization
        }}
    >
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </Auth0Provider>
);

reportWebVitals();

