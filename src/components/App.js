import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import List from './List/List';
import Header from './Header/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header /> 
          <Switch>
            <Route
              path='/'
              exact
              render={(routerProps) => <SignIn {...routerProps}/>}
            />
            <Route
              path='/list'
              exact
              render={(routerProps) => <List {...routerProps}/>}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

