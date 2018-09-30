import axios from 'axios'

const state = {
  items: []
}

//getters

const getters = {
  getItems(state) {
      return state.items
  }
}

//actions

const actions = {
  async setItems({commit}) {
    let { data } = await axios.get('http://localhost:3000/fake/api/promo.json')
    commit("setItems", data.result);
  }
}

// mutations

const mutations = {
  setItems(state, payload) {
    state.items = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}