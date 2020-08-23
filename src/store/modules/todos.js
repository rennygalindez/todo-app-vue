const state = () => ({
  all: [
    { name: 'Buscar a Marcel en la casa', done: false },
    { name: 'Llevar a Valentina al volleyball', done: false },
    { name: 'Recordarle a Karyn ir por la ropa', done: false },
    {
      name: 'Llevarle a mi mamá la torta para el cumple de Daniel',
      done: false,
    },
    {
      name: 'Comprar el papel pergamino para la maqueta de Marcel',
      done: false,
    },
  ],
});

const mutations = {
  changeDone(state, todoIndex) {
    state.all[todoIndex].done = !state.all[todoIndex].done; //I think this is ugly, I'll improve it.
  },
};
const actions = {
  didIt({ commit }, todoIndex) {
    commit('changeDone', todoIndex);
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
