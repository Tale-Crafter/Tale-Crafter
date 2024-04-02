import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider,createBrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginOne from './pages/blogin';
import BusinessRegister from './pages/BusinessRegister';
import Bverif from './pages/Bemailverif';
import Chsurvey from './pages/ChSurvey';
const routes = createBrowserRouter([
  
  {
    path: "/login", element: <LoginOne />,
  },

  {
    path: "/BusinessRegister", element: <BusinessRegister />,
  },
  {
    path: "/Verif", element: <Bverif />,
  },

  {
    path: "/chsurvey", element: <Chsurvey />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
