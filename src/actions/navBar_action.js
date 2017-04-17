export const NAV_USER = 'NAV_USER';
export const NAV_PLAYLIST = 'NAV_PLAYLIST';

export function navSelectUser() {
  console.log("user clicked")
  return {
    type: NAV_USER
  }
}

export function navSelectPlaylist() {
  console.log("playlist clicked")
  return {
    type: NAV_PLAYLIST
  }
}