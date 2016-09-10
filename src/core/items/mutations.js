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
    const achievement = item === 'all' ? upgrades.achieveAll[quantity] : item.achievements[quantity]
    const up = upgrades[achievement.type || 'value']
    var index = achievement.index
    if (!index && (item === 'all')) {
      index = 'all'
    }
    if (index === 'all') {
      // all items
      state.items.forEach(it => up(it, achievement))
    } else if (typeof index === 'object') {
      // array of items
      index.forEach(i => up(state.items[i], achievement))
    } else if (typeof index === 'number') {
      // single item
      up(state.items[index], achievement)
    } else {
      // own item
      up(item, achievement)
    }
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
