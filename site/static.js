import "./index.css";

import React from "react";
import { render } from "react-dom";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Site from "./components/Site/Site";
import template from "./index.ejs";

if (typeof document !== "undefined") {
  render(
    <BrowserRouter>
      <Site />
    </BrowserRouter>,
    document.getElementById("react-root")
  );
}

export default ({ path, webpackStats }) => {
  const hash = webpackStats.hash;
  return template({
    htmlWebpackPlugin: {
      options: {
        stylesheet: `/assets/bundle.${hash}.min.css`,
        script: `/assets/bundle.${hash}.min.js`,
        html: renderToString(
          <StaticRouter location={path}>
            <Site />
          </StaticRouter>
        ),
      },
    },
  });
};
