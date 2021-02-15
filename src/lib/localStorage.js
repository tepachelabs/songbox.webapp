export const saveSession = (token, user) => {
  global.localStorage.setItem('token', token);
  global.localStorage.setItem('user', JSON.stringify(user));
};

export const getSession = () => {
  const user = global.localStorage.getItem('user');
  const token = global.localStorage.getItem('token');

  return !user || !token ? null : { user: JSON.parse(user), token };
};

export const getPreferences = () =>
  JSON.parse(global.localStorage.getItem('preferences')) || null;

export const setPreferences = (preferences) => {
  global.localStorage.setItem('preferences', JSON.stringify(preferences));
};

export const destroySession = () => {
  global.localStorage.removeItem('token');
  global.localStorage.removeItem('user');
};
