import Calc from 'core/Calc'

export default function (item) {
  return item.quantity ? Calc.profit(item) : item.initialValue
}
