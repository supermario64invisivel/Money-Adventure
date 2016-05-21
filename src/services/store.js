import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import items from 'core/items'
import itemMutations from 'core/items/mutations'

Vue.use(Vuex)

const state = {
  current: (new Date()).valueOf(),
  money: [0],
  items
}

let mutations = {
  ADD_MONEY (state, value) {
    state.money.$set(0, state.money[0] + value)
  },
  PAY_MONEY (state, value) {
    state.money.$set(0, state.money[0] - value)
  }
}

_.merge(mutations, itemMutations)

export default new Vuex.Store({
  state,
  mutations
})
