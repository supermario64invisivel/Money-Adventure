import _ from 'lodash'
import Calc from 'core/Calc'
import { achieveAll, achievedAll } from './upgrades'

const actions = {

  updateItems (store) {
    const now = (new Date()).valueOf()
    _.forEach(store.state.items, (item) => {
      if (item.producing) {
        actions.updateItem(store, item, now)
      }
    })
  },

  updateItem (store, item, now) {
    store.dispatch('UPDATE_ITEM', item, now)
  },

  produceItem (store, item) {
    if (item.quantity && !item.producing) {
      store.dispatch('PRODUCE_ITEM', item, (new Date()).valueOf())
    }
  },

  buyItem (store, item) {
    if (Calc.lesser(store.state.money, item.qtyPrice)) { return }
    const init = item.quantity + 1
    store.dispatch('PAY_MONEY', item.qtyPrice)
    store.dispatch('GET_ITEM', item, store.state.qty)
    for (var qty = init; qty <= item.quantity; qty++) {
      if (item.achievements[qty]) {
        store.dispatch('ACHIEVEMENT', item, qty)
      }
      if (achieveAll[qty] && achievedAll(qty, store.state.items)) {
        store.dispatch('ACHIEVEMENT', 'all', qty)
      }
    }
  },

  upgradeItem (store, item) {
    const upgrade = item.upgrades[item.nextUpgrade]
    if (Calc.lesser(store.state.money, upgrade.price)) { return }
    store.dispatch('PAY_MONEY', upgrade.price)
    store.dispatch('UPGRADE', item, upgrade)
  },

  hireManager (store, item) {
    if (Calc.lesser(store.state.money, item.managerPrice)) { return }
    store.dispatch('PAY_MONEY', item.managerPrice)
    store.dispatch('HIRE_MANAGER', item)
  },

  cycleQuantity (store) {
    const qtys = store.state.qtys
    var index = qtys.indexOf(store.state.qty) + 1
    if (index >= qtys.length) { index = 0 }
    store.dispatch('SET_QUANTITY', qtys[index])
  }
}

export default actions
