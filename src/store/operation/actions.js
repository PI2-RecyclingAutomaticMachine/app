import operationApi from '../../api/operation';
import Vue from 'vue';

export const fetchOperations = async ({ commit }) => {
  try {
    const id = localStorage.getItem('id');
    const { data } = await operationApi.fetchOperations(id);
    commit('SET_OPERATIONS', data);
  } catch (err) {
    Vue.$log.error(err);
    throw new Error('Não foi pegar os dados das garrafas');
  }
};

export const getOperation = (_state, id) => operationApi.getOperation(id);
