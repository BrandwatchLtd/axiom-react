import React, { Component, PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import * as config from '../../config';

export default class Html extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return (
      <html lang="en-us">
        <head>
          <title>Brandwatch | Axiom</title>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/assets/favicon.ico" rel="shortcut icon" />
          <link href={ `/lib/${config.output.styleGuide.clientProdCSSFilename}` } rel="stylesheet" />
        </head>

        <body className="scheme-axiom">
          <div className="dm-app-container" dangerouslySetInnerHTML={ { __html: renderToString(children) } } id="react-root"></div>
          <script src={ `/lib/${config.output.styleGuide.clientProdJSFilename}` }></script>
        </body>
      </html>
    );
  }
}
