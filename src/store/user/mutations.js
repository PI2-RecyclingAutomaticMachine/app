export const authenticate = (state, { user, token }) => {
  window.localStorage.setItem('id_token', token);
  window.localStorage.setItem('id', user.id);
  state.authenticated = true;
  state.user = Object.assign(state.user, user);
};

export const unauthenticate = (state) => {
  window.localStorage.removeItem('id_token');
  window.localStorage.removeItem('id');
  state.authenticated = false;
  state.user = Object.assign(state.user, {});
};

export const updateAuthentication = (state) => {
  const jwt = window.localStorage.getItem('id_token');

  if (jwt) {
    state.authenticated = true;
  } else {
    state.authenticated = false;
  }
};

export const saveUser = (state, user) => {
  state.user = Object.assign(state.user, user);
};
