import React from "react";
import ReactDOM from "react-dom";

import './stylesheet/index.css';


import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as mainStore from "./redux/store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mainStore.store}>
      <PersistGate loading={null} persistor={mainStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
