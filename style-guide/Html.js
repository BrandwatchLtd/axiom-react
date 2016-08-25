import React, { PropTypes } from 'react';
import { renderToString } from 'react-dom/server';

const Html = ({ config, children }) => (
  <html lang="en-us">
    <head>
      <title>Brandwatch | Axiom</title>
      <base href="/"/>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="static/favicon.ico" rel="icon" type="image/x-icon" />
      <link href={ `${config.output.folderName}/${config.output.css}` } rel="stylesheet" />
    </head>
    <body>
      <div dangerouslySetInnerHTML={ { __html: renderToString(children) } } id="react-root"></div>
      <script src={ `${config.output.folderName}/${config.output.js}` }></script>
    </body>
  </html>
);

Html.propTypes = {
  children: PropTypes.node,
  config: PropTypes.object,
};

export default Html;
