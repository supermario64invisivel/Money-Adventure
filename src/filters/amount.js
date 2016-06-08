const units = [
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

export default function (str) {
  const len = str.length
  const size = Math.ceil(len / 3)
  const lenUnit = (len % 3) || 3
  const unit = str.substr(0, lenUnit)

  if (size < 2) return '0.' + three(unit).substr(0, 2)

  var fraction = str.substr(lenUnit, 3)

  if (size === 2) return unit + '.' + fraction.substr(0, 2)

  if (size === 3) return unit + ',' + fraction

  fraction = (fraction === '000') ? '' : '.' + fraction

  return unit + fraction + ' ' + (units[size - 2] ? units[size - 2] : 'e' + (3 * (size - 2)))
}
