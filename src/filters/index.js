import amount from './amount'

const filters = {
  start: (Vue) => {
    Vue.filter('amount', amount)
  }
}

export default filters
