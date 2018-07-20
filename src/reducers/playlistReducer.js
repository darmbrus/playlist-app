import { FETCH_PLAYLISTS, CREATE_RANDOM_PLAYLIST } from '../actions/playlists_action.js';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS:
      return action.payload;
    case CREATE_RANDOM_PLAYLIST:
      return action.payload.data;
    default:
      return state;
  }
}
