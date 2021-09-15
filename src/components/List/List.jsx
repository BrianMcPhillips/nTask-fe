import React, { Component } from 'react';
import { fetchTasks, createTask } from '../../services/task-api';
import Item from './Item/Item';
import Create from '../Create/Create';


export default class List extends Component {
  state = {
    taskData: [],
    todo: '',
    completed: false
  }
  componentDidMount = async() => {
    const data = await fetchTasks();
    this.setState({ taskData: data.body });
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    await createTask({
      todo: this.state.todo,
      completed: this.state.completed
    });

    const data = await fetchTasks();
    this.setState({ taskData: data.body });
  }

  handleTodoChange = (e) => {
    this.setState({ todo: e.target.value })
  }
  handleCompletedChange = (e) => {
    this.setState({ completed: e.target.value })
  }

  render() {
    const {
      taskData,
      todo,
      completed
    } = this.state;
    return (
      <div>
        <Create 
          todo={todo}
          completed={completed}
          handleSubmit={this.handleSubmit}
          handleTodoChange={this.handleTodoChange}
          handleCompletedChange={this.handleCompletedChange}
          />
        <div>
          {
            taskData.length === 0 && 
              <div>
                <h1>
                  Please create a task to see your list
                </h1>
              </div>
          }
          {
            taskData.length > 0 && taskData.map((task, i) => <Item key={task.todo + i} data={task}/>)
          }
        </div>

      </div>
    )
  }
}
