import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

import reducers from "./reducers";
import App from "./components/app";
import Car from "./containers/car";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/car/:id" component={Car} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
