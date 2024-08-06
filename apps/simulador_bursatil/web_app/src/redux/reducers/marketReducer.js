const initialState = {
    marketData: []
};

const marketReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_MARKET_DATA':
            return {
                ...state,
                stocks: action.payload
            }
        default:
            return state;    
    }
};

export default marketReducer;