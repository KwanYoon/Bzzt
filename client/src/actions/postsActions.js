// import everything from actions as API
import * as api from '../api';

// Action creators
const getPosts = () => {
    const action = { type: 'FETCH_ALL', payload: [] }
    return action;
}