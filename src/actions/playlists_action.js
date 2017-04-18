import axios from 'axios';
import { API_ROOT } from '../index.js';

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const CREATE_RANDOM_PLAYLIST = 'CREATE_RANDOM_PLAYLIST';

export function fetchPlaylists() {
  const url = API_ROOT + "/playlists"

  const request = axios.get(url, {
    withCredentials: 'same-origin'
  });

  return {
    type: FETCH_PLAYLISTS,
    payload: request
  };
}

export function createRandomPlaylist(playlist) {
  const url = API_ROOT + "/playlists/" + playlist.id + "/random";
  console.log(url);

  const request = axios.post(url, {
    withCredentials: 'same-origin'
  });

  return {
    type: CREATE_RANDOM_PLAYLIST,
    payload: request
  }
}