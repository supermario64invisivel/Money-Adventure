export default class Money {

  constructor (value) {
    this.value = value
  }

  static sum (a, b) {
    var sum = []
    const max = Math.max(a.value.length, b.value.length)
    for (var i = 0; i < max; i++) {
      sum[i] = (sum[i] | 0) + (a.value[i] | 0) + (b.value[i] | 0)
      if (sum[i] >= 1000) {
        sum[i + 1] = Math.floor(sum[i] / 1000)
        sum[i] = sum[i] % 1000
      }
    }
    return new Money(sum)
  }

}

window.Money = Money
