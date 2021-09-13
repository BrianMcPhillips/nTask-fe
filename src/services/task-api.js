import request from 'superagent';

const URL = process.env.REACT_APP_URL;
const token = localStorage.getItem('token');

export const fetchTasks = () => {
  try {
    return request.get(`${URL}/api/tasks`).set('Authorization', token);
  } catch(e) {
    throw e 
  }
}

export const fetchTaskById = id => {
  try {
    return request.get(`${URL}/api/tasks/${id}`).set('Authorization', token);
  } catch(e) {
    throw e 
  }
}

export const createTask = taskInfo => {
  try {
    return request.post(`${URL}/api/tasks`).set('Authorization', token).send(taskInfo);
  } catch(e) {
    throw e 
  }
}

export const updateTask = (id, taskInfo) => {
  try {
    return request.put(`${URL}/api/tasks/${id}`).set('Authorization', token).send(taskInfo);
  } catch(e) {
    throw e 
  }
}

export const deleteTask = id => {
  try {
    return request.delete(`${URL}/api/tasks/${id}`).set('Authorization', token);
  } catch(e) {
    throw e
  }
}

export const signIn = userInfo => {
  try {
    return request.post(`${URL}/auth/signin`).send(userInfo);
  } catch(e) {
    throw e
  }
}

export const signUp = userInfo => {
  try {
    return request.post(`${URL}/auth/signup`).send(userInfo);
  } catch(e) {
    throw e
  }
}
