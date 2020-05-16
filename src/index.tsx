import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore } from '~/store/configure';

const store = createStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
