import React from 'react';
import * as config from '../../config';

const Html = () => (
  <html lang="en-us">
    <head>
      <title>Brandwatch | Axiom</title>
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

export default Html;
