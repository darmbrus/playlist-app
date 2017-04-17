export const PLAYLIST_SELECTED = 'PLAYLIST_SELECTED';

export function selectPlaylist(playlist) {
  return {
    type: PLAYLIST_SELECTED,
    payload: playlist
  };
}