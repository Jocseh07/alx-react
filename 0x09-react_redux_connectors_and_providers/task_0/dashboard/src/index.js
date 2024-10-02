import React from "react";

import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducer";

const store = createStore(uiReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App isLoggedIn={false} />
    </Provider>
  </React.StrictMode>
);
