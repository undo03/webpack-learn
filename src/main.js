import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';
import './common/reset.less';

import reactImage from './asset/img/react.png'; //引入图片
// import 'font-awesome/css/font-awesome.css'; // 引入字体文件的css样式

import Router from './routers';

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <Router />  
    </Provider>,
    document.getElementById('root')
);
