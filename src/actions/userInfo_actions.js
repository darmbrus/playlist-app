import axios from 'axios';
import { API_ROOT } from '../index.js';

export const FETCH_USER_INFO = 'FETCH_USER_INFO'

export function fetchUserInfo() {
  const url = API_ROOT + "/exposed/user";

  const request = axios.get(url);

  return {
    type: FETCH_USER_INFO,
    payload: request
  };
}