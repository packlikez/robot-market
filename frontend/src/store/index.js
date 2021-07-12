import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

// We'll use redux-logger just as an example of adding another middleware
import logger from "redux-logger";
import api from "../middleware/api";
import robot from "./robot";
import cart from "./cart";

const reducer = {
  robot,
  cart,
};

const middleware = [...getDefaultMiddleware(), logger, api];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - redux-thunk and redux-logger were added as middleware
// - The Redux DevTools Extension is disabled for production
// - The middleware, batch, and devtools enhancers were composed together
