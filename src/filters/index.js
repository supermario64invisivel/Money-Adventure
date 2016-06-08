import amount from './amount'
import profit from './profit'

const filters = {
  start: (Vue) => {
    Vue.filter('amount', amount)
    Vue.filter('profit', profit)
  }
}

export default filters
