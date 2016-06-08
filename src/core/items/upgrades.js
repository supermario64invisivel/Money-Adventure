import Calc from 'core/Calc'

export function value (item, spec) {
  item.value = Calc.multiply(item.value, spec.amount)
}

export function speed (item, spec) {
  item.produceTime /= spec.amount
}
