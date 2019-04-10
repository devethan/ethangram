import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'redux/configureStore';
import 'index.css';
import App from './App';

// store.dispatch({type: 'BULLSHIT'})
// process.env.NODE_ENV === 'development';
//     => middleware.push(logger)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
