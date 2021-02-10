/*
 * TODO: Fix this temporary fix
 *
 * This functions is a temporary fix
 * server receives `songTitle` and `songPath`
 *
 */
export const serializeFavoriteObject = (body) => ({
  song_name: body.songTitle,
  path_lower: body.songPath,
});
