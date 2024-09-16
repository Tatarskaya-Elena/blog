import axios from "axios"

export default {
  namespaced: true,
  state: {
    firstTypeNewsList: [],
    secondTypeNewsList: []
  },
  getters: {
    getFirstTypeNews: state => state.firstTypeNewsList,
    getSecondTypeNews: state => state.secondTypeNewsList,
  },
  mutations: {
    setSecondList: (state, payload) => {
      state.secondTypeNewsList = payload
    },
    setFirstList: (state, payload) => {
      state.firstTypeNewsList = payload
    }
  },
  actions: {
    loadSecondList: ({ commit }, payload) => {
      axios.get('http://localhost:3000/secondTypeNews', {
        params: {
          title: payload
        }
      })
      .then((result) => {
        commit('setSecondList', result.data)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log(1);
      })
    },
    loadFirstList: ({ commit }, payload) => {
      axios.get('http://localhost:3000/firstTypeNews', {
        params: {
          title: payload
        }
      })
      .then((result) => {
        commit('setFirstList', result.data)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log(1);
      })
    },
    loadDataById: ({ commit }, payload) => {
      axios.get(`http://localhost:3000/secondTypeNews/${payload}`)
      .then((result) => {
        commit('setSecondList', result.data)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log(1);
      });
    },
    addNews({ dispatch }, newsData) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/secondTypeNews', newsData)
        .then(response => {
          console.log(response.data);
          dispatch('loadSecondList'); 
          resolve(response.data);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        })
        .finally(() => {
          console.log(1);
        });
      });
    }
  }
}
