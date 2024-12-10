// apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your Spring API base URL
const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPRE9CaWNKYnJNVEdldF9hYlM0aHM5eTNtdUNuUGhmWmVaVkYxeDVhUlpJIn0.eyJleHAiOjE3MjQ2MjE4NTUsImlhdCI6MTcyNDYyMTU1NSwianRpIjoiMGU3MmIzZTUtZDhmNS00ODY3LWJkMzctMDllMzdjNGJiODM4IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDgwL3JlYWxtcy9qaGlwc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJjYWU5ZDFjNS1mZmU1LTRkMmUtYjIyMi03MzJhMmUwNDBjYTMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ0YWxlIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODAvKiIsImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvKiIsIioiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1qaGlwc3RlciIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsidGFsZSI6eyJyb2xlcyI6WyJ1bWFfcHJvdGVjdGlvbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImNsaWVudEhvc3QiOiIxNzIuMTguMC4xIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtdGFsZSIsImNsaWVudEFkZHJlc3MiOiIxNzIuMTguMC4xIiwiY2xpZW50X2lkIjoidGFsZSJ9.Aci_1HcOxTew2rHr-taYUjvpTGIioVtRLpbTctSIn5UFsQIGZyKaME1txZBP1WBgibn8e3fZUwJ1F0UFwPynT_GTzpdZLN6uqrQ2Ib0RAUD_kLowTEB-Dv578BL4EjXaCpgI3ujxiz-HoLlmuIEf9pzK4mQfSApWRk6RdYDv9l1-KeG5IwKZitjwB6UH_7apG9QfKIAjulb-0eyYlQzK16OSWkVYawpioruucATuUw5hhdduWSJb3o3u84I7Q-Tlc-GzUoquFmhdy4GBFwJGfhPnQKsSggNaqFhD54YUfxQm5PCZTjAAf3yOtx8adST6iUguVFSi78MAwOxkioVzJA';

const getAllSurveys = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/surveys`);
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};

const getItemById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/items/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching item with ID ${id}:`, error);
        throw error;
    }
};

const createItem = async (itemData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/items`, itemData);
        return response.data;
    } catch (error) {
        console.error("Error creating item:", error);
        throw error;
    }
};

const updateItem = async (id, itemData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/items/${id}`, itemData);
        return response.data;
    } catch (error) {
        console.error(`Error updating item with ID ${id}:`, error);
        throw error;
    }
};

const deleteItem = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/items/${id}`);
    } catch (error) {
        console.error(`Error deleting item with ID ${id}:`, error);
        throw error;
    }
};

export { getAllItems, getItemById, createItem, updateItem, deleteItem };
