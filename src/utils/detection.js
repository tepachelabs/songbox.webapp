/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', or 'base'.
 * From stackoverflow: https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
 *
 * @returns {String}
 */
export default function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return 'android';
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }

  return 'base';
}
