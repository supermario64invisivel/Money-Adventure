import _ from 'lodash'
import Calc from 'core/Calc'
import * as upgrades from './upgrades'

const mutations = {
  GET_ITEM (state, item, qty) {
    item.quantity += qty
    for (var i = qty; i > 0; i--) {
      item.price = Calc.divide(Calc.multiply(item.price, item.priceProgress), 1000)
    }
    item.qtyPrice = Calc.getQtyPrice(item, state.qty)
  },

  PRODUCE_ITEM (state, item, now) {
    item.producing = now
  },

  UPDATE_ITEM (state, item, now) {
    state.current = now
    item.producingTime = now - item.producing
    item.progress = (item.producingTime * 100) / item.produceTime
    if (item.progress >= 100) {
      item.producing = false
      item.producingTime = 0
      item.progress = 0
      state.money = Calc.add(state.money, Calc.profit(item))
      if (item.manager) {
        item.producing = now
      }
    }
  },

  HIRE_MANAGER (state, item) {
    item.manager = true
  },

  ACHIEVEMENT (state, item, quantity) {
    const achievement = item.achievements[quantity]
    if (achievement.index) {
      item = state.items[achievement.index]
    }
    upgrades[achievement.type || 'value'](item, achievement)
  },

  UPGRADE (state, item, upgrade) {
    upgrades[upgrade.type || 'value'](item, upgrade)
    item.nextUpgrade++
  },

  SET_QUANTITY (state, qty) {
    state.qty = qty
    _.forEach(state.items, item => {
      item.qtyPrice = Calc.getQtyPrice(item, state.qty)
    })
  }
}

export default mutations
