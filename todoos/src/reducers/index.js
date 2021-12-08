import { createStore , combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Task from "./task"
import signIn from "./login";
const reducers = combineReducers({ signIn , Task});

const store = () => {
    return createStore(reducers , composeWithDevTools() );
};


export default store();