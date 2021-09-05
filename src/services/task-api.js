import request from 'superagent';

const { URL } = process.env.REACT_APP_URL;

export const fetchTasks = token => {
  try {
  request.get(`${URL}/api/tasks`).set('Authorization', token);
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
