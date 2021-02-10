export const isSongInFavorites = (favorites, path) =>
  favorites.some((favorite) => favorite.get('path_lower') === path);
