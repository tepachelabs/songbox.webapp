import { fromJS } from 'immutable';
import { isSongInFavorites } from './favorites';

describe('Testing isSongInFavorites', () => {
  const mockFavorites = [
    { path_lower: '/songs/despacito.mp3', title: 'despacito.mp3' },
    { path_lower: '/songs/otherSong.mp3', title: 'otherSong.mp3' },
  ];

  const listOfSongs = fromJS(mockFavorites);

  test('it should be in favorites', () => {
    const path = '/songs/despacito.mp3';
    const songFound = isSongInFavorites(listOfSongs, path);

    expect(songFound).toBeTruthy();
  });

  test('it should NOT be in favorites', () => {
    const path = '/some/weird/path/song.mp3';
    const songFound = isSongInFavorites(listOfSongs, path);

    expect(songFound).not.toBeTruthy();
  });
});
