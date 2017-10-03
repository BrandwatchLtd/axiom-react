import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Application from './components/Application';

const render = (Application) => {
  ReactDOM.render((
    <AppContainer>
      <BrowserRouter basename={ process.env.BASENAME }>
        <Application />
      </BrowserRouter>
    </AppContainer>
  ), document.getElementById('react-root'));
};

render(Application);

if (module.hot) {
  module.hot.accept('./components/Application', () => render(Application));
}
