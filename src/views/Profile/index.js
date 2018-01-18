import React, { Component } from 'react'
import ProfileRouter from '../../routers/profile';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <ProfileRouter />

      </div>
    )
  }
}
