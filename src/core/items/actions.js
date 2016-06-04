import _ from 'lodash'
import Calc from 'core/Calc'

const actions = {

  updateItems: function (store) {
    const now = (new Date()).valueOf()
    _.forEach(store.state.items, (item) => {
      if (item.producing) {
        actions.updateItem(store, item, now)
      }
    })
  },

  updateItem: function (store, item, now) {
    store.dispatch('UPDATE_ITEM', item, now)
  },

  produceItem: function (store, item) {
    if (item.quantity && !item.producing) {
      store.dispatch('PRODUCE_ITEM', item, (new Date()).valueOf())
    }
  },

  buyItem: function (store, item) {
    console.log('hey')
    if (Calc.lesser(store.state.money, item.price)) { return }
    store.dispatch('PAY_MONEY', item.price)
    item.quantity += 1
    item.price = Calc.divide(Calc.multiply(item.price, item.priceProgress), 1000)
    if (item.quantity % 25 === 0) {
      item.produceTime /= 2
    }
  },

  upgradeItem: function (store, item) {
    if (Calc.lesser(store.state.money, 100000)) { return }
    store.dispatch('PAY_MONEY', 100000)
    item.value = Calc.multiply(item.value, 2)
    /* item.upgrade.effect(item)
    effect: (item) => {
      item.value *= 2
    } */
  },

  hireManager: function (store, item) {
    if (Calc.lesser(store.state.money, item.managerPrice)) { return }
    store.dispatch('PAY_MONEY', item.managerPrice)
    store.dispatch('HIRE_MANAGER', item)
  }

}

export default actions
