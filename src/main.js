import Vue from 'vue'
import Game from './Game'
import filters from './filters'

filters.start(Vue)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Game }
})
