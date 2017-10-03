import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Application from './components/Application';
import template from './index.ejs';
import { normalisePath } from './utils/documentation-routes';

if (typeof document !== 'undefined') {
  render((
    <BrowserRouter basename={ `/${process.env.BASENAME}` }>
      <Application />
    </BrowserRouter>
  ), document.getElementById('react-root'));
}

export default ({ path, webpackStats }) => {
  const hash = webpackStats.hash;
  const context = {};

  const renderPath = (path) => template({
    htmlWebpackPlugin: {
      options: {
        basename: `/${process.env.BASENAME}`,
        stylesheet: `assets/bundle.${hash}.min.css`,
        script: `assets/bundle.${hash}.min.js`,
        html: renderToString(
          <StaticRouter
              basename={ `/${process.env.BASENAME}/` }
              context={ context }
              location={ normalisePath(path) }>
            <Application />
          </StaticRouter>
        ),
      },
    },
  });

  const html = renderPath(path);

  return context.url
    ? renderPath(context.url)
    : html;
};
