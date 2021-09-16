import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignOut from './SignOut/SignOut';
import List from './List/List';
import Header from './Header/Header';

export default class App extends Component {
  state = {
    token: ''
  }

  handleToken = () => {
    const token = localStorage.getItem('token')
    this.setState({ token: token})
  }

  render() {
    const { token } = this.state;
    return (
      <div>
        <Router>
          <Header /> 
          <Switch>
            <Route
              path='/'
              exact
              render={(routerProps) => <SignIn handleToken={this.handleToken} token={token} {...routerProps}/>}
            />
            <Route
              path='/list'
              exact
              render={(routerProps) => <List token={token} {...routerProps}/>}
            />
            <Route
              path='/signOut'
              exact
              render={(routerProps) => <SignOut {...routerProps}/>}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

