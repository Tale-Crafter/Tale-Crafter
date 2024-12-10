import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { setAuthToken } from './Api'; // Import the API and token setter

const useAuthToken = () => {
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                console.log('Auth Token:', token);
                setAuthToken(token);
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        };

        fetchToken();
    }, [getAccessTokenSilently]);

    return null; // Don't render anything
};

export default useAuthToken;
