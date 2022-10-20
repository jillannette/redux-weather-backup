import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import logger from 'redux-logger'
import rootReducer from "./reducers/rootReducer";
import App from "./App";

const myLogger = (store) => {
  return next => {
    return action => {
      console.log('middleware ran')
      return next (action)
  }
};
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger, logger, thunk)));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  rootElement
);