import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {store} from "./setup";

import App from "./components/app/appComponent";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);