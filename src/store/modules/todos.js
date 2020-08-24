const state = () => ({
  all: [
    { name: 'Buscar a Marcel en la casa', done: false },
    { name: 'Llevar a Valentina al volleyball', done: false },
    { name: 'Recordarle a Karyn ir por la ropa', done: false },
    {
      name: 'Llevarle a mi mamá la torta para el cumple de Daniel',
      done: false,
    },
  ],
});

const mutations = {
  changeDone(state, todoIndex) {
    state.all[todoIndex].done = !state.all[todoIndex].done; //I think this is ugly, I'll improve it.
  },
  changeDeleteTodo(state, todoIndex) {
    state.all.splice(todoIndex, 1);
  },
};
const actions = {
  didIt({ commit }, todoIndex) {
    commit('changeDone', todoIndex);
  },
  deleteTodo({ commit }, todoIndex) {
    commit('changeDeleteTodo', todoIndex);
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
