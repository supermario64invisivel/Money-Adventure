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

export default function (str) {
  const len = str.length
  const size = Math.ceil(len / 3)
  const lenUnit = (len % 3) || 3
  const unit = str.substr(0, lenUnit)

  if (size < 2) return unit

  var fraction = str.substr(lenUnit, 3)

  if (size === 2) return unit + '.' + fraction

  fraction = (fraction === '000') ? '' : '.' + fraction

  return unit + fraction + ' ' + (units[size - 1] ? units[size - 1] : 'e' + (3 * (size - 1)))
}
