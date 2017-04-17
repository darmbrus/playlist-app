import axios from 'axios';
import { API_ROOT } from '../index.js';
export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';


export function fetchPlaylists() {
  const url = API_ROOT + "/exposed/playlists"

  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_PLAYLISTS,
    payload: request
  };
}