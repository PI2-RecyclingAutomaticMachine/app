import api from '.';

export default {
  authenticateUser(cpf, password, socketId) {
    return api.post('/user/authenticate', { cpf, password, socketId });
  },
  getUser(id) {
    return api.get(`/user/${id}`);
  },
  fetchUsers() {
    return api.get('/user');
  },
  setUser(user) {
    return api.post('/user/', { user });
  },
  updateUser(user) {
    return api.put(`/user/${user.id}`, { user });
  },
  registerSocket(socketId) {
    return api.post('/user/register_socket', { socketId });
  },
};
