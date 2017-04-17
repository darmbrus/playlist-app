export const NAV_USER = 'NAV_USER';
export const NAV_PLAYLIST = 'NAV_PLAYLIST';
export const NAV_HOME = 'NAV_HOME';

export function navSelectHome() {
  return {
    type: NAV_HOME
  }
}

export function navSelectUser() {
  return {
    type: NAV_USER
  }
}

export function navSelectPlaylist() {
  return {
    type: NAV_PLAYLIST
  }
}