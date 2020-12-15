export const changeSlidebarIndex = (index) => ({
  type: 'CHANGE_SLIDEBAR_INDEX',
  payload: index,
});

export const changeAuth = (auth) => ({
  type: 'CHANGED_AUTH',
  payload: auth,
});

export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});
