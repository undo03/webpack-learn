import React, {Component} from 'react';
import Header from "../../components/Header/index";
import reactImage from '../../asset/img/react.png';
export default class Home extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <Header/>
                <img src={reactImage} alt=""/>
            </div>
        )
    }
}