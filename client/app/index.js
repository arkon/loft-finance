import React from 'react';
import { render } from 'react-dom';

import App from './components/App/App';

import 'whatwg-fetch';
import './styles/styles.scss';

render(<App />, document.getElementById('app'));
