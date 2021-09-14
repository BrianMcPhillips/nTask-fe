import React, { Component } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Task List!</h1>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </div>
      </div>
    )
  }
}
