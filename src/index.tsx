import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from '~/store/configure';
import Root from './Root';

const store = createStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
