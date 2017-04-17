import axios from 'axios';
export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';

export function fetchPlaylists() {
  const url = "http://pi:8080/exposed/playlists"

  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_PLAYLISTS,
    payload: request
  };
}