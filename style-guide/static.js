import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { useRouterHistory, match, RouterContext, Router } from 'react-router';
import { createMemoryHistory, createHistory } from 'history';
import routes from './routes';
import template from './index.ejs';
import './client.css';

if (typeof document !== 'undefined') {
  const browserHistory = useRouterHistory(createHistory)({
    basename: __BASENAME__,
  });

  render((
    <Router history={ browserHistory } routes={ routes } />
  ), document.getElementById('react-root'));
}

export default (locals, callback) => {
  const history = createMemoryHistory({ basename: __BASENAME__ });
  const location = history.createLocation(locals.path);
  const hash = locals.webpackStats.hash;

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    callback(null, template({
      htmlWebpackPlugin: {
        options: {
          basename: __BASENAME__,
          stylesheet: `assets/bundle.${hash}.min.css`,
          script: `assets/bundle.${hash}.min.js`,
          html: renderToString(<RouterContext { ...renderProps } />),
        },
      },
    }));
  });
};
