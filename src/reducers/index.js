import { combineReducers } from 'redux';
import PlaylistReducer from './playlistReducer.js';
import ActivePlaylist from './playlistActiveReducer.js';
import NavReducer from './navReducer.js'

const rootReducer = combineReducers({
  playlists: PlaylistReducer,
  activePlaylist: ActivePlaylist,
  nav: NavReducer
});

export default rootReducer;