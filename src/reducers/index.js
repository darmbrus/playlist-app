import { combineReducers } from 'redux';
import PlaylistReducer from './playlistReducer.js';
import ActivePlaylist from './playlistActiveReducer.js';
import NavReducer from './navReducer.js';
import UserReducer from './userReducer.js';

const rootReducer = combineReducers({
  playlists: PlaylistReducer,
  user: UserReducer,
  activePlaylist: ActivePlaylist,
  nav: NavReducer
});

export default rootReducer;