import request from 'superagent';

const { URL } = process.env.REACT_APP_URL;

export const fetchTasks = token => {
  try {
  request.get(`${URL}/api/tasks`).set('Authorization', token);
  } catch(e) {
    throw e 
  }
}

export const fetchTaskById = (id, token) => {
  try {
    request.get(`${URL}/api/tasks/${id}`).set('Authorization', token);
  } catch(e) {
    throw e 
  }
}

export const createTask = (taskInfo, token) => {
  try {
    request.post(`${URL}/api/tasks`).set('Authorization', token).send(taskInfo);
  } catch(e) {
    throw e 
  }
}

export const signIn = (userInfo) => {
  try {
    request.post(`${URL}/auth/signin`).send(userInfo);

  } catch(e) {
    throw e
  }
}

export const signUp = (userInfo) => {
  try {
    request.post(`${URL}/auth/signup`).send(userInfo);

  } catch(e) {
    throw e
  }
}
