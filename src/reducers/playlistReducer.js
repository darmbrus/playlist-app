export default function (state = null, action) {
  console.log("Action recieved", action);
  switch (action.type) {
    case 'FETCH_PLAYLISTS':
      return action.payload;
    default:
      return state;
  }
}