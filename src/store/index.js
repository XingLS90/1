import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'product': '',
    'address': '',
    'specificaddress': '',
    'service1': '',
    'service2': '',
    'service3': '',
    'other': '',
    'name': '',
    'phone': '',
    'code': '',
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
    service1 (state, value) {
      state.service1 = value
    },
    service2 (state, value) {
      state.service2 = value
    },
    service3 (state, value) {
      state.service3 = value
    },
    other (state, value) {
      state.other = value
    },
    name (state, name) {
      state.name = name
    },
    phone (state, phone) {
      state.phone = phone
    },
    code (state, code) {
      state.code = code
    },
    appointmentDate (state, value) {
      state.ordertime = value
    }
  }
})
