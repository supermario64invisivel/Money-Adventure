import Calc from 'core/Calc'
import _ from 'lodash'

export function value (item, spec) {
  item.value = Calc.divide(Calc.multiply(item.value, Math.round(spec.amount * 100)), 100)
}

export function speed (item, spec) {
  item.produceTime /= spec.amount
}

export const upgradeAll = [
  { price: '500000000000000000', amount: 2 },
  { price: '5000000000000000000000000', amount: 3 },
  { price: '5000000000000000000000000000000', amount: 4 },
  { price: '50000000000000000000000000000000000000', amount: 5 }
]

export const achieveAll = {
  25: { amount: 2 },
  50: { amount: 2 },
  100: { amount: 2 },
  150: { amount: 2 },
  200: { amount: 2 },
  250: { amount: 2 },
  300: { amount: 2 },
  400: { amount: 2 },
  500: { amount: 2 },
  600: { amount: 2 },
  750: { amount: 2 }
}

export function achievedAll (qty, items) {
  return !_.filter(items, item => (item.quantity < qty)).length
}
