import { combineReducers } from 'redux';
import PlaylistReducer from './playlistReducer.js';
import ActivePlaylist from './playlistActiveReducer.js';
import UserReducer from './userReducer.js';

const rootReducer = combineReducers({
  playlists: PlaylistReducer,
  user: UserReducer,
  activePlaylist: ActivePlaylist
});

export default rootReducer;