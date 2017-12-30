import React, {Component} from 'react';
import Home from "./Home";
export default class App extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}