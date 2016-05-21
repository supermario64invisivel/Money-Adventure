import Vue from 'vue'
import Game from './Game'
import filters from './filters'
import Money from 'core/Money'

filters.start(Vue)

Money.sum(new Money([0]), new Money([0]))

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Game }
})
