// Action creator
// name export allow to export many functions from a single file
export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED', // type is required
    payload: song // payload is optional 
  };
};
