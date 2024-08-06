import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import portfolioReducer from './reducers/portfolioReducer';
import marketReducer from './reducers/marketReducer';

const rootReducer = combineReducers({
    user: userReducer,
    portfolio: portfolioReducer,
    marker: marketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;