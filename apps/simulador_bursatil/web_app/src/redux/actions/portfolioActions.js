import { getPortfolio, addStockToPortfolio } from '../../services/api';

export const setPortfolio = (portfolio) => ({
    type: 'SET_PORTFOLIO',
    payload: portfolio
});

export const fetchPortfolio = (userId) => async (dispatch) => {
    try {
        const response = await getPortfolio(userId);
        dispatch(setPortfolio(response.data));
    } catch (error) {
        console.error('Error fetching portfolio: ', error);
    }
};

export const addStock = (userId, stockData) => async (dispatch) => {
    try {
        await addStockToPortfolio(userId, stockData);
        dispatch(fetchPortfolio(userId));
    } catch (error) {
        console.error('Error adding to portfolio: ', error);
    }
};