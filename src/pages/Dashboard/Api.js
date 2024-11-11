import axios from 'axios';
const qs = require('qs'); // To encode the body as form data

const API_BASE_URL = 'http://localhost:8080';
const KEYCLOAK_URL = 'http://localhost:9080/realms/jhipster/protocol/openid-connect/token'; // Keycloak token URL

// Keycloak client credentials
const keycloakCredentials = {
    clientId: 'tale', // Your Keycloak client ID
    clientSecret: '86a4RPOrgq6UNSwOJ0xMOGI5aiheCyKs', // Replace with your Keycloak client secret
    grantType: 'client_credentials',
    scope: 'openid'
};


const getAccessToken = async () => {
    try {
        const response = await axios.post(KEYCLOAK_URL, qs.stringify({
            grant_type: keycloakCredentials.grantType,
            client_id: keycloakCredentials.clientId,
            client_secret: keycloakCredentials.clientSecret,
            scope: keycloakCredentials.scope,
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error.response ? error.response.data : error.message);
        throw error;
    }
};


// Create an Axios instance for API requests
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

// Attach Keycloak token to every request dynamically
api.interceptors.request.use(async (config) => {
    const token = await getAccessToken(); // Fetch the token dynamically
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Function to fetch balance using Keycloak token
export const fetchBalanceInLocaleCurrency = async (userId, targetCurrency) => {
    try {
        const response = await api.get(`/CreditBalance/balance/${userId}?targetCurrency=${targetCurrency}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching balance:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Fetch surveys using the Keycloak token
export const fetchSurveys = async () => {
    try {
        const response = await api.get('/api/surveys');
        return response.data;
    } catch (error) {
        console.error('Error fetching surveys:', error.message);
        throw error;
    }
};

// Fetch surveys using the Keycloak token
export const fetchCompanies = async () => {
    try {
        const response = await api.get('/api/companies?page=0&size=200');
        return response.data;
    } catch (error) {
        console.error('Error fetching companies:', error.message);
        throw error;
    }
};
// Fetch surveys using the Keycloak token
export const fetchProducts = async () => {
    try {
        const response = await api.get('/api/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error.message);
        throw error;
    }
};

// Create Company function
export const CreateCompany = async (company) => {
    try {
        const response = await axios.post('/api/companies', company, {
            headers: {
                'Content-Type': 'application/json', // Ensure the content type is JSON
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating company:', error.message);
        throw error;
    }
};
// Create Product function
export const CreateProduct = async (product) => {
    try {
        const response = await axios.post('/api/products', product, {
            headers: {
                'Content-Type': 'application/json', // Ensure the content type is JSON
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error.message);
        throw error;
    }
};
export const SaveAnswers = async (company) => {
    try {
        const response = await axios.post('/api/responses', company, {
            headers: {
                'Content-Type': 'application/json', // Ensure the content type is JSON
            },
        });
        console.log('Server response:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error insert answers:', error.message);
        throw error;
    }
};
export const CreateSurvey = async (survey) => {
    try {
        const response = await axios.post('/api/surveys', survey, {
            headers: {
                'Content-Type': 'application/json', // Ensure the content type is JSON
            },
        });
        console.log('Server response:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error insert survey:', error.message);
        throw error;
    }
};

export const CreateQuestions = async (questions) => {
    try {
        const response = await axios.post('/api/questions', questions, {
            headers: {
                'Content-Type': 'application/json', // Ensure the content type is JSON
            },
        });
        console.log('Server response:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error insert questions:', error.message);
        throw error;
    }
};
// Fetch survey by ID using the Keycloak token
export const fetchSurveyById = async (surveyId) => {
    try {
        const response = await api.get(`/api/surveys/${surveyId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching survey by ID:', error.message);
        throw error;
    }
};

// Fetch company by ID using the Keycloak token
export const fetchcompanyById = async (companyId) => {
    try {
        const response = await api.get(`/api/companies/${companyId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching company by ID:', error.message);
        throw error;
    }
};

// Fetch focus group by ID using Keycloak token
export const fetchFocusGroupById = async (focusGroupId) => {
    try {
        const response = await api.get(`/api/focus-groups/${focusGroupId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching focus group by ID:', error.message);
        throw error;
    }
};

// Fetch survey insights using the Keycloak token
export const fetchSurveysInsights = async () => {
    try {
        const response = await api.get('/api/survey-insights');
        return response.data;
    } catch (error) {
        console.error('Error fetching survey insights:', error.message);
        throw error;
    }
};

// Fetch focus groups using the Keycloak token
export const fetchFocusGroup = async () => {
    try {
        const response = await api.get('/api/focus-groups');
        return response.data;
    } catch (error) {
        console.error('Error fetching focus groups:', error.message);
        throw error;
    }
};

// Fetch normal users for dashboard using the Keycloak token
export const fetchNormalUsers = async () => {
    try {
        const response = await api.get('/api/normal-users');
        return response.data;
    } catch (error) {
        console.error('Error fetching normal users:', error.message);
        throw error;
    }
};

// Fetch user responses for dashboard using the Keycloak token
// export const fetchResponses = async () => {
//     try {
//         const response = await api.get('/api/responses');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching responses:', error.message);
//         throw error;
//     }
// };
//
// // Fetch questions created using the Keycloak token
// export const fetchQuestions = async () => {
//     try {
//         const response = await api.get('/api/questions');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching questions:', error.message);
//         throw error;
//     }
// };

// Add a survey using Keycloak token
export const addSurvey = async (surveyData) => {
    try {
        const response = await api.post('/api/surveys', surveyData);
        return response.data;
    } catch (error) {
        console.error('Error adding survey:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Login functionality (optional, for user-based flows)
export const login = async (username, password) => {
    try {
        const response = await axios.post(KEYCLOAK_URL, null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                grant_type: 'password',
                client_id: keycloakCredentials.clientId,
                client_secret: keycloakCredentials.clientSecret,
                username: username,
                password: password,
                scope: 'openid'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Logout functionality
export const logout = async () => {
    try {
        // Perform any necessary logout operations (if any specific logout endpoint is needed)
        console.log('Logged out');
    } catch (error) {
        console.error('Logout error:', error.message);
        throw error;
    }
};

export default api; // Export the Axios instance for global usage if needed
