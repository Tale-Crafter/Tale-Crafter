// authUtils.js
export const setAuthToken = (token) => {
    localStorage.setItem('access_token', token);
};

export const getAuthToken = () => {
    return localStorage.getItem('access_token');
};
