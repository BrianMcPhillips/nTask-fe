import React, { Component } from 'react';
import { fetchTasks } from '../../services/task-api';
import Item from './Item/Item';


export default class List extends Component {
  state = {
    taskData: []
  }
  componentDidMount = () => {
    const token = localStorage.getItem('token');
    const data = fetchTasks(token);
    this.setState({ taskData: data.body });
  }

  render() {
    const {
      taskData
    } = this.state;
    return (
      <div>
        {
          taskData === null && 
            <div>
              <h1>
                Please create a task to see your list
              </h1>
            </div>
        }
        {
          taskData !== null && taskData.map((task, i) => <Item key={task.todo + i} data={task}/>)
        }
      </div>
    )
  }
}
