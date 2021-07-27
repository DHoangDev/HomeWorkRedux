import { combineReducers, createStore } from "redux";

import BubleReducer from "./BubleReducer";

const rootReducer = combineReducers({
    BubleReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());