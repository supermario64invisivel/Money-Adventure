import bigInt from 'big-integer'

export default class Calc {

  constructor (value) {
    this.value = value
  }

  static add (a, b) {
    return bigInt(a).add(b).toString()
  }

  static subtract (a, b) {
    return bigInt(a).subtract(b).toString()
  }

  static multiply (a, b) {
    return bigInt(a).multiply(b).toString()
  }

  static divide (a, b) {
    return bigInt(a).divide(b).toString()
  }

  static lesser (a, b) {
    return bigInt(a).lesser(b)
  }

}
