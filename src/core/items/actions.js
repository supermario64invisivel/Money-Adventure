import _ from 'lodash'
import Calc from 'core/Calc'

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
    if (Calc.lesser(store.state.money, item.price)) { return }
    store.dispatch('PAY_MONEY', item.price)
    item.quantity += 1
    item.price = Calc.divide(Calc.multiply(item.price, item.priceProgress), 1000)
    if (item.achievements[item.quantity]) {
      store.dispatch('ACHIEVEMENT', item, item.quantity)
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
  }
}

export default actions
