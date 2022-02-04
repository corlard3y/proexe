import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// eslint-disable-next-line
import { createLogger } from "redux-logger";
import rootReducer from "./_reducers";

// const loggerMiddleware = createLogger();
// loggerMiddleware

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
