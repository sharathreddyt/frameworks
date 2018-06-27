import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import promiseMiddleware from "redux-promise";
import "./app.css";

// COMPONENTS
import App from "./components/app";
import Car from "./components/car";

// REDUCERS
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/car/:id" component={Car} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
