// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080\n';

export const fetchBalanceInLocaleCurrency = (userId, targetCurrency) => {
    return axios.get(`${API_BASE_URL}/CreditBalance/balance/${userId}?targetCurrency=${targetCurrency}`);
};

// Create an Axios instance with default configuration
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json', // Specify content type if needed
    },
    withCredentials: true // Include credentials such as cookies in the request
});

// Function to fetch surveys using the access token
export const fetchSurveys = async (accessToken) => {
    try {
        const response = await api.get('/api/surveys', {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Include access token in Authorization header
            },
        });
        return response.data; // Return the data received from the API
    } catch (error) {
        throw new Error('Error fetching surveys: ' + error.message);
    }
};

// Example of how to use the fetchSurveys function
const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyTjRpWktweGZjVndQczZtOHdOSmhkSTBkcXRCczFKQVdjcFdESVVHUlIwIn0.eyJleHAiOjE3MTExMTg0MzgsImlhdCI6MTcxMTExODEzOCwianRpIjoiZmUyNzkyMWItYzY1Zi00MTYwLWE1MTItYjA0Y2Q3MmJmNDlkIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDgwL3JlYWxtcy9qaGlwc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkOWVlYzE0Yy1kOTIwLTRjNjctYWExMC1jZTk2ZjFkNjU1MmQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ0YWxlIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODAvKiIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvKiIsIioiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1qaGlwc3RlciIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsidGFsZSI6eyJyb2xlcyI6WyJ1bWFfcHJvdGVjdGlvbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxNzIuMTkuMC4xIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtdGFsZSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTkuMC4xIiwiY2xpZW50X2lkIjoidGFsZSJ9.JkOamtOwwz0AgOMVduBQlWdt4FQDVxxR3GB5UY2c-AjTOPY9WROAK0WHHhG7xyyjTRd7Rfiqyr4Vxc0zyl5o2Ni1bmV0AhpxEg0-mbre_wF1AuRrcJNgoM_7IjGXB4BXq5kqjFFNhqpqvZ8RlMHYcSpjPlQyQGx7WLl8Y0iX-0w3j_wYwpwv2gDHwLrpaNn3X2VeQWpTQJShrGZa16Njfpg1fncRDrCrH5lmlbH3aqyF4DpC0IvCcH5fikqm0_VjSioh0OQPDFi5LN9ee5YWx5CZw0UF7rbfqF9q4QrbIDkNdi3TNpfiOIRM1yuoNmv1t-xHqYaybizgcNJna7uozw';
fetchSurveys(accessToken)
    .then(data => {
        console.log('Surveys data:', data);
    })
    .catch(error => {
        console.error('Error fetching surveys:', error.message);
    });

export default api; // Export the Axios instance for global usage if needed
