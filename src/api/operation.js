import api from '.';

export default {
  getOperation(userId, id) {
    return api.get(`/user/${userId}/operation/${id}`);
  },
  fetchOperations(userId) {
    return api.get(`/user/${userId}/operation`);
  },
};
