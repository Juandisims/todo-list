import React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import './styles.css';

const rootDiv = document.createElement('div');
rootDiv.id = 'root';

render(<App />, document.body.appendChild(rootDiv));
