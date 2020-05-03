import React from "react";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Reducers from "./reducers";

const rootReducer = combineReducers(Reducers);

const persistConfig = {
  storage,
  key: "root",
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

let persistor = persistStore(store);

const addReduxProviders = (app) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {app}
    </PersistGate>
  </Provider>
);

export default addReduxProviders;
