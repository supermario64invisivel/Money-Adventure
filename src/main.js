import Vue from 'vue'
import filters from './filters'
import Game from './components/Game'

filters.start(Vue)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Game }
})
