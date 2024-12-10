import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="dev-8ja5z27gacw183vf.eu.auth0.com"
        clientId="P5ePbyjmq6xLc09ZxshMaqkwcNmVbKNX"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
        cacheLocation="localstorage" // Helps persist login state across page reloads

    >
        <App />
    </Auth0Provider>,
);