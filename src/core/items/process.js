import store from 'src/services/store'
import actions from './actions'

function processItems () {
  setInterval(() => { actions.updateItems(store) }, 100)
}

export default processItems
