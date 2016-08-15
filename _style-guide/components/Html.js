import React, { Component, PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import * as config from '../../config';

export default class Html extends Component {
  static propTypes = {
    children: PropTypes.any,
    store: PropTypes.object,
  };

  render() {
    const { store, children } = this.props;

    return (
      <html lang="en-us">
        <head>
          <title>Brandwatch | Axiom</title>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/favicon.ico" rel="shortcut icon" />
          { __PRODUCTION__ && <link href={ `/${config.output.folderName}/${config.output.styleGuide.clientProdCSSFilename}` } rel="stylesheet" /> }
        </head>

        <body className="scheme-axiom">
          <div className="dm-app-container" dangerouslySetInnerHTML={ { __html: renderToString(children) } } id="react-root"></div>
          <script dangerouslySetInnerHTML={ { __html: `window.__data=${serialize(store.getState())};` } } />
          { __DEVELOPMENT__ && <aside id="dev-tools" /> }
          { __DEVELOPMENT__ && <script src={ `http://${config.webpack.devServerHostname}:${config.webpack.devServerPort}/${config.output.folderName}/${config.output.styleGuide.clientDevJSFilename}` }></script> }
          { __PRODUCTION__ && <script src={ `/${config.output.folderName}/${config.output.styleGuide.clientProdJSFilename}` }></script> }
        </body>
      </html>
    );
  }
}
