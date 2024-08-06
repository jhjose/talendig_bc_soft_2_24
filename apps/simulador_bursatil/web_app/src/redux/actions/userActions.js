import {login, register} from '../../services/api';

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const loginUser = (credentials) => async (dispatch) => {
    try {
        const respose = await login(credentials);
        dispatch(setUser(response.data));
    } catch (error) {
        console.error('Error logging in', error);
    }
};

export const registerUser = (userData) => async () => {
    try {
        await register(userData);
    } catch (error) {
        console.error('Error registering: ', error);
    }
};