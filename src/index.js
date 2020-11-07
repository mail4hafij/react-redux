import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers'; 


// Store - The global state.
const store = createStore(allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Aciton - The name of an action.
// Checkout the actions.js file.

// Reducer - A state (Check Action and update a state in a store)
// Checkout the reducers folder.

// Dispatch - Sends Action to Reducer.
// Checkout the Counter.js component.

// Subscribe - 
// Not used.


// Attaching store to our App.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

