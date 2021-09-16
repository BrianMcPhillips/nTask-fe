import React, { Component } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../../services/task-api';
import Item from './Item/Item';
import Create from '../Create/Create';
import styles from './List.module.css';


export default class List extends Component {
  state = {
    taskData: [],
    todo: '',
    completed: false
  }

  componentDidMount = async() => {
    if(this.props.token) {
      const data = await fetchTasks();
      this.setState({ taskData: data.body });
    } else {
      this.props.history.push('/');
    }
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


  handleUpdate = async(id, taskinfo) => {
    await updateTask(id, taskinfo);
    const data = await fetchTasks();
    this.setState({ taskData: data.body });
  }

  handleDelete = async(id) => {
    await deleteTask(id);
    const data = await fetchTasks();
    this.setState({ taskData: data.body });
  }

  render() {
    const {
      taskData,
      todo,
      completed
    } = this.state;
    return (
      <div className={styles.container}>
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
            taskData.length > 0 && taskData.map((task, i) => 
              <Item 
                key={task.todo + i} 
                data={task} 
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
              />
            )
          }
        </div>

      </div>
    )
  }
}
