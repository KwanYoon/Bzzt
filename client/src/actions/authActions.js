// import action types
import { AUTH } from '../constants/actionTypes';

// import everything from actions as API
import * as api from '../api';

// Action creators, functions that return actions
// Because fetching posts take time, it is async

// action for signing in
export const signin = (formData, history) => async (dispatch) => {
    try {
        // log in the user
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

// action for signing up
export const signup = (formData, history) => async (dispatch) => {
    try {
        // signing up user
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}