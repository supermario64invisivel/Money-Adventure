const mutations = {
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
      state.money.$set(0, state.money[0] + (item.value * item.quantity))
      if (item.manager) {
        item.producing = now
      }
    }
  },
  HIRE_MANAGER (state, item) {
    item.manager = true
  }
}

export default mutations
