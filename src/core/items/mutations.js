import Calc from 'core/Calc'
import * as upgrades from './upgrades'

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
  }
}

export default mutations
