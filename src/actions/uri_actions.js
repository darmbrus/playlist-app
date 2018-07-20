import axios from 'axios';
import { API_ROOT } from '../index.js';

export function postUri(uri) {
  const url = API_ROOT + "/uri/" + uri + "/random"

  const request = axios.post(url, {
    withCredentials: 'same-origin'
  });

  return true
}