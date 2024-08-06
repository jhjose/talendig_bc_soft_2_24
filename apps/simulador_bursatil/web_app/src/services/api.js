import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = (credentials) => axios.post(`${API_URL}/users/login`, credentials);
export const register = (userData) => axios.post(`${API_URL}/users/register`, userData);
export const getPortfolio = (userId) => axios.get(`${API_URL}/portfolio/${userId}`);
export const addStockToPortfolio = (userId, stockData) => axios.post(`${API_URL}/portfolio/${userId}`, stockData);

// Función para obtener el portafolio de un usuario por su ID
export const fetchPortfolio = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/portfolio/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Función para obtener el wallet del usuario
export const fetchWallet = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/wallet/${userId}`);
        if(!response.ok){
            throw new Error('Error al obtener el wallet del usuario');
        }

        const walletData = await response.json();
        return walletData;
    } catch (error) {
        throw error;
    }
}

// Función para recargar el wallet del usuario
export const reloadWallet = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/wallet/reload/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId}),
        });

        if(!response.ok){
            throw new Error('Error al recargar el wallet del usuario');
        }
        const reloadedWallet = await response.json();
        return reloadedWallet;
    } catch (error) {
        throw error;
    }
}

export const fetchAlerts = async (symbol) => {
    console.log('symbol', symbol)
    try {
        const response = await fetch(
            `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbol}&types=quote&token=`, {
            params: {
                symbols: symbol,
                types: 'quote',
                token: '',
            },
        })

        return response;
    } catch (error) {
        throw error;
    }
}

export const fetchStockDataPolygon = async (symbol) => {
    try {
        const API_KEY = 'r_Wzcp8crURqUdVTHsVwydlSLq7JL4p6';
        const API_BASE_URL = 'https://api.polygon.io/v2/aggs/ticker';

        const response = await fetch(`${API_BASE_URL}/${symbol}/prev?apiKey=${API_KEY}`, {
            baseURL: API_BASE_URL,
            params: {
                apiKey: API_KEY
            }
        });

        return response;
    } catch (error) {
        throw error;
    }
}