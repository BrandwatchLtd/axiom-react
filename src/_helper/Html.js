import React, { PropTypes } from 'react';

const Html = ({ config }) => (
  <html lang="en-us">
    <head>
      <title>Brandwatch | Axiom</title>
      <base href="/"/>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href={ `${config.output.folderName}/${config.output.css}` } rel="stylesheet" />
    </head>
    <body>
      <div id="react-root"></div>
      <script src={ `${config.output.folderName}/${config.output.js}` }></script>
    </body>
  </html>
);

Html.propTypes = {
  config: PropTypes.object,
};

export default Html;
