import { combineReducers } from 'redux';
import PlaylistReducer from './playlistReducer.js';
import UserReducer from './userReducer.js';
import InfoReducer from './apiInfoReducer.js'

const rootReducer = combineReducers({
  playlists: PlaylistReducer,
  user: UserReducer,
  apiInfo: InfoReducer
});

export default rootReducer;