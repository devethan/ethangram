import { createStore, combineReducers } from "redux";
import users from './modules/users';

// Combining reducers on Store.
const reducer = combineReducers({
    users
})

let store = initialState => createStore(reducer);

export default store();