import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignOut extends Component {
  render() {
    return (
      <div>
        <h1>You have been signed out</h1>
        <Link to='/'>Sign in Page</Link>
      </div>
    )
  }
}
