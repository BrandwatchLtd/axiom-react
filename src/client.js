import React from 'react';
import { render } from 'react-dom';
import Routes from './_helper/Routes';
import { Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

const history = useRouterHistory(createHistory)({
  basename: '/',
});

render(<Router history={ history }>{ Routes }</Router>, document.getElementById('react-root'));
