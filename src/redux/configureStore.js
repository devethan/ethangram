import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import users from 'redux/modules/users';

// ENV
const env = process.env.NODE_ENV;

// Applying Middleware
const middlewares = [thunk];

if(env === 'development') {
    // logger는 개발서버에서만 부르기 때문에, 다음과 같은 설정을 통해 logger를 설정한다.
    const {logger} = require('redux-logger');
    middlewares.push(logger);
}


// Combining reducers on Store.
const reducer = combineReducers({
    users
})

let store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));

export default store();