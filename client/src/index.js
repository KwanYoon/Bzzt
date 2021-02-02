// Connecting react application to index.html file

import React from 'react';
import ReactDOM from 'react-dom';

// initializing redux
// Keeps store and allows access to the store from anywhere in the app
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/indexReducers';

import App from './App';

// createStore creates a redux store that holds the complete state tree of you app
// compose composes functions
// applyMiddleware applies middleware (thunk in this case)
// Middleware allows you to wrap the store's dispatch function
// thunk is a middleware that allows you to return functions rather than
//   just actions
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Connecting to the div with the id of root
ReactDOM.render(
    // Makes redux store available to App
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);