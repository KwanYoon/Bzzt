// combines all reducers
// reducer is a function that takes state and action, and if
//  action is equal to a keyword, the code is run

import { combineReducers } from 'redux';
import posts from './postsReducers';
import auth from './authReducers';

export default combineReducers({
    posts,
    auth
});