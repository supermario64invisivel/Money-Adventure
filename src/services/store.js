import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import items from 'core/items'
import itemMutations from 'core/items/mutations'
import Calc from 'core/Calc'

Vue.use(Vuex)

const state = {
  current: (new Date()).valueOf(),
  money: '0',
  items
}

let mutations = {
  ADD_MONEY (state, value) {
    state.money = Calc.add(state.money, value)
  },
  PAY_MONEY (state, value) {
    state.money = Calc.subtract(state.money, value)
  }
}

_.merge(mutations, itemMutations)

export default new Vuex.Store({
  state,
  mutations
})
