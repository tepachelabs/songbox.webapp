export const removeFileNameExtension = (fileName) => {
  const fileExtensionExp = /.(mp3|wav|ogg)$/;
  if (fileExtensionExp.test(fileName)) {
    const lastDotIndex = fileName.lastIndexOf('.');
    return fileName.substring(0, lastDotIndex);
  }

  return fileName;
};
