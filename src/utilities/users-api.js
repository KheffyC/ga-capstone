import sendRequest from "./send-request";

// users-api.js

// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';
const LOGIN_URL = '/api/users/login'

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData)
}

export async function login(userData){
  return sendRequest(LOGIN_URL, 'POST', userData)
}

export function checkToken(){
  return sendRequest(`${BASE_URL}/check-token`)
}