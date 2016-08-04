import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createDevTools from './createDevTools';
import reducer from 'style-guide/reducers';

export default function(initialState = {}) {
  let finalCreateStore;
  const middlewares = [thunk];

  if (__DEVELOPMENT__) {
    const DevTools = createDevTools();

    finalCreateStore = compose(
      applyMiddleware(reduxImmutableStateInvariant(), ...middlewares),
      DevTools.instrument(),
      persistState((typeof window !== 'undefined') ? window.location.href.match(/[?&]debug_session=([^&]+)\b/) : null)
    );
  } else {
    finalCreateStore = compose(
      applyMiddleware(...middlewares)
    );
  }

  return finalCreateStore(createStore)(reducer, initialState);
}
