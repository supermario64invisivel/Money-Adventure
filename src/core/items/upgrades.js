import Calc from 'core/Calc'

export function value (item, spec) {
  item.value = Calc.divide(Calc.multiply(item.value, Math.round(spec.amount * 100)), 100)
}

export function speed (item, spec) {
  item.produceTime /= spec.amount
}
