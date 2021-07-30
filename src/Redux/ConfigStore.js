import { combineReducers, createStore } from "redux";

import BubleReducer from "./Reducer/BubleReducer";
import BookingTicketReducer from "./Reducer/BookingTicketReducer";
import UserManagementReducer from "./Reducer/UserManagementReducer";

const rootReducer = combineReducers({
    stateBuble: BubleReducer,
    stateBookingTicket: BookingTicketReducer,
    // stateUser: UserManagementReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);