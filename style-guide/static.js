import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { browserHistory, match, RouterContext, Router } from 'react-router';
import { createMemoryHistory } from 'history';
import routes from './routes';
import template from './index.ejs';

if (__INCLUDE_CSS__) {
  require('./client.scss');
}

if (typeof document !== 'undefined') {
  render((
    <Router history={ browserHistory } routes={ routes } />
  ), document.getElementById('react-root'));
}


export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    callback(null, template({
      htmlWebpackPlugin: {
        options: {
          stylesheet: '/assets/bundle.css',
          script: '/assets/bundle.js',
          html: renderToString(<RouterContext { ...renderProps } />),
        },
      },
    }));
  });
};
