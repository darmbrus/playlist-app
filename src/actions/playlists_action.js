import axios from 'axios';
import { API_ROOT } from '../index.js';

export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const CREATE_RANDOM_PLAYLIST = 'CREATE_RANDOM_PLAYLIST';

export function fetchPlaylists() {
  const url = API_ROOT + "/exposed/playlists"

  const request = axios.get(url);

  return {
    type: FETCH_PLAYLISTS,
    payload: request
  };
}

export function createRandomPlaylist(playlist) {
  const url = API_ROOT + "/exposed/playlists/" + playlist.id + "/random";
  console.log(url);

  const request = axios.post(url);

  return {
    type: CREATE_RANDOM_PLAYLIST,
    payload: request
  }
}