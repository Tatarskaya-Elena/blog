export default {
  namespaced: true,
  state: {
    counts: {
      like: 0,
      comment: 0
    }
  },
  getters: {
    getButtonValues: (state) => state.counts
  },
  mutations: {
    incrementButtonValue: (state, name) => {
      state.counts[name] += 1;
    }
  },
  actions: {
    incrementButtonValue: ({ commit }, name) => {
      commit('incrementButtonValue', name)
    }
  }
}
