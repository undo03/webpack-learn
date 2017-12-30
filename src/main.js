import React from 'react';
import ReactDOM from 'react-dom';

import reactImage from './asset/img/react.png'; //引入图片
// import 'font-awesome/css/font-awesome.css'; // 引入字体文件的css样式


import './common/reset.scss';

import App from './views';

const aObj = {a: 1, b: 2};
console.log({...aObj,c:1});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
