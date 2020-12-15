import { MARK_SONG_AS_BROKEN, CHANGE_SONGS_QUEUE } from '../songsQueueConstants';

export const markSongAsBroken = (payload) => ({ type: MARK_SONG_AS_BROKEN, payload });
export const changeSongsQueue = (payload) => ({ type: CHANGE_SONGS_QUEUE, payload });
