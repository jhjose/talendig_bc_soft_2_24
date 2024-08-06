const initialState = {
    stocks: []
};

const portfolioReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_PORTFOLIO':
            return {
                ...state,
                stocks: action.payload
            }
        default:
            return state;    
    }
};

export default portfolioReducer;