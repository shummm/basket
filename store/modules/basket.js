import axios from '@/plugins/axios'

const state = {
  items: [],
  checked: [],
  product: {},
  quantity: 1,
  total: 0,
  tax: 0
}

// getters
const getters = {
  getItems(state) {
    return state.items
  },
  getProduct(state) {
    return state.product
  },
  getQuantity(state) {
    return state.quantity
  },
  getTotalOrder(state) {
    state.total = 0
    state.items.forEach(item => {
      state.total = state.total + (item.price * item.quantity)
    })
    return state.total
  },
  getTax(state) {
    return state.tax = (state.total * 18)/100
  },
  getFinalPrice(state) {
    return state.total + state.tax
  }
}

// actions
const actions = {
  async setItems({ commit }) {
    let { data } = await axios.get('/fake/api/data.json')
   commit("setItems", data.result);
  }
}

// mutations
const mutations = {

  setCheckItem(state, payload) {
    state.checked = payload
  },

  setItems(state, payload) {
    state.items = payload
  },
  setProduct(state, payload) {
    state.product = payload
  },

  setQuantity(state, payload) {
    state.quantity = payload
  },

  quantityUp(state) {
    state.quantity++
  },
  quantityDown(state) {
    if(state.quantity > 1)
    state.quantity--
  },

  saveQuantity(state, payload) {
    state.items.forEach(item => {
      if(item.id === payload.id) {
        item.quantity = state.quantity
        state.quantity = 1
      }
    })
  },

  removeItems(state, payload) {
    if (payload.length > 0) {
      payload.forEach(id => {
        state.items = state.items.filter((item) => item.id !== id)
      });
    }
    state.checked = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
