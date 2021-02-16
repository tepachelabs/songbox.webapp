const FILE_EXTENSION_REGEX = /.(mp3|wav|ogg)$/;

export const getFileNameWithoutExtension = (fileName) =>
  fileName.replace(FILE_EXTENSION_REGEX, '');
