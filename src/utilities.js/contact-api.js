import sendRequest from './send-request';

const BASE_URL = '/api/contacts';

//signUP, send the data to the backend, fetch the token from the database
export function SendMessage(data) {
  return sendRequest(BASE_URL, 'POST', data);
}