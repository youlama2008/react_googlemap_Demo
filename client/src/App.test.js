import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import stores from "./stores";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
