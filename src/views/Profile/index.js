import React, { Component } from 'react'
import ProfileRouter from '../../routers/profile';
import Header from '../../components/Header';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header title="Profile"/>     
        <ProfileRouter />
      </div>
    )
  }
}
