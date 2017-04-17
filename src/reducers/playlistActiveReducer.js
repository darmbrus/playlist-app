export default function (state = null, action) {
  switch (action.type) {
    case 'PLAYLIST_SELECTED':
      return action.payload;
    default:
      return state
  }
}