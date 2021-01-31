// Connecting react application to index.html file

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Connecting to the div with the id of root
ReactDOM.render(<App />, document.getElementById('root'));