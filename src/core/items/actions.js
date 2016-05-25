import _ from 'lodash'

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
    if (store.state.money[0] < item.price) { return }
    store.dispatch('PAY_MONEY', item.price)
    item.quantity += 1
    if (item.quantity % 10 === 0) {
      item.price *= 1
      item.priceProgress *= 1
    } else {
      item.price *= item.priceProgress
    }
    if (item.quantity % 25 === 0) {
      item.value *= 1
      item.produceTime /= 2
      item.price *= 1
    }
  },

  upgradeItem: function (store, item) {
    if (store.state.money[0] < 100000) { return }
    store.dispatch('PAY_MONEY', 100000)
    item.value *= 2
    /* item.upgrade.effect(item)
    effect: (item) => {
      item.value *= 2
    } */
  },

  hireManager: function (store, item) {
    store.dispatch('HIRE_MANAGER', item)
  }

}

export default actions
