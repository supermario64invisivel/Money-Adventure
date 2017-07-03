import _ from 'lodash'
import Calc from 'core/Calc'
import { upgradeAll, achieveAll, achievedAll } from './upgrades'

const actions = {

  updateItems (store) {
    const now = (new Date()).valueOf()
    _.forEach(store.state.items, (item) => {
      if (item.producing) {
        actions.updateItem(store, { item, now })
      }
    })
  },

  updateItem (store, { item, now }) {
    store.commit('UPDATE_ITEM', { item, now })
  },

  produceItem (store, item) {
    if (item.quantity && !item.producing) {
      store.commit('PRODUCE_ITEM', { item, now: (new Date()).valueOf() })
    }
  },

  buyItem (store, item) {
    if (Calc.lesser(store.state.money, item.qtyPrice)) { return }
    const init = item.quantity + 1
    store.commit('PAY_MONEY', item.qtyPrice)
    store.commit('GET_ITEM', { item, qty: store.state.qty })
    for (var qty = init; qty <= item.quantity; qty++) {
      if (item.achievements[qty]) {
        store.commit('ACHIEVEMENT', { item, quantity: qty, achievement: item.achievements[qty] })
      }
      if (achieveAll[qty] && achievedAll(qty, store.state.items)) {
        store.commit('ACHIEVEMENT', { item: 'all', quantity: qty, achievement: achieveAll[qty] })
      }
    }
  },

  upgradeItem (store, item) {
    const upgrade = item.upgrades[item.nextUpgrade]
    if (Calc.lesser(store.state.money, upgrade.price)) { return }
    store.commit('PAY_MONEY', upgrade.price)
    store.commit('UPGRADE', { item, upgrade })
  },

  upgradeAll (store) {
    const upgrade = upgradeAll[store.state.nextUpgrade]
    if (Calc.lesser(store.state.money, upgrade.price)) { return }
    store.commit('PAY_MONEY', upgrade.price)
    store.commit('UPGRADE', { item: 'all', upgrade })
  },

  hireManager (store, item) {
    if (Calc.lesser(store.state.money, item.managerPrice)) { return }
    store.commit('PAY_MONEY', item.managerPrice)
    store.commit('HIRE_MANAGER', item)
  },

  cycleQuantity (store) {
    const qtys = store.state.qtys
    var index = qtys.indexOf(store.state.qty) + 1
    if (index >= qtys.length) { index = 0 }
    store.commit('SET_QUANTITY', qtys[index])
  }
}

export default actions
