import React from 'react';
import { render } from 'react-dom';

// Import store
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'

import { App } from './modules/App/index';
import './styles.css';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';

const store = createStore(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(rootDiv)
);
