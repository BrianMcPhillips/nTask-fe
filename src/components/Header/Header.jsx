import React, { Component } from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    const { signOut } = this.props;
    return (
      <div className={styles.header}>
        <h1>Task List!</h1>
        <div className={styles.links}>
          <button onClick={signOut}>Sign Out</button>
        </div>
      </div>
    )
  }
}
