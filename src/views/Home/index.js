import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

import {changeTitle} from '../../actions/home';

import reactImage from '../../asset/img/react.png';
import buttonImage from '../../asset/img/button.png';
// import iweb from '../../asset/img/iweb.webp'
class Home extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <Header title="Wellcome to my website"/>
                <h2>{this.props.title}</h2>
                <img src={reactImage} alt=""/>
                <img src={buttonImage} alt=""/>
                <button onClick={()=>{
                    this.props.dispatch(changeTitle('wellcome'));
                }}>change title</button>
                <Footer />
            </div>
        )
    }
}

export default connect(state => ({
    title: state.home.title
}))(Home);