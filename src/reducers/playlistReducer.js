import { FETCH_PLAYLISTS } from '../actions/playlists_action.js'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS:
      return action.payload.data;
    default:
      return state;
  }
}
