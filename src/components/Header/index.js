import React, {Component} from 'react';
import style from './index.less'; // 模块化css的引入方式
export default class Header extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {

    }

    render() {
        // 以下使用的样式是模块的css样式
        return (
            <div className={style.header}>
                Wellcome to my website
            </div>
        )
    }
}