import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const API_BASE_URL = 'http://localhost:8080';

// Create an Axios instance for API requests
const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // Ensure cookies are sent if needed
    timeout: 10000, // Optional: prevent long waits
});

// Variable to hold the token
let authToken = null;

// Function to set or clear the authorization token
export const setAuthToken = (token) => {
    if (token) {
        authToken = token;
        console.log('Setting Authorization Header:', token); // Debugging
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        authToken = null;
        console.log('Clearing Authorization Header'); // Debugging
        delete api.defaults.headers.common['Authorization'];
    }
};

// Middleware to dynamically add the token to each request
api.interceptors.request.use(
    async (config) => {
        if (!config.headers['Authorization'] && authToken) {
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


// Fetch surveys
export const fetchSurveys = async () => {
    try {
        const response = await api.get('/api/surveys?page=0&size=200');
        return response.data;
    } catch (error) {
        console.error('Error fetching surveys:', error.message);
        throw error;
    }
};

// Fetch companies using the Auth0 token
export const fetchCompanies = async () => {
    try {
        const response = await api.get('/api/companies?page=0&size=200');
        return response.data;
    } catch (error) {
        console.error('Error fetching companies:', error.message);
        throw error;
    }
};

// Fetch products using the Auth0 token
export const fetchProducts = async () => {
    try {
        const response = await api.get('/api/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error.message);
        throw error;
    }
};

// Fetch SurveyColl using the Auth0 token
export const fetchSurveyColl = async () => {
    try {
        const response = await api.get('/api/surveycolls');
        return response.data;
    } catch (error) {
        console.error('Error fetching surveycolls:', error.message);
        throw error;
    }
};

// Create SurveyColl function
export const CreateSurveyColl = async (surveycoll) => {
    try {
        const response = await api.post('/api/surveycolls', surveycoll);
        return response.data;
    } catch (error) {
        console.error('Error creating SurveyColl:', error.message);
        throw error;
    }
};

// Create Company function
export const CreateCompany = async (company) => {
    try {
        const response = await api.post('/api/companies', company);
        return response.data;
    } catch (error) {
        console.error('Error creating company:', error.message);
        throw error;
    }
};

// Create Product function
export const CreateProduct = async (product) => {
    try {
        const response = await api.post('/api/products', product);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error.message);
        throw error;
    }
};

// Save answers
export const SaveAnswers = async (company) => {
    try {
        const response = await api.post('/api/responses', company);
        console.log('Server response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error inserting answers:', error.message);
        throw error;
    }
};

// Create Survey
export const CreateSurvey = async (survey) => {
    try {
        const response = await api.post('/api/surveys', survey);
        console.log('Server response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error inserting survey:', error.message);
        throw error;
    }
};

// Create Questions
export const CreateQuestions = async (questions) => {
    try {
        const response = await api.post('/api/questions', questions);
        console.log('Server response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error inserting questions:', error.message);
        throw error;
    }
};

// Fetch survey by ID
export const fetchSurveyById = async (surveyId) => {
    try {
        const response = await api.get(`/api/surveys/${surveyId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching survey by ID:', error.message);
        throw error;
    }
};

// Fetch company by ID
export const fetchcompanyById = async (companyId) => {
    try {
        const response = await api.get(`/api/companies/${companyId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching company by ID:', error.message);
        throw error;
    }
};

// Fetch focus group by ID
export const fetchFocusGroupById = async (focusGroupId) => {
    try {
        const response = await api.get(`/api/focus-groups/${focusGroupId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching focus group by ID:', error.message);
        throw error;
    }
};

// Fetch survey insights
export const fetchSurveysInsights = async () => {
    try {
        const response = await api.get('/api/survey-insights');
        return response.data;
    } catch (error) {
        console.error('Error fetching survey insights:', error.message);
        throw error;
    }
};

// Fetch focus groups
export const fetchFocusGroup = async () => {
    try {
        const response = await api.get('/api/focus-groups');
        return response.data;
    } catch (error) {
        console.error('Error fetching focus groups:', error.message);
        throw error;
    }
};

// Fetch normal users
export const fetchNormalUsers = async () => {
    try {
        const response = await api.get('/api/normal-users');
        return response.data;
    } catch (error) {
        console.error('Error fetching normal users:', error.message);
        throw error;
    }
};

// Add a survey
export const addSurvey = async (surveyData) => {
    try {
        const response = await api.post('/api/surveys', surveyData);
        return response.data;
    } catch (error) {
        console.error('Error adding survey:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Fetch balance using Keycloak token
export const fetchBalanceInLocaleCurrency = async (userId, targetCurrency) => {
    try {
        const response = await api.get(`/CreditBalance/balance/${userId}?targetCurrency=${targetCurrency}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching balance:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export default api; // Export the Axios instance for global usage if needed
