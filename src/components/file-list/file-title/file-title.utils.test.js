import { getFileNameWithoutExtension } from './file-title.utils';

describe('#getFileNameWithoutExtension', () => {
  test('It should remove .mp3 from file', () => {
    const fileName = 'el_ansioso.mp3';
    const fileNameWithOutExtension = getFileNameWithoutExtension(fileName);
    expect(fileNameWithOutExtension).toBe('el_ansioso');
  });

  test('It should remove .wav from file', () => {
    const fileName = 'Instant_Crush.wav';
    const fileNameWithOutExtension = getFileNameWithoutExtension(fileName);
    expect(fileNameWithOutExtension).toBe('Instant_Crush');
  });

  test('It should remove .ogg from file', () => {
    const fileName = 'Last_Dance_Wu_Bai.ogg';
    const fileNameWithOutExtension = getFileNameWithoutExtension(fileName);
    expect(fileNameWithOutExtension).toBe('Last_Dance_Wu_Bai');
  });

  test('It should NOT remove .mp4 from file', () => {
    const fileName = 'Despacito.mp4';
    const fileNameWithOutExtension = getFileNameWithoutExtension(fileName);
    expect(fileNameWithOutExtension).toBe(fileName);
  });

  test('It should NOT remove anything from file', () => {
    const fileName = 'folder.name.with.dots.a.lot.of.them';
    const fileNameWithOutExtension = getFileNameWithoutExtension(fileName);
    expect(fileNameWithOutExtension).toBe(fileName);
  });
});
