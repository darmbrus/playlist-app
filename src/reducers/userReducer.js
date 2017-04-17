import { FETCH_USER_INFO } from '../actions/userInfo_actions.js'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER_INFO:
      return action.payload;
    default:
      return state;
  }
}