export const PLAYLIST_SELECTED = 'PLAYLIST_SELECTED';

export function selectPlaylist(playlist) {
  console.log(playlist.name)
  return {
    type: PLAYLIST_SELECTED,
    payload: playlist
  };
}