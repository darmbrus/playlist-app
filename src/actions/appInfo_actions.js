import axios from 'axios';
import { API_ROOT } from '../index.js';

export const FETCH_API_INFO = "FETCH_API_INFO";

export function fetchApiInfo() {
  const url = API_ROOT + "/info";

  const request = axios.get(url);

  return {
    type: FETCH_API_INFO,
    payload: request
  };
}