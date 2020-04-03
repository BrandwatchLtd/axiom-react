import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import Site from "./components/Site/Site";

const render = (Site) => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById("react-root")
  );
};

render(Site);

if (module.hot) {
  module.hot.accept("./components/Site/Site", () => render(Site));
}
