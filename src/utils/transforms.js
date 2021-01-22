/*
* TODO: Fix this temporary fix
*
* This functions is a temporary fix
* server receives `song_name` and `path_lower`
*
*/
export const serializeFavoriteObject = (body) => ({
  song_name: body.fileName,
  path_lower: body.path,
});
