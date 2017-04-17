import { NAV_USER, NAV_PLAYLIST } from '../actions/navBar_action.js'

export default function (state = null, action) {
  switch (action.type) {
    case NAV_USER:
      return "USER";
    case NAV_PLAYLIST:
      return "PLAYLIST";
    default:
      return state
  }
}