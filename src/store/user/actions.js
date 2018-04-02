import userApi from '../../api/user';
import Vue from 'vue';

export const logout = ({ commit }) => {
  commit('unauthenticate');
};

export const login = async ({ commit }, { cpf, password }) => {
  try {
    // const socketId = socket.id
    const { data } = await userApi.authenticateUser(cpf, password);
    const { user, token } = data;

    commit('authenticate', { user, token });
    return true;
  } catch (err) {
    Vue.$log.error(err);
    throw new Error('Não foi possível realizar login. Dados inválidos.');
  }
};

export const fetchCurrentUser = async ({ commit }) => {
  const { data } = await userApi.getCurrentUser();
  commit('authenticate', data);
  return data;
};

export const checkIfLogged = async ({ commit, state }) => {
  commit('updateAuthentication');
  if (state.authenticated) {
    try {
      const { data } = userApi.getCurrentUser();
      commit('authenticate', data);
    } catch (err) {
      this.$log.error(err);
      commit('unauthenticate');
    }
  }
};

export const register = async (_, user) => userApi.setUser(user);

export const retrieveUser = async (_, id) => userApi.getUser(id);

export const updateUser = async ({ commit }, user) => {
  commit('saveUser', user);

  return userApi.updateUser(user);
};

export const fetchUsers = async () => userApi.fetchUsers();
