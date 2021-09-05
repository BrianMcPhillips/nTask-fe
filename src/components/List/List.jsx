import React, { Component } from 'react';
import { fetchTasks } from '../../services/task-api';


export default class List extends Component {
  state = {
    taskData: []
  }
  componentDidMount = () => {
    const data = fetchTasks()
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
