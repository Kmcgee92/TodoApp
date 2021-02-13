import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { auth } from "../reducers/Auth.js";
// import { profiles } from "../reducers/profile.js";
// import { history } from "../reducers/history.js";
// import { watchlist } from "../reducers/watchlist.js";

let storeEnhancer;

// dev middleware
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

if (process.env.NODE_ENV !== "production") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  storeEnhancer = composeEnhancers(applyMiddleware(thunk, logger));
} else {
  // allow use of Redux Tree while deployed
  const displayReduxLive =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  storeEnhancer = displayReduxLive(applyMiddleware(thunk));
}

const ReducerMerger = combineReducers({
  auth,
});

const configureStore = (initialState) => {
  return createStore(ReducerMerger, initialState, storeEnhancer);
};

export default configureStore;
