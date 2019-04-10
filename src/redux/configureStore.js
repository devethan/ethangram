import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerMiddleware } from 'react-router-redux';
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import users from 'redux/modules/users';

// ENV
const env = process.env.NODE_ENV;

// History
const history = createBrowserHistory();

// Applying Middleware
const middlewares = [thunk, routerMiddleware(history)];


if(env === 'development') {
    // logger는 개발서버에서만 부르기 때문에, 다음과 같은 설정을 통해 logger를 설정한다.
    const {logger} = require('redux-logger');
    middlewares.push(logger);
}


// Combining reducers on Store.
const reducer = combineReducers({
    users,
    router: connectRouter(history),
})

let store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));


// Export history for router
export { history };

export default store();