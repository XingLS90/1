import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'product': '',
    'address': '',
    'specificaddress': '',
    'service': '',
    'name': '',
    'phone': '',
    'ordertime': ''
  },
  mutations: {
    changeHouseSize (state, product) {
      state.product = product
    },
    location (state, value) {
      state.address = value
    },
    detailedAddress (state, value) {
      state.specificaddress = value
    },
    networkProblem (state, address) {
      state.service = address
    },
    name (state, name) {
      state.name = name
    },
    phone (state, phone) {
      state.phone = phone
    },
    appointmentDate (state, value) {
      state.ordertime = value
    }
  }
})
