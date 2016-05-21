const unit = [
  ' ',
  'Thousand',
  'Million',
  'Billion',
  'Trillion',
  'Quadrillion',
  'Quintillion',
  'Sextillion',
  'Septillion',
  'Octillion',
  'Nonillion',
  'Decillion',
  'Undecillion',
  'Duodecillion',
  'Tredecillion',
  'Quattuordecillion',
  'Quindecillion',
  'Sexdecillion',
  'Septendecillion',
  'Octodecillion',
  'Novemdecillion',
  'Vigintillion'
]

function three (value) {
  return (value + 1000).toString().substr(-3)
}

export default function (value) {
  const size = value.length - 1
  if (size === 0) { return value[0] }
  if (size === 1) { return value[1] + '.' + three(value[0]) }
  return value[size] + '.' + three(value[size - 1]) + ' ' + (unit[size] ? unit[size] : 'e' + (3 * size))
}
