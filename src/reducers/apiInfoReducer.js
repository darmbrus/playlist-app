import { FETCH_API_INFO } from '../actions/appInfo_actions.js'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_API_INFO:
      return action.payload.data;
    default:
      return state;
  }
}