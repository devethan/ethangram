import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import users from 'redux/modules/users';

// Applying Middleware
const middlewares = [thunk];

// Combining reducers on Store.
const reducer = combineReducers({
    users
})

let store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));

export default store();