import { combineReducers } from 'redux';
import PlaylistReducer from './playlistReducer.js'

const rootReducer = combineReducers({
  playlists: PlaylistReducer
});

export default rootReducer;