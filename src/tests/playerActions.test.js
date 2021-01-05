import {
  setRepeat,
  setIsPlaying,
  setSongLink,
  setVolume,
} from 'store/actions/playerActions';

import {
  PLAYER_SET_REPEAT,
  PLAYER_SET_IS_PLAYING,
  PLAYER_SET_SONG_LINK,
  PLAYER_SET_VOLUME,
} from 'store/constants';

describe('setRepeat actions', () => {
  test('it should create an action setRepeat and be equal', () => {
    const payload = true;
    const expectedAction = {
      type: PLAYER_SET_REPEAT,
      payload,
    };

    expect(setRepeat(payload)).toEqual(expectedAction);
  });

  test('it should create an action setRepeat and NOT be equal', () => {
    const payload = true;
    const expectedAction = {
      type: PLAYER_SET_REPEAT,
      payload,
      otherAttribute: true,
    };

    expect(setRepeat(payload)).not.toEqual(expectedAction);
  });

  test('it should create an action setRepeat and NOT be equal', () => {
    const payload = true;
    const expectedAction = {
      type: PLAYER_SET_REPEAT,
    };

    expect(setRepeat(payload)).not.toEqual(expectedAction);
  });
});

describe('setIsPlaying actions', () => {
  test('it should create an action setRepeat and be equal', () => {
    const payload = true;
    const expectedAction = {
      type: PLAYER_SET_IS_PLAYING,
      payload,
    };

    expect(setIsPlaying(payload)).toEqual(expectedAction);
  });

  test('it should create an action setRepeat and NOT be equal', () => {
    const payload = true;
    const expectedAction = {
      type: PLAYER_SET_IS_PLAYING,
      payload,
      otherAttribute: true,
    };

    expect(setIsPlaying(payload)).not.toEqual(expectedAction);
  });

  test('it should create an action setRepeat and NOT be equal', () => {
    const payload = true;
    const expectedAction = {
      type: PLAYER_SET_IS_PLAYING,
    };

    expect(setIsPlaying(payload)).not.toEqual(expectedAction);
  });
});

describe('setSongLink actions', () => {
  test('it should create an action setSongLink and be equal', () => {
    const payload = 'http://imaginarylink.com/streamable/song.mp3';
    const expectedAction = {
      type: PLAYER_SET_SONG_LINK,
      payload,
    };

    expect(setSongLink(payload)).toEqual(expectedAction);
  });

  test('it should create an action setSongLink and NOT be equal', () => {
    const payload = 'http://imaginarylink.com/streamable/song.wav';
    const expectedAction = {
      type: PLAYER_SET_SONG_LINK,
      payload,
      otherAttribute: true,
    };

    expect(setSongLink(payload)).not.toEqual(expectedAction);
  });
});

describe('setVolume actions', () => {
  test('it should create an action setVolume and be equal', () => {
    const payload = 0.6;
    const expectedAction = {
      type: PLAYER_SET_VOLUME,
      payload,
    };

    expect(setVolume(payload)).toEqual(expectedAction);
  });

  test('it should create an action setVolume and NOT be equal', () => {
    const payload = 0.6;
    const expectedAction = {
      type: PLAYER_SET_VOLUME,
      payload,
      otherAttribute: true,
    };

    expect(setVolume(payload)).not.toEqual(expectedAction);
  });
});
