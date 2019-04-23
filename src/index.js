import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import Wall from './container/Wall';
import { Provider } from 'react-redux';
import store from './store/store';

render(
    <Provider store = { store }>
        <Wall />
    </Provider>
    , document.getElementById('root')
);
