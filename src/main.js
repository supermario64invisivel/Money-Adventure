import Vue from 'vue'
import filters from './filters'
import Game from './components/Game.vue'

filters.start(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#MoneyAdventure',
  render: h => h(Game)
})
