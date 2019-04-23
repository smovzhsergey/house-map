import React from 'react';
import { render } from 'react-dom';
import 'react-app-polyfill/ie9'; 
import 'react-app-polyfill/ie11'; 
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
