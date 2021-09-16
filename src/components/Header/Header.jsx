import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styles from './Header.module.css';

export default class Header extends Component {
  state = {
    navigate: false
  }
  render() {
    const { navigate } = this.state;

    if(navigate) {
      return <Redirect to="/" push={true} />
    }
    return (
      <div className={styles.header}>
        <h1>Task List!</h1>
        <div className={styles.links}>
          <button onClick={() => {
            this.setState({ navigate: true });
            localStorage.removeItem('token');
            }}>
            Sign Out
          </button>
        </div>
      </div>
    )
  }
}
