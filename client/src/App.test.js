import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import stores from "./stores";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <React.Fragment>
      <Provider {...stores}>
        <App />
      </Provider>
    </React.Fragment>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
