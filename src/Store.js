
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from "./reducers/reducers";

const reducers = combineReducers({ User: userReducer })

const middleware = [thunk]

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;