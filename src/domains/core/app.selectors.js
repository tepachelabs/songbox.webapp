export const selectIsAppLoaded = (state) => state.app.get('isLoaded');
export const selectOS = state => state.app.get('os');

// TODO: move token to `session` storage
export const selectSessionToken = (state) => state.app.get('token');
export const selectIsSessionToken = (state) => !!state.app.get('token');
