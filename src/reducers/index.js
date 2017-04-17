import { combineReducers } from 'redux';
import PlaylistReducer from './playlistReducer.js';
import ActivePlaylist from './playlistActiveReducer.js';

const rootReducer = combineReducers({
  playlists: PlaylistReducer,
  activePlaylist: ActivePlaylist
});

export default rootReducer;