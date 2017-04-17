// import axios from 'axios';
// export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const PLAYLIST_SELECTED = 'PLAYLIST_SELECTED';

export function selectPlaylist(playlist) {
  console.log(playlist.name)
  return {
    type: PLAYLIST_SELECTED,
    payload: playlist
  };
}

// export function fetchPlaylists() {
//   const url = "http://localhost:8082/exposed/playlists"

//   const request = axios.get(url);
//   console.log(request);

//   return {
//     type: FETCH_PLAYLISTS,
//     payload: request
//   };
// }