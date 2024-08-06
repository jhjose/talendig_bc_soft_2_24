import {getMarketData} from '../../services/api';

export const setMarketData = (marketData) => ({
    type: 'SET_MARKET_DATA',
    payload: marketData,
});

export const fetchMarketData = () => async (dispatch) => {
    try{
        const response = await getMarketData();
        dispatch(setMarketData(response.data));
    }catch(error){
        console.error('Error fetching market data: ', error);
    }
};