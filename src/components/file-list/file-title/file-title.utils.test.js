import { removeFileNameExtension } from './file-title.utils';

describe('It should check and remove extensions IF needed', () => {
  test('It should remove .mp3 from file', () => {
    const fileName = 'el_ansioso.mp3';
    const fileNameWithOutExtension = removeFileNameExtension(fileName);
    expect(fileNameWithOutExtension).toBe('el_ansioso');
  });

  test('It should remove .wav from file', () => {
    const fileName = 'Instant_Crush.wav';
    const fileNameWithOutExtension = removeFileNameExtension(fileName);
    expect(fileNameWithOutExtension).toBe('Instant_Crush');
  });

  test('It should remove .ogg from file', () => {
    const fileName = 'Last_Dance_Wu_Bai.ogg';
    const fileNameWithOutExtension = removeFileNameExtension(fileName);
    expect(fileNameWithOutExtension).toBe('Last_Dance_Wu_Bai');
  });

  test('It should NOT remove .mp4 from file', () => {
    const fileName = 'Despacito.mp4';
    const fileNameWithOutExtension = removeFileNameExtension(fileName);
    expect(fileNameWithOutExtension).toBe(fileName);
  });

  test('It should NOT remove anything from file', () => {
    const fileName = 'folder.name.with.dots.a.lot.of.them';
    const fileNameWithOutExtension = removeFileNameExtension(fileName);
    expect(fileNameWithOutExtension).toBe(fileName);
  });
});
