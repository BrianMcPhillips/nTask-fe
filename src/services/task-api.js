import request from 'superagent';

const { URL } = process.env.REACT_APP_URL;

export const getTasks = token => {
  try {
  request.get(`${URL}/api/tasks`).set('Authorization', token);
  } catch(e) {
    throw e 
  }
}
